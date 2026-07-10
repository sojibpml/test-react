import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes/AppRoutes";
import "./index.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
const router = createHashRouter(routes);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={router} />
  </Suspense>,
);
