import path from "path";

export default {
  entry: "./public/index.tsx", // Entry point of your application
  output: {
    path: path.resolve("public/static"),
    filename: "bundle.js", // Output bundle file
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/, // Test for .ts and .tsx files
        use: "babel-loader", // Use Babel to handle TypeScript and JSX
        exclude: /node_modules/, // Exclude the node_modules folder
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
          },
        ],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.module\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                namedExport: false,
              },
            },
          },
        ],
      },
    ],
  },
  mode: "production",
};
