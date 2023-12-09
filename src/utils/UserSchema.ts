import * as yup from "yup";
import { string } from "yup";
import YupPassword from "yup-password";

YupPassword(yup);

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  login: string().required("No login provided"),
  password: string()
    .required("No password provided")
    .min(8, "password must contain 8 or more characters")
    .minLowercase(1, "at least 1 lower case letter")
    .minUppercase(1, "at least 1 upper case letter")
    .minNumbers(1, "at least 1 number")
    .minSymbols(1, "at least 1 special character"),
  secondPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match"),
  email: string().email().min(1, "No email provided"),
  name: string().min(1, "No name provided"),
  surname: string().min(1, "No surname provided"),
  phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

export default schema;
