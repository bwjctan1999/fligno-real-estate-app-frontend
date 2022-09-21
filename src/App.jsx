import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState } from "react";

import AddProperty from "./pages/agent/AddProperty";
import AgentDashboard from "./pages/agent/AgentDashboard";
import AgentProperties from "./pages/agent/AgentProperties";
import AgentPropertyDetails from "./pages/agent/AgentPropertyDetails";
import AgentLayout from "./pages/agent/AgentLayout";
import EditProperty from "./pages/agent/EditProperty";
import Properties from "./pages/client/Properties";
import Clients from "./pages/agent/Clients";
import Agents from "./pages/client/Agents";

import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProperties from "./pages/admin/AdminProperties";
import AdminPropertyDetails from "./pages/admin/AdminPropertyDetails";
import AdminEditRole from "./pages/admin/AdminEditRole";
import AdminRoles from "./pages/admin/AdminRoles";
import AdminUsersList from "./pages/admin/AdminUsersList";

import Login from "./pages/client/Login";
import ClientLayout from "./pages/client/ClientLayout";
import AboutPage from "./pages/client/AboutPage";
import LandingPage from "./pages/client/LandingPage";
import PropertyDetails from "./pages/client/PropertyDetails";
import Subscription from "./pages/client/Subscription";
import SignUp from "./pages/client/SignUp";
import PaymentMethod from "./pages/client/PaymentMethod";

import FourZeroFour from "./pages/general/FourZeroFour";
import RouteList from "./routes";

function App() {
  const [user, setUser] = useState({ user: null, userType: null });

  return (
    <div>
      <BrowserRouter>
        <RouteList />
      </BrowserRouter>
    </div>
  );
}

export default App;
