import axios from "axios";

export async function CreateSubscription(data) {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.post(
      `http://127.0.0.1:8000/api/admin/create-subscription`,
      data
    );
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}
