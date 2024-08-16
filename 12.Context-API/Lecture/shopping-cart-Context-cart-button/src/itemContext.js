import { createContext, useState, useContext } from "react";

const itemContext = createContext();

function useValue() {
  const value = useContext(itemContext);
  return value;
}

function CustomItemContext({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [cart, setCart] = useState([]);

  const handleAdd = (prod) => {
    // setTotal(total + price);
    // setItem(item + 1);
    const index = cart.findIndex(x => x.id === prod.id);

    if(index === -1) {
      setCart([...cart, {...prod, qty: 1}]);
      setTotal(total + prod.price);
    } else {
      cart[index].qty++;
      setCart(cart);
      setTotal(total + prod.price);
    }

    console.log(total, "tottlll...");
    setItem(item + 1);
  };

  const handleRemove = (prod) => {
    if (total <= 0) {
      return;
    }

    const index = cart.findIndex(x => x.id === prod.id);

    if(index !== -1) {
      const updatedCart = cart.map((item, i) =>
        i === index ? { ...item, qty: item.qty - 1 } : item
      ).filter(item => item.qty > 0);
  
      setCart(updatedCart);
      setTotal(prevTotal => prevTotal - prod.price);
      setItem(prevItem => prevItem - 1);
    }

    setCart(cart);
  };

  const clear = () => {
    setTotal(0);
    setItem(0);
    setCart([]);
    setToggle(false);
  };

  return (
    <itemContext.Provider value={{ total, item, handleAdd, handleRemove, clear, toggle, setToggle, cart }}>
      {children}
    </itemContext.Provider>
  );
}

export { useValue };
export default CustomItemContext;
