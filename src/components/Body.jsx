import React from "react";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const Body = () => {
  const appRouter = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Singup />,
    // },
    {
      path: "/",
      element: <Login />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
