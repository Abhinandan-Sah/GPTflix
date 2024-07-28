import React from "react";
import Login from "./Login";
import { Browse } from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import WatchMovie from "./WatchMovie";
import MoviePage from "./MoviePage";



export const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/browse/:movieId",
      element: <MoviePage />,
    }
  ]);



  return (
    <div >
      <RouterProvider router={appRouter} />
    </div>
  );
};
