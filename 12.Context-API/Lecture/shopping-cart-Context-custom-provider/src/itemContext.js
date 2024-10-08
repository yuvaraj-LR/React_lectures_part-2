import { createContext, useContext, useState } from "react";

const itemContext = createContext();

function useCustomHook() {
  const value = useContext(itemContext);
  return value;
}

function CustomItemContext({children}) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);

  const handleAdd = (price) => {
    setTotal(total + price);
    setItem(item + 1);
  };

  const handleRemove = (price) => {
    if (total <= 0) {
      return;
    }
    setTotal((prevState) => prevState - price);
    setItem(item - 1);
  };

  const handleReset = () => {
    setItem(0);
    setTotal(0);
  }

  return(
    <itemContext.Provider value={{total,item, handleAdd, handleRemove, handleReset}}>
        {children}
    </itemContext.Provider>
  )
}

export { itemContext, useCustomHook };
export default CustomItemContext;
