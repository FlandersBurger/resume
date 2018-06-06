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
      end: [320, 20],
      columns: 8,
      rows: 1,
      reverse: false
    },
    huh: {
      start: [320, 0],
      end: [640, 20],
      columns: 8,
      rows: 1,
      reverse: true
    },
    fall: {
      start: [0, 80],
      end: [160, 100],
      columns: 4,
      rows: 1,
      reverse: false
    },
    fly: {
      start: [160, 80],
      end: [480, 110],
      columns: 8,
      rows: 1,
      reverse: false
    },
    stop: {
      start: [0, 120],
      end: [640, 140],
      columns: 16,
      rows: 1,
      reverse: false
    },
    climb: {
      start: [0, 160],
      end: [640, 185],
      columns: 16,
      rows: 1,
      reverse: false
    },
    build: {
      start: [0, 200],
      end: [640, 225],
      columns: 16,
      rows: 1,
      reverse: false
    },
    punch: {
      start: [0, 240],
      end: [640, 300],
      columns: 16,
      rows: 2,
      reverse: false
    },
    dig: {
      start: [0, 320],
      end: [320, 345],
      columns: 8,
      rows: 1,
      reverse: false
    },
  };

  function Lemming(init) {
    this.position = [Math.floor(Math.random() * (canvas.width - 200)) + 100, Math.floor(Math.random() * (canvas.height - 200)) + 100];
    this.direction = Math.random() * 2 > 1 ? LEFT : RIGHT;
    this.act = function(action) {
      this.action = actions[action];
      this.cycle = 0;
      this.width = (this.action.end[0] - this.action.start[0]) / this.action.columns;
      this.height = (this.action.end[1] - this.action.start[1] - (20 * (this.action.rows - 1))) / this.action.rows;
      this.animation = true;
    };
    this.act(init);
    this.move = function() {
      ctx.save();
      ctx.translate(this.position[0], this.position[1]);
      ctx.translate(this.width / 2, this.height / 2);
      if (this.direction === LEFT) {
        ctx.scale(-1, 1);
      }
      var column = this.cycle % this.action.columns;
      var row = Math.floor(this.cycle / this.action.columns);
      ctx.drawImage(lemmingsImage, (this.width * column) + this.action.start[0], ((this.height + 20) * row) + this.action.start[1], this.width, this.height, 0, 0, this.width * 2, this.height * 2);
      ctx.restore();
      if (this.action.reverse) {
        if (this.animation) {
          this.cycle++;
          if (this.cycle >= this.action.columns * this.action.rows) {
            this.animation = !this.animation;
            this.cycle--;
          }
        } else {
          this.cycle--;
          if (this.cycle < 0) {
            this.animation = !this.animation;
            this.cycle = 0;
          }
        }
      } else {
        this.cycle++;
        if (this.cycle >= this.action.columns * this.action.rows) {
          this.cycle = 0;
        }
      }
    };
  }

  function spawnLemming() {
    Object.keys(actions).forEach(function(action) {
      lemmings[Math.round(Math.random() * 100000000)] = new Lemming(action);
    });
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
