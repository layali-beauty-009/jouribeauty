import cors from "cors";
import express from "express";
import helmet from "helmet";
import { PrismaClient } from "@prisma/client";
import { productsRouter } from "./routes/products.js";

const prisma = new PrismaClient();
const app = express();
const port = Number(process.env.PORT) || 4000;

const allowedOrigins = (
  process.env.CORS_ORIGINS ??
  "https://jouribeauty.store,https://www.jouribeauty.store,http://localhost:3000"
)
  .split(",")
  .map((o) => o.trim());

app.use(helmet());
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, false);
      }
    },
  }),
);
app.use(express.json());

app.get("/health", async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: "ok", service: "jouribeauty-api" });
  } catch {
    res.status(503).json({ status: "degraded", service: "jouribeauty-api" });
  }
});

app.use("/api/products", productsRouter(prisma));

app.use((_req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(port, () => {
  console.log(`Jouri Beauty API listening on port ${port}`);
});
