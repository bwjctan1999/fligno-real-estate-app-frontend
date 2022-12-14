import axios from "axios";

const base_url = "http://127.0.0.1:8000/api";

export async function GetProperty(id, url) {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.get(`${base_url}/${url}/${id}`);
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}

export async function GetPropertyImage(id) {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.get(`${base_url}/property/${id}`);
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}

export async function SearchProperty(search, url) {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.get(`${base_url}/${url}`, {
      params: {
        search: search,
      },
    });
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}

export async function PostProperty(data) {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.post(`${base_url}/property-create`, data);
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}

export async function RestoreProperty(id) {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.get(`${base_url}/property/restore/${id}`);
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}

export async function DisableProperty(id) {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.delete(`${base_url}/properties/${id}`);
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}

export async function UpdateProperty(id, data) {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.put(`${base_url}/properties/${id}`, data);
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}

export async function RemoveProperty(id) {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.delete(`${base_url}/properties/${id}`);
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}
