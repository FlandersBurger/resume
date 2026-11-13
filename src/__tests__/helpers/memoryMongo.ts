import os from "os";
import mongoose, { Connection } from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server-core";

/**
 * Same major version as production. Downloaded once per machine by the server tests' global setup
 * (downloadMongo.ts), then reused.
 */
export const MONGO_VERSION = "8.0.26";

/** Generous, in case the binary is still being fetched (it should already be, by the global setup). */
export const MEMORY_MONGO_TIMEOUT = 300_000;

/**
 * A throwaway MongoDB for tests that need real query and aggregation behaviour.
 * Call from beforeAll (with MEMORY_MONGO_TIMEOUT) and stop() in afterAll.
 */
export const startMemoryMongo = async (): Promise<{ conn: Connection; stop: () => Promise<void> }> => {
  const conn = mongoose.createConnection();
  const { stop } = await openOnMemoryMongo(conn);
  return { conn, stop };
};

/**
 * Open an existing, not yet opened connection on a throwaway MongoDB. Use it to run the app's
 * real models in a test: mock `@root/db` with `{ master: mongoose.createConnection() }` (the
 * models register on it when imported), then open that connection here in beforeAll.
 */
export const openOnMemoryMongo = async (conn: Connection): Promise<{ stop: () => Promise<void> }> => {
  const server = await MongoMemoryServer.create({ binary: { version: MONGO_VERSION } });
  // The driver loads `os` with a dynamic import(), which Jest's VM sandbox rejects without
  // --experimental-vm-modules; the handshake then goes out without driver metadata and the
  // server refuses it. Handing the module in directly skips that import.
  await conn.openUri(server.getUri(), { runtimeAdapters: { os } } as mongoose.ConnectOptions);
  return {
    stop: async () => {
      await conn.close();
      await server.stop();
    },
  };
};
