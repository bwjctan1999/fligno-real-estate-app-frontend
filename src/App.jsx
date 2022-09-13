import { Route, Routes, BrowserRouter } from "react-router-dom";

import AddProperty from "./pages/agent/AddProperty";
import AgentDashboard from "./pages/agent/AgentDashboard";
import PropertyDetails from "./pages/agent/PropertyDetails";
import Login from "./pages/agent/Login";
import PaymentMethod from "./pages/agent/PaymentMethod";
import PropertyList from "./pages/agent/PropertyList";
import AgentLayout from "./pages/agent/AgentLayout";
import SignUp from "./pages/agent/SignUp";
import Subscription from "./pages/agent/Subscription";
import EditProperty from "./pages/agent/EditProperty";
import Clients from "./pages/agent/Clients";

import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminPropertyDetails from "../src/pages/admin/AdminPropertyDetails";
import AdminEditRole from "./pages/admin/AdminEditRole";
import AdminRoles from "./pages/admin/AdminRoles";

import ClientLayout from "./pages/client/ClientLayout";
import AboutPage from "./pages/client/AboutPage";
import LandingPage from "./pages/client/LandingPage";

import routes from "./routes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/waiting-payment" element={<PaymentMethod />} />
            <Route path="/properties" element={<PropertyList />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/property" element={<PropertyDetails />} />
          </Route>

          <Route path="/agent" element={<AgentLayout />}>
            <Route index element={<AgentDashboard />} />
            <Route path="clients" element={<Clients />} />
            <Route path="add-property" element={<AddProperty />} />
            <Route path="edit-property" element={<EditProperty />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="edit-role" element={<AdminEditRole />} />
            <Route path="property" element={<AdminPropertyDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
