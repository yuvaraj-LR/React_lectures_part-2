import { cardContext } from "./context";
import { useContext } from "react";
//Refactor this to use the useContext hook

export const Card = () => {
  const {text, color} = useContext(cardContext);
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <h3>{text}</h3>
    </div>
  );
};
