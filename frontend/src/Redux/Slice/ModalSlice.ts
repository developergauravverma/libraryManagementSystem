import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalSliceState {
  displayLogin: boolean;
  displayLibraryCard: boolean;
  displayLoan: boolean;
}

const initialState: ModalSliceState = {
  displayLogin: false,
  displayLibraryCard: false,
  displayLoan: false,
};

export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setDisplayLogin(state, action: PayloadAction<boolean>) {
      return (state = {
        ...state,
        displayLogin: action.payload,
      });
    },
    setDisplayLibraryCard(state, action: PayloadAction<boolean>) {
      return (state = {
        ...state,
        displayLibraryCard: action.payload,
      });
    },
    setDisplayLoan(state, action: PayloadAction<boolean>) {
      return (state = {
        ...state,
        displayLoan: action.payload,
      });
    },
  },
});

export const { setDisplayLogin, setDisplayLibraryCard, setDisplayLoan } =
  ModalSlice.actions;
export default ModalSlice.reducer;
