import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from "./NavBar.module.scss";

const NavBar = () => {
  const [isNavBarFixed, setIsNavBarFixed] = React.useState(false);

  function handleScrollNav(event) {
    if (window.pageYOffset > 50) {
      setIsNavBarFixed(true);
    } else {
      setIsNavBarFixed(false);
    }
  }

  React.useEffect(() => {
    if (window.innerWidth > 768) {
      document.addEventListener("scroll", handleScrollNav);

      return () => document.removeEventListener("scroll", handleScrollNav);
    }
  }, []);

  return (
    <div className={clsx(styles.navBar, { [styles.navBar_fixed]: isNavBarFixed })}>
      <Link to={"/profile"} className={styles.navBar__item}>
        <span className={clsx(styles.navBar__icon, "_icon-user")}></span>
        <div className={styles.navBar__title}>Профиль</div>
      </Link>
      <Link to={"/profile/basket"} className={styles.navBar__item}>
        <span className={clsx(styles.navBar__icon, "_icon-basket")}></span>
        <div className={styles.navBar__title}>Корзина</div>
      </Link>
    </div>
  )
}

export default NavBar;