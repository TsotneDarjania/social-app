import { Request, Response } from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";

import { CustomSession } from "../types/session";
import User from "../models/user";
import { connectedUsers } from "../config/socket";
import { SocketEnums } from "../../enums/socketEnums";

export const registration = async (req: Request, res: Response) => {
  const result = validationResult(req);
  const errors = result.array().map((item) => item.msg);

  if (errors.length) {
    res.status(400).send({ errors });
    return;
  }

  const { userName, email, password } = req.body;

  if (await User.findOne({ email })) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ userName, email, password: hashedPassword });
  user.save();

  const session = req.session as unknown as CustomSession;
  session.userId = user._id!.toString();

  connectedUsers.forEach((socket) => {
    socket.emit("newUserRegistered", {
      userId: user._id!.toString(),
      userName: user.userName,
    });
  });

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

export const sendFriendRequest = async (req: Request, res: Response) => {
  const { userId, userName, potentialFriendId, potentialFriendName } = req.body;

  try {
    await User.updateOne(
      { _id: potentialFriendId },
      { $push: { friendRequests: JSON.stringify({ userId, userName }) } }
    );

    await User.updateOne(
      { _id: userId },
      {
        $push: {
          sentFriendRequests: JSON.stringify({
            userId: potentialFriendId,
            userName: potentialFriendName,
          }),
        },
      }
    );

    const socket = connectedUsers.get(potentialFriendId);
    if (socket) {
      socket.emit(SocketEnums.FriendRequest, { userId, userName });
    }

    res.json("success");
  } catch (err) {
    res.status(500).json({ message: "Internal server error", error: err });
  }
};

export const confirmFriendRequest = async (req: Request, res: Response) => {
  const { toUserName, toUserId, fromFriendId, fromFriendName } = req.body;

  try {
    await User.updateOne(
      { _id: fromFriendId },
      { $push: { friends: JSON.stringify({ userId:toUserId, userName:toUserName }) } }
    );

    await User.updateOne(
      { _id: toUserId },
      {
        $push: {
          friends: JSON.stringify({ userId: fromFriendId, userName: fromFriendName }),
        },
      }
    );
    
    await User.updateOne(
      { _id: toUserId },
      {
        $pull: {
          sentFriendRequests: JSON.stringify({
            userId: fromFriendId,
            userName: fromFriendName,
          }),
        },
      }
    );

    await User.updateOne(
      { _id: fromFriendId },
      {
        $pull: {
          friendRequests: JSON.stringify({
            userId: toUserId,
            userName: toUserName,
          }),
        },
      }
    );

    const socket = connectedUsers.get(toUserId);
    if (socket) {
      socket.emit(SocketEnums.acceptFriendRequest, { toUserId, toUserName });
    }
    
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

export const deleteUser = async (req: Request, res: Response) => {
  const session = req.session as unknown as CustomSession;
  if (session?.userId) {
    await User.deleteOne({ _id: session.userId });

    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Internal server error" });
      }
      res.clearCookie("sid");
      res.json("success");
    });
    return;
  }
  return res.status(500).json({ message: "Internal server error" });
};

export const getChat = (req: Request, res: Response)=> {
   
}
