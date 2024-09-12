import apiRoutes from "./routes/apiRoutes";
import Config from "./config";
import pageRouter from "./routes/pageRouter";
import db from "./mongoDB/config";

const io = Config.io;

io.on("connection", (socket) => {
  console.log("a user connected");
});

// Connect to MongoDB
db.once("connected", () => {
  console.log("Connected to MongoDB");
});

const app = Config.expressApp;

app.use(apiRoutes);
app.use(pageRouter);

export const startServer = () => {
  Config.httpServer.listen(Config.PORT, () => {
    console.log(`Server started on port ${Config.PORT}`);
  });
};
