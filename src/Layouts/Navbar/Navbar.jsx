import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.scss";

import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={styles.Navbar}>
      <div className={styles.HeaderContainer}>
        <button className={styles.HamburgerMenu} onClick={toggleLinks}>
          <MenuIcon fontSize="large" className={styles.ActiveMenuIcon} />
        </button>
        <div
          className={
            showLinks
              ? `${styles.LinksContainer} ${styles.ShowLinksContainer}`
              : styles.LinksContainer
          }
        >
          <ul className={styles.Links}>
            <li className={styles.Link}>
              <Link to="/" className={styles.Item} onClick={toggleLinks}>
                Home
              </Link>
            </li>
            <li className={styles.Link}>
              <Link
                to="/upcoming"
                className={styles.Item}
                onClick={toggleLinks}
              >
                Upcoming
              </Link>
            </li>
            <li className={styles.Link}>
              <Link
                to="/watchList"
                className={styles.Item}
                onClick={toggleLinks}
              >
                My Watch List
              </Link>
            </li>
          </ul>
        </div>
        <section className={styles.Logo}>
          {/* <SearchBar /> */}
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
