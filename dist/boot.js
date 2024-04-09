"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cluster_1 = __importDefault(require("cluster"));
const os_1 = require("os");
if (cluster_1.default.isPrimary === true) {
    // .isPrimary with node v16.0.0 or above
    // .isMaster (depreciated) with older version
    const CPUS = (0, os_1.cpus)();
    CPUS.forEach(() => cluster_1.default.fork());
}
else {
    cluster_1.default.setupPrimary({ exec: "./server.ts" });
}
//# sourceMappingURL=boot.js.map