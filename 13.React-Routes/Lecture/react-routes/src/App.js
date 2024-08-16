// import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Item from "./pages/Item";

import Home from "./pages/Home";
import "./app.css";

function App() {

  // Method - 1 ### Postdefine Routes ###
  // const router = createBrowserRouter([
  //   {path: "/", element: <Home />},
  //   {path: "/about", element: <About />},
  //   {path: "/item", element: <Item />}
  // ]);

  // Method - 2 ### Predefine Routes ###s
  // const routes = createRoutesFromElements(
  //   <>
  //     <Route path="/" element={<Home />}/>
  //     <Route path="/about" element={<About />}/>
  //     <Route path="/item" element={<Item />}/>
  //   </>
  // )
  // const router = createBrowserRouter(routes);

  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <Home />
    </>
  );
}

export default App;
