import { Request, Response } from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";

import { CustomSession } from "../types/session";
import User from "../models/user";

export const registration = async (req: Request, res: Response) => {
  const result = validationResult(req);
  const errors = result.array().map((item) => item.msg);

  if (errors.length) {
    res.status(400).send({ errors });
    return;
  }

  const { username, email, password } = req.body;

  if (await User.findOne({ email })) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ username, email, password: hashedPassword });
  user.save();

  res.status(201).json({ res: "User registered" });
};

export const login = async (req: Request, res: Response) => {
  const result = validationResult(req);
  const errors = result.array().map((item) => item.msg);

  if (errors.length) {
    res.status(400).json({ errors });
    return;
  }

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isPasswordValid = await bcrypt.compare(password, user!.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const session = req.session as unknown as CustomSession;
  session.userId = user._id!.toString();

  res.json("success");
};

export const logOut = (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }
    res.clearCookie("sid");
    res.json("success");
  });
};

export const sendFriendRequest = (req: Request, res: Response) => {
  const { userName, userId, friendId } = req.body;

  User.updateOne(
    { _id: friendId },
    { $push: { friendRequests: JSON.stringify({ userId, userName }) } }
  )
    .then(() => {
      res.json("success");
    })
    .catch((err) => {
      res.status(500).json({ message: "Internal server error" });
    });
};

export const confirmFriendRequest = async (req: Request, res: Response) => {
  const { userName, userId, friendId, friendName } = req.body;

  try {
    await User.updateOne(
      { _id: friendId },
      { $push: { friends: JSON.stringify({ userId, userName }) } }
    );

    await User.updateOne(
      { _id: userId },
      {
        $push: {
          friends: JSON.stringify({ userId: friendId, userName: friendName }),
        },
      }
    );

    await User.updateOne(
      { _id: userId },
      {
        $pull: {
          friendRequests: JSON.stringify({
            userId: friendId,
            userName: friendName,
          }),
        },
      }
    );

    res.json("success");
  } catch (err) {
    res.status(500).json({ message: "Internal server error", error: err });
  }
};

export const isAuthenticated = (req: Request) => {
  const session = req.session as unknown as CustomSession;
  if (session?.userId) {
    return true;
  }
  return false;
};
