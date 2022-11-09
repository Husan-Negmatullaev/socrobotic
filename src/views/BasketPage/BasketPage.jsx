import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

import { BasketItem } from "@components/accounts";
import { Title } from "@common";

import styles from "./BasketPage.module.scss";

const BasketPage = () => {
  return (
    <div className={styles.basket}>
      <div className="container">
        <Title
          text={"Моя корзина"}
          classes={styles.basket__title}
        />
        <div className={styles.basket__body}>
          <div className={styles.basket__content}>
            <BasketItem classes={styles.basket__item} />
          </div>
          <div className={styles.basket__footer}>
            <div className={styles.basket__footerHeader}>
              <p className={styles.basket__info}>Итого: <span>1802.25 ₽ (23.40 $)</span></p>
            </div>
            <div className={styles.basket__buttons}>
              <button type="button" className={clsx(styles.basket__button, "button button_grey")}>Очистить корзину</button>
              <Link to={"/order"} type="button" className={clsx(styles.basket__button, "button")}>Перейти к оформлению</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasketPage;