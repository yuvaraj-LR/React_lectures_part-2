
import { useContext } from "react";
import { totalContext } from "../context/totalContext";
import React from "react";
import styles from "../styles/Total.module.css";
import { itemContext } from "../context/itemContext";

function Navbar() {
  const total = useContext(totalContext);
  const item = useContext(itemContext);
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total.total}</h1>
      <h1>Items: {item.item}</h1>
    </div>
  );
}

export default Navbar;
