import "./App.css";
import { useState } from "react";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import { totalContext } from "./context/totalContext";
import CustomItemContext, { itemContext } from "./context/itemContext";

function App() {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  return (
    <div className="App">
      <h2>Shopping Cart</h2>
      {/* Context API */}
      <totalContext.Provider value={{total, setTotal}}>
        <itemContext.Provider value={{item, setItem}}>
          <Navbar />
          <Items />
        </itemContext.Provider>
      </totalContext.Provider> */}

      {/* Custom context API
      {/* <CustomItemContext>
        <Navbar />
        <Items />
      </CustomItemContext> */}

    </div>
  );
}
export default App;
