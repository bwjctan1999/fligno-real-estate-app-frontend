import axios from "axios";

const base_url = "http://127.0.0.1:8000/api/property";

export async function getProperty(id) {
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

export async function postProperty(data) {
  try {
    const response = await property.post(bas, data);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProperty(id) {
  try {
    const response = await property.delete(`${id}`);
    console.log(response);
  } catch (error) {
    console.log(response);
  }
}
