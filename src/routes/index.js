import LandingPage from "../pages/client/LandingPage";
import Login from "../pages/agent/Login";
import SignUp from "../pages/agent/SignUp";
import AgentDashboard from "../pages/agent/AgentDashboard";
import Subscription from "../pages/agent/Subscription";
import PaymentMethod from "../pages/agent/PaymentMethod";
import PropertyList from "../pages/agent/PropertyList";
import PropertyDetails from "../pages/agent/PropertyDetails";
import Clients from "../pages/agent/Clients";
import AddProperty from "../pages/agent/AddProperty";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import EditProfile from "../pages/agent/EditProfile";

const routes = [
  {
    path: "/",
    element: LandingPage,
  },
  {
    path: "/signup",
    element: SignUp,
  },
  {
    path: "/login",
    element: Login,
  },
  {
    path: "/dashboard",
    element: AgentDashboard,
  },
  {
    path: "/subscription",
    element: Subscription,
  },
  {
    path: "/waiting-payment",
    element: PaymentMethod,
  },
  {
    path: "/properties",
    element: PropertyList,
  },
  {
    path: "/about",
    element: LandingPage,
  },
  {
    path: "/property",
    element: PropertyDetails,
  },
  {
    path: "/clients",
    element: Clients,
  },
  {
    path: "/add-property",
    element: AddProperty,
  },
  {
    path: "/admin-dashboard",
    element: AdminDashboard,
  },
  {
    path: "/edit-profile",
    element: EditProfile,
  },
];

export default routes;
