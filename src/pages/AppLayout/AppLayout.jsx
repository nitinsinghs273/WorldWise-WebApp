import React from "react";
import Map from "../../Components/Map/Map";

import styles from "./AppLayout.module.css";
import Sidebar from "../../Components/Sidebar/Sidebar";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
