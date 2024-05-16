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
exports.mongoDBs = void 0;
const mongoose_1 = require("mongoose");
const tunnel_ssh_1 = require("tunnel-ssh");
const connections = {};
exports.mongoDBs = [
    Object.assign({ name: "backup", url: process.env.MONGO_BACKUP_URL }, (process.env.MONGO_BACKUP_TUNNEL_HOST && {
        tunnel: {
            username: process.env.MONGO_BACKUP_TUNNEL_USER,
            host: process.env.MONGO_BACKUP_TUNNEL_HOST,
            privateKey: require("fs").readFileSync(process.env.MONGO_BACKUP_TUNNEL_KEY_PATH),
            port: parseInt(process.env.MONGO_BACKUP_TUNNEL_PORT || "22"),
        },
    })),
    Object.assign({ name: "master", url: process.env.MONGO_URL }, (process.env.MONGO_TUNNEL_HOST && {
        tunnel: {
            username: process.env.MONGO_TUNNEL_USER,
            host: process.env.MONGO_TUNNEL_HOST,
            privateKey: require("fs").readFileSync(process.env.MONGO_TUNNEL_KEY_PATH),
            port: parseInt(process.env.MONGO_TUNNEL_PORT || "22"),
        },
    })),
];
const connect = (db) => {
    connections[db.name] = (0, mongoose_1.createConnection)(db.url, {});
    connections[db.name].on("open", () => {
        console.log(`DB ${db.name} connected`);
    });
};
exports.mongoDBs.forEach((db) => __awaiter(void 0, void 0, void 0, function* () {
    connect(db);
    if (db.tunnel) {
        yield (0, tunnel_ssh_1.createTunnel)({ autoClose: true }, { host: "127.0.0.1", port: 27017 }, db.tunnel, { dstPort: 27017 });
        console.log(`DB tunnel created for DB ${db.name}`);
    }
}));
exports.default = connections;
//# sourceMappingURL=db.js.map