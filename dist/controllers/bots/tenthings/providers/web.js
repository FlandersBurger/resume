"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.web = void 0;
exports.web = {
    newRound: (game, list) => {
        console.log("New round started", game._id, list.name);
    },
    newList: (game) => {
        console.log("New list created", game.list.name);
    },
};
//# sourceMappingURL=web.js.map