import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestaurantBody from "./components/RestaurantBody";
// import About from "./components/About";
import { Provider } from "react-redux";
import Error from "./components/Error";
import Footer from "./components/Footer";
import ProfileClass from "./components/ProfileClass";
import RestaurantMenu from "./components/RestaurantMenu";
import Instamart from "./components/Instamart";
import { lazy, Suspense } from "react";
import { SnackbarProvider } from "notistack";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import store from "./utils/store";

const About = lazy(() => import("./components/About"));

const App = () => {

  const [user, setUser] = useState({
    name: "khaliq ansari",
    email: "thekhaliqansari@gmail.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user,setUser:setUser }}>
      <Header />
      {/* */}
      <Outlet />
      <Footer />
    </UserContext.Provider>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <RestaurantBody />,
      },
      {
        path: "/about-us",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/restaurant-menu/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: <Instamart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SnackbarProvider>
    <RouterProvider router={router} />
  </SnackbarProvider>
);
