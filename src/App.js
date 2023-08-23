import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RetaurantBody from "./components/RetaurantBody";
import About from "./components/About";
import Error from "./components/Error";
import { SnackbarProvider } from "notistack";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <RetaurantBody />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>
  },
  {
    path:'/about-us',
    element:<About />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SnackbarProvider>
    <RouterProvider router={router} />
  </SnackbarProvider>
);
