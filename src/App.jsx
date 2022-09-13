import AdminPropertyDetails from "../src/pages/admin/AdminPropertyDetails";
import AddProperty from "./pages/agent/AddProperty";
import AgentDashboard from "./pages/agent/AgentDashboard";
import LandingPage from "./pages/client/LandingPage";
import PropertyDetails from "./pages/agent/PropertyDetails";
import Login from "./pages/agent/Login";
import PaymentMethod from "./pages/agent/PaymentMethod";
import PropertyList from "./pages/agent/PropertyList";
import AgentParent from "./pages/agent/AgentParent";
import SignUp from "./pages/agent/SignUp";
import Subscription from "./pages/agent/Subscription";
import EditProperty from "./pages/agent/EditProperty";
import Clients from "./pages/agent/Clients";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AboutPage from "./pages/client/AboutPage";
import AdminRoles from "./pages/admin/AdminRoles";
import AdminEditRole from "./pages/admin/AdminEditRole";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import routes from "./routes";
import AdminParent from "./pages/admin/AdminParent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/waiting-payment" element={<PaymentMethod />} />
          <Route path="/properties" element={<PropertyList />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/property" element={<PropertyDetails />} />

          <Route path="/agent" element={<AgentParent />}>
            <Route path="dashboard" element={<AgentDashboard />} />
            <Route path="clients" element={<Clients />} />
            <Route path="add-property" element={<AddProperty />} />
            <Route path="edit-property" element={<EditProperty />} />
          </Route>

          <Route path="/admin" element={<AdminParent />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="edit-role" element={<AdminEditRole />} />
            <Route path="property" element={<AdminPropertyDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
