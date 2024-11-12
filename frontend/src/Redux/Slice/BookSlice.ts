import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Book } from "../../models/Book";
import axios from "axios";
import { PageInfo } from "../../models/Page";

interface BookSliceState {
  loading: boolean;
  error: boolean;
  books: Book[];
  pagingInformation: PageInfo | null;
}

const initialState: BookSliceState = {
  loading: true,
  error: false,
  books: [],
  pagingInformation: null,
};

export const fetchAllBooks = createAsyncThunk(
  "book/all",
  async (payload, thunkApi) => {
    try {
      const res = await axios.get("http://localhost:8000/book/");
      return res.data.book;
      console.log(payload);
    } catch (error: any) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const queryBooks = createAsyncThunk(
  "book/query",
  async (payload: string, thunkApi) => {
    try {
      const res = await axios.get(`http://localhost:8000/book/query${payload}`);
      return res.data.page;
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
    builder.addCase(fetchAllBooks.pending, (state) => {
      return (state = {
        ...state,
        loading: true,
        books: [],
      });
    });
    builder.addCase(queryBooks.pending, (state) => {
      return (state = {
        ...state,
        loading: false,
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
    builder.addCase(queryBooks.fulfilled, (state, action) => {
      return (state = {
        ...state,
        loading: false,
        books: action.payload.items,
        pagingInformation: {
          totalCount: action.payload.totalCount,
          currentPage: action.payload.currentPage,
          totalPages: action.payload.totalPages,
          limit: action.payload.limit,
          pageCount: action.payload.pageCount,
        },
      });
    });
    builder.addCase(fetchAllBooks.rejected, (state) => {
      return (state = {
        ...state,
        loading: false,
        error: true,
      });
    });
    builder.addCase(queryBooks.rejected, (state) => {
      return (state = {
        ...state,
        loading: false,
        books: [],
        error: true,
      });
    });
  },
});

export const {} = BookSlice.actions;
export default BookSlice.reducer;
