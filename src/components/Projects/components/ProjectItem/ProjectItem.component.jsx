import React from "react";

import styles from "./ProjectItem.module.scss";

const ProjectItem = ({
  heroImage,
  title,
  role,
  challenges,
  technos,
  linkToSeeLive,
  imageOne,
  imageTwo,
  imageThree,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <img src={heroImage} alt="Project Screen" />
        <h1>{title}</h1>
      </div>
      <div className={styles.description}>
        <div className={styles.descriptionLeft}>
          <div>
            <h3>Role :</h3>
            <p>{role}</p>
          </div>
          <div>
            <h3>Challenges</h3>
            <p>{challenges}</p>
          </div>
        </div>
        <div className={styles.descriptionRight}>
          <div>
            <h3>Technos :</h3>
            <p>{technos}</p>
          </div>
          <div className={styles.descriptionRightLink}>
            <a href={linkToSeeLive}>See live</a>
          </div>
        </div>
      </div>
      <div className={styles.images}>
        <div className={styles.leftImage}>
          <img src={imageOne} alt="" />
        </div>
        <div className={styles.rightImage}>
          <img src={imageTwo} alt="" />
          <img src={imageThree} alt="" />
        </div>
      </div>
      <div>Previous Project / next Project</div>
    </div>
  );
};

export default ProjectItem;
