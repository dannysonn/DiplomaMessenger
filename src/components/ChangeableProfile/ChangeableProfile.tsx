import React, { MouseEventHandler } from "react";
import styles from "./ChangeableProfile.css";
import ChangeableProfileItems from "../ChangeableProfileItems/ChangeableProfileItems";

interface ChangeDataProps {
  handleSaveData: MouseEventHandler<HTMLButtonElement>;
  isChangeableData: boolean;
  isChangeablePassword: boolean;
}

function ChangeableProfile({
  handleSaveData,
  isChangeableData,
  isChangeablePassword,
}: ChangeDataProps) {
  return (
    <>
      <div className={styles["Changeable-profile__items"]}>
        <ChangeableProfileItems
          isChangeableData={isChangeableData}
          isChangeablePassword={isChangeablePassword}
        />
      </div>
      <button
        type="button"
        onClick={handleSaveData}
        className={styles["Changeable-profile__btn"]}
      >
        Save
      </button>
    </>
  );
}

export default ChangeableProfile;
