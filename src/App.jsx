import React from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { RouterProvider, createBrowserRouter } from "react-router";
import { AboutPage } from './pages/AboutPage';


export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,

      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    }, {
      path: 'about-us',
      element: <AboutPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}