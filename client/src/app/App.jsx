import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    element: <Home />,
    path: "home",
  },
  {
    element: <Login />,
    path: "login",
  },
  {
    element: <Register />,
    path: "register",
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
