import { createBrowserRouter } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import MutationTracker from "../pages/MutationTracker"
import NotFound from "../pages/NotFound"
import ProtectedRoute from "../components/ProtectedRoute"
import App from "../App"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "app",
        element: <ProtectedRoute />,
        children: [{ index: true, element: <MutationTracker /> }],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
])

export default router
