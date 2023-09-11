import Register from "@babel/register";
import path from "path";
import { register } from "ts-node";

register({
  project: path.resolve(".", "tsconfig.json"),
  require: ["tsconfig-paths/register"],
  transpileOnly: true,
  compilerOptions: { module: "commonjs" },
});

Register({
  extensions: [".ts", ".js"],
  rootMode: "upward",
});