import "@testing-library/jest-dom";

// Polyfill TextEncoder/TextDecoder for jsdom (required by react-router v7+)
import { TextEncoder, TextDecoder } from "util";
Object.assign(global, { TextEncoder, TextDecoder });
