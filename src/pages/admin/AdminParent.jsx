import { Outlet } from "react-router-dom";

import AdminNavbar from "../../components/admin/AdminNavbar";

export default function AdminParent() {
  return (
    <div>
      <AdminNavbar />
      <Outlet />
    </div>
  );
}
