import axios from "axios";

export interface AddUserData {
  userId: string;
  chatId: number | null;
}

export interface RemoveUserData {
  userId: number;
  chatId: number | null;
}

export interface DeleteChatData {
  chatId: number;
}

class ChatsApi {
  static baseUrl = "https://ya-praktikum.tech/api/v2/";

  static axios = axios.create({ withCredentials: true });

  public static getChats() {
    return this.axios.get(`${ChatsApi.baseUrl}chats`);
  }

  public static createChat(data: any) {
    return this.axios.post(`${ChatsApi.baseUrl}chats`, data);
  }

  public static getToken(chatId: number) {
    return this.axios.post(`${ChatsApi.baseUrl}chats/token/${chatId}`);
  }

  public static addUser(data: any) {
    return this.axios.put(`${ChatsApi.baseUrl}chats/users`, data);
  }

  public static getChatUsers(id: number) {
    return this.axios.get(`${ChatsApi.baseUrl}chats/${id}/users`);
  }

  public static deleteChat(data: DeleteChatData) {
    return this.axios.delete(`${ChatsApi.baseUrl}chats`, { data });
  }

  public static removeUser(data: any) {
    return this.axios.delete(`${ChatsApi.baseUrl}chats/users`, { data });
  }

  public static sendFile(data: FormData) {
    return this.axios.post(`${ChatsApi.baseUrl}resources`, data);
  }
}

export default ChatsApi;
