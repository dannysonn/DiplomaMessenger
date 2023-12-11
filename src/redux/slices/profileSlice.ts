import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProfileApi, { ProfileData } from "../../API/ProfileApi/ProfileApi";

export const changeData = createAsyncThunk(
  "profile/changeData",
  async (data: ProfileData, { rejectWithValue }) => {
    try {
      const response = await ProfileApi.changeData(data);
      return response.data;
    } catch (e) {
      return rejectWithValue("Неверный логин или пароль");
    }
  },
);

export const changePassword = createAsyncThunk(
  "profile/changePassword",
  async (data: ProfileData, { rejectWithValue }) => {
    try {
      const response = await ProfileApi.changePassword(data);
      return response.data;
    } catch (e) {
      return rejectWithValue("Старый пароль введён неверно");
    }
  },
);

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

type InitialStateType = {
  error: null | boolean;
  passError: null | boolean;
};

const initialState: InitialStateType = {
  error: false,
  passError: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    removeError(state) {
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(changeData.rejected, (state: InitialStateType) => {
      state.error = true;
    });
    builder.addCase(changeData.fulfilled, (state: InitialStateType) => {
      state.error = false;
    });
    builder.addCase(changePassword.rejected, (state: InitialStateType) => {
      state.error = true;
    });
    builder.addCase(changePassword.fulfilled, (state: InitialStateType) => {
      state.error = false;
    });
    builder.addCase(
      changeAvatar.fulfilled,
      (state: InitialStateType, action) => {
        state.user = action.payload;
      },
    );
  },
});

export default profileSlice.reducer;
export const { removeError } = profileSlice.actions;
