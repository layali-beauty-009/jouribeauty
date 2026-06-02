import { PrismaClient } from "@prisma/client";
import { Router } from "express";

export function productsRouter(prisma: PrismaClient) {
  const router = Router();

  router.get("/", async (_req, res) => {
    const products = await prisma.product.findMany({
      where: { active: true },
      orderBy: { sortOrder: "asc" },
      include: {
        benefits: { orderBy: { sortOrder: "asc" } },
      },
    });
    res.json(products);
  });

  router.get("/:slug", async (req, res) => {
    const product = await prisma.product.findUnique({
      where: { slug: req.params.slug, active: true },
      include: {
        benefits: { orderBy: { sortOrder: "asc" } },
      },
    });
    if (!product) {
      res.status(404).json({ error: "Product not found" });
      return;
    }
    res.json(product);
  });

  return router;
}
