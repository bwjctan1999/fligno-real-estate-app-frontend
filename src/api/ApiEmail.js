import axios from "axios";

const base_url = "http://127.0.0.1:8000/api/verify";

export async function PostEmail(data) {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.post(`${base_url}`, data);
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}
