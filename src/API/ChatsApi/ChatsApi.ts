import axios from "axios";

class ChatsApi {
  static baseUrl = "https://ya-praktikum.tech/api/v2/";

  static axios = axios.create({ withCredentials: true });

  public static getChats() {
    return this.axios.get(`${ChatsApi.baseUrl}/chats`);
  }

  public static createChat(data) {
    return this.axios.post(`${ChatsApi.baseUrl}/chats`, data);
  }
}

export default ChatsApi;
