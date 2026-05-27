"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  (function () {
    var ownKeys = function (o) {
      ownKeys =
        Object.getOwnPropertyNames ||
        function (o) {
          var ar = [];
          for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
          return ar;
        };
      return ownKeys(o);
    };
    return function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null)
        for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
      __setModuleDefault(result, mod);
      return result;
    };
  })();
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importStar(require("../../../client/services/http"));
describe("setAuthToken", () => {
  afterEach(() => {
    (0, http_1.clearAuthToken)();
  });
  it("sets the X-Auth header on the http instance", () => {
    (0, http_1.setAuthToken)("my-token");
    expect(http_1.default.defaults.headers.common["X-Auth"]).toBe("my-token");
  });
  it("overwrites a previously set token", () => {
    (0, http_1.setAuthToken)("first");
    (0, http_1.setAuthToken)("second");
    expect(http_1.default.defaults.headers.common["X-Auth"]).toBe("second");
  });
});
describe("clearAuthToken", () => {
  it("removes the X-Auth header", () => {
    (0, http_1.setAuthToken)("to-remove");
    (0, http_1.clearAuthToken)();
    expect(http_1.default.defaults.headers.common["X-Auth"]).toBeUndefined();
  });
  it("is safe to call when no token is set", () => {
    expect(() => (0, http_1.clearAuthToken)()).not.toThrow();
  });
});
//# sourceMappingURL=http.test.js.map
