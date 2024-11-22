import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage, LandingPage, PersonaPage, AppLayout, SharedRegionsDashboardPage, SharedDistrictsDashboardPage } from './pages';

const prodev_router = createBrowserRouter([
  {
    "path": "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />
  },
  {
    "path": "/persona",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/persona/policy-maker",
        element: <PersonaPage />,
      },
      {
        path: "/persona/investor",
        element: <PersonaPage />,
      },
      {
        path: "/persona/ngo",
        element: <PersonaPage />,
      },
    ]
  },
  {
    "path": "/shared-dashboard/regions",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <SharedRegionsDashboardPage />
      }
    ]
  },
  {
    "path": "/shared-dashboard/districts",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <SharedDistrictsDashboardPage />
      }
    ]
  },
]);

const App = () => {
  return (
    <RouterProvider router={prodev_router} />
  )
}

export default App