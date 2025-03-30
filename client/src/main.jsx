import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import { Landing } from "./pages/Landing/Landing.jsx";
import { Home } from "./pages/Home/Home.jsx";
import { ModalTest } from "./components/ModalTest/ModalTest.jsx";
import { JobForm } from "./components/JobForm/JobForm.jsx";
import { JobUpdateForm } from "./components/JobUpdateForm/JobUpdateForm.jsx";
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
      {
        path: "/modalTest",
        element: <ModalTest />,
      },
      {
        path: "/jobForm",
        element: <JobForm />,
      },
      {
        path: "/jobUpdateForm",
        element: <JobUpdateForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
