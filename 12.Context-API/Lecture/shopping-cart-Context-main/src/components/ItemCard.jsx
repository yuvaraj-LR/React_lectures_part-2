import React from "react";
import styles from "../styles/ItemCard.module.css";

import { useContext } from "react";
import { totalContext } from "../context/totalContext";
import { itemContext } from "../context/itemContext";

function ItemCard({ name, price }) {
  const value = useContext(totalContext);
  const item = useContext(itemContext);

  const handleAdd = () => {
    const total = value.total + price;
    value.setTotal(total);
    item .setItem(item.item + 1);
  };

  const handleRemove = () => {
    if(value.total - price > -1) {
      const total = value.total - price;
      value.setTotal(total);
      item.setItem(item.item - 1);
    }
  };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd()}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove()}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
