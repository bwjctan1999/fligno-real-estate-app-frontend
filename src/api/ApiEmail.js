import axios from "axios";

const base_url = "http://127.0.0.1:8000/api/verify";

export async function PostEmail(data) {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    const test = await axios.post(`${base_url}`, data);
    console.log(test);
  } catch (e) {
    resolved.error = e;
  }
}
