// @ts-ignore
import { createClient } from "redis";

const config = require("@/config");
const url = process.env.REDISTOGO_URL || "redis://localhost:" + config.redis.port;
const client = createClient({ url, password: config.redis.password });

export const connect = async () => {
  /*
  const client = process.env.NODE_ENV === 'development' ? redis.createClient({url}) : redis.createClient({
    path: '/var/run/redis/redis.sock'
  });
  */
  client.on("error", (error: Error) => {
    console.error(error);
  });
  await client.connect();
  return client;
};

export const publish = async (topic: string, data: object) => {
  client.publish(topic, JSON.stringify(data));
};

export const subscribe = async (topic: string, callback: Function) => {
  client.subscribe(topic, (message: string) => {
    callback(JSON.parse(message));
  });
};

export default client;
