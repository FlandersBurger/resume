import { MongoBinary } from "mongodb-memory-server-core";
import { MONGO_VERSION } from "./memoryMongo";

/**
 * Jest global setup for the server tests: fetch the MongoDB binary once, before any worker
 * starts. Otherwise every worker that opens a memory MongoDB races to download it on a fresh
 * machine, and the ones left waiting on the download lock can run out their timeout.
 * A no-op when the binary is already there.
 */
export default async function downloadMongo() {
  await MongoBinary.getPath({ version: MONGO_VERSION });
}
