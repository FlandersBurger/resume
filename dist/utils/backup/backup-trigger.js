"use strict";
const backup = require("./backup-db");
backup()
    .then((result) => {
    console.log("Backup done");
    process.exit(22);
})
    .catch(console.error);
//# sourceMappingURL=backup-trigger.js.map