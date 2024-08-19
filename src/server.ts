import apiRoutes from "./routes/apiRoutes";
import Config from "./config";
import pageRouter from "./routes/pageRouter";
import db from "./mongoDB/config";

// Connect to MongoDB
db.once("connected", () => {
  console.log("Connected to MongoDB");
});

const app = Config.expressApp;

app.use(apiRoutes);
app.use(pageRouter);

export const startServer = () => {
  app.listen(Config.PORT, () => {
    console.log(`Server started on port ${Config.PORT}`);
  });
};
