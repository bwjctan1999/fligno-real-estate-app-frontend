import { useRoutes, Navigate } from "react-router-dom";

import FourZeroFour from "../pages/general/FourZeroFour";
import ForgetPassPage from "../pages/general/ForgetPassPage";
import ResetPassEmail from "../pages/general/ResetPassEmail";
import ResetPassword from "../pages/general/ResetPassword";
import PasswordChanged from "../pages/general/PasswordChanged";
import Index from "../pages/general/AccountInfo/Index";

import LandingPage from "../pages/client/LandingPage";
import Login from "../pages/client/Login";
import SignUp from "../pages/client/SignUp";
import Subscription from "../pages/client/Subscription";
import PaymentMethod from "../pages/client/PaymentMethod";
import ClientPropertyDetails from "../pages/client/ClientPropertyDetails";
import ClientLayout from "../pages/client/ClientLayout";
import Properties from "../pages/client/Properties";
import Agents from "../pages/client/Agents";
import AboutPage from "../pages/client/AboutPage";
import EmailVerification from "../pages/client/EmailVerification";
import VerifyEmail from "../pages/client/VerifyEmail";

import AgentLayout from "../pages/agent/AgentLayout";
import AgentDashboard from "../pages/agent/AgentDashboard";
import Clients from "../pages/agent/Clients";
import AddProperty from "../pages/agent/AddProperty";
import AgentProperties from "../pages/agent/AgentProperties";
import AgentPropertyDetails from "../pages/agent/AgentPropertyDetails";
import UpdateAccountInfo from "../pages/agent/UpdateAccountInfo";
import EditProperty from "../pages/agent/EditProperty";
import AgentSubscriptionPage from "../pages/agent/AgentSubscriptionPage";
import ChangeSubscription from "../pages/agent/AgentSubscription";

import AdminLayout from "../pages/admin/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminRoles from "../pages/admin/AdminRoles";
import AdminProperties from "../pages/admin/AdminProperties";
import AdminUsersList from "../pages/admin/AdminUsersList";
import AdminPermissions from "../pages/admin/AdminPermissions";
import AdminPropertyDetails from "../pages/admin/AdminPropertyDetails";
import AdminSubscription from "../pages/admin/AdminSubscription";
import AdminAddSubscription from "../pages/admin/AdminAddSubscription";
import AdminEditSubscription from "../pages/admin/AdminEditSubscription";
import "../api/auth";
import VerifyNeeded from "../pages/general/VerifyNeeded";

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
          path: "account-info",
          element: <Index />,
        },
        {
          path: "*",
          element: <FourZeroFour />,
        },
        {
          path: "reset-password",
          element: <ForgetPassPage />,
        },
        {
          path: "check-your-email",
          element: <ResetPassEmail />,
        },
        {
          path: "forgot-password",
          element: <ResetPassword />,
        },
        {
          path: "password-changed",
          element: <PasswordChanged />,
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
          element: <ClientPropertyDetails />,
        },
        {
          path: "verification",
          element: <VerifyEmail />,
        },
        {
          path: "verify",
          element: <EmailVerification />,
        },
        {
          path: "verification-needed",
          element: <VerifyNeeded />,
        },
      ],
    },

    //Agent Routes
    {
      path: "/agent",
      element:
        localStorage.getItem("user_role") != "agent" ? (
          <Navigate to="/" />
        ) : (
          <AgentLayout />
        ),
      children: [
        {
          path: "subscription",
          element: <Subscription />,
        },
        {
          index: true,
          element: <AgentDashboard />,
        },
        {
          path: "account-info",
          element: <Index />,
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
          path: "edit-property/:propertyid",
          element: <EditProperty />,
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
          path: "update-account",
          element: <UpdateAccountInfo />,
        },
        {
          path: "agent-subscription",
          element: <AgentSubscriptionPage />,
        },
        {
          path: "change-subscription",
          element: <ChangeSubscription />,
        },
      ],
    },

    //Admin Routes
    {
      path: "/admin",
      element:
        localStorage.getItem("user_role") != "admin" ? (
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
          path: "permissions/:userid",
          element: <AdminPermissions />,
        },
        {
          path: "property/:propertyid",
          element: <AdminPropertyDetails />,
        },
        {
          path: "subscription",
          element: <AdminSubscription />,
        },
        {
          path: "add-subscription",
          element: <AdminAddSubscription />,
        },
        {
          path: "edit-subscription",
          element: <AdminEditSubscription />,
        },
      ],
    },
  ]);

  return routes;
}
