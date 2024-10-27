import { NextFunction, Request, Response } from "express";
import Joi, { ObjectSchema } from "joi";
import { IUser } from "../models/User";

export const ValidateSchema = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
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
  },
};
