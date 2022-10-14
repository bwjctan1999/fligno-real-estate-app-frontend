import axios from "axios";

export async function RequestPasswordChange(email) {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.post(
      "http://127.0.0.1:8000/api/forgot-password",
      email
    );
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}

export async function ChangePassword(data) {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.post(
      "http://127.0.0.1:8000/api/reset-password",
      data
    );
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}
