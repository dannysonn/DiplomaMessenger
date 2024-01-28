import axios from "axios";

export interface AddUserData {
  userId: string;
  chatId: number | null;
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
}

export default ChatsApi;
