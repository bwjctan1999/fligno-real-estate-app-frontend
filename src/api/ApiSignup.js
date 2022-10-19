import axios from "axios";

export async function SignUpAccount(data) {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.post(
      "http://localhost:8000/api/register",
      data
    );
  } catch (error) {
    resolved.error = error;
    alert(`Sign Up Failed! ${error.message}`);
  }

  return resolved;
}
