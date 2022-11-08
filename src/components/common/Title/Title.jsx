import React from "react";
import clsx from "clsx";

import styles from "./Title.module.scss";

const Title = ({ text, classes }) => {
  return (
    <h2 className={clsx(styles.title, classes)}>
      {text}
    </h2>
  )
}

export default Title
