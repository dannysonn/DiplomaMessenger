import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProfileApi from "../../API/ProfileApi/ProfileApi";
import AuthApi from "../../API/AuthApi/AuthApi";

export const changeAvatar = createAsyncThunk(
  "profile/changeAvatar",
  async (data: FormData, { rejectWithValue }) => {
    try {
      const response = await ProfileApi.changeAvatar(data);
      return response.data;
    } catch (e) {
      return rejectWithValue("Некорректный формат аватарки");
    }
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

export interface IPersonState {
  person: UserStateType;
}

export type UserStateType = {
  isAuth: boolean;
  user: UserData;
};

export type UserData = {
  id: number | null;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  avatar: null | string;
  email: string;
  phone: string;
};

const initialState: UserStateType = {
  isAuth: false,
  user: {
    id: null,
    first_name: "",
    second_name: "",
    display_name: "",
    login: "",
    avatar: null,
    email: "",
    phone: "",
  },
};

const userSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    removeError(state) {
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state: UserStateType, action) => {
      state.isAuth = true;
      state.user = action.payload as UserData;
    });
    builder.addCase(changeAvatar.fulfilled, (state: UserStateType, action) => {
      state.user = action.payload as UserData;
    });
    builder.addCase(logout.fulfilled, (state: UserStateType) => {
      state.isAuth = false;
    });
  },
});

export default userSlice.reducer;
