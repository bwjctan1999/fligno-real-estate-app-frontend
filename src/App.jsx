import { Route, Routes, BrowserRouter } from "react-router-dom";

import AddProperty from "./pages/agent/AddProperty";
import AgentDashboard from "./pages/agent/AgentDashboard";
import LandingPage from "./pages/agent/LandingPage";
import PropertyDetails from "./pages/agent/PropertyDetails";
import Login from "./pages/agent/Login";
import PaymentMethod from "./pages/agent/PaymentMethod";
import PropertyList from "./pages/agent/PropertyList";
import SignUp from "./pages/agent/SignUp";
import Subscription from "./pages/agent/Subscription";
import EditProfile from "./pages/agent/EditProfile";
import Clients from "./pages/agent/Clients";
import AdminDashboard from "./pages/admin/AdminDashboard";
import routes from "./routes";
import AdminPropertyList from "./pages/admin/AdminPropertyList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<AgentDashboard />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/waiting-payment" element={<PaymentMethod />} />
          <Route path="/properties" element={<PropertyList />} />
          <Route path="/about" element={<LandingPage />} />
          <Route path="/property" element={<PropertyDetails />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/add-property" element={<AddProperty />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/admin-property-list" element={<AdminPropertyList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
