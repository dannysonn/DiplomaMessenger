import React, { MouseEventHandler } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./ChangeableProfile.css";
import ChangeableProfileItems from "../ChangeableProfileItems/ChangeableProfileItems";
import schema from "../../utils/UserSchema";

interface ChangeDataProps {
  handleSaveData: MouseEventHandler<HTMLButtonElement>;
  isChangeableData: boolean;
  isChangeablePassword: boolean;
}

const onSubmit = (handleSaveData: any) => {
  console.log("gfjdk");
  handleSaveData();
};

function ChangeableProfile({
  handleSaveData,
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
        onSubmit={handleSubmit(() => onSubmit(handleSaveData))}
      >
        <ChangeableProfileItems
          isChangeableData={isChangeableData}
          isChangeablePassword={isChangeablePassword}
          register={register}
          errors={errors}
        />
      </form>
      <button
        form="profileForm"
        type="submit"
        className={styles["Changeable-profile__btn"]}
      >
        Save
      </button>
    </>
  );
}

export default ChangeableProfile;
