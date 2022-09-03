import { Route, Routes, BrowserRouter } from "react-router-dom";
import ClientDashboard from "./Client/pages/ClientDashboard";
import LandingPage from "./Client/pages/LandingPage";
import Login from "./Client/pages/Login";
import PropertyList from "./Client/pages/PropertyList";
import SignUp from "./Client/pages/SignUp";
import Subscription from "./Client/pages/Subscription";

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
          <Route path="/properties" element={<PropertyList />} />
          <Route path="/about" element={<LandingPage />} />
          <Route path="/property" element={<LandingPage />} />
          <Route path="/agents" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
