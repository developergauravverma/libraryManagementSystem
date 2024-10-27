import express, { Express, Request, Response } from "express";
import cors from "cors";
import dbConnection from "./Database/db";
import { registerRoutes } from "./routes";

const port: number = 8000;

const app: Express = express();

app.use(express.json());
app.use(cors());

(async function startUp() {
  await dbConnection();

  registerRoutes(app);

  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
})();
