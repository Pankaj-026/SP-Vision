import React from "react";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Browser from "./Browser";

const Body = () => {


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Browser />,
    },
  ]);


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
