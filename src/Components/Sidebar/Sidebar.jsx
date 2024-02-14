import React from "react";
import styles from "./Sidebar.module.css";
import Logo from "../Logo/Logo";
import { Outlet } from "react-router-dom";
import AppLayoutNav from "../Applayout/AppLayoutNav";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppLayoutNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          {" "}
          &copy; Copyright {new Date().getFullYear()}
          by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
