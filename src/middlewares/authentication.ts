import type { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
// import type { TRequest, TUser } from "../types/common";

export default function (req: Request, res: Response, next: NextFunction) {
  const token = req.header("x-auth-token");

  if (!token) return res.status(401).send("Access denied. No token provided");

  try {
    const decoded = jwt.verify(token, process.env.PRIVATE_KEY || "");
    res.locals.currentUser = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
}
