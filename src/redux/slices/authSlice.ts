import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthApi from "../../API/AuthApi/AuthApi";

export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ login, password }) => {
    const response = await AuthApi.signIn({ login, password });
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
  name: "signIn",
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
  },
});

export default authSlice.reducer;
export const { removeError } = authSlice.actions;
