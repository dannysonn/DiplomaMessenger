import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "../../pages/Profile/Profile.css";
import { useAppDispatch } from "../../redux/hooks";
import { changeAvatar } from "../../redux/slices/profileSlice";
import schema from "../../utils/UserSchema";

function ProfileAvatar() {
  const imageRef = useRef(null);
  const dispatch = useAppDispatch();

  const onSubmit = (data) => {
    dispatch(changeAvatar(data));
  };

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className={styles["Profile-avatar"]}>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="avatar" ref={imageRef}>
          <img
            className={styles["Profile-avatar__image"]}
            src="../../assets/images/svg/default-chat-img.svg"
            alt="Avatar"
          />
        </label>
        <input
          style={{ display: "none" }}
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
          {...register("avatar")}
        />
        <div
          className={styles["Profile-avatar__overlay"]}
          onClick={() => imageRef.current.click()}
        >
          <div className={styles["Profile-avatar__title"]}>change avatar</div>
        </div>
      </form>
    </div>
  );
}

export default ProfileAvatar;
