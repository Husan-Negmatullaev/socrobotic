import React from 'react'
import clsx from "clsx";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import logo from "@images/logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={clsx("container", styles.header__contaienr)}>
        <div className={styles.header__body}>
          <div className={clsx(styles.header__content, styles.contentHeader)}>
            <Link to={"/"} className={styles.contentHeader__logo}>
              <img src={logo} alt="" />
            </Link>
            <div className={clsx(styles.contentHeader__actions, styles.headerActions)}>
              <div className={styles.headerActions__action}>
                <a href="tel:84997046108" className={styles.headerActions__telLink}>8 499 704-61-08</a>
                <div className={clsx(styles.headerActions__social, "social")}>
                  <a href="mailto:support@socrobotic.pro" className="social__link">
                    <span className="_icon-email"></span>
                  </a>
                  <a href="mailto:support@socrobotic.pro" className="social__link">
                    <span className="_icon-telegram"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className={clsx(styles.contentHeader__menu, styles.menuHeader)}>
              <nav className={styles.menuHeader__nav}>
                <ul className={styles.menuHeader__list}>
                  <li className={styles.menuHeader__item}>
                    <Link to={"/partners"} className={styles.menuHeader__link}>Партнеры</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className={clsx(styles.header__navLink, styles.navLink)}>
            <div className={styles.navLink__body}>
              <div className={styles.navLink__item}>
                <span className={clsx(styles.navLink__icon, "_icon-user")}></span>
                <div className={styles.navLink__title}>Профиль</div>
              </div>
              <div className={styles.navLink__item}>
                <span className={clsx(styles.navLink__icon, "_icon-basket")}></span>
                <div className={styles.navLink__title}>Корзина</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;