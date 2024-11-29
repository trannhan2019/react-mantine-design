import { createBrowserRouter, RouterProvider } from "react-router";
// import Home from "./pages/home";

import Home from "pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
