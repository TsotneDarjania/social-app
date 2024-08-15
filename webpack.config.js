import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  entry: "./public/js/main.js", // Entry point of your application
  output: {
    path: path.resolve(__dirname, "public/js"),
    filename: "bundle.js", // Output bundle file
  },
};
