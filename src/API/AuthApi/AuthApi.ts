import axios from "axios";

export type SignInData = {
  login: string;
  password: string;
};

class AuthApi {
  static baseUrl = "https://ya-praktikum.tech/api/v2/auth";

  private static axios = axios.create({
    baseURL: AuthApi.baseUrl,
  });

  public static signIn({ login, password }: SignInData) {
    this.axios.post(`${AuthApi.baseUrl}/signin`, {
      login,
      password,
    }).then((res) => {
      console.log(res)
    })
    .catch(err => console.error(err));
  }
}

export default AuthApi;
