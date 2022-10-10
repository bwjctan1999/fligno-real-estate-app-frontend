import axios from "axios";

export async function PostLogin({ email, password }) {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.post("http://localhost:8000/api/login", {
      email: email,
      password: password,
    });
    localStorage.setItem("user_role", response.data.data.user_role);
    localStorage.setItem("token", response.data.data.Token);
    switch (response.data.data.user_role) {
      case 2:
        navigate("/agent");
        break;
      case 3:
        navigate("/");
        break;
    }
  } catch (error) {
    resolved.error = error;
  }

  return resolved;
}
