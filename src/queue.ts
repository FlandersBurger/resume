import { createClient } from "redis";

const url = process.env.REDISTOGO_URL || "redis://localhost:" + process.env.REDIS_PORT;
const client = createClient({ url, password: process.env.REDIS_PASSWORD });

export const redisConnect = async () => {
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
