import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import session from "express-session";
import MongoStore from "connect-mongo";

dotenv.config();

const app = express();

// Config Tamplate Engine
app.set("view engine", "ejs");
app.set("views", "public");

// Config Server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Create Static Server
app.use(express.static("public"));

app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY!,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongoUrl: process.env.MONGODB_GIORGI!,
      collectionName: "social-app-sessions",
    }),
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 86400000,
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
