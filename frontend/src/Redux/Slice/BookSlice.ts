import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Book } from "../../models/Book";
import axios from "axios";

interface BookSliceState {
  loading: boolean;
  error: boolean;
  books: Book[];
}

const initialState: BookSliceState = {
  loading: true,
  error: false,
  books: [],
};

export const fetchAllBooks = createAsyncThunk(
  "book/all",
  async (payload, thunkApi) => {
    try {
      const res = await axios.get("http://localhost:8000/book/");
      return res.data.book;
    } catch (error: any) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const BookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllBooks.pending, (state, action) => {
      return (state = {
        ...state,
        loading: true,
        books: [],
      });
    });
    builder.addCase(fetchAllBooks.fulfilled, (state, action) => {
      return (state = {
        ...state,
        loading: false,
        books: action.payload,
      });
    });
    builder.addCase(fetchAllBooks.rejected, (state, action) => {
      return (state = {
        ...state,
        loading: false,
        error: true,
      });
    });
  },
});

export const {} = BookSlice.actions;
export default BookSlice.reducer;
