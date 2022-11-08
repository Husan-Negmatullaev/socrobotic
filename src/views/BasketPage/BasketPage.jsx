import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

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

          </div>
          <div className={styles.basket__footer}>
            <div className={styles.basket__footerHeader}>
              <div className={styles.basket__info}></div>
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