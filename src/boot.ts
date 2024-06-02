import cluster from "cluster";
import { cpus } from "os";

if (cluster.isPrimary === true) {
  // .isPrimary with node v16.0.0 or above
  // .isMaster (depreciated) with older version
  const CPUS: any = cpus();
  CPUS.forEach(() => cluster.fork());
} else {
  cluster.setupPrimary({ exec: "./server.ts" });
}
