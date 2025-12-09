import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  format: ["cjs", "esm"],
  target: "node18",
  minify: false,
  outDir: "dist",
  env: {
    NODE_ENV: process.env.NODE_ENV ?? "development"
  }
});