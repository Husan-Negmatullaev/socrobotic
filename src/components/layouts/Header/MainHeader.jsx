import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { NavBar } from "@components/navigation";

import logo from "@images/logo.svg";
import styles from "./MainHeader.module.scss";

const SecondHeader = () => {
  return (
    <div className={clsx(styles.header)}>
      <div className="container">
        <div className={styles.header__body}>
          <div className={styles.header__content}>
            <Link to="/" className={clsx(styles.header__link, "_icon-arrow-left")}>
              <span>Назад к покупкам</span>
            </Link>
            <Link className={styles.header__logo}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className={styles.header__navLink}>
            <NavBar type="dark" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondHeader;