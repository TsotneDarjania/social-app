import session, { Session } from "express-session";

export interface CustomSession extends session.SessionData {
  user: { email: string; username: string };
  userId: string;
}
