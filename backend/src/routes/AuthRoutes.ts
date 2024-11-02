import express from "express";
import AuthController from "../controllers/AuthController";
import { Schemas, ValidateSchema } from "../middlewares/Validations";

const routes = express.Router();

routes.post(
  "/register",
  ValidateSchema(Schemas.user.create, "body"),
  AuthController.handleRegister
);

routes.post(
  "/login",
  ValidateSchema(Schemas.user.login, "body"),
  AuthController.handleLogin
);

export = routes;
