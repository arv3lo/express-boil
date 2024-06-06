import mongoose from "mongoose";

const DB_URL = process.env.DATABASE_URL || "";

const initDB = (): void => {
  mongoose
    .connect(DB_URL)
    .then(() => console.info(`Successfully connected to ${DB_URL} ...`));

  mongoose.connection.on("error", (err) => {
    console.log("===ERR===", err);
    throw new Error(`Unable to connect to database ${DB_URL} ...`);
  });
};

export default initDB;
