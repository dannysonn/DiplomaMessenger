import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ChatsApi, {
  AddUserData,
  DeleteChatData,
  RemoveUserData,
} from "../../API/ChatsApi/ChatsApi";

export type CreateChatData = {
  title: string;
};

export type UserInChat = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  avatar: string;
  role: string;
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

export const getChatUsersList = createAsyncThunk(
  "chats/getUsers",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await ChatsApi.getChatUsers(id);
      return response.data;
    } catch (e) {
      console.error("Error in getChatUsersList async thunk:", e);
      return rejectWithValue(e);
    }
  },
);

export const deleteChat = createAsyncThunk(
  "chats/deleteChat",
  async (data: DeleteChatData, { rejectWithValue }) => {
    try {
      const response = await ChatsApi.deleteChat(data);
      return response.data;
    } catch (e) {
      console.error("Error in deleteChat async thunk:", e);
      return rejectWithValue(e);
    }
  },
);

export const removeUserFromChat = createAsyncThunk(
  "chats/removeUserFromChat",
  async ({ userId, chatId }: RemoveUserData, { rejectWithValue }) => {
    const data = {
      users: [userId],
      chatId,
    };

    try {
      await ChatsApi.removeUser(data);
      return userId;
    } catch (e) {
      console.error("Error in removeUserFromChat async thunk:", e);
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
  chatsState: ChatsStateType;
}

type ChatsStateType = {
  chats: ChatType[];
  showChatsError: boolean;
  isEmptyChats: boolean;
  token: null | number;
  isChatsLoaded: boolean;
  usersInChat: UserInChat[];
};

const initialState: ChatsStateType = {
  chats: [],
  showChatsError: false,
  isEmptyChats: false,
  token: null,
  isChatsLoaded: false,
  usersInChat: [],
};

const chatsSlice = createSlice({
  name: "chatsState",
  initialState,
  reducers: {
    updateLastMessage(state: ChatsStateType, action) {
      const { chatId, messageContent } = action.payload;
      const chatToUpdate = state.chats.find((chat) => chat.id === chatId);

      if (chatToUpdate && chatToUpdate.last_message) {
        chatToUpdate.last_message.content = messageContent;
      }
    },
    rerenderChatsAfterDelete(state: ChatsStateType, action) {
      const { chatId } = action.payload;
      state.chats = state.chats.filter((chat) => chatId !== chat.id);
    },
  },
  extraReducers(builder) {
    builder.addCase(getChats.pending, (state: ChatsStateType) => {
      state.isChatsLoaded = true;
      state.showChatsError = false;
    });
    builder.addCase(getChats.rejected, (state: ChatsStateType, action) => {
      state.showChatsError = true;
      console.error("Rejected action in getChats:", action.payload);
    });
    builder.addCase(getChats.fulfilled, (state: ChatsStateType, action) => {
      state.showChatsError = false;
      console.log(action.payload);
      if (action.payload) {
        state.chats = action.payload;
      }
    });
    builder.addCase(getChatToken.fulfilled, (state: ChatsStateType, action) => {
      state.token = action.payload.token;
    });
    builder.addCase(addUserToChat.fulfilled, () => {
      console.log("пользователь добавлен");
    });
    builder.addCase(
      getChatUsersList.fulfilled,
      (state: ChatsStateType, action) => {
        state.usersInChat = action.payload;
      },
    );
    builder.addCase(
      removeUserFromChat.fulfilled,
      (state: ChatsStateType, action) => {
        state.usersInChat = state.usersInChat.filter(
          (user) => user.id !== Number(action.payload),
        );
      },
    );
  },
});

export default chatsSlice.reducer;
export const { updateLastMessage, rerenderChatsAfterDelete } =
  chatsSlice.actions;
