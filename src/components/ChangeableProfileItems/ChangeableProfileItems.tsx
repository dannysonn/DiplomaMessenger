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
          Почта
          <input
            type="email"
            className={styles["Changeable-profile__input"]}
            placeholder="programmer2000@yandex.ru"
            name="email"
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
          Логин
          <input
            type="text"
            className={styles["Changeable-profile__input"]}
            placeholder="programmer2000"
            name="login"
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
          Имя
          <input
            type="text"
            className={styles["Changeable-profile__input"]}
            placeholder="Elon"
            name="first_name"
            {...register("first_name")}
          />
        </div>
        {errors.first_name ? (
          <p className={styles["Changeable-profile__error"]}>
            {errors.first_name?.message?.toString()}
          </p>
        ) : (
          ""
        )}
        <div className={styles["Changeable-profile__item"]}>
          Фамилия
          <input
            type="text"
            name="second_name"
            className={styles["Changeable-profile__input"]}
            placeholder="Musk"
            {...register("second_name")}
          />
        </div>
        {errors.second_name ? (
          <p className={styles["Changeable-profile__error"]}>
            {errors.second_name?.message?.toString()}
          </p>
        ) : (
          ""
        )}
        <div className={styles["Changeable-profile__item"]}>
          Телефон
          <input
            type="phone"
            name="phone"
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
          Старый пароль
          <input
            id="oldPassword"
            type="password"
            className={styles["Changeable-profile__input"]}
            placeholder="********"
            name="oldPassword"
            {...register("oldPassword")}
          />
        </div>
        {errors.oldPassword ? (
          <p className={styles["Changeable-profile__error"]}>
            {errors.oldPassword?.message?.toString()}
          </p>
        ) : (
          ""
        )}
        <div className={styles["Changeable-profile__item"]}>
          Новый пароль
          <input
            id="newPassword"
            type="password"
            className={styles["Changeable-profile__input"]}
            placeholder="********"
            name="newPassword"
            {...register("newPassword")}
          />
        </div>
        {errors.newPassword ? (
          <p className={styles["Changeable-profile__error"]}>
            {errors.newPassword?.message?.toString()}
          </p>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default ChangeableProfileItems;
