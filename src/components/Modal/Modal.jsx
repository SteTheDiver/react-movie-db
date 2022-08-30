import React, { useEffect } from "react";

import styles from "./Modal.module.scss";

import { useGlobalContext } from "../../context";

function Modal(props) {
  const { showModal, setShowModal } = useGlobalContext();

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(!showModal);
    }, 5000);
    console.log('effect is active')
    return () => clearTimeout(timer) , console.log('effect over');
  }, [setShowModal, showModal]);


  return (
    <div className={styles.Modal}>
      <span className={styles.Text}>{props.message}</span>
    </div>
  );
}

export default Modal;
