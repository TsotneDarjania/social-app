import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import session from "express-session";

dotenv.config();

const app = express();

// Config Tamplate Engine
app.set("view engine", "ejs");
app.set("views", "src/views");

// Config Server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY!,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 900000,
      sameSite: "strict",
    },
  })
);

const PORT = process.env.PORT || 3001;

const Config = {
  PORT: PORT,
  expressApp: app,
};

export default Config;
