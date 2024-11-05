import {
  FetchUserPayload,
  loginUserPayload,
  RegisterUserPayload,
  User,
} from "./../../models/User";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface AuthenticationSliceState {
  loggedInUser: User | undefined;
  profileUser: User | undefined;
  loading: boolean;
  error: boolean;
  registerSuccess: boolean;
}

const initialState: AuthenticationSliceState = {
  loggedInUser: undefined,
  profileUser: undefined,
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

export const fetchUser = createAsyncThunk(
  "auth/fetch",
  async (payload: FetchUserPayload, thunkAPI) => {
    try {
      const req = await axios.get(
        `http://localhost:8000/user/${payload.userId}`
      );
      const user = req.data.user;
      return {
        user,
        property: payload.property,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  "auth/update",
  async (payload: User, thunkAPI) => {
    try {
      const user: User = {
        _id: payload._id,
        email: payload.email,
        firstName: payload.firstName,
        lastName: payload.lastName,
        password: payload.password,
        type: payload.type,
      };

      //const { createdAt,updatedAt, ...newPayload } = payload;
      const req = await axios.put("http://localhost:8000/user", user);
      return req.data.user;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
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
    resetUser(state, action: PayloadAction<string>) {
      return (state = {
        ...state,
        [action.payload]: undefined,
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

    builder.addCase(fetchUser.pending, (state, action) => {
      return (state = {
        ...state,
        error: false,
        loading: true,
      });
    });

    builder.addCase(updateUser.pending, (state, action) => {
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

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      return (state = {
        ...state,
        [action.payload.property]: action.payload.user,
        loading: false,
      });
    });

    builder.addCase(updateUser.fulfilled, (state, action) => {
      return (state = {
        ...state,
        loggedInUser: action.payload,
        profileUser: action.payload,
        loading: false,
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

    builder.addCase(fetchUser.rejected, (state, action) => {
      return (state = {
        ...state,
        error: true,
        loading: false,
      });
    });

    builder.addCase(updateUser.rejected, (state, action) => {
      return (state = {
        ...state,
        error: true,
        loading: false,
      });
    });
  },
});

export const { resetRegisterSuccess, resetUser } = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;
