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

import routes from "./routes";
import FourZeroFour from "./pages/general/FourZeroFour";

function App() {
  const [user, setUser] = useState({ user: null, userType: null });

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="*" element={<FourZeroFour />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login setUser={setUser} />} />
            <Route path="subscription" element={<Subscription />} />
            <Route path="waiting-payment" element={<PaymentMethod />} />
            <Route path="properties" element={<Properties />} />
            <Route path="agents" element={<Agents />} />
            <Route path="about" element={<AboutPage />} />

            <Route path="property" element={<PropertyDetails />} />
            <Route path="property/:propertyId" element={<PropertyDetails />} />
          </Route>

          <Route path="/agent" element={<AgentLayout />}>
            <Route index element={<AgentDashboard />} />
            <Route path="clients" element={<Clients />} />
            <Route path="add-property" element={<AddProperty />} />
            <Route path="properties" element={<AgentProperties />} />
            <Route path="property" element={<AgentPropertyDetails />} />
            <Route path="edit-property" element={<EditProperty />} />
            <Route
              path="edit-property/:propertyId"
              element={<EditProperty />}
            />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="roles" element={<AdminRoles />} />
            <Route path="properties" element={<AdminProperties />} />
            <Route path="users" element={<AdminUsersList />} />

            <Route path="edit-role" element={<AdminEditRole />} />
            <Route path="edit-role/:roleId" element={<AdminEditRole />} />

            <Route path="property" element={<AdminPropertyDetails />} />
            <Route
              path="property/:propertyId"
              element={<AdminPropertyDetails />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
