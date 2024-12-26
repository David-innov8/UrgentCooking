import { createBrowserRouter } from "react-router-dom";
import { Landing } from "../pages/app/landing/Landing";
import { PropertyDetails } from "../pages/app/propertyDetails/PropertyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/property/:id",
    element: <PropertyDetails />,
  },
  {
    path: "/rent",
    element: <Landing />,
  },
]);

export default router;
