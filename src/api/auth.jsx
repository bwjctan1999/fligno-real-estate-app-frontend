import axios from "axios";

let token = localStorage.getItem("token");

if (token) {
  axios.interceptors.request.use(
    (config) => {
      config.headers.common["Authorization"] = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (401 === error.response.status) {
        // logout();
      } else {
        return Promise.reject(error);
      }
    }
  );
}
