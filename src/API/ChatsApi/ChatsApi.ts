import axios from "axios";

export interface SocketArgs {
  userId: string;
  chatId: string;
  token: string;
}

class ChatsApi {
  static baseUrl = "https://ya-praktikum.tech/api/v2/";

  static axios = axios.create({ withCredentials: true });

  public static getChats() {
    return this.axios.get(`${ChatsApi.baseUrl}/chats`);
  }

  public static createChat(data: any) {
    return this.axios.post(`${ChatsApi.baseUrl}/chats`, data);
  }

  public static getToken(chatId: number) {
    return this.axios.post(`${ChatsApi.baseUrl}/chats/token/${chatId}`);
  }
}

export default ChatsApi;
