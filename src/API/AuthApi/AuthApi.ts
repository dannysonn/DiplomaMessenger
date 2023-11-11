import axios from "axios";

export type SignInData = {
  login: string;
  password: string;
};

class AuthApi {
  static baseUrl = "https://ya-praktikum.tech/api/v2/auth";

  public static signIn({ login, password }: SignInData) {
    return axios.post(`${AuthApi.baseUrl}/signin`, {
      login,
      password,
    });
  }
}

export default AuthApi;
