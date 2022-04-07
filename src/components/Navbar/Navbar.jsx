import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.scss";

// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import { links } from "../../data";

import SearchBar from "../SearchBar/SearchBar";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={styles.Navbar}>
      <div className={styles.HeaderContainer}>
        <button className={styles.HamburgerMenu} onClick={toggleLinks}>
          {/* <MenuIcon fontSize="large" className={styles.ActiveMenuIcon} /> */}
        </button>
        <aside
          className={
            showLinks
              ? `${styles.LinksContainer} ${styles.ShowLinksContainer}`
              : styles.LinksContainer
          }
        >
          <ul className={styles.Links}>
            <li className={styles.Link}>
              <Link to="/" className={styles.Item} onClick={toggleLinks}>
                <span className={styles.Item}>Home</span>
              </Link>
            </li>
            <li className={styles.Link}>
              <Link to="/popular" className={styles.Item} onClick={toggleLinks}>
                <span className={styles.Item}>Popular</span>
              </Link>
            </li>
            <li className={styles.Link}>
              <Link
                to="/watchList"
                className={styles.Item}
                onClick={toggleLinks}
              >
                <span className={styles.Item}>Watch List</span>
              </Link>
            </li>
          </ul>
        </aside>
        <section className={styles.Logo}>
          <SearchBar />
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
