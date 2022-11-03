import React from 'react';
import clsx from 'clsx';

import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className="wrapper">
      <section className={clsx("page", styles.pageNotFound)}>
        <div className={clsx("container", styles.pageNotFound__container)}>
          <h1 className={styles.pageNotFound__title}>
            <span className={styles.pageNotFound__errorText}>404</span>
            <span>NOT FOUND</span>
          </h1>
        </div>
      </section>
    </div>
  )
}

export default NotFound;