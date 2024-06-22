import { Router } from "express";
import { faker } from "@faker-js/faker";

import { Temp } from "../models/temp";

const router = Router();

router.get("/", async (req, res) => {
  await Temp.deleteMany({});
  for (let i = 0; i < 1_000; i++) {
    console.log("===", i);
    await Temp.create({
      city: faker.location.city(),
      min: faker.number.int({ max: 20, min: 0 }),
      max: faker.number.int({ max: 45, min: 21 }),
    });
  }
  res.send("Seeder");
});

export default router;
