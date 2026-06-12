import axios, { AxiosInstance } from "axios";
import https from "https";
let instance: AxiosInstance;

export default () => {
  if (!instance) {
    instance = axios.create({
      timeout: 15000,
      httpsAgent: new https.Agent({ keepAlive: true }),
      headers: { "Content-Type": "application/xml" },
    });
  }

  return instance;
};
