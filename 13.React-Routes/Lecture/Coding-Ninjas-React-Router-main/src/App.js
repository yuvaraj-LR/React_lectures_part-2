import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Details from "./pages/app/details/Details";
import Learn from "./pages/app/learn/Learn";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      children: [
        {index: true, element: <Hero />},
        {
          path: "courses",
          children: [
            { index: true, element: <Courses /> },
            { path: ":id", element: <Details /> }
          ]
        },
        {
          path: "learn/:id", 
          children: [
            { index: true, element: <Learn />},
            { path: ":chaperId", element: <Learn />}
          ]
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
