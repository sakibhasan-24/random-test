import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../page/Login";
import Register from "../page/Register";
import Protected from "./Protected";
import Home from "../page/Home";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Navigate to="/dashboard" replace />,
    element:<Home/>
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <Protected>
        <h1>Dashboard</h1>
      </Protected>
    ),
  },
]);

export default router;
