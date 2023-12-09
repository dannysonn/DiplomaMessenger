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

interface ChangeDataProps {
  backToProfile: any;
  isChangeableData: boolean;
  isChangeablePassword: boolean;
}

const schema = yup.object().shape({
  login: string().required("No login provided"),
  email: string().email().min(1, "No email provided"),
  name: string().min(1, "No name provided"),
  surname: string().min(1, "No surname provided"),
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
      : yupResolver(yup.object().shape({})),
  });

  const shouldShowChangeDataError = useSelector((state) => state.profile.error);

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

      {shouldShowChangeDataError ? <div>ошибка</div> : ""}

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
