import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthApi, {
  SignInData,
  SignUpData,
  UserData,
} from "../../API/AuthApi/AuthApi";

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

export const getUser = createAsyncThunk("auth/getUser", async () => {
  const response = await AuthApi.getUser();
  return response.data;
});

export const logout = createAsyncThunk("auth/logout", async () => {
  const response = await AuthApi.logout();
  return response.data;
});

type InitialStateType = {
  status: string;
  error: null | boolean;
  user: UserData | null;
  isAuth: boolean;
};

const initialState: InitialStateType = {
  status: "",
  error: false,
  user: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    removeError(state) {
      state.error = false;
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
    builder.addCase(getUser.fulfilled, (state: InitialStateType, action) => {
      state.isAuth = true;
      state.user = action.payload as UserData;
    });
    builder.addCase(logout.fulfilled, (state: InitialStateType) => {
      state.isAuth = false;
    });
  },
});

export default authSlice.reducer;
export const { removeError, setIsAuth } = authSlice.actions;
