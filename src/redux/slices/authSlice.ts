import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthApi, { SignInData, SignUpData } from "../../API/AuthApi/AuthApi";

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (data: SignInData) => {
    const response = await AuthApi.signIn(data);
    return response.data;
  },
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (data: SignUpData) => {
    const response = await AuthApi.singUp(data);
    return response.data;
  },
);

type InitialStateType = {
  status: string;
  error: null | boolean;
};

const initialState: InitialStateType = {
  status: "",
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    removeError(state?: InitialStateType) {
      state!.error = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(signIn.pending, (state: InitialStateType) => {
      state.status = "pending";
    });
    builder.addCase(signIn.fulfilled, (state: InitialStateType) => {
      state.status = "fulfilled";
    });
    builder.addCase(signIn.rejected, (state: InitialStateType) => {
      state.status = "rejected";
      state.error = true;
    });
    builder.addCase(signUp.pending, (state: InitialStateType) => {
      state.status = "pending";
    });
    builder.addCase(signUp.fulfilled, (state: InitialStateType) => {
      state.status = "fulfilled";
    });
    builder.addCase(signUp.rejected, (state: InitialStateType) => {
      state.status = "rejected";
      state.error = true;
    });
  },
});

export default authSlice.reducer;
export const { removeError } = authSlice.actions;
