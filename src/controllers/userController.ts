import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

import { Users } from "../types/usersDb";

const users: Users = {};

export const registration = async (req: Request, res: Response) => {
  const result = validationResult(req);
  const errors = result.array().map((item) => item.msg);

  if (errors.length) {
    res.status(400).send({ errors });
    return;
  }

  const { username, email, password } = req.body;

  if (users[email]) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users[email] = { username, password: hashedPassword };

  res.status(201).json({ res: "User registered" });
};

export const login = async (req: Request, res: Response) => {
  const result = validationResult(req);
  const errors = result.array().map((item) => item.msg);

  if (errors.length) {
    res.status(400).send({ errors });
    return;
  }

  const { email, password } = req.body;

  const user = users[email];
  if (!user) {
    return res.status(401).json({ message: "Invalid email" });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(401).json({ message: "Invalid password" });
  }

  // const sessionId = uuidv4();
  // req.session.sessionId = sessionId;
  // req.session.user = { email, username: user.username };

  res.status(200).json({
    message: "Login successful",
    redirectUrl: "http://localhost:3000/home",
  });
};

// export const isAuthenticated = (
//   req: Request,
//   res: Response,
//   next: () => void
// ) => {
//   if (req.session && req.session.user) {
//     next();
//   } else {
//     res.redirect("http://localhost:3000/");
//   }
// };
