import React from "react";
import { FieldErrors } from "react-hook-form";
import styles from "../ChangeableProfile/ChangeableProfile.css";

interface ChangeableDataItemsProps {
  isChangeableData: boolean;
  isChangeablePassword: boolean;
  register: any;
  errors: FieldErrors<any>;
}

function ChangeableProfileItems({
  isChangeableData,
  isChangeablePassword,
  register,
  errors,
}: ChangeableDataItemsProps) {
  if (isChangeableData) {
    return (
      <>
        <div className={styles["Changeable-profile__item"]}>
          Email
          <input
            type="email"
            className={styles["Changeable-profile__input"]}
            placeholder="programmer2000@yandex.ru"
            {...register("email")}
          />
        </div>
        {errors.email ? (
          <p className={styles["Changeable-profile__error"]}>
            {errors.email?.message?.toString()}
          </p>
        ) : (
          ""
        )}
        <div className={styles["Changeable-profile__item"]}>
          Login
          <input
            type="text"
            className={styles["Changeable-profile__input"]}
            placeholder="programmer2000"
            {...register("login")}
          />
        </div>
        {errors.login ? (
          <p className={styles["Changeable-profile__error"]}>
            {errors.login?.message?.toString()}
          </p>
        ) : (
          ""
        )}
        <div className={styles["Changeable-profile__item"]}>
          Name
          <input
            type="text"
            className={styles["Changeable-profile__input"]}
            placeholder="Elon"
            {...register("first_name")}
          />
        </div>
        {errors.name ? (
          <p className={styles["Changeable-profile__error"]}>
            {errors.name?.message?.toString()}
          </p>
        ) : (
          ""
        )}
        <div className={styles["Changeable-profile__item"]}>
          Surname
          <input
            type="text"
            className={styles["Changeable-profile__input"]}
            placeholder="Musk"
            {...register("second_name")}
          />
        </div>
        {errors.surname ? (
          <p className={styles["Changeable-profile__error"]}>
            {errors.surname?.message?.toString()}
          </p>
        ) : (
          ""
        )}
        <div className={styles["Changeable-profile__item"]}>
          Phone
          <input
            type="phone"
            className={styles["Changeable-profile__input"]}
            placeholder="999-99-99"
            {...register("phone")}
          />
        </div>
        {errors.phone ? (
          <p className={styles["Changeable-profile__error"]}>
            {errors.phone?.message?.toString()}
          </p>
        ) : (
          ""
        )}
      </>
    );
  }
  if (isChangeablePassword) {
    return (
      <>
        <div className={styles["Changeable-profile__item"]}>
          Password
          <input
            type="password"
            className={styles["Changeable-profile__input"]}
            placeholder="********"
            {...register("password")}
          />
        </div>
        {errors.password ? (
          <p className={styles["Changeable-profile__error"]}>
            {errors.password?.message?.toString()}
          </p>
        ) : (
          ""
        )}
        <div className={styles["Changeable-profile__item"]}>
          Repeat password
          <input
            type="password"
            className={styles["Changeable-profile__input"]}
            placeholder="********"
            {...register("secondPassword")}
          />
        </div>
        {errors.secondPassword ? (
          <p className={styles["Changeable-profile__error"]}>
            {errors.secondPassword?.message?.toString()}
          </p>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default ChangeableProfileItems;
