import { Outlet } from "react-router-dom";

import Footer from "../../components/client/Footer";

export default function ClientLayout() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}
