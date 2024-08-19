import { Connection, createConnection } from "mongoose";
import { createTunnel } from "tunnel-ssh";

const connections: { [key: string]: Connection } = {};

export type Db = {
  name: string;
  url: string;
  tunnel?: {
    username: string;
    host: string;
    privateKey: string;
    port: number;
  };
};

const connect = (db: Db) => {
  connections[db.name] = createConnection(db.url, {});
  connections[db.name].on("open", () => {
    console.log(`DB ${db.name} connected`);
  });
};

export const mongoDBs: Db[] = [
  {
    name: "backup",
    url: process.env.MONGO_BACKUP_URL!,
    ...(process.env.MONGO_BACKUP_TUNNEL_HOST && {
      tunnel: {
        username: process.env.MONGO_BACKUP_TUNNEL_USER!,
        host: process.env.MONGO_BACKUP_TUNNEL_HOST,
        privateKey: require("fs").readFileSync(process.env.MONGO_BACKUP_TUNNEL_KEY_PATH),
        port: parseInt(process.env.MONGO_BACKUP_TUNNEL_PORT || "22"),
      },
    }),
  },
  {
    name: "master",
    url: process.env.MONGO_URL!,
    ...(process.env.MONGO_TUNNEL_HOST && {
      tunnel: {
        username: process.env.MONGO_TUNNEL_USER!,
        host: process.env.MONGO_TUNNEL_HOST,
        privateKey: require("fs").readFileSync(process.env.MONGO_TUNNEL_KEY_PATH),
        port: parseInt(process.env.MONGO_TUNNEL_PORT || "22"),
      },
    }),
  },
];

mongoDBs.forEach(async (db: Db) => {
  connect(db);
  if (db.tunnel) {
    await createTunnel({ autoClose: true }, { host: "127.0.0.1", port: 27017 }, db.tunnel, { dstPort: 27017 });
    console.log(`DB tunnel created for DB ${db.name}`);
  }
});

export default connections;
