import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
dotenv.config();

const app = express();

// Config Server
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

const Config = {
  PORT: PORT,
  expressApp: app,
};

export default Config;
