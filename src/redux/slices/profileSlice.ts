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

type InitialStateType = {
  error: null | boolean;
};

const initialState: InitialStateType = {
  error: false,
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
  },
});

export default profileSlice.reducer;
