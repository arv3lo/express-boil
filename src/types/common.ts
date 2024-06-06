import type { Request } from "express";

export type TUser = {
  email: string;
  password?: string;
  role: string;
};

export type TRequest = Request & {
  user: TUser;
};
