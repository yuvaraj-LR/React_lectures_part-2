import "./styles.css";
import { Actions } from "./components/Actions";
import { Timer } from "./components/Timer";
//  add redux imports here
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  return (
    // Provide the provider here for Timer and actions
      <div className="App">
        <h1>Simple Timer</h1>
        <Provider store={store}> 
            <Timer />
            <Actions />
        </Provider>
      </div>
  );
}
