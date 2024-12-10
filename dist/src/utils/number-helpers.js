"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePercentage = exports.makeReadable = void 0;
const makeReadable = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
exports.makeReadable = makeReadable;
const makePercentage = (n, decimals = 2) => `${(n * 100).toFixed(decimals)}%`;
exports.makePercentage = makePercentage;
//# sourceMappingURL=number-helpers.js.map