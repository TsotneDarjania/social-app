import express from "express";
import { PORT } from "./config";

const app = express();
app.use(express.static("public"));

export const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
};
