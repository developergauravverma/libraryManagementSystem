import { Request, Response } from "express";
import {
  DeleteUser,
  findAllUsers,
  findUserByUserId,
  ModifyUser,
} from "../services/UserServices";
import { UserDoseNotExistsError } from "../utils/LiberyError";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    let users = await findAllUsers();
    res.status(200).json({ message: "User retrived successfully", users });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "User retrived successfully", error: error.message });
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    let user = await findUserByUserId(userId);
    res.status(200).json({ message: "User found successfully", user });
  } catch (error: any) {
    if (error instanceof UserDoseNotExistsError) {
      res.status(404).json({ message: "User Request dose not exists" });
    } else {
      res
        .status(500)
        .json({ message: "Could not find user", error: error.message });
    }
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    let updatedUser = await ModifyUser(user);
    res
      .status(200)
      .json({ message: "User Update successfully", user: updatedUser });
  } catch (error: any) {
    if (error instanceof UserDoseNotExistsError) {
      res.status(404).json({ message: "User Request dose not exists" });
    } else {
      res.status(500).json({
        message: "Unable to update user currently",
        error: error.message,
      });
    }
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    let userId = req.params.userId;
    await DeleteUser(userId);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error: any) {
    if (error instanceof UserDoseNotExistsError) {
      res.status(404).json({ message: "User Request dose not exists" });
    } else {
      res.status(500).json({
        message: "Unable to delete user currently",
        error: error.message,
      });
    }
  }
};

export default { getAllUsers, getUserById, updateUser, deleteUser };
