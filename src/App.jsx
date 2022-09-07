import { Route, Routes, BrowserRouter } from "react-router-dom";

import AddProperty from "./Client/pages/AddProperty";
import ClientDashboard from "./Client/pages/ClientDashboard";
import LandingPage from "./Client/pages/LandingPage";
import PropertyDetails from "./Client/pages/PropertyDetails";
import Login from "./Client/pages/Login";
import PaymentMethod from "./Client/pages/PaymentMethod";
import PropertyList from "./Client/pages/PropertyList";
import SignUp from "./Client/pages/SignUp";
import Subscription from "./Client/pages/Subscription";
import EditProfile from "./Client/pages/EditProfile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ClientDashboard />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/waiting-payment" element={<PaymentMethod/>}/>
          <Route path="/properties" element={<PropertyList />} />
          <Route path="/about" element={<LandingPage />} />
          <Route path="/property" element={<PropertyDetails/>} />
          <Route path="/clients" element={<LandingPage />} />
          <Route path="/add-property" element={<AddProperty/>}/>
          <Route path="/edit-profile" element={<EditProfile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
