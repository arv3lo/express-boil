import type { Express } from "express";

import authentication from "../middlewares/authentication";
import authRoute from "../routes/auth";
import usersRoute from "../routes/users";
import seeders from "../routes/seeder";

export const routes = (app: Express) => {
  app.use("/auth", authRoute);
  app.use("/users", [authentication], usersRoute);
  app.use("/seed", seeders);
};
