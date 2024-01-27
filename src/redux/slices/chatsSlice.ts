import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ChatsApi, { AddUserData } from "../../API/ChatsApi/ChatsApi";

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
      console.error("Error in getChats async thunk:", e);
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
      console.error("Error in createChat async thunk:", e);
      return rejectWithValue(e);
    }
  },
);

export const getChatToken = createAsyncThunk(
  "chats/token",
  async (chatId: number, { rejectWithValue }) => {
    try {
      const response = await ChatsApi.getToken(chatId);
      return response.data;
    } catch (e) {
      console.error("Error in getChatToken async thunk:", e);
      return rejectWithValue(e);
    }
  },
);

export const addUserToChat = createAsyncThunk(
  "chats/addUser",
  async ({ userId, chatId }: AddUserData, { rejectWithValue }) => {
    const data = {
      users: [userId],
      chatId,
    };

    try {
      const response = await ChatsApi.addUser(data);
      return response.data;
    } catch (e) {
      console.error("Error in addUserToChat async thunk:", e);
      return rejectWithValue(e);
    }
  },
);

export type ChatType = {
  id: number;
  title: string;
  avatar: null | string;
  created_by: number;
  unread_count: number;
  last_message: {
    content: string;
    time: string;
  };
};

export interface IChatState {
  chatsState: InitialStateType;
}

type InitialStateType = {
  chats: ChatType[];
  isFetching: boolean;
  showChatsError: boolean;
  isEmptyChats: boolean;
  token: null | number;
  isChatsLoaded: boolean;
};

const initialState: InitialStateType = {
  chats: [],
  isFetching: true,
  showChatsError: false,
  isEmptyChats: false,
  token: null,
  isChatsLoaded: false,
};

const chatsSlice = createSlice({
  name: "chatsState",
  initialState,
  reducers: {
    updateLastMessage(state: InitialStateType, action) {
      const { chatId, messageContent } = action.payload;
      const chatToUpdate = state.chats.find((chat) => chat.id === chatId);

      if (chatToUpdate) {
        chatToUpdate.last_message.content = messageContent;
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(getChats.pending, (state: InitialStateType) => {
      if (!state.isChatsLoaded) {
        state.isFetching = true;
      }

      state.isChatsLoaded = true;
      state.showChatsError = false;
    });
    builder.addCase(getChats.rejected, (state: InitialStateType, action) => {
      state.isFetching = false;
      state.showChatsError = true;
      console.error("Rejected action in getChats:", action.payload);
    });
    builder.addCase(getChats.fulfilled, (state: InitialStateType, action) => {
      state.isFetching = false;
      state.showChatsError = false;
      console.log(action.payload);
      if (action.payload) {
        state.chats = action.payload;
      }
    });
    builder.addCase(createChat.pending, (state: InitialStateType) => {
      state.isFetching = true;
    });
    builder.addCase(createChat.fulfilled, (state: InitialStateType) => {
      state.isFetching = false;
    });
    builder.addCase(
      getChatToken.fulfilled,
      (state: InitialStateType, action) => {
        state.token = action.payload.token;
      },
    );
    builder.addCase(addUserToChat.fulfilled, () => {
      console.log("пользователь добавлен");
    });
  },
});

export default chatsSlice.reducer;
export const { updateLastMessage } = chatsSlice.actions;
