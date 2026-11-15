/** Logs only when DEBUG_TENTHINGS=true: for per-guess and per-player lines that would swamp production logs. */
export const debugLog = (...args: unknown[]) => {
  if (process.env.DEBUG_TENTHINGS === "true") console.log(...args);
};
