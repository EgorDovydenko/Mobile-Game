import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { register } from "./controllers/User";

const app = express();

// перенести в .env
const db =
  "mongodb+srv://vsehsaipal:112233eewwqq@game.o84zvon.mongodb.net/gameData";

mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected IUHU..."))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

app.post("/auth/register", register);

app.listen(1000, () => {
  console.log("Server is running on port 1000");
});
