import React from "react";
import clsx from "clsx";

import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <section className={clsx(styles.page__mainBlock, styles.mainBlock)}>
      <div className={clsx("container", styles.mainBlock__container)}>
        <div className={styles.mainBlock__body}>
          <div className={styles.mainBlock__content}>
            <h1 className={styles.mainBlock__title}>
              <span>Магазин</span> трастовых аккаунтов Facebook <span>для запуска рекламы</span>
            </h1>
            <ul className={styles.mainBlock__list}>
              <li>
                <p className={styles.mainBlock__text}>
                  <span>От 60 ₽</span> за качественные аккаунты для отлива рекламы
                </p>
              </li>
              <li>
                <p className={styles.mainBlock__text}>
                  Заботливая <span>техподдержка</span> для клиентов
                </p>
              </li>
              <li>
                <p className={styles.mainBlock__text}>
                  <span>100%</span> гарантия замены аккаунтов
                </p>
              </li>
            </ul>
            <button type="button" className="button">Хочу аккаунты!</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage;