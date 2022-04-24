import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Footer.module.scss";
import { useGlobalContext } from "../../context";

function Footer() {
  const [isWatchlist, setWatchlist] = useState(false);

  const {loading} = useGlobalContext();

  let location = useLocation();


  useEffect(() => {
    if (
      location.pathname.includes("/watchList") ||
      location.pathname.includes("/movies") || loading
    ) {
      setWatchlist(true);
    } else {
      setWatchlist(false);
    }
  }, [location, isWatchlist, loading]);

  return (
    <footer
      className={styles.Footer}
      style={isWatchlist ? { position: "fixed" } : { position: "static" }}
    >
      <span>Powered by SteCoding 2022</span>
    </footer>
  );
}

export default Footer;
