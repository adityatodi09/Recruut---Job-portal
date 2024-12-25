import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/app-layout";
import LandingPage from "./pages/LandingPage";
import MyJobs from "./pages/MyJobs";
import SavedJobs from "./pages/SavedJobs";
import PostJob from "./pages/PostJob";
import JobPage from "./pages/JobPage";
import JobListing from "./pages/JobListing";
import Onboarding from "./pages/Onboarding";
import { ThemeProvider } from "./components/theme-provider";
import ProtectedRoute from "./components/protected-route";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/my-jobs",
        element: 
        (<ProtectedRoute>
          <MyJobs />
        </ProtectedRoute>),
        
      },
      {
        path: "/saved-jobs",
        element: 
        (<ProtectedRoute>
          <SavedJobs />
        </ProtectedRoute>),
      },
      {
        path: "/post-jobs",
        element: 
        (<ProtectedRoute>
          <PostJob />
        </ProtectedRoute>),
      },
      {
        path: "/job/:id",
        element: 
        (<ProtectedRoute>
          <JobPage />
        </ProtectedRoute>),
      },
      {
        path: "/jobs",
        element: 
        (<ProtectedRoute>
          <JobListing />
        </ProtectedRoute>),
      },
      {
        path: "/onboarding",
        element: 
        (<ProtectedRoute>
          <Onboarding />
        </ProtectedRoute>),
      },
    ],
  },
]);
function App() {
  return(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
  </ThemeProvider>
  );
}

export default App;
