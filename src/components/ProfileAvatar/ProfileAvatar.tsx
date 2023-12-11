import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import styles from "../../pages/Profile/Profile.css";
import { useAppDispatch } from "../../redux/hooks";
import { changeAvatar } from "../../redux/slices/profileSlice";

function ProfileAvatar() {
  const imageRef = useRef(null);
  const formRef = useRef(null);
  const dispatch = useAppDispatch();

  const onSubmit = (data) => {
    const file = data.avatar[0];
    const formData = new FormData();
    formData.append("avatar", file);
    dispatch(changeAvatar(formData));
  };

  const { register, handleSubmit } = useForm();
  const avatar = useSelector((state) => state.user.user?.avatar);

  return (
    <div className={styles["Profile-avatar"]}>
      <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        <label htmlFor="avatar" ref={imageRef}>
          <img
            className={styles["Profile-avatar__image"]}
            src={
              avatar
                ? `https://ya-praktikum.tech/api/v2/resources${avatar}`
                : "../../assets/images/svg/default-chat-img.svg"
            }
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
        <button type="submit">submit</button>
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
