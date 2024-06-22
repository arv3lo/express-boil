import express from "express";

import { routes } from "./configs/router";
import initDB from "./configs/db";

const app = express();
const port = 5000;

initDB();
routes(app);

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}...`);
});
