import express from "express";
import apiRoutes from "./routes/apiRoutes";
import Config from "./config";
import pageRouter from "./routes/pageRouter";

const app = Config.expressApp;

// Create Static Server
app.use(express.static("public"));

app.use(apiRoutes);
app.use(pageRouter);

export const startServer = () => {
  app.listen(Config.PORT, () => {
    console.log(`Server started on port ${Config.PORT}`);
  });
};
