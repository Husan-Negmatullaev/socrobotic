import clsx from "clsx";
import React from "react";

import { Input, Title } from "@common";

import styles from "./OrderPage.module.scss";

const OrderPage = () => {
  return (
    <div className={styles.order}>
      <div className="container">
        <div className={styles.order__header}>
          <Title text={"Оформление покупки"} className={styles.order__title} />
        </div>
        <form className={clsx(styles.order__form, styles.formOrder)}>
          <div className={styles.formOrder__left}>
            <div className={styles.formOrder__column}>
              <h4 className={styles.formOrder__title}>Личная информация</h4>
              <div className={clsx(styles.order__setInformation, styles.setInformation)}>
                <div className={styles.setInformation__row}>
                  <div className={styles.setInformation__item}>
                    <Input classes={styles.setInformation__input} readonly label="Аккаунт Telegram" value={"SomeUser203"} />
                  </div>
                  <div className={styles.setInformation__item}>
                    <Input classes={styles.setInformation__input} label="Промокод">
                      <button type="button" className={clsx(styles.setInformation__buttonSubmit, "button button_blue button_small")}>Применить</button>
                    </Input>
                  </div>
                  <div className={styles.setInformation__item}>
                    <Input classes={styles.setInformation__input} label="Введите WMID" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.formOrder__column}>
              <h4 className={styles.formOrder__title}>Выберите способ оплаты</h4>
              <div className={clsx(styles.formOrder__choose, styles.choose)}>
                <div className={styles.choose__body}>
                  <label htmlFor="r1" className={styles.choose__item}>
                    <input id="r1" type="radio" name="type-payment" className={styles.choose__radio} />
                    <p className={styles.choose__text}>Банковская карта</p>
                  </label>
                  <label htmlFor="r2" className={styles.choose__item}>
                    <input id="r2" type="radio" name="type-payment" className={styles.choose__radio} />
                    <p className={styles.choose__text}>WebMoney</p>
                  </label>
                  <label htmlFor="r3" className={styles.choose__item}>
                    <input id="r3" type="radio" name="type-payment" className={styles.choose__radio} />
                    <p className={styles.choose__text}>С баланса личного кабинета (0.00$)</p>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.formOrder__right}>
            <div className={clsx(styles.formOrder__summery, styles.summery)}>
              <h4 className={styles.summery__title}>Итого: </h4>
              <ul className={styles.summery__cost}>
                <li>
                  <span className={styles.summery__name}>Товары</span>
                  <p className={styles.summery__value}>200.25 ₽ (2.60$)</p>
                </li>
                <li>
                  <span className={styles.summery__name}>Скидка</span>
                  <p className={styles.summery__value}>0%</p>
                </li>
                <li>
                  <span className={styles.summery__name}>Итого: </span>
                  <p className={styles.summery__value}>200.25 ₽ ( 2.60$)</p>
                </li>
              </ul>
              <div className={styles.summery__choose}>
                <div className={styles.summery__item}>
                  <input id="ch:1" type="checkbox" className={clsx(styles.summery__checkbox, "checkbox")} />
                  <label htmlFor="ch:1" className={styles.summery__terms}>
                    Согласен с
                    <a target="_black" href="https://docs.google.com/document/d/1o9b7KQWYIhVHHHWcDZjufuSc-hFwlnjx3gGkwgMO1HA/edit?usp=sharing">условиями политики конфиденциальности</a>
                  </label>
                </div>
                <div className={styles.summery__item}>
                  <input id="ch:2" type="checkbox" className={clsx(styles.summery__checkbox, "checkbox")} />
                  <label htmlFor="ch:2" className={styles.summery__terms}>Отправить файл с аккаунтами в Telegram</label>
                </div>
              </div>
              <button type="button" className={clsx(styles.summery__button, "_icon-arrow-left button button_big _fw")}>
                <span>Перейти к оплате</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default OrderPage;