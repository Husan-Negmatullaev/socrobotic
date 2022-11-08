import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import flag from "@images/accounts-block/01.svg";
import styles from "./AccountItem.module.scss";

const AccountItem = ({ classes }) => {
  const inputId = React.useId();

  return (
    <div className={clsx(classes, styles.itemAccount)}>
      <div className={styles.itemAccount__head}>
        <div className={styles.itemAccount__offer}>
          <div className={styles.itemAccount__icon}>
            <img src={flag} alt="Иконка флага страны" />
          </div>
          <p className={styles.itemAccount__text}>🇵🇱 Аккаунты ФБ ФП есть 7-10+ дней фарма + Token EAAB (есть фото) с друзьями</p>
        </div>
        <div className={clsx(styles.itemAccount__info, "_mobile")}>
          В наличии: <span>2905 штук</span>
        </div>
        <div className={styles.itemAccount__actions}>
          <div className="quantity">
            <label htmlFor={inputId} className="quantity__label">Сколько нужно</label>
            <div className="quantity__actions">
              <div className="quantity__button quantity__button_minus _icon-minus"></div>
              <div className="quantity__input">
                <input
                  id={inputId}
                  autoComplete="off"
                  type="text"
                  name="form[]"
                  value={1}
                  onChange={() => { }}
                />
              </div>
              <div className="quantity__button quantity__button_plus _icon-plus"></div>
            </div>
          </div>
          <button type="button" className={clsx(styles.itemAccount__button, "button button_blue button_min _mobile")}>В корзину</button>
        </div>
        <div className={styles.itemAccount__buttons}>
          <button type="button" className={clsx(styles.itemAccount__button, styles.itemAccount__button_remove, "button button_blue button_min")}>В корзину</button>
          <Link to={"/basket"} className={clsx(styles.itemAccount__button, styles.itemAccount__button_big, "button button_min")}>Купить в 1 клик</Link>
        </div>
      </div>
      <div className={styles.itemAccount__footer}>
        <div className={styles.itemAccount__info}>
          Цена: <span>200.25 ₽ (2.60 $)</span>
        </div>
        <div className={clsx(styles.itemAccount__info, styles.itemAccount__info_removeMin)}>
          В наличии: <span>2905 штук</span>
        </div>
      </div>
    </div>
  )
}

export default AccountItem;
