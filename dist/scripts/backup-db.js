"use strict";
const { mongoDBs } = require("../db");
const fs = require("fs");
const moment = require("moment");
const exec = require("child_process").exec;
const masterDB = mongoDBs.find((db) => db.name === "master");
const backup = async () => {
    const newBackupPath = `/var/database-backup/mongodump-${moment().format("DD-MMM-YYYY")}`;
    const oldBackupPath = `/var/database-backup/mongodump-${moment().subtract(7, "days").format("DD-MMM-YYYY")}`;
    const cmd = `mongodump --uri ${masterDB.url} --out ${newBackupPath}`;
    console.log(cmd);
    await exec(cmd);
    if (fs.existsSync(oldBackupPath)) {
        await exec("rm -rf " + oldBackupPath);
    }
};
module.exports = backup;
//# sourceMappingURL=backup-db.js.map