import express from "express";
import { PORT } from "./config";

const app = express();
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
  const data = req.body;

  // console.log("data", data);

  res.json(data);
});

app.post("/sign-up", (req, res) => {
  const data = req.body;

  // console.log("data", data);

  res.json(data);
});

export const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
};
