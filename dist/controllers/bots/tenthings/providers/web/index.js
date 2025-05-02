"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.web = void 0;
exports.web = {
    message: () => { },
    newRound: (game, list) => {
        console.log("New round started", game._id, list.name);
    },
    endOfRound: async (game, list) => {
        console.log("Round ended", game._id, list.name);
    },
    newList: (game) => {
        console.log("New list created", game.list.name);
    },
    skipList: (game) => {
        console.log("List skipped", game.list.name);
    },
    dailyScores: () => { },
    dailyWinners: () => { },
    guessed: () => { },
    mainGameMessage: () => { },
    miniGameMessage: () => { },
    miniGameGuessed: () => { },
    tinyGameMessage: () => { },
    tinyGameGuessed: () => { },
};
//# sourceMappingURL=index.js.map