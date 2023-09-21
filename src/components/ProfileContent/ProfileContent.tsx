import React, { useState } from "react";
import styles from "../../pages/Profile/Profile.css";
import ChangeData from "../ChangeData/ChangeData";
import ProfileData from "../ProfileData/ProfileData";

function ProfileContent() {
  const [isChangeableData, setChangeableData] = useState(false);
  const [isChangeablePassword, setChangeablePassword] = useState(false);

  const handleDataChange = () => {
    setChangeablePassword(false);
    setChangeableData(true);
  };

  const handleSaveData = () => {
    setChangeableData(false);
  };

  return (
    <div className={styles["Profile-content"]}>
      {/* eslint-disable-next-line no-nested-ternary */}
      {isChangeableData ? (
        <ChangeData handleSaveData={handleSaveData} />
      ) : isChangeablePassword ? (
        <div>change pass</div>
      ) : (
        <ProfileData handleDataChange={handleDataChange} />
      )}
    </div>
  );
}

export default ProfileContent;
