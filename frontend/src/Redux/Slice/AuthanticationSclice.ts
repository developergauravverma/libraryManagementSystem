import {
  loginUserPayload,
  RegisterUserPayload,
  User,
} from "./../../models/User";
import { createAsyncThunk, createSlice, isAction } from "@reduxjs/toolkit";
import axios from "axios";

interface AuthenticationSliceState {
  loggedInUser: User | undefined;
  loading: boolean;
  error: boolean;
  registerSuccess: boolean;
}

const initialState: AuthenticationSliceState = {
  loggedInUser: undefined,
  loading: false,
  error: false,
  registerSuccess: false,
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (user: loginUserPayload, thunkAPI) => {
    try {
      const req = await axios.post("http://localhost:8000/auth/login", user);
      return req.data.user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (user: RegisterUserPayload, thunkAPI) => {
    try {
      const req = await axios.post("http://localhost:8000/auth/register", user);
      return req.data.user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const AuthenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    resetRegisterSuccess(state) {
      return (state = {
        ...state,
        registerSuccess: false,
      });
    },
  },
  extraReducers(builder) {
    builder.addCase(loginUser.pending, (state, action) => {
      return (state = {
        ...state,
        error: false,
        loading: true,
      });
    });

    builder.addCase(registerUser.pending, (state, action) => {
      return (state = {
        ...state,
        error: false,
        loading: true,
      });
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      return (state = {
        ...state,
        loading: false,
        loggedInUser: action.payload,
      });
    });

    builder.addCase(registerUser.fulfilled, (state, action) => {
      return (state = {
        ...state,
        loading: false,
        registerSuccess: true,
      });
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      return (state = {
        ...state,
        error: true,
        loading: false,
      });
    });

    builder.addCase(registerUser.rejected, (state, action) => {
      return (state = {
        ...state,
        error: true,
        loading: false,
      });
    });
  },
});

export const { resetRegisterSuccess } = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;
