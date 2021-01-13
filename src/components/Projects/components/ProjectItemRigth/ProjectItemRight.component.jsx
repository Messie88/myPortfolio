import React from "react";
import Link from "next/link";

import styles from "./ProjectItemRight.module.scss";

const ProjectItemRight = ({ title, subtitle, technos, image }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={image} alt="" srcset="" />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>
          <span>{subtitle}</span>
        </p>
        <div className={styles.technos}>
          <h5>Main Technos :</h5>
          <p>{technos}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItemRight;
