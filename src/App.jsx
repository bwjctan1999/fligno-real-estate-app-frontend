import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from "./Client/pages/LandingPage";
import Login from "./Client/pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/signup" element={<LandingPage/>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/properties" element={<LandingPage/>}/>
          <Route path="/about" element={<LandingPage/>}/>
          <Route path="/property" element={<LandingPage/>}/>
          <Route path="/agents" element={<LandingPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
