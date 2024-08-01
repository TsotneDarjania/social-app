import { Request, Response } from "express";

export function registration(req: Request, res: Response) {
  console.log(req.body);
  const { username, email, password } = req.body;

  res.json({ username, email, password });
  // res.status(201).end("User registered");
}
