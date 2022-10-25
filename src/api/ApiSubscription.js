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

export async function PostSubscription(id, hash) {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.post(
      `http://127.0.0.1:8000/api/agent/subscription/${id}`
    );
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}

export async function DeleteSubscription() {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.get(
      `http://127.0.0.1:8000/api/agent/subscription-info`
    );
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}

export async function GetUserSubscriptionInfo() {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.get(
      `http://127.0.0.1:8000/api/agent/subscription-info`
    );
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}

export async function ChangeUserSubscription(id) {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.put(
      `http://127.0.0.1:8000/api/agent/subscription/edit/${id}`
    );
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}
