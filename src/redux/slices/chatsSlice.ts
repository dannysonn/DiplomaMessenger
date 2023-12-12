import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ChatsApi from "../../API/ChatsApi/ChatsApi";

export const getChats = createAsyncThunk(
  "chats/getChats",
  async (data, { rejectWithValue }) => {
    try {
      const response = await ChatsApi.getChats();
      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

type ChatType = {
  chat: {
    id: number;
    title: string;
    avatar: string;
    unread_count: number;
    created_by: number;
    last_message: {
      user: {
        first_name: string;
        second_name: string;
        avatar: string;
        email: string;
        login: string;
        phone: string;
      };
      time: string;
      content: string;
    };
  };
};

type InitialStateType = {
  chats: ChatType[];
  isFetching: boolean;
  showChatsError: boolean;
};

const initialState: InitialStateType = {
  chats: [],
  isFetching: true,
  showChatsError: false,
};

const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    removeError(state) {
      state.error = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(getChats.rejected, (state: InitialStateType) => {
      state.isFetching = false;
      state.showChatsError = true;
    });
    builder.addCase(getChats.fulfilled, (state: InitialStateType) => {
      state.isFetching = false;
      state.showChatsError = false;
    });
  },
});

export default chatsSlice.reducer;
