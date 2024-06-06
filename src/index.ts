import express from "express";

import { routes } from "./configs/router";
import initDB from "./configs/db";

const app = express();
const port = 5000;

routes(app);
initDB();

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}...`);
});
