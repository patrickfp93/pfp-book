import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import ErrorPage from "./components/App/pages/ErrorPage";
import HomePage from "./components/App/pages/HomePage/index.tsx";
import ContactPage from "./components/App/pages/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage/>,
        },
        {
          path: "/contact",
          element: <ContactPage/>,
        },
      ],
    },
    
]);

export default router;