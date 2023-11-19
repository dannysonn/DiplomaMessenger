import axios from "axios";

export type SignInData = {
  login: string;
  password: string;
};

export type SignUpData = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export type UserData = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
  login: string;
  avatar: string;
  email: string;
};

class AuthApi {
  static baseUrl = "https://ya-praktikum.tech/api/v2/auth";

  static axios = axios.create({ withCredentials: true });

  public static signIn(data: SignInData) {
    return this.axios.post(`${AuthApi.baseUrl}/signin`, data, {
      withCredentials: true,
    });
  }

  public static singUp({
    first_name,
    second_name,
    login,
    email,
    password,
    phone,
  }: SignUpData) {
    return this.axios.post(
      `${AuthApi.baseUrl}/signup`,
      {
        first_name,
        second_name,
        login,
        email,
        password,
        phone,
      },
      { withCredentials: true },
    );
  }

  public static getUser() {
    return this.axios.get(`${AuthApi.baseUrl}/user`, { withCredentials: true });
  }
}

export default AuthApi;
