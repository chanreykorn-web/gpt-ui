import React from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { RouterProvider, createBrowserRouter } from "react-router";
import { AboutPage } from './pages/AboutPage';
import { SerivcePage } from './pages/SerivcePage';
import { ProductPage } from './pages/ProductPage';
import { ProjectPage } from './pages/ProjectPage';
import { NewPage } from './pages/NewPage';


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
    },
    {
      path: 'about-us',
      element: <AboutPage />,
    },
    {
      path: 'service',
      element: <SerivcePage />,
    },
    {
      path: 'products',
      element: <ProductPage />,
    },
    {
      path: 'projects',
      element: <ProjectPage />,
    },
    {
      path: 'new',
      element: <NewPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}