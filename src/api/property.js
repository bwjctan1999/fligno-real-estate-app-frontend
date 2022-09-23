import axios from "axios";

const property = axios.create({
  baseURL: "http://localhost:8000/api/property",
});

export async function getProperty(url) {
  try {
    const response = await property.get();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export async function postProperty(data) {
  try {
    const response = await property.post("", data);
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
