import AddSchool from "./pages/AddSchool";
import Home from "./pages/Home";
import Schools from "./pages/Schools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

  return <RouterProvider router={router} />;
}

export default App;
