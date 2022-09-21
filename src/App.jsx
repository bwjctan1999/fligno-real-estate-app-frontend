import { BrowserRouter } from "react-router-dom";
import RouteList from "./routes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <RouteList />
      </BrowserRouter>
    </div>
  );
}

export default App;
