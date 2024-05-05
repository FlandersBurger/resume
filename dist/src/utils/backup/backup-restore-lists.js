"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const _ = require("underscore");
const moment = require("moment");
const srcList = require("../../../models/tenthings/list")("backup");
const dstList = require("../../../models/tenthings/list")("master");
const backup = () => __awaiter(void 0, void 0, void 0, function* () {
    const existingLists = yield dstList.find({}).select("_id").lean();
    //const missingLists = await srcList.find({ _id: { $nin: existingLists } });
    //console.log(missingLists.map(list => list.name));
    N = 0;
    const listCursor = yield srcList.find({ _id: { $nin: existingLists } }).cursor();
    yield listCursor.eachAsync((list) => __awaiter(void 0, void 0, void 0, function* () {
        N++;
        if (N % 50 === 0)
            console.log(`${N} lists synced`);
        try {
            yield dstList.insertMany([list]);
        }
        catch (e) {
            console.error(`${list._id} - ${list.name}`);
        }
        return Promise.resolve();
    }));
    console.log(`loop all ${N} lists success`);
});
backup();
//module.exports = backup;
//# sourceMappingURL=backup-restore-lists.js.map