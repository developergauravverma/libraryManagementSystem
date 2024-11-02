import { config } from "../config";
import userDao, { IUserModel } from "../daos/UserDao";
import { IUser } from "../models/User";
import bcrypt from "bcrypt";
import {
  UserDoseNotExistsError,
  UnableToSaveUserError,
  UnableUsernameOrPasswordError,
} from "../utils/LiberyError";
import { promises } from "dns";

export const register = async (user: IUser): Promise<IUserModel> => {
  const ROUNDS = config.server.rounds;
  try {
    const hashedPassword = await bcrypt.hash(user.password, ROUNDS);
    const saved = new userDao({ ...user, password: hashedPassword });
    return await saved.save();
  } catch (error: any) {
    console.error(`Error in user register services ${error.message}`);
    throw new UnableToSaveUserError(error.message);
  }
};

export const login = async (credential: {
  email: string;
  password: string;
}): Promise<IUserModel> => {
  const { email, password } = credential;
  try {
    const user = await userDao.findOne({ email });
    if (!user) {
      throw new UnableUsernameOrPasswordError("Invalid username or password");
    } else {
      const validatePassword: boolean = await bcrypt.compare(
        password,
        user.password
      );
      if (validatePassword) {
        return user;
      } else {
        throw new UnableUsernameOrPasswordError("Invalid username or password");
      }
    }
  } catch (error: any) {
    console.error(`Error in user login services ${error.message}`);
    throw new UnableUsernameOrPasswordError(
      `Error in user login services ${error.message}`
    );
  }
};

export const findAllUsers = async (): Promise<IUserModel[]> => {
  try {
    const users = await userDao.find();
    return users;
  } catch (error: any) {
    console.error(`Error in user findAllUsers services ${error.message}`);
    throw new Error(`Error in user findAllUsers services ${error.message}`);
  }
};

export const findUserByUserId = async (userId: string): Promise<IUserModel> => {
  try {
    const user = await userDao.findById(userId);
    if (user) return user;
    throw new UserDoseNotExistsError(`this user is not found`);
  } catch (error: any) {
    console.error(`Error in user findUserByUserId services ${error.message}`);
    throw new Error(`Error in user findUserByUserId services ${error.message}`);
  }
};

export const ModifyUser = async (user: IUserModel): Promise<IUserModel> => {
  try {
    let id = await userDao.findByIdAndUpdate(user._id, user, { new: true });
    if (!id) throw new UserDoseNotExistsError("this user is not found");
    return user;
  } catch (error: any) {
    console.error(`Error in user ModifyUser services ${error.message}`);
    throw new Error(`Error in user ModifyUser services ${error.message}`);
  }
};

export const DeleteUser = async (userId: string): Promise<string> => {
  try {
    let deleted = await userDao.findByIdAndDelete(userId);
    if (!deleted) throw new UserDoseNotExistsError("this user is not found");
    return "User deleted successfully";
  } catch (error: any) {
    console.error(`Error in user DeleteUser services ${error.message}`);
    throw new Error(`Error in user DeleteUser services ${error.message}`);
  }
};
