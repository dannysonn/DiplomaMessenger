import * as yup from "yup";
import { string } from "yup";
import YupPassword from "yup-password";

YupPassword(yup);

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  login: string().required("Нет логина"),
  password: string()
    .required("Нет пароля")
    .min(8, "Минимум 8 символов")
    .minLowercase(1, "Минимум 1 в нижнем")
    .minUppercase(1, "Минимум 1 в верхнем")
    .minNumbers(1, "Минимум 1 число")
    .minSymbols(1, "Минимум 1 спецсимвол"),
  secondPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Пароли не идентичны"),
  email: string().email().min(1, "Нет почты"),
  name: string().min(1, "Нет имени"),
  surname: string().min(1, "Нет фамилии"),
  phone: yup.string().matches(phoneRegExp, "Нет телефона"),
});

export default schema;
