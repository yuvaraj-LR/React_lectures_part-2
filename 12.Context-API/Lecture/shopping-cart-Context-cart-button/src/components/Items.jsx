import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import itemData from "../data/itemData";
import CartModal from "./CartModal";
import { useValue } from "../itemContext";

function Items() {
  const {toggle, setToggle} = useValue();

  return (
    <div className={styles.wrapper}>
      {itemData.map((item) => (
        <ItemCard
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
        />
      ))}

      {toggle ? <CartModal /> : ""}

    </div>
  );
}

export default Items;
