angular.module('app')
.controller('LemmingsCtrl', function ($scope, GameSvc) {

  var LEFT = 0;
  var RIGHT = 1;

  var canvas = document.getElementById('lemmings-page');
  var ctx = canvas.getContext('2d');
  var lemmingsImage = new Image();
  lemmingsImage.src = 'lemmings/lemmings.png';
  var lemmings = {};

  var actions = {
    walk: {
      start: [0, 0],
      end: [160, 10],
      steps: 8
    }
  };

  function Lemming() {
    this.position = [canvas.width / 2, canvas.height / 2];
    this.direction = RIGHT;
    this.act = function(action) {
      this.action = actions[action];
      this.cycle = 0;
      this.width = (this.action.end[0] - this.action.start[0]) / this.action.steps;
      this.height = this.action.end[1] - this.action.start[1];
    };
    this.act('walk');
    this.move = function() {
      ctx.save();
      ctx.translate(this.position[0], this.position[1]);
      ctx.translate(this.width / 2, this.height / 2);
      if (this.direction === LEFT) {
        ctx.scale(-1, 1);
      }
      ctx.drawImage(lemmingsImage, this.width * this.cycle, this.action.start[1], this.width, this.height, 0, 0, 80, 40);
      ctx.restore();
      this.cycle++;
      if (this.cycle >= this.action.steps) {
        this.cycle = 0;
      }
    };
    console.log(this);
  }

  function spawnLemming() {
    lemmings[Math.round(Math.random() * 100000000)] = new Lemming();
  }

	function initialize() {
		// Register an event listener to
		// call the resizeCanvas() function each time
		// the window is resized.
		window.addEventListener('resize', resizeCanvas, false);
		// Draw canvas border for the first time.
		resizeCanvas();
	}
	// Runs each time the DOM window resize event fires.
	// Resets the canvas dimensions to match window,
	// then draws the new borders accordingly.
	function resizeCanvas() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight - (canvas.width <= 768 ? 50 : 105);
	}

	initialize();
  spawnLemming();
  draw();

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i in lemmings) {
      lemmings[i].move();
    }
    setTimeout(function() {
      draw();
    }, 150);
  }
});
