"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribe = exports.publish = exports.redisConnect = void 0;
const redis_1 = require("redis");
const url = process.env.REDISTOGO_URL || "redis://localhost:" + (process.env.REDIS_PORT || "6379");
const client = (0, redis_1.createClient)({ url, password: process.env.REDIS_PASSWORD });
const publisher = (0, redis_1.createClient)({ url, password: process.env.REDIS_PASSWORD });
const subscriber = (0, redis_1.createClient)({ url, password: process.env.REDIS_PASSWORD });
const redisConnect = async () => {
    client.on("error", (error) => {
        console.error(error);
    });
    await client.connect();
    await publisher.connect();
    await subscriber.connect();
    return client;
};
exports.redisConnect = redisConnect;
const publish = async (topic, data) => {
    await publisher.publish(topic, JSON.stringify(data));
};
exports.publish = publish;
const subscribe = async (topic, callback) => {
    await subscriber.subscribe(topic, (message) => {
        callback(JSON.parse(message));
    });
};
exports.subscribe = subscribe;
exports.default = client;
//# sourceMappingURL=queue.js.map