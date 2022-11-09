import React from "react";
import clsx from "clsx";

import styles from "./BasketItem.module.scss";
import flag from "@images/accounts-block/01.svg";

const BasketItem = () => {
  const inputId = React.useId();

  return (
    <div className={styles.basketItem}>
      <div className={styles.basketItem__body}>
        <div className={styles.basketItem__content}>
          <div className={styles.basketItem__title}>
            <p className={styles.basketItem__name}>
              <span>
                <img src={flag} alt="" />
              </span>
              Аккаунты ФБ ФП есть 7-10+ дней фарма + Token EAAB (есть фото) с друзьями
            </p>
          </div>
          <div className={styles.basketItem__quentity}>
            <div className="quantity">
              <label htmlFor={inputId} className="quantity__label quantity__label_remove-mobile">Сколько нужно</label>
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
          </div>
          <div className={styles.basketItem__price}>
            <p className={styles.basketItem__info}><span>200.25 ₽ (2.60 $)</span></p>
          </div>
        </div>
        {/* <div className={styles.basketItem__action}> */}
        <button type="button" className={clsx(styles.basketItem__button, "_icon-close")}></button>
        {/* </div> */}
      </div>
    </div>
  )
}

export default BasketItem;