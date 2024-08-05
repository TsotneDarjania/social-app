import { Request, Response } from "express";
import { validationResult } from "express-validator";

export const registration = (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  const result = validationResult(req);
  const errors = result.array().map((item) => item.msg);

  if (errors.length) {
    res.status(400).send({ errors });
    return;
  }

  res.cookie("username", username, {
    httpOnly: true,
    expires: new Date(Date.now() + 900000),
  });

  res.status(201).json({ res: "User registered" });
};

export const login = (req: Request, res: Response) => {
  res.status(200).send("This is login");
};
