import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/Home";
import DashboardPage from "./pages/Dashboard";
import TablesPage from "./pages/Tables";
import UserProfile from "./pages/UserProfile";

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
        path: 'dashboard',
        element: <DashboardPage />
      },
      {
        path: 'tables',
        element: <TablesPage />
      },
      {
        path: 'user',
        element: <UserProfile />
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
