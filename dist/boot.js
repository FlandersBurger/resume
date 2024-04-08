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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cluster_1 = __importDefault(require("cluster"));
const os_1 = require("os");
const server_1 = require("./server");
const redis_1 = require("./redis");
const port = process.env.PORT || 3000;
const masterProcess = () => {
    console.log(`Master ${process.pid} is running`);
    const CPUS = (0, os_1.cpus)();
    CPUS.forEach(() => cluster_1.default.fork());
};
const childProcess = () => {
    console.log(`Worker ${process.pid} started and finished`);
    server_1.server.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Server ", process.pid, " listening on", port);
        (0, redis_1.connect)();
    }));
};
if (cluster_1.default.isPrimary) {
    masterProcess();
}
else {
    childProcess();
}
//# sourceMappingURL=boot.js.map