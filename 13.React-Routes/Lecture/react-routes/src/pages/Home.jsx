import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import About from "./About";
import Item from "./Item";
import Hoome from "./Hoome";
import Navbar from "./Navbar";

function Home() {

    const router = createBrowserRouter([
        {path: "/", element: <Hoome />},
        {path: "/about", element: <About />},
        {path: "/item", element: <Item />}
    ]);

    return (
        <>
            <Navbar />
            <RouterProvider router={router} /> 
        </>
    );
}

export default Home;
