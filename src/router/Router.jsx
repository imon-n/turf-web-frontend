import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Contact from "../pages/Contact/Contact";
import AboutPage from "../pages/About/AboutPage";
import BookASlot from "../pages/BookASlot/BookASlot";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoute from "../routes/PrivateRoute";
import AdminRoute from "../routes/AdminRoute";
import TurfAuthorRoutes from "../routes/TurfAuthorRoutes";
import Dashboard from "../pages/Dashboard/Dashboard";
import Turfs from "../pages/Turfs/turfs";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/about",
        Component: AboutPage,
      },
      {
        path: "/turfs",
        Component: Turfs,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/book-slot",
        element: (
          <PrivateRoute>
            <BookASlot />
          </PrivateRoute>
        ),
      },
      {
        path: "/book-slot/:turfId",
        element: (
          <PrivateRoute>
            <BookASlot />
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <h1>Admin Only Page</h1>
      </AdminRoute>
    ),
  },
  {
    path: "/turf-author",
    element: (
      <TurfAuthorRoutes>
        <h1>Turf Author Only Page</h1>
      </TurfAuthorRoutes>
    ),
  },
  {
    path: "/error",
    Component: ErrorPage,
  },
]);

export default router;
