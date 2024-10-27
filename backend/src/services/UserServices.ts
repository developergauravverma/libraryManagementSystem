import { config } from "../config";
import userDao, { IUserModel } from "../daos/UserDao";
import { IUser } from "../models/User";
import bcrypt from "bcrypt";
import {
  UnableToSaveUserError,
  UnableUsernameOrPasswordError,
} from "../utils/LiberyError";

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
