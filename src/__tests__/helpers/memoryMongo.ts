import os from "os";
import mongoose, { Connection } from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server-core";

/** Same major version as production. The first run downloads the binary (~2 min), later runs reuse it. */
const MONGO_VERSION = "8.0.26";

/** Generous: covers the one-off binary download on a fresh machine or CI runner. */
export const MEMORY_MONGO_TIMEOUT = 300_000;

/**
 * A throwaway MongoDB for tests that need real query and aggregation behaviour.
 * Call from beforeAll (with MEMORY_MONGO_TIMEOUT) and stop() in afterAll.
 */
export const startMemoryMongo = async (): Promise<{ conn: Connection; stop: () => Promise<void> }> => {
  const server = await MongoMemoryServer.create({ binary: { version: MONGO_VERSION } });
  // The driver loads `os` with a dynamic import(), which Jest's VM sandbox rejects without
  // --experimental-vm-modules; the handshake then goes out without driver metadata and the
  // server refuses it. Handing the module in directly skips that import.
  const conn = await mongoose
    .createConnection(server.getUri(), { runtimeAdapters: { os } } as mongoose.ConnectOptions)
    .asPromise();
  return {
    conn,
    stop: async () => {
      await conn.close();
      await server.stop();
    },
  };
};
