import AddSchool from "./pages/AddSchool";
import Home from "./pages/Home";
import Schools from "./pages/Schools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "schools",
      element: <Schools />,
    },
    {
      path: "add-school",
      element: <AddSchool />,
    },
  ]);

  return <>
    <RouterProvider router={router} />
    <ToastContainer position="top-center" autoClose={1000} />
  </>;
}

export default App;
