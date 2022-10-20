import axios from "axios";

export async function RegisterAccount(data) {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.post(
      "http://localhost:8000/api/register",
      data
    );
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}
