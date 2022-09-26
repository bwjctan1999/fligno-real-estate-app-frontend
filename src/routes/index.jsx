import { useRoutes, Navigate } from "react-router-dom";

import FourZeroFour from "../pages/general/FourZeroFour";

import LandingPage from "../pages/client/LandingPage";
import Login from "../pages/client/Login";
import SignUp from "../pages/client/SignUp";
import Subscription from "../pages/client/Subscription";
import PaymentMethod from "../pages/client/PaymentMethod";
import PropertyDetails from "../pages/client/PropertyDetails";
import ClientLayout from "../pages/client/ClientLayout";
import Properties from "../pages/client/Properties";
import Agents from "../pages/client/Agents";
import AboutPage from "../pages/client/AboutPage";
import VerifyEmail from "../pages/client/VerifyEmail";

import AgentLayout from "../pages/agent/AgentLayout";
import AgentDashboard from "../pages/agent/AgentDashboard";
import Clients from "../pages/agent/Clients";
import AddProperty from "../pages/agent/AddProperty";
import AgentProperties from "../pages/agent/AgentProperties";
import AgentPropertyDetails from "../pages/agent/AgentPropertyDetails";
import EditProperty from "../pages/agent/EditProperty";

import AdminLayout from "../pages/admin/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminRoles from "../pages/admin/AdminRoles";
import AdminProperties from "../pages/admin/AdminProperties";
import AdminUsersList from "../pages/admin/AdminUsersList";
import AdminEditRole from "../pages/admin/AdminEditRole";
import AdminPropertyDetails from "../pages/admin/AdminPropertyDetails";

export default function RouteList() {
  let routes = useRoutes([
    //Client Routes
    {
      path: "/",
      element: <ClientLayout />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: "*",
          element: <FourZeroFour />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "subscription",
          element: <Subscription />,
        },
        {
          path: "awaiting-payment",
          element: <PaymentMethod />,
        },
        {
          path: "agents",
          element: <Agents />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "properties",
          element: <Properties />,
        },
        {
          path: "properties/:propertyid",
          element: <PropertyDetails />,
        },
        {
          path: "verify",
          element: <VerifyEmail />,
        },
      ],
    },

    //Agent Routes
    {
      path: "/agent",
      element:
        localStorage.getItem("user_role") != 2 ? (
          <Navigate to="/" />
        ) : (
          <AgentLayout />
        ),
      children: [
        {
          index: true,
          element: <AgentDashboard />,
        },
        {
          path: "clients",
          element: <Clients />,
        },
        {
          path: "add-property",
          element: <AddProperty />,
        },
        {
          path: "properties",
          element: <AgentProperties />,
        },
        {
          path: "properties/:propertyid",
          element: <AgentPropertyDetails />,
        },
        {
          path: "edit-property/:propertyid",
          element: <EditProperty />,
        },
      ],
    },

    //Admin Routes
    {
      path: "/admin",
      element:
        localStorage.getItem("user_role") != 1 ? (
          <Navigate to="/" />
        ) : (
          <AdminLayout />
        ),
      children: [
        {
          index: true,
          element: <AdminDashboard />,
        },
        {
          path: "roles",
          element: <AdminRoles />,
        },
        {
          path: "properties",
          element: <AdminProperties />,
        },
        {
          path: "users",
          element: <AdminUsersList />,
        },
        {
          path: "edit-role/:userid",
          element: <AdminEditRole />,
        },
        {
          path: "property/:propertyid",
          element: <AdminPropertyDetails />,
        },
      ],
    },
  ]);

  return routes;
}
