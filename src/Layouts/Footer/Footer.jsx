import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Footer.module.scss";
import { useGlobalContext } from "../../context";

function Footer() {
  const [position, setPosition] = useState("");

  const { loading } = useGlobalContext();

  let location = useLocation();

  // let movie = location.pathname.includes("/movies") ? true : false;

  // console.log(movie);

  // if(!location.pathname.includes("/watchList")) {
  //   setIsWatchlist(false)

  useEffect(() => {
    if (location.pathname.includes("/movies") && window.innerWidth < 800) {
      setPosition("static");
      console.log(position, "static");
    } else if (
      location.pathname.includes("/movies") &&
      window.innerWidth > 800
    ) {
      setPosition("fixed");
      console.log(position, "fixed");
    } else if (
      location.pathname.includes("/watchList") &&
      window.innerWidth > 800
    ) {
      setPosition("fixed");
      console.log(position, "fixed");
    } else if (
      location.pathname.includes("/watchList") &&
      window.innerWidth < 800
    ) {
      setPosition("fixed");
      console.log(position, "fixed");
    } else {
      setPosition("static");
    }
    // getPage();
  }, [position, loading]);

  // movies --> mobile = static
  // movies --> desk = fixed
  // watchlist --> mobile/desk = fixed
  // home/upcoming --> mobile/desk = static  X

  console.log(position);
  console.log(location.pathname);

  return (
    <footer
      className={styles.Footer}
      // className={isWatchlist ? styles.WatchFooter : styles.Footer}
      // className={styles.`${position}`}
      style={{ position: `${position}` }}
    >
      <span>Powered by SteCoding 2022</span>
    </footer>
  );
}

export default Footer;
