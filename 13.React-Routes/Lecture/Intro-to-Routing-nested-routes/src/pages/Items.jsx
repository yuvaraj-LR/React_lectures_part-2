import { Link } from "react-router-dom";
import { ITEM } from "../data/item.data";

function Items() {
  return (
    <>
      <main>
        <h1>Items Page</h1>
      </main>

      <ul>
        {ITEM.map((item, i) => (
          <li>
            <Link to={`/items/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>

      {/* <ul>
        <li>
          <Link to="/items/item-1">Item - 1</Link>
        </li>
        <li>
          <Link to="/items/item-2">Item - 2</Link>
        </li>
        <li>
          <Link to="/items/item-3">Item - 3</Link>
        </li>
      </ul> */}
    </>
  );
}

export default Items;
