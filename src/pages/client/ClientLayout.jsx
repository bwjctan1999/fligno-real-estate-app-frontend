import { Outlet } from "react-router-dom";
import ClientNavbar from "../../components/client/ClientNavbar";

import Footer from "../../components/client/Footer";

export default function ClientLayout() {
  return (
    <div>
      <ClientNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}
