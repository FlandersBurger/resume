import axios from "axios";

const http = axios.create({ baseURL: "/" });

export function setAuthToken(token: string) {
  http.defaults.headers.common["X-Auth"] = token;
}

export function clearAuthToken() {
  delete http.defaults.headers.common["X-Auth"];
}

// Restore token from localStorage on load
const stored = window.localStorage.getItem("token");
if (stored) setAuthToken(stored);

export default http;
