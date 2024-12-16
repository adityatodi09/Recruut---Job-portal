import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/app-layout'
import LandingPage from './pages/LandingPage'
import MyJobs from './pages/MyJobs'
import SavedJobs from './pages/SavedJobs'
import PostJob from './pages/PostJob'
import JobPage from './pages/JobPage'
import JobListing from './pages/JobListing'
import Onboarding from './pages/Onboarding'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children : [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/my-jobs',
        element: <MyJobs />
      },
      {
        path: '/saved-jobs',
        element: <SavedJobs />
      },
      {
        path: '/post-jobs',
        element: <PostJob />
      },
      {
        path: '/job/:id',
        element: <JobPage />
      },
      {
        path: '/jobs',
        element: <JobListing />
      },
      {
        path: '/onboarding',
        element: <Onboarding />
      },
    ]
  }
])
function App() {
  return <RouterProvider router={router} /> 
}

export default App

