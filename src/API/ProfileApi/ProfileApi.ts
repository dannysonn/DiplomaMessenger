import axios from "axios";

export type ProfileData = {
  first_name: string;
  second_name: string;
  phone: string;
  login: string;
  email: string;
};

class ProfileApi {
  static baseUrl = "https://ya-praktikum.tech/api/v2/user";

  static axios = axios.create({ withCredentials: true });

  public static changeData(data: ProfileData) {
    return this.axios.put(`${ProfileApi.baseUrl}/profile`, data);
  }

  public static changePassword(data: ProfileData) {
    return this.axios.put(`${ProfileApi.baseUrl}/password`, data);
  }

  public static changeAvatar(data: ProfileData) {
    return this.axios.put(`${ProfileApi.baseUrl}/avatar`, data);
  }
}

export default ProfileApi;
