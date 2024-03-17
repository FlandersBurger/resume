import { Connection, createConnection } from "mongoose";
import { createTunnel } from "tunnel-ssh";
const config = require("./config");
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
  console.log(`Connected to DB ${db.name}`);
};

config.mongoDBs.forEach(async (db: IDb) => {
  connect(db);
  if (db.tunnel) {
    await createTunnel({ autoClose: true }, {}, db.tunnel, {
      srcAddr: "127.0.0.1",
      srcPort: 27000,
      dstAddr: "127.0.0.1",
      dstPort: 27017,
    });
    console.log(`DB tunnel created for DB ${db.name}`);
  }
});

export default connections;
