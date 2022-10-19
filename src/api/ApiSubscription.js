import axios from "axios";

export async function GetSubscription(data) {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.get(
      `http://127.0.0.1:8000/api/admin/subscription-list`
    );
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}

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

export async function GetSubscriptionForClient() {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.get(
      `http://127.0.0.1:8000/api/subscription-list`
    );
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}

export async function PostSubscription(id, data) {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.post(
      `http://127.0.0.1:8000/api/subscription/${id}`,
      data
    );
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}
