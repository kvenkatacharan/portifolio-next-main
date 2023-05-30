import { info } from "../../utils/info";
import React, { useState, useEffect } from "react";
import { navLinks } from "../../utils/data";
import Link from "next/link";
import styles from "../NavBar/NavBar.module.css";
import Toggler from "../Toggler";
import { useRouter } from "next/router";

interface INavBarProps {
  darkMode: boolean;
  handleClick: () => void;
}
const NavBar: React.FC<INavBarProps> = ({ darkMode, handleClick }) => {
  const router = useRouter();
  const [active, setActive] = useState(
    router.pathname == "/" ? "home" : router.pathname.substring(1)
  );

  return (
    <header>
      <nav className={styles.nav}>
        <ul className={styles.navContainer}>
          {navLinks.map((link, index) => {
            return (
              <Link key={index} href={link.path}>
                <li
                  onClick={() => {
                    setActive(link.active);
                  }}
                  className={`${styles.navItem} ${
                    link.active === active && !link.type && styles.active
                  } ${link.type === "initials" && styles.initials} `}
                >
                  {link.name}
                </li>
              </Link>
            );
          })}
          <li className={styles.navItem}>
            <Toggler darkMode={darkMode} handleClick={handleClick} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
