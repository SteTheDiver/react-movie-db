import React from "react";

import styles from "./Modal.module.scss";

function Modal(props) {
  return (
    <div className={styles.Modal}>
      <span className={styles.Text}>{props.message}</span>
    </div>
  );
}

export default Modal;
