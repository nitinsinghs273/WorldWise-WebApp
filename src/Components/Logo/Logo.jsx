import React from "react";
import styles from "./Logo.module.css";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/">
      <img className={styles.logo} src="../images/logo.png" alt="logo"></img>
    </NavLink>
  );
}

export default Logo;
