"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenthingsSearchRoute = void 0;
const models_1 = require("../../../models");
const express_1 = require("express");
exports.tenthingsSearchRoute = (0, express_1.Router)();
exports.tenthingsSearchRoute.get("/list-names/:name", (req, res) => {
    models_1.List.find({ name: { $regex: req.params.name, $options: "i" } })
        .select("_id name")
        .limit(10)
        .lean()
        .then((lists) => {
        res.json(lists);
    });
});
//# sourceMappingURL=search.js.map