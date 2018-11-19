var cluster = require('cluster');
var numCpus = require('os').cpus().length;

cluster.setupMaster({exec: __dirname + '/server.js'});

function workerIds() { return Object.keys(cluster.workers); }

function numWorkers() { return workerIds().length; }

var stopping = false;
//Forks workers unless the server is stopping
function forkNewWorkers() {
  if (!stopping) {
    for (var i = numWorkers(); i < numCpus; i++) {
      cluster.fork();
    }
  }
}

var workersToStop = [];
//Stops single workers and waits 60 seconds after disconnect before SIGTERM
function stopWorker(worker) {
  console.log('stopping', worker.process.pid);
  worker.disconnect();
  var killTimer = setTimeout(function () {
    worker.kill();
  }, 60000);
  killTimer.unref();
}

//Next worker queued to restart will disconnect
//This allows the process 60 seconds to finish before sending SIGTERM
function stopNextWorker() {
  var i = workersToStop.pop();
  var worker = cluster.workers[i];
  if (worker) stopWorker(worker);
}

//Stops all workers at once
function stopAllWorkers() {
  stopping = true;
  console.log('stopping all workers');
  workerIds().forEach(function (id) {
    stopWorker(cluster.workers[id]);
  });
}

//Worker is now listening to a port
//Once ready, the next worker can restart
cluster.on('listening', stopNextWorker);

//A worker has disconnected (killed or by processing workersToStop)
cluster.on('disconnect', forkNewWorkers);

//HUP signal sent to master that all workers need to restart sequentially
process.on('SIGHUP', function() {
  console.log('restarting all workers');
  workersToStop = workerIds();
  stopNextWorker();
});

//Kill all workers at once when a terminate signal is received
process.on('SIGTERM', stopAllWorkers);

//Fork off initial workers
forkNewWorkers();
console.log('app master', process.pid, 'booted');
