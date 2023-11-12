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

class AuthApi {
  static baseUrl = "https://ya-praktikum.tech/api/v2/auth";

  public static signIn(data: SignInData) {
    return axios.post(`${AuthApi.baseUrl}/signin`, data);
  }

  public static singUp({
    first_name,
    second_name,
    login,
    email,
    password,
    phone,
  }: SignUpData) {
    return axios.post(`${AuthApi.baseUrl}/signup`, {
      first_name,
      second_name,
      login,
      email,
      password,
      phone,
    });
  }
}

export default AuthApi;
