import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthApi from "../../API/AuthApi/AuthApi";

export const signIn = createAsyncThunk("auth/signin", async function (data) {
  AuthApi.signIn(data);
});

type InitialStateType = {
  status: string;
  error: null | boolean;
};

const initialState: InitialStateType = {
  status: "",
  error: false,
};

const authSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    removeError(state: InitialStateType) {
      state.error = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(signIn.pending, () => {});
    builder.addCase(signIn.fulfilled, (state: InitialStateType) => {
      state.error = true;
    });
    builder.addCase(signIn.rejected, () => {});
  },
});

export default authSlice.reducer;
export const { removeError } = authSlice.actions;
