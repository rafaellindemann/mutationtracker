import { createRoot } from "react-dom/client"
import "./index.css"

import { RouterProvider } from "react-router-dom"
import router from "./router/routes.jsx"
import { GlobalContextProvider } from "./contexts/GlobalContext.jsx"
import { AuthProvider } from "./contexts/AuthContext.jsx"

createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </GlobalContextProvider>
)

