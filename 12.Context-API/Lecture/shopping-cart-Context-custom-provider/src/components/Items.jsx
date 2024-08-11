import data from "../data/itemData";
import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";

function Items() {
  return (
    <div className={styles.container}>
      {data.map((item, i) => (
        <div className={styles.wrapper} key={item.id}>
          <ItemCard name={item.name} price={item.price} />
        </div>
      ))}
    </div>
  );
}

export default Items;