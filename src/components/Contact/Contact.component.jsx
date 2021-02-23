import React from "react";

import styles from "./Contact.module.scss";

const Contact = () => {
    return <div className={styles.container}>
          <h3><i>Say hi!</i></h3>
          <div className={styles.contact}>
            <a href="mailto:messie.np@digital-village.fr"><i>messie.np@digital-village.fr</i></a>
            <p id={styles.num}><i>+33 7 68 25 08 01</i></p>
            <div className={styles.social}>
                  <a
                    href="https://github.com/Messie88"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/images/github.svg" alt="arrow" />
                    <span>github</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pathe-messie-nungi-pambu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/images/linkedin.svg" alt="arrow" />
                    <span>linkedin</span>
                  </a>
                </div>
          </div>
       
        
    </div>
}

export default Contact