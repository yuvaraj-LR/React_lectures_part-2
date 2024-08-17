import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";
import ErrorPage from "./pages/ErrorPage";
import ItemDetail from "./pages/ItemDetails";
import Navbar from "./components/Navbar";

function App() {
  /**** *** NESTED ROUTES****** */
  // const routes = createRoutesFromElements(
  //   <>
  //     <Route path="/" element={<Navbar />}>
  //       <Route index element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/items" element={<Items />} />
  //     </Route>
  //   </>
  // );
  // const router = createBrowserRouter(routes);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "items", 
          children: [
            { index: true, element: <Items /> },
            { path: ":id", element: <ItemDetail />}
          ] 
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
