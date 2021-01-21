import React, {useRef} from "react";

import styles from "./Canvas.modules.scss";

const Canvas = () => {
    const container = useRef(null)
  return <div classNane={styles.canvas} ref={el => container=el}></div>;
};

export default Canvas;
