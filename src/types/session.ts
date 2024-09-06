import session, { Session } from "express-session";

export interface CustomSession extends session.SessionData {
  user: { email: string; userName: string };
  userId: string;
}
