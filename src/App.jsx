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

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "auth",
        element: <AuthenticationPage />,
      },
      {
        path: "dashboard",
        element: <RootDashboard />,
        children: [
          {
            path: ":statType",
            element: <DashboardPage />,
          }
        ]
      },
      {
        path: "tables",
        element: <RootTables />,
        children: [
          {
            path: ":monthId",
            element: <TablePage />,
          },
        ],
      },
      {
        path: "user",
        element: <UserProfile />,
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
