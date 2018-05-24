angular.module('app')
.controller('AsteroidsCtrl', function ($scope, AsteroidsSvc) {

  var canvas = document.getElementById('asteroids-page');
  var ctx = canvas.getContext('2d');
  var shots = {};
  var asteroids = {};
  var powerups = {};
  var map = {};
  var spacepics = 10;
  var space = Math.floor(Math.random() * spacepics);
  var powerupTypes = [
    {
      name: 'speed',
      img: new Image(),
      activate: function(spaceship) {
        spaceship.maxSpeed += 100;
      }
    },
    {
      name: 'cooldown',
      img: new Image(),
      activate: function(spaceship) {
        console.log(spaceship.cooldown);
        spaceship.cooldownTime -= 2;
      }
    },/*
    'side_cannons',
    'laser',
    'shield',
    'life',
    'missiles',
    'nuke'*/
  ];
  powerupTypes.forEach(function(powerup, i, array) {
    array[i].img.src = 'asteroids/' + powerup.name + '.png';
  });

  var explosionImage = new Image();
  explosionImage.src = 'asteroids/explosion.png';

  window.addEventListener('keydown', function(e) {
      map[e.keyCode || e.which] = true;
  },true);
  window.addEventListener('keyup', function(e) {
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
      if (spaceship.speed <= spaceship.maxSpeed) {
        spaceship.speed += 5;
      }
    } else {
      if (spaceship.speed > 0) {
        spaceship.speed--;
      }
    }
    if (map[40]) {
      //Down Arrow
      if (spaceship.speed > 0) {
        spaceship.speed -= 2;
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
    this.cooldownTime = 20;
    this.position = [
      canvas.width / 2 - this.width / 2,
      canvas.height / 2 - this.height / 2
    ];
    this.img = new Image();
    this.img.src = 'asteroids/spaceship.png';
    this.speed = 0;
    this.maxSpeed = 1000;
    this.angle = 0;
    this.rotation = 0;

    this.shoot = function() {
      this.cooldown = this.cooldownTime;
      var id = Math.round(Math.random() * 100000000);
      shots[id] = new Shot(id, this);
    };

    this.move = function() {
      for (var i in asteroids) {
        var asteroid = asteroids[i];
        if (!asteroid.explosion) {
          if (hit(asteroid, this)) {
            return gameOver();
          }
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
    this.position = [
      spaceship.position[0] + spaceship.cannon.x + spaceship.cannon.x * Math.cos((spaceship.rotation - 90) * Math.PI / 180),
      spaceship.position[1] + spaceship.cannon.y + spaceship.cannon.y * Math.sin((spaceship.rotation - 90) * Math.PI / 180)
    ];
    this.width = 9;
    this.height = 15;
    this.angle = spaceship.angle;
    this.rotation = spaceship.rotation;
    this.speed = spaceship.speed + 500;
    this.lifespan = 100;
    this.img = new Image();
    this.img.src = 'asteroids/shot.png';

    this.move = function() {
      this.lifespan--;
      move(this);
    };
  }

  function Asteroid(id) {
    this.id = id;
    this.width = Math.random() * 50 + 20;
    this.height = this.width;
    this.position = getEntryPosition(this.width, this.height);
    this.angle = Math.random() * 360;
    this.rotation = Math.random() * 360;
    this.rotationSpeed = Math.random() * 6 - 3;
    this.speed = Math.random() * 300 + 2;
    this.img = new Image();
    this.img.src = 'asteroids/asteroid' + (Math.round(Math.random() * 6) + 1) + '.png';

    this.explode = function() {
      this.explosion = new Explosion(this);
    };

    this.move = function() {
      if (this.explosion) {
        if (this.explosion.lifespan >= 0) {
          this.explosion.next();
        } else {
          return delete asteroids[this.id];
        }
      } else {
        this.rotation += this.rotationSpeed;
        if (this.rotation > 360) {
          this.rotation = this.rotation - 360;
        } else if (this.rotation < 0) {
          this.rotation = 360 + this.rotation;
        }
        for (var i in shots) {
          var shot = shots[i];
          if (hit(shot, this)) {
            this.explode();
            $scope.score++;
            if ($scope.score % 5 === 0) {
              spawnPowerup();
            }
            $scope.$apply();
            delete shots[i];
          }
        }
        move(this);
      }
    };
  }

  function Explosion(object) {
    this.position = object.position;
    this.width = object.width;
    this.height = object.height;
    this.lifespan = 48;
    this.row = 0;
    this.column = 0;
    this.img = explosionImage;

    this.next = function() {
      ctx.drawImage(this.img, 256 * this.column, 256 * this.row, 256, 256, this.position[0], this.position[1], this.width, this.height);
      if (this.column < 7) {
        this.column++;
      } else {
        this.column = 0;
        this.row++;
      }
      this.lifespan--;
    };
  }

  function Powerup(id) {
    this.lifespan = 500;
    this.id = id;
    this.width = 40;
    this.height = 40;
    this.position = getEntryPosition(this.width, this.height);
    this.powerup = powerupTypes[Math.floor(Math.random() * powerupTypes.length)];
    this.img = this.powerup.img;
    this.angle = Math.random() * 360;
    this.speed = Math.random() * 300 + 2;
    this.rotation = Math.random() * 360;
    this.move = function() {
      if (this.lifespan <= 0) {
        return delete powerups[this.id];
      }
      if (hit(spaceship, this)) {
        console.log('activating');
        this.powerup.activate(spaceship);
        return delete powerups[this.id];
      }
      this.lifespan--;
      move(this);
    };
  }

  function move(object) {
     object.position[0] += object.speed / 100 * Math.cos((object.angle - 90) * Math.PI / 180);
     object.position[1] += object.speed / 100 * Math.sin((object.angle - 90) * Math.PI / 180);
     if (object.position[0] > canvas.width) {
       object.position[0] = -object.width;
     } else if (object.position[0] < -object.width) {
       object.position[0] = canvas.width;
     }
     if (object.position[1] > canvas.height) {
       object.position[1] = -object.height;
     } else if (object.position[1] < -object.height) {
       object.position[1] = canvas.height;
     }
     ctx.save();
     ctx.translate(object.position[0], object.position[1]);
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

  function getEntryPosition(width, height) {
    var gridX = Math.random() * 2;
    var gridY = Math.random() * 2;
    var x, y = 0;
    if (gridX >= 1) {
      x = Math.random() * canvas.width;
      if (y >= 1) {
        y = 0 - height;
      } else {
        y = canvas.height;
      }
    } else {
      y = Math.random() * canvas.height;
      if (gridY >= 1) {
        x = 0 - width;
      } else {
        x = canvas.width;
      }
    }
    return [x, y];
  }

  function hit(object1, object2) {
    return (object1.position[0] < object2.position[0] + object2.width) &&
           (object2.position[0] < object1.position[0] + object1.width) &&
           (object1.position[1] < object2.position[1] + object2.height) &&
           (object2.position[1] < object1.position[1] + object1.height);
  }

  function spawnAsteroid() {
    if (Object.keys(asteroids).length < 200) {
      var id = Math.round(Math.random() * 100000000);
      asteroids[id] = new Asteroid(id);
    }
    setTimeout(function() {
      spawnAsteroid();
    }, 1000);
  }

  function spawnPowerup() {
    if (Object.keys(powerups).length < 3) {
      var id = Math.round(Math.random() * 100000000);
      powerups[id] = new Powerup(id);
    }
  }

  function gameOver() {
    for (var i in asteroids) {
      asteroids[i].explode();
    }
    shots = {};
    //spaceship = new Spaceship();
    $scope.score = 0;
    space = Math.floor(Math.random() * spacepics);
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
      if (shots[i].lifespan <= 0) {
        delete shots[i];
      } else {
        shots[i].move();
      }
    }
    for (i in asteroids) {
      asteroids[i].move();
    }
    for (i in powerups) {
      powerups[i].move();
    }
    spaceship.move();
    evaluateKeys();
    requestAnimationFrame(draw);
  }

  $scope.space = function() {
    return {
      backgroundImage: 'url("asteroids/space' + space + '.jpg")'
    };
  };



});
