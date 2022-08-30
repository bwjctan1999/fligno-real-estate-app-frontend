import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from "./Client/pages/LandingPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/signup" element={<LandingPage/>}/>
          <Route path="/login" element={<LandingPage/>}/>
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
