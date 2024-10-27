import { login } from "./../services/UserServices";
import { Request, Response } from "express";
import { IUser } from "../models/User";
import { register } from "../services/UserServices";
import { IUserModel } from "../daos/UserDao";

const handleRegister = async (req: Request, res: Response) => {
  const user: IUser = req.body;
  try {
    const registerUser = await register(user);
    res.status(201).json({
      message: "User successfully created",
      user: {
        _id: registerUser._id,
        type: registerUser.type,
        firstName: registerUser.firstName,
        lastName: registerUser.lastName,
        email: registerUser.email,
      },
    });
  } catch (error: any) {
    console.error(`error in handleRegister ${error.message}`);
    if (error.message.includes("E11000 duplicate key error collection:")) {
      res.status(409).json({
        message: "user with email allready exists",
        error: error.message,
      });
    } else {
      res.status(500).json({
        message: "Unable to register user at this time",
        error: error.message,
      });
    }
  }
};

const handleLogin = async (req: Request, res: Response) => {
  const credential = req.body;
  try {
    const loggedIn: IUserModel = await login(credential);
    res.status(201).json({
      message: "User logged in successfully",
      user: {
        _id: loggedIn._id,
        type: loggedIn.type,
        firstName: loggedIn.firstName,
        lastName: loggedIn.lastName,
        email: loggedIn.email,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      message: "unable to logged in this time.",
      error: error.message,
    });
  }
};

export default { handleRegister, handleLogin };
