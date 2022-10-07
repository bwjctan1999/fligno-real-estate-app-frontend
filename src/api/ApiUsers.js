import axios from "axios";

const base_url = "http://127.0.0.1:8000/api/users";

export async function GetUser(id) {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.get(`${base_url}/${id}`);
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}

export async function GetAgents() {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.get(
      "http://127.0.0.1:8000/api/users-role/agent"
    );
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}

export async function GetClients() {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.get(
      "http://127.0.0.1:8000/api/users-role/client"
    );
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}

export async function RestoreUser(id) {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.get(`${base_url}/restore/${id}`);
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}

export async function DisableUser(id) {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.delete(`${base_url}/delete/${id}`);
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}
