"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoDBs = void 0;
const chalk_1 = __importDefault(require("chalk"));
const mongoose_1 = require("mongoose");
const tunnel_ssh_1 = require("tunnel-ssh");
const connections = {};
const connect = (db) => {
    connections[db.name] = (0, mongoose_1.createConnection)(db.url, {});
    connections[db.name].on("open", () => {
        console.log(`DB ${chalk_1.default.green(db.name)} connected`);
    });
};
exports.mongoDBs = [
    {
        name: "backup",
        url: process.env.MONGO_BACKUP_URL,
        ...(process.env.MONGO_BACKUP_TUNNEL_HOST && {
            tunnel: {
                username: process.env.MONGO_BACKUP_TUNNEL_USER,
                host: process.env.MONGO_BACKUP_TUNNEL_HOST,
                privateKey: require("fs").readFileSync(process.env.MONGO_BACKUP_TUNNEL_KEY_PATH),
                port: parseInt(process.env.MONGO_BACKUP_TUNNEL_PORT || "22"),
            },
        }),
    },
    {
        name: "master",
        url: process.env.MONGO_URL,
        ...(process.env.MONGO_TUNNEL_HOST && {
            tunnel: {
                username: process.env.MONGO_TUNNEL_USER,
                host: process.env.MONGO_TUNNEL_HOST,
                privateKey: require("fs").readFileSync(process.env.MONGO_TUNNEL_KEY_PATH),
                port: parseInt(process.env.MONGO_TUNNEL_PORT || "22"),
            },
        }),
    },
];
exports.mongoDBs.forEach(async (db) => {
    connect(db);
    if (db.tunnel) {
        await (0, tunnel_ssh_1.createTunnel)({ autoClose: true }, { host: "127.0.0.1", port: 27017 }, db.tunnel, { dstPort: 27017 });
        console.log(`DB tunnel created for DB ${db.name}`);
    }
});
exports.default = connections;
//# sourceMappingURL=db.js.map