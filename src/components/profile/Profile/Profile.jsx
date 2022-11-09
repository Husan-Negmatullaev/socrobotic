import React from "react";
import clsx from "clsx";

import { Input } from "@common";

import styles from "./Profile.module.scss";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <h3 className={styles.profile__title}>Профиль</h3>
      <div className={clsx(styles.profile__balance, styles.balanceProfile)}>
        <div className={styles.balanceProfile__item}>
          <p className={styles.balanceProfile__text}>Баланс</p>
          <div className={styles.balanceProfile__body}>
            <span className={styles.balanceProfile__price}>0.00$</span>
            <button type="button" className={styles.balanceProfile__button}>Пополнить</button>
          </div>
        </div>
        <div className={styles.balanceProfile__item}>
          <p className={styles.balanceProfile__text}>Доступно для вывода</p>
          <div className={styles.balanceProfile__body}>
            <span className={styles.balanceProfile__price}>0.00$</span>
            <button type="button" disabled className={clsx(styles.balanceProfile__button, styles.balanceProfile__button_blue)}>Вывести</button>
          </div>
        </div>
      </div>
      <form className={clsx(styles.profile__form, styles.formProfile)}>
        <div className={styles.formProfile__body}>
          <div className={styles.formProfile__row}>
            <div className={styles.formProfile__column}>
              <Input classes={styles.formProfile__input} label="Как вас зовут?" name="username" />
            </div>
            <div className={styles.formProfile__column}>
              <h5 className={styles.formProfile__title}>Ваш телеграм для получения чеков</h5>
              <Input value={"SomeUser203"} readonly label="Аккаунт Telegram" name="username" />
            </div>
            <div className={styles.formProfile__column}>
              <h5 className={styles.formProfile__title}>Реферальная ссылка на сайт</h5>
              <Input readonly={true} label="Реферальная ссылка на сайт" name="username" value={"https://socrobotic.io/ref/user1070"}>
                <button type="button" class={clsx(styles.formProfile__buttonCopy, "button button_blue button_small")}>Скопировать</button>
              </Input>
            </div>
          </div>
        </div>
        <div className={styles.formProfile__actions}>
          <button type="button" class={clsx(styles.formProfile__button, "button button_big")}>Сохранить</button>
        </div>
      </form>
    </div>
  )
}

export default Profile;