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
