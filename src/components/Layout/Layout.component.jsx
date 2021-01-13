import React from "react";

import styles from "./Layout.module.scss";

const Layout = ({ children, color }) => {
  return (
    <div className={styles.container} id={color && styles.color}>
      <div className={styles.containerInner}>{children}</div>
    </div>
  );
};

export default Layout;
