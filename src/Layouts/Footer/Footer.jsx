import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Footer.module.scss";
import { useGlobalContext } from "../../context";

function Footer() {
  const [position, setPosition] = useState("");

  const { loading } = useGlobalContext();

  let location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/movies") && window.innerWidth < 800) {
      setPosition("static");
    } else if (
      location.pathname.includes("/movies") &&
      window.innerWidth > 800
    ) {
      setPosition("fixed");
    } else if (
      location.pathname.includes("/watchList") &&
      window.innerWidth > 800
    ) {
      setPosition("fixed");
    } else if (
      location.pathname.includes("/watchList") &&
      window.innerWidth < 800
    ) {
      setPosition("fixed");
    } else {
      setPosition("static");
    }
  }, [position, loading]);

  return (
    <footer className={styles.Footer} style={{ position: `${position}` }}>
      <span>Powered by SteCoding 2022</span>
    </footer>
  );
}

export default Footer;
