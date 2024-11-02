import { NextFunction, Request, Response } from "express";
import Joi, { ObjectSchema } from "joi";
import { IUser } from "../models/User";
import { IUserModel } from "../daos/UserDao";

export const ValidateSchema = (schema: ObjectSchema, property: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      switch (property) {
        case "query":
          await schema.validateAsync(req.query);
          break;
        case "params":
          await schema.validateAsync(req.params);
          break;
        default:
          await schema.validateAsync(req.body);
      }
      next();
    } catch (error) {
      res.status(422).json({
        message: "Object validation failed, Please include valid object",
      });
    }
  };
};

export const Schemas = {
  user: {
    create: Joi.object<IUser>({
      type: Joi.string().valid("ADMIN", "EMPLOYEE", "PATRON").required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string()
        .regex(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)
        .required(),
      password: Joi.string().required(),
    }),
    login: Joi.object<IUser>({
      email: Joi.string()
        .regex(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)
        .required(),
      password: Joi.string().required(),
    }),
    userId: Joi.object<{ userId: string }>({
      userId: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required(),
    }),
    update: Joi.object<IUserModel>({
      _id: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required(),
      type: Joi.string().valid("ADMIN", "EMPLOYEE", "PATRON"),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string()
        .regex(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)
        .required(),
      password: Joi.string().required(),
    }),
  },
};
