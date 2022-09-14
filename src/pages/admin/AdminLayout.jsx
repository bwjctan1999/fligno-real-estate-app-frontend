import { Outlet } from "react-router-dom";

import AdminNavbar from "../../components/admin/AdminNavbar";

export default function AdminLayout() {
  return (
    <div>
      <AdminNavbar />
      <Outlet />
    </div>
  );
}
