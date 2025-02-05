import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/Home";
import DashboardPage from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";
import TablePage from "./pages/Table";
import RootTables from "./pages/RootTables";
import AuthenticationPage from "./pages/Authentication";
import AuthProvider from "./store/authContext";
import { queryClient } from "./util/http";
import RootDashboard from "./pages/RootDashboard";

/**
 * Defining the routes for the application using React Router.
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />, // Home page
      },
      {
        path: "auth",
        element: <AuthenticationPage />, // Authentication page
      },
      {
        path: "dashboard",
        element: <RootDashboard />, // Root layout for dashboard
        children: [
          {
            path: ":statType",
            element: <DashboardPage />, // Dynamic dashboard page based on statType
          },
        ],
      },
      {
        path: "tables",
        element: <RootTables />, // Root layout for dashboard
        children: [
          {
            path: ":monthId",
            element: <TablePage />, // Dynamic table page based on monthId
          },
        ],
      },
      {
        path: "user",
        element: <UserProfile />, //User profile page
      },
    ],
  },
]);

/**
 * The main App component that wraps the application with global providers.
 * @returns {JSX.Element} The main application component.
 */

function App() {
  return (
    <AuthProvider> {/* Provides authentication context */}
      <QueryClientProvider client={queryClient}> {/* Provides React Query client */}
        <RouterProvider router={router} /> {/* Provides application routing */}
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
