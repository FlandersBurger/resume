angular.module('app')
.controller('AsteroidsCtrl', function ($scope) {

  var canvas = document.getElementById('asteroids-page');
  var ctx = canvas.getContext('2d');
  var shots = {};
  var asteroids = {};
  var map = {};

  window.addEventListener('keydown',function(e){
      map[e.keyCode || e.which] = true;
  },true);
  window.addEventListener('keyup',function(e){
      map[e.keyCode || e.which] = false;
  },true);

  function evaluateKeys() {
    if (map[32]) {
      //Space
      if (spaceship.cooldown === 0) {
        spaceship.shoot();
      }
    }
    if (map[37]) {
      //Left Arrow
      if (spaceship.rotation === 0) {
        spaceship.rotation = 360;
      } else {
        spaceship.rotation -= 3;
      }
    }
    if (map[39]) {
      //Right Arrow
      if (spaceship.rotation === 360) {
        spaceship.rotation = 0;
      } else {
        spaceship.rotation += 3;
      }
    }
    if (map[38]) {
      //Up Arrow
      if (spaceship.speed <= 1000) {
        spaceship.speed += 5;
      }
    } else {
      if (spaceship.speed > 0) {
        spaceship.speed--;
      }
    }
  }

  function Spaceship() {
    this.width = 50;
    this.height = 50;
    this.cannon = {
      x: this.width / 2 - 4.5,
      y: this.height / 2 - this.height * 0.078125
    };
    this.cooldown = 0;
    this.x = canvas.width / 2 - this.width / 2;
    this.y = canvas.height / 2 - this.height / 2;
    this.img = new Image();
    this.img.src = 'asteroids/spaceship.png';
    this.speed = 0;
    this.angle = 0;
    this.rotation = 0;

    this.shoot = function() {
      this.cooldown = 20;
      var id = Math.round(Math.random() * 100000000);
      shots[id] = new Shot(id, this);
    };

    this.move = function() {
      for (var i in asteroids) {
        var asteroid = asteroids[i];
        if (hit(asteroid, this)) {
          return gameOver();
        }
      }
      this.angle = this.rotation;
      if (this.cooldown > 0) {
        this.cooldown--;
      }
      move(this);
    };
  }

  function Shot(id, spaceship) {
    this.id = id;
    this.x = spaceship.x + spaceship.cannon.x + spaceship.cannon.x * Math.cos((spaceship.rotation - 90) * Math.PI / 180);
    this.y = spaceship.y + spaceship.cannon.y + spaceship.cannon.y * Math.sin((spaceship.rotation - 90) * Math.PI / 180);
    this.width = 9;
    this.height = 15;
    this.angle = spaceship.angle;
    this.rotation = spaceship.rotation;
    this.speed = spaceship.speed + 500;
    this.age = 0;
    this.img = new Image();
    this.img.src = 'asteroids/shot.png';

    this.move = function() {
      this.age++;
      move(this);
    };
  }

  function Asteroid(id) {
    this.id = id;
    this.width = Math.random() * 50 + 20;
    this.height = this.width;
    var x = Math.random() * 2;
    var y = Math.random() * 2;
    if (x >= 1) {
      this.x = Math.random() * canvas.width;
      if (y >= 1) {
        this.y = 0 - this.height;
      } else {
        this.y = canvas.height;
      }
    } else {
      this.y = Math.random() * canvas.height;
      if (y >= 1) {
        this.x = 0 - this.width;
      } else {
        this.x = canvas.width;
      }
    }
    this.angle = Math.random() * 360;
    this.rotation = Math.random() * 360;
    this.rotationSpeed = Math.random() * 6 - 3;
    this.speed = Math.random() * 300;
    this.img = new Image();
    this.img.src = 'asteroids/asteroid' + (Math.round(Math.random() * 6) + 1) + '.png';

    this.move = function() {
      this.rotation += this.rotationSpeed;
      if (this.rotation > 360) {
        this.rotation = this.rotation - 360;
      } else if (this.rotation < 0) {
        this.rotation = 360 + this.rotation;
      }
      for (var i in shots) {
        var shot = shots[i];
        if (hit(shot, this)) {
          $scope.score++;
          $scope.$apply();
          delete shots[i];
          return delete asteroids[this.id];
        }
      }
      move(this);
    };
  }

  function move(object) {
     object.x += object.speed / 100 * Math.cos((object.angle - 90) * Math.PI / 180);
     object.y += object.speed / 100 * Math.sin((object.angle - 90) * Math.PI / 180);
     if (object.x > canvas.width) {
       object.x = -object.width;
     } else if (object.x < -object.width) {
       object.x = canvas.width;
     }
     if (object.y > canvas.height) {
       object.y = -object.height;
     } else if (object.y < -object.height) {
       object.y = canvas.height;
     }
     ctx.save();
     ctx.translate(object.x, object.y);
     ctx.translate(object.width / 2, object.height / 2);
     ctx.rotate(object.rotation * Math.PI / 180);
     ctx.drawImage(object.img, -object.width / 2, -object.height / 2, object.width, object.height);
     ctx.restore();
  }

  var spaceship;

  $scope.start = function() {
    spaceship = new Spaceship();
    $scope.score = 0;
    spawnAsteroid();
  };

  function hit(object1, object2) {
    return (object1.x < object2.x + object2.width) &&
           (object2.x < object1.x + object1.width) &&
           (object1.y < object2.y + object2.height) &&
           (object2.y < object1.y + object1.height);
  }

  function spawnAsteroid() {
    var id = Math.round(Math.random() * 100000000);
    asteroids[id] = new Asteroid(id);
    setTimeout(function() {
      spawnAsteroid();
    }, 1000);
  }

  function gameOver() {
    asteroids = {};
    shots = {};
    spaceship = new Spaceship();
    $scope.score = 0;
    $scope.$apply();
  }

	// Start listening to resize events and
	// draw canvas.
	initialize();

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
		canvas.height = window.innerHeight - (canvas.width <= 768 ? 55 : 111);
    requestAnimationFrame(draw);
	}

  $scope.start();

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i in shots) {
      if (shots[i].age > 100) {
        delete shots[i];
      } else {
        shots[i].move();
      }
    }
    for (i in asteroids) {
      asteroids[i].move();
    }
    spaceship.move();
    evaluateKeys();
    requestAnimationFrame(draw);
  }



});
