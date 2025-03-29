import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import { Landing } from "./pages/Landing/Landing.jsx";
import { Home } from "./pages/Home/Home.jsx";
import "./app.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Wrong Page!</h1>,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
