import express, { type Application } from "express";
import swaggerUi from "swagger-ui-express";

import { loadEnv } from "./config/env";
import { createUserRouter } from "./routes/userRoutes";
import { swaggerSpec } from "./docs/swagger";

export async function createServer(): Promise<Application> {
  loadEnv();

  const app = express();

  app.use(express.json());

  app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  // 🔹 Swagger UI en /docs
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.use("/api/users", await createUserRouter());

  return app;
}