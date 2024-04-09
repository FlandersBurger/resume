import { Connection, createConnection } from "mongoose";
import { createTunnel } from "tunnel-ssh";
const config = require("@root/config");
const connections: { [key: string]: Connection } = {};

export interface IDb {
  name: string;
  url: string;
  tunnel?: {
    username: string;
    host: string;
    privateKey: string;
    port: number;
  };
}

const connect = (db: IDb) => {
  connections[db.name] = createConnection(db.url, {});
  connections[db.name].on("open", () => {
    console.log(`DB ${db.name} connected`);
  });
};

config.mongoDBs.forEach(async (db: IDb) => {
  connect(db);
  if (db.tunnel) {
    await createTunnel({ autoClose: true }, { host: "127.0.0.1", port: 27017 }, db.tunnel, { dstPort: 27017 });
    console.log(`DB tunnel created for DB ${db.name}`);
  }
});

export default connections;
