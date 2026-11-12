import axios from "axios";

/** The axios instance every request goes through. The session module sets its auth header. */
const http = axios.create({ baseURL: "/" });

export function setAuthToken(token: string) {
  http.defaults.headers.common["X-Auth"] = token;
}

export function clearAuthToken() {
  delete http.defaults.headers.common["X-Auth"];
}

export default http;
