// routes/AppRoutes.tsx
import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import MainLayout from "../layouts/MainLayout ";
const Sidebar = lazy(() => import("../pages/Sidebar"));
const Login = lazy(() => import("../pages/Login/page"));
export const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [{ path: "", element: <Sidebar /> }],
  },
  {
    element: <MainLayout />,
    children: [{ path: "/Login", element: <Login /> }],
  },
];
