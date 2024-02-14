import React from "react";
import styles from "./Login.module.css";

function Login() {
  return (
    <main className={styles.login}>
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" />
        </div>
        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div>
          <button className={styles.ctaLink}>Login</button>
        </div>
      </form>
    </main>
  );
}

export default Login;
