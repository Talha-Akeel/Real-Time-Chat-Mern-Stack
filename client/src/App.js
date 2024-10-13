import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/chats",
      element: <Chat />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
