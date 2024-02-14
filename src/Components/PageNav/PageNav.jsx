import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./PageNav.module.css";
import Logo from "../Logo/Logo";

function PageNav() {
  return (
    <nav className={Styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Products</NavLink>
        </li>
        <li>
          <NavLink className={Styles.ctaLink} to="/login">
            LOGIN
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
