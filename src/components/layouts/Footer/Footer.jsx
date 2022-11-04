import React from "react";
import clsx from "clsx";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={clsx("container", styles.footer__container)}>
        <div className={styles.footer__body}>
          <div className={styles.footer__header}>
            <h2 className={styles.footer__title}>Контакты</h2>
            <ul className={styles.footer__list}>
              <li>
                <a href="tel:84997046108" className={styles.footer__itemLink}><span>8 499 704-61-08</span></a>
              </li>
              <li>
                <a href="mailto:support@socrobotic.pro" className={styles.footer__itemLink}><span>support@socrobotic.pro</span></a>
              </li>
              <li>
                <a href="tg://resolve?domain=SocroboticHelp_bot" className={clsx(styles.footer__itemLink, "_icon-telegram")}>
                  <span>@SocroboticHelp_bot</span>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footer__bottom}>
            <div className={styles.footer__info}>
              <p className={styles.footer__text}>ИП МАКАРОВ ДЕНИС СЕРГЕЕВИЧ </p>
              <p className={styles.footer__text}>ИНН 593305231591 ОГРН 319595800130199 </p>
            </div>
            <div className={styles.footer__links}>
              <a
                href="https://docs.google.com/document/d/1NxlFB6ZmGReI5j1N99W9pB1CqXFY1Z6Q2YKEP28p-5E/edit?usp=sharing"
                target={"_blank"}
                className={styles.footer__link}
                rel="noreferrer"
              >
                Политика возврата средств
              </a>
              <a
                href="https://docs.google.com/document/d/16QE9OfzceZ48LVXkCktVlbMf5Er0QUnx4Bi-IFnTn5Y/edit?usp=sharing"
                target={"_blank"}
                className={styles.footer__link}
                rel="noreferrer"
              >
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
