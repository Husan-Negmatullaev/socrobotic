import React from "react";
import clsx from "clsx";

import flag from "@images/accounts-block/01.svg";
import styles from "./AccountItem.module.scss";

const AccountItem = ({ classes }) => {
  return (
    <div className={clsx(classes, styles.itemAccount)}>
      <div className={styles.itemAccount__head}>
        <div className={styles.itemAccount__offer}>
          <div className={styles.itemAccount__icon}>
            <img src={flag} alt="Иконка флага страны" />
          </div>
          <p className={styles.itemAccount__text}>🇵🇱 Аккаунты ФБ ФП есть 7-10+ дней фарма + Token EAAB (есть фото) с друзьями</p>
        </div>
        <div className={styles.itemAccount__price}>
          Цена: <span>200.25 ₽ (2.60 $)</span>
        </div>

      </div>
      <div className={styles.itemAccount__footer}></div>
    </div>
  )
}

export default AccountItem;
