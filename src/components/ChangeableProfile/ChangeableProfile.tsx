import React, { MouseEventHandler } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./ChangeableProfile.css";
import ChangeableProfileItems from "../ChangeableProfileItems/ChangeableProfileItems";
import schema from "../../utils/UserSchema";

interface ChangeDataProps {
  backToProfile: MouseEventHandler<HTMLButtonElement>;
  isChangeableData: boolean;
  isChangeablePassword: boolean;
}

const onSubmit = (handleSaveData: any) => {
  console.log("gfjdk");
  handleSaveData();
};

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
    resolver: yupResolver(schema),
  });
  return (
    <>
      <form
        className={styles["Changeable-profile__items"]}
        id="profileForm"
        onSubmit={handleSubmit(() => onSubmit(backToProfile))}
      >
        <ChangeableProfileItems
          isChangeableData={isChangeableData}
          isChangeablePassword={isChangeablePassword}
          register={register}
          errors={errors}
        />
      </form>
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
