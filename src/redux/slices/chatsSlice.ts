import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ChatsApi from "../../API/ChatsApi/ChatsApi";

export type CreateChatData = {
  title: string;
};

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

export const createChat = createAsyncThunk(
  "chats/createChar",
  async (data: CreateChatData, { rejectWithValue }) => {
    try {
      const response = await ChatsApi.createChat(data);
      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

type ChatType = {
  id: number;
  title: string;
  avatar: null | string;
  created_by: number;
  unread_count: number;
  last_message: string;
};

export interface IChatState {
  chatsState: InitialStateType;
}

type InitialStateType = {
  chats: ChatType[];
  isFetching: boolean;
  showChatsError: boolean;
  isEmptyChats: boolean;
};

const initialState: InitialStateType = {
  chats: [],
  isFetching: true,
  showChatsError: false,
  isEmptyChats: false,
};

const chatsSlice = createSlice({
  name: "chatsState",
  initialState,
  reducers: {
    removeError() {},
  },
  extraReducers(builder) {
    builder.addCase(getChats.pending, (state: InitialStateType) => {
      state.isFetching = true;
      state.showChatsError = false;
    });
    builder.addCase(getChats.rejected, (state: InitialStateType) => {
      state.isFetching = false;
      state.showChatsError = true;
    });
    builder.addCase(getChats.fulfilled, (state: InitialStateType, action) => {
      state.isFetching = false;
      state.showChatsError = false;
      state.isEmptyChats = state.chats.length === 0;
      if (action.payload) {
        state.chats = action.payload;
      }
    });
    builder.addCase(createChat.pending, (state: InitialStateType) => {
      state.isFetching = true;
    });
    builder.addCase(createChat.fulfilled, (state: InitialStateType) => {
      state.isEmptyChats = false;
      state.isFetching = false;
    });
  },
});

export default chatsSlice.reducer;
