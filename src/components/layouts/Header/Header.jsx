import React from 'react'
import clsx from "clsx";
import { Link } from "react-router-dom";

import { NavBar } from '@components/navigation';

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
                  <a href="tg://resolve?domain=SocroboticHelp_bot" className="social__link">
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
                  <li className={clsx(styles.menuHeader__item, styles.menuHeader__item_tel)}>
                    <a href="tel:84997046108" className={styles.menuHeader__link}>8 499 704-61-08</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className={styles.header__navLink}>
            <NavBar />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;