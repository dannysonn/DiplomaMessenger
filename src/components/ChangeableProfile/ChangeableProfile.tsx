import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { string } from "yup";
import { useSelector } from "react-redux";
import styles from "./ChangeableProfile.css";
import ChangeableProfileItems from "../ChangeableProfileItems/ChangeableProfileItems";
import { phoneRegExp } from "../../utils/UserSchema";
import { useAppDispatch } from "../../redux/hooks";
import { changeData, changePassword } from "../../redux/slices/profileSlice";
import { getUser } from "../../redux/slices/authSlice";
import InputError from "../InputError/InputError";

interface ChangeDataProps {
  backToProfile: any;
  isChangeableData: boolean;
  isChangeablePassword: boolean;
}

const schema = yup.object().shape({
  login: string().required("No login provided"),
  email: string().email().min(1, "No email provided"),
  first_name: string().min(1, "No name provided"),
  second_name: string().min(1, "No surname provided"),
  phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

function ChangeableProfile({
  backToProfile,
  isChangeableData,
  isChangeablePassword,
}: ChangeDataProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: isChangeableData
      ? yupResolver(schema)
      : yupResolver(
          yup.object().shape({
            oldPassword: string()
              .required("No password provided")
              .min(8, "password must contain 8 or more characters")
              .minLowercase(1, "at least 1 lower case letter")
              .minUppercase(1, "at least 1 upper case letter")
              .minNumbers(1, "at least 1 number")
              .minSymbols(1, "at least 1 special character"),
            newPassword: string()
              .required("No password provided")
              .min(8, "password must contain 8 or more characters")
              .minLowercase(1, "at least 1 lower case letter")
              .minUppercase(1, "at least 1 upper case letter")
              .minNumbers(1, "at least 1 number")
              .minSymbols(1, "at least 1 special character"),
          }),
        ),
  });

  const shouldShowError = useSelector((state) => state.profile.error);

  let errorString = ``;

  if (shouldShowError && isChangeableData) {
    errorString = `Логин или почта уже используются`;
  }
  if (shouldShowError && isChangeablePassword) {
    errorString = `Старый пароль введён неверно`;
  }

  const dispatch = useAppDispatch();

  const onSubmit = async (data) => {
    if (isChangeableData) {
      await dispatch(changeData(data))
        .unwrap()
        .then(() => {
          dispatch(getUser()).then(() => {
            backToProfile();
          });
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (isChangeablePassword) {
      await dispatch(changePassword(data))
        .unwrap()
        .then(() => {
          backToProfile();
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <>
      <form
        className={styles["Changeable-profile__items"]}
        id="profileForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ChangeableProfileItems
          isChangeableData={isChangeableData}
          isChangeablePassword={isChangeablePassword}
          register={register}
          errors={errors}
        />
      </form>

      <InputError text={errorString} />

      <div className={styles["Changeable-profile__btns"]}>
        <button
          form="profileForm"
          type="submit"
          className={styles["Changeable-profile__btn"]}
        >
          Save
        </button>
        <button
          type="button"
          className={styles["Changeable-profile__btn"]}
          onClick={backToProfile}
        >
          Back to profile
        </button>
      </div>
    </>
  );
}

export default ChangeableProfile;
