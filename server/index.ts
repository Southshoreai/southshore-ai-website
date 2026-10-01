import express from "express";
import { createServer } from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { hasSeoRoute, renderRobots, renderSeoHtml, renderSitemap } from "./seo";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.get("/robots.txt", (_req, res) => {
    res.type("text/plain").send(renderRobots());
  });

  app.get("/sitemap.xml", (_req, res) => {
    res.type("application/xml").send(renderSitemap());
  });

  app.use(express.static(staticPath, { index: false }));

  // Handle client-side routing with route-specific metadata and a crawler-visible summary.
  app.get("*", (req, res) => {
    const indexPath = path.join(staticPath, "index.html");
    const template = fs.readFileSync(indexPath, "utf-8");
    const normalizedPath = req.path === "/" ? "/" : req.path.replace(/\/+$/, "");
    const statusCode = hasSeoRoute(normalizedPath) ? 200 : 404;
    res.status(statusCode).type("html").send(renderSeoHtml(template, normalizedPath));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
