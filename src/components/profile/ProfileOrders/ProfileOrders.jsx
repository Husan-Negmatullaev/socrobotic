import React from "react";

import styles from "./ProfileOrders.module.scss";

const ProfileOrders = () => {
  return (
    <div className={styles.orders}>
      <h3 className={styles.orders__title}>Мои заказы</h3>
      <div className={styles.orders__body}></div>
    </div>
  )
}

export default ProfileOrders;