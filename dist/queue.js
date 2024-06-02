"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribe = exports.publish = exports.redisConnect = void 0;
const redis_1 = require("redis");
const url = process.env.REDISTOGO_URL || "redis://localhost:" + (process.env.REDIS_PORT || "6379");
const client = (0, redis_1.createClient)({ url, password: process.env.REDIS_PASSWORD });
const publisher = (0, redis_1.createClient)({ url, password: process.env.REDIS_PASSWORD });
const subscriber = (0, redis_1.createClient)({ url, password: process.env.REDIS_PASSWORD });
const redisConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    /*
    const client = process.env.NODE_ENV === 'development' ? redis.createClient({url}) : redis.createClient({
      path: '/var/run/redis/redis.sock'
    });
    */
    client.on("error", (error) => {
        console.error(error);
    });
    yield client.connect();
    yield publisher.connect();
    yield subscriber.connect();
    return client;
});
exports.redisConnect = redisConnect;
const publish = (topic, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield publisher.publish(topic, JSON.stringify(data));
});
exports.publish = publish;
const subscribe = (topic, callback) => __awaiter(void 0, void 0, void 0, function* () {
    yield subscriber.subscribe(topic, (message) => {
        callback(JSON.parse(message));
    });
});
exports.subscribe = subscribe;
exports.default = client;
//# sourceMappingURL=queue.js.map