import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/Home";
import DashboardPage from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";
import TablePage from "./pages/Table";
import RootTables from "./pages/RootTables";
import AuthenticationPage from "./pages/Authentication";
import AuthProvider from "./store/authContext";

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
        element: <DashboardPage />,
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
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
