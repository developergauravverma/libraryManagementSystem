import { Express } from "express";
import authroutes from "./AuthRoutes";
import userRoutes from "./UserRoutes";
export const registerRoutes = (app: Express) => {
  app.use("/auth", authroutes);
  app.use("/user", userRoutes);
};
