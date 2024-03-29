const express = require("express");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const websocket = require("./websockets");
const prototypes = require("./prototypes");
const http = require("http");
require("dotenv").config();

const serviceAccount = require("./keys/resume-172205-firebase-adminsdk-r34t7-0028c702be.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://resume-172205.firebaseio.com",
});

const app = express();
app.use(bodyParser.json({ limit: "5mb" }));

app.use(require("./auth"));
app.use("/api/users", require("./controllers/api/users"));
app.use("/api/posts", require("./controllers/api/posts"));
app.use("/api/categories", require("./controllers/api/categories"));
app.use("/api/email", require("./controllers/api/email"));
app.use("/api/games", require("./controllers/api/games"));
app.use("/api/tenthings", require("./controllers/api/tenthings"));
app.use("/api/tenthings/lists", require("./controllers/api/tenthings/lists"));
app.use("/api/files", require("./controllers/api/files"));
/*
app.use(logger('dev', {
  skip: (req, res) => {
    console.log(req.method, req.url);
    return req.method.indexOf('/bots/tenthings') > -1;
  }
}));
*/
app.use("/bots/tenthings", require("./controllers/bots/tenthings/main"));

app.use(require("./controllers/static"));
/*
app.use((req, res) => {
  let buffs = [];
  req.on('data', (chunk) => {
    buffs.push(chunk);
  });
  req.on('end', () => {
    res.write(Buffer.concat(buffs));
    res.end();
  });
});
*/
const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, function () {
  console.log("Server ", process.pid, " listening on", port);
});

/*
var server = app.listen(8080, function () {
  console.log('Server Listening at http://162.243.132.240 on', 8080);
})
*/
websocket.connect(server);
