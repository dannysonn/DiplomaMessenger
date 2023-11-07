import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { string } from "yup";
import AuthApi, { SignInData } from "../../API/AuthApi/AuthApi";

export const signIn = createAsyncThunk(
  "auth/signin",
  async function (data: SignInData) {
    AuthApi.signIn(data);
  },
);

const authSlice = createSlice({
  name: "signIn",
  initialState: {
    status: string,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(signIn.pending, () => {});
  },
});

export default authSlice.reducer;
