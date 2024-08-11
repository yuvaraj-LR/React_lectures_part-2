import React from "react";
import styles from "../styles/Total.module.css";
import { itemContext, useCustomHook } from "../itemContext";

function Navbar() {
  const {total, item, handleReset} = useCustomHook();

  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>

      <button className={styles.reset_btn} onClick={() => handleReset()}>Reset</button>
    </div>
  );
}

export default Navbar;
