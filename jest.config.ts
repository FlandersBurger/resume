import type { Config } from "jest";

const config: Config = {
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  modulePathIgnorePatterns: ["/dist/"],
  roots: ["<rootDir>/src"],
  projects: [
    {
      displayName: "server",
      testEnvironment: "node",
      roots: ["<rootDir>/src"],
      testMatch: ["<rootDir>/src/__tests__/utils/**/*.test.ts", "<rootDir>/src/__tests__/server/**/*.test.ts"],
      transform: {
        "^.+\\.tsx?$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.json" }],
      },
      moduleNameMapper: {
        "^@root/(.*)$": "<rootDir>/src/$1",
        "^@utils/(.*)$": "<rootDir>/src/utils/$1",
        "^@models/(.*)$": "<rootDir>/src/models/$1",
        "^@api/(.*)$": "<rootDir>/src/controllers/api/$1",
        "^@tenthings/(.*)$": "<rootDir>/src/controllers/bots/tenthings/$1",
      },
    },
    {
      displayName: "client",
      testEnvironment: "jsdom",
      roots: ["<rootDir>/src"],
      testMatch: ["<rootDir>/src/__tests__/client/**/*.test.{ts,tsx}"],
      transform: {
        "^.+\\.tsx?$": [
          "ts-jest",
          {
            tsconfig: {
              jsx: "react-jsx",
              module: "commonjs",
              moduleResolution: "node",
              types: ["jest", "@testing-library/jest-dom"],
              noUnusedLocals: false,
              noUnusedParameters: false,
            },
          },
        ],
      },
      moduleNameMapper: {
        "^@root/(.*)$": "<rootDir>/src/$1",
        "^@utils/(.*)$": "<rootDir>/src/utils/$1",
        "\\.(css|less|scss|svg|png|jpg|gif)$": "<rootDir>/src/__tests__/__mocks__/fileMock.ts",
      },
      setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    },
  ],
};

export default config;
