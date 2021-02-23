import * as dotenv from "dotenv";

dotenv.config();

export const MONGO_STRING: String = process.env.MONGO_HOST
  ? `${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`
  : "mongodb://127.0.0.1:27017";
export const PORT: Number = Number.parseInt(`${process.env.PORT}`) || 3000;
export const MONGO_USER: String = process.env.MONGO_USER || "";
export const MONGO_PASS: String = process.env.MONGO_PASS || "";
export const MONGO_DB: String = process.env.MONGO_DB || "";
export const SECRET_PASS: String = process.env.SECRET_PASS || "secret word"
