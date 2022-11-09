import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";

import { Title } from "@common";

import styles from "./ProfilePage.module.scss";

const ProfilePage = () => {

  const activeClassName = ({ isActive }) => {
    return [
      styles.profile__link,
      isActive ? styles.profile__link_active : null
    ]
      .filter(Boolean)
      .join(" ")
  }

  return (
    <div className={styles.profile}>
      <div className="container">
        <div className={styles.profile__body}>
          <nav className={styles.profile__nav}>
            <Title
              text={"Личный кабинет"}
              classes={styles.profile__title}
            />
            <ul className={styles.profile__list}>
              <li>
                <NavLink
                  className={activeClassName}
                  to={"/profile"}
                  title="Профиль"
                  end
                >
                  Профиль
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={activeClassName}
                  to={"/profile/orders"}
                  title="Мои заказы"
                >
                  Мои заказы
                </NavLink>
              </li>
              <li>
                <button type="button" className={clsx(styles.profile__button, "button button_red button _fw")}>Выйти</button>
              </li>
            </ul>
          </nav>
          <div className={styles.profile__content}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;