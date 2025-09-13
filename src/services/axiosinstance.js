import axios from "axios";

const accountBaseURL = process.env.REACT_APP_ACCOUNT_BASE_URL;
const accountApiKey = process.env.REACT_APP_ACCOUNTS_API_KEY;

export const accountsInstance = axios.create({
  baseURL: accountBaseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
    apiKey: accountApiKey,
  },
});

const onRequest = (request) => {
  const accessToken = JSON.parse(localStorage.getItem("access_token"));
  request.headers.Authorization = `Bearer ${accessToken}` || "";
  return request;
};

const onRequestError = (error) => {
  return Promise.reject(error);
};

const onResponse = (response) => {
  return response;
};

const onResponseError = async (error) => {
  const statusCode = error.response?.status;
  if (statusCode === 401) {
    sessionStorage.clear();
    localStorage.clear();
    setTimeout(() => {
      window.location.href = `/auth`;
    }, 500);
  }

  return Promise.reject(error);
};

accountsInstance.interceptors.request.use(onRequest, onRequestError);
accountsInstance.interceptors.response.use(onResponse, onResponseError);
