import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      switch (error.response.status) {
        case 401:
          //logout()
          break;
        case 403:
          window.location.href = `http://127.0.0.1:5173/verification-needed`;
          break;
        default:
          Promise.reject(error);
      }
    }
  );
}
