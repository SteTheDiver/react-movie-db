import React from "react";
import { Link } from "react-router-dom";
import styles from "./Error.module.scss";

function Error() {
  return (
    //add a funny 404 image
    <main className={styles.Error}>
      <span className={styles.Text}>Error 404</span>
      <span className={styles.Text}>Page not found</span>
      <Link to="/">
        <button className={styles.Button}>Back to Home</button>
      </Link>
    </main>
  );
}

export default Error;
