import React, { useState } from "react";
import styles from "../../pages/Profile/Profile.css";
import ProfileData from "../ProfileData/ProfileData";
import ChangeableProfile from "../ChangeableProfile/ChangeableProfile";

function ProfileContent() {
  const [isChangeableData, setChangeableData] = useState(false);
  const [isChangeablePassword, setChangeablePassword] = useState(false);

  const handleDataChange = () => {
    setChangeableData(true);
  };

  const backToProfile = () => {
    setChangeableData(false);
    setChangeablePassword(false);
  };

  const handlePasswordChange = () => {
    setChangeablePassword(true);
  };

  return (
    <div className={styles["Profile-content"]}>
      {isChangeableData || isChangeablePassword ? (
        <ChangeableProfile
          backToProfile={backToProfile}
          isChangeableData={isChangeableData}
          isChangeablePassword={isChangeablePassword}
        />
      ) : (
        <ProfileData
          handleDataChange={handleDataChange}
          handlePasswordChange={handlePasswordChange}
        />
      )}
    </div>
  );
}

export default ProfileContent;
