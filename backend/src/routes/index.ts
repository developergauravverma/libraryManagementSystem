import { Express } from "express";
import authroutes from "./AuthRoutes";
export const registerRoutes = (app: Express) => {
  app.use("/auth", authroutes);
};
