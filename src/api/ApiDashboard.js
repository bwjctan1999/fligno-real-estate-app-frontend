import axios from "axios";

const base_url = "http://127.0.0.1:8000/api/agent/dashboard";

export async function GetDashboardInfo() {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.get(`${base_url}`);
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}

export async function GetAdminDashboardInfo() {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.get(
      `http://127.0.0.1:8000/api/admin/dashboard`
    );
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}
