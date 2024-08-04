angular.module("app").controller("AsteroidsCtrl", function ($location, $scope, GameSvc) {
  $scope.announce = false;
  const canvas = document.getElementById("asteroids-page");
  if (!canvas) {
    $location.path("/home");
    return alert("");
  }
  const ctx = canvas.getContext("2d");
  ctx.font = "30px Comic Sans MS";
  ctx.fillStyle = "red";
  ctx.textAlign = "center";
  const shots = {};
  const asteroids = {};
  const powerups = {};
  const explosions = {};
  const map = {};
  const spacepics = 10;
  const space = Math.floor(Math.random() * spacepics);
  const powerupTypes = [
    {
      name: "speed",
      announcement: "Max Speed ⇧",
      cycle: {
        rows: 1,
        columns: 4,
        size: [14, 35],
        i: 0,
        direction: true,
      },
      img: new Image(),
      activate: function (spaceship) {
        spaceship.maxSpeed += 100;
      },
    },
    {
      name: "cooldown",
      announcement: "Cooldown ⇩",
      cycle: {
        rows: 1,
        columns: 3,
        size: [17, 17],
        i: 0,
        direction: true,
      },
      img: new Image(),
      activate: function (spaceship) {
        if (spaceship.cooldown > 0) {
          spaceship.cooldownTime -= 1;
        }
      },
    },
    {
      name: "range",
      announcement: "Firing Range ⇧",
      cycle: {
        rows: 4,
        columns: 1,
        size: [30, 8],
        i: 0,
        direction: true,
      },
      img: new Image(),
      activate: function (spaceship) {
        spaceship.range += 5;
      },
    },
    {
      name: "shield",
      announcement: "Shield",
      cycle: {
        rows: 5,
        columns: 1,
        size: [19, 19],
        i: 0,
        direction: true,
      },
      img: new Image(),
      activate: function (spaceship) {
        spaceship.shield = true;
      },
    },
    {
      name: "nuke",
      announcement: "Nuke",
      cycle: {
        rows: 1,
        columns: 8,
        size: [15, 15],
        i: 0,
        direction: true,
      },
      img: new Image(),
      activate: function (spaceship) {
        for (var i in asteroids) {
          asteroids[i].explode();
        }
        spawnAsteroids(5);
      },
    } /*
    'side_cannons',
    'laser',
    'shield',
    'life',
    'missiles',
    'nuke'
    */,
  ];
  powerupTypes.forEach(function (powerup, i, array) {
    array[i].img.src = "asteroids/" + powerup.name + ".png";
  });

  var explosionImage = new Image();
  explosionImage.src = "asteroids/explosion.png";

  window.addEventListener(
    "keydown",
    function (e) {
      map[e.keyCode || e.which] = true;
    },
    true,
  );
  window.addEventListener(
    "keyup",
    function (e) {
      map[e.keyCode || e.which] = false;
    },
    true,
  );

  $scope.highscore = 0;

  function evaluateKeys() {
    if ($scope.playing) {
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
    } else {
      if (map[32]) {
        start();
      }
    }
  }

  function Spaceship() {
    this.width = 50;
    this.height = 50;
    this.shield = false;
    this.range = 80;
    this.cannon = {
      x: this.width / 2 - 4.5,
      y: this.height / 2 - this.height * 0.078125,
    };
    this.cooldown = 0;
    this.cooldownTime = 20;
    this.position = [canvas.width / 2 - this.width / 2, canvas.height / 2 - this.height / 2];
    this.img = new Image();
    this.img.src = "asteroids/spaceship.png";
    this.speed = 0;
    this.maxSpeed = 1000;
    this.angle = 0;
    this.rotation = 0;

    this.shoot = function () {
      this.cooldown = this.cooldownTime;
      var id = Math.round(Math.random() * 100000000);
      shots[id] = new Shot(id, this);
    };

    this.move = function () {
      if (this.shield) {
        ctx.beginPath();
        ctx.arc(this.position[0] + this.width / 2, this.position[1] + this.height / 2, 30, 0, 2 * Math.PI);
        ctx.fillStyle = "rgb(35, 237, 86, 0.5)";
        ctx.strokeStyle = "rgb(66, 168, 36, 0.8)";
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.fill();
      }
      for (var i in asteroids) {
        var asteroid = asteroids[i];
        if (hit(asteroid, this)) {
          if (this.shield) {
            this.shield = false;
            asteroid.explode();
          } else {
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
      spaceship.position[0] +
        spaceship.cannon.x +
        spaceship.cannon.x * Math.cos(((spaceship.rotation - 90) * Math.PI) / 180),
      spaceship.position[1] +
        spaceship.cannon.y +
        spaceship.cannon.y * Math.sin(((spaceship.rotation - 90) * Math.PI) / 180),
    ];
    this.width = 9;
    this.height = 15;
    this.angle = spaceship.angle;
    this.rotation = spaceship.rotation;
    this.speed = spaceship.speed + 500;
    this.lifespan = spaceship.range;
    this.img = new Image();
    this.img.src = "asteroids/shot.png";

    this.move = function () {
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
    this.img.src = "asteroids/asteroid" + (Math.round(Math.random() * 6) + 1) + ".png";

    this.explode = function () {
      explosions[this.id] = new Explosion(this);
      return delete asteroids[this.id];
    };

    this.move = function () {
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
          var points = Math.floor((shot.speed - 500) / 10 + 70 - this.width);
          if (Math.floor((points + $scope.score) / 100) > Math.floor($scope.score / 100)) {
            spawnPowerup();
          }
          $scope.score += points;
          $scope.$apply();
          delete shots[i];
        }
      }
      move(this);
    };
  }

  function Explosion(object) {
    this.position = [object.position[0], object.position[1]];
    this.width = object.width;
    this.height = object.height;
    this.speed = 0;
    this.angle = Math.random() * 360;
    this.cycle = {
      rows: 6,
      columns: 8,
      size: [256, 256],
      i: 0,
      direction: true,
    };
    this.lifespan = 47;
    this.img = explosionImage;

    this.move = function () {
      this.lifespan--;
      move(this);
      if (this.cycle.direction) {
        this.cycle.i++;
      } else {
        this.cycle.i--;
      }
    };
  }

  function Powerup(id) {
    this.id = id;
    this.powerup = powerupTypes[Math.floor(Math.random() * powerupTypes.length)];
    this.cycle = this.powerup.cycle;
    this.lifespan = 1000;
    if (this.cycle.size[1] > this.cycle.size[0]) {
      this.height = 40;
      this.width = Math.round((this.height / this.cycle.size[1]) * this.cycle.size[0]);
    } else {
      this.width = 40;
      this.height = Math.round((this.width / this.cycle.size[0]) * this.cycle.size[1]);
    }
    this.position = getEntryPosition(this.width, this.height);
    this.img = this.powerup.img;
    this.angle = Math.random() * 360;
    this.speed = Math.random() * 150 + 50;
    var delay = 5;
    this.move = () => {
      if (this.lifespan <= 0) {
        return delete powerups[this.id];
      }
      if (hit(spaceship, this)) {
        $scope.announce = true;
        $scope.announcement = this.powerup.announcement;
        $scope.$apply();
        setTimeout(() => {
          $scope.announce = false;
          $scope.$apply();
        }, 1000);
        this.powerup.activate(spaceship);
        return delete powerups[this.id];
      }
      this.lifespan--;
      move(this);
      if (delay <= 0) {
        if (this.cycle.direction) {
          this.cycle.i++;
        } else {
          this.cycle.i--;
        }
        delay = 5;
      } else {
        delay--;
      }
    };
  }

  function move(object) {
    object.position[0] += (object.speed / 100) * Math.cos(((object.angle - 90) * Math.PI) / 180);
    object.position[1] += (object.speed / 100) * Math.sin(((object.angle - 90) * Math.PI) / 180);
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
    ctx.rotate((object.rotation * Math.PI) / 180);
    if (object.cycle) {
      var column = object.cycle.i % object.cycle.columns;
      var row = Math.floor(object.cycle.i / object.cycle.columns);
      ctx.drawImage(
        object.img,
        object.cycle.size[0] * column,
        object.cycle.size[1] * row,
        object.cycle.size[0],
        object.cycle.size[1],
        -object.width / 2,
        -object.height / 2,
        object.width,
        object.height,
      );

      if (object.cycle.i <= 0) {
        object.cycle.i = 0;
        object.cycle.direction = true;
      } else if (object.cycle.i >= object.cycle.columns * object.cycle.rows) {
        object.cycle.i = object.cycle.columns * object.cycle.rows - 1;
        object.cycle.direction = false;
      }
    } else {
      ctx.drawImage(object.img, -object.width / 2, -object.height / 2, object.width, object.height);
    }
    ctx.restore();
  }

  var spaceship;

  function start() {
    $scope.playing = true;
    $scope.score = 0;
    space = Math.floor(Math.random() * spacepics);
    $scope.$apply();
    spaceship = new Spaceship();
    $scope.score = 0;
    spawnAsteroids(5);
    autoSpawn();
  }

  function getEntryPosition(width, height) {
    var gridX = Math.random() * 2;
    var gridY = Math.random() * 2;
    var x,
      y = 0;
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
    return (
      object1.position[0] < object2.position[0] + object2.width &&
      object2.position[0] < object1.position[0] + object1.width &&
      object1.position[1] < object2.position[1] + object2.height &&
      object2.position[1] < object1.position[1] + object1.height
    );
  }

  function autoSpawn() {
    if (Object.keys(asteroids).length < 200) {
      var id = Math.round(Math.random() * 100000000);
      asteroids[id] = new Asteroid(id);
    }
    if ($scope.playing) {
      setTimeout(function () {
        autoSpawn();
      }, spawnInterval());
    }
  }

  function spawnInterval() {
    if ($scope.score < 1000) {
      return 1000;
    } else if ($scope.score < 2000) {
      return 900;
    } else if ($scope.score < 3000) {
      return 800;
    } else if ($scope.score < 4000) {
      return 700;
    } else if ($scope.score < 5000) {
      return 600;
    } else if ($scope.score < 6000) {
      return 500;
    } else if ($scope.score < 7000) {
      return 400;
    } else if ($scope.score < 8000) {
      return 300;
    } else {
      return 200;
    }
  }

  function spawnAsteroids(amount) {
    var i = 0;
    do {
      var id = Math.round(Math.random() * 100000000);
      asteroids[id] = new Asteroid(id);
    } while (i++ <= amount);
  }

  function spawnPowerup() {
    if (Object.keys(powerups).length < 3) {
      var id = Math.round(Math.random() * 100000000);
      powerups[id] = new Powerup(id);
    }
  }

  function gameOver() {
    $scope.playing = false;
    for (var i in asteroids) {
      asteroids[i].explode();
    }
    shots = {};
    if ($scope.loggedIn) {
      if ($scope.currentUser.highscore.asteroids < $scope.score) {
        $scope.currentUser.highscore.asteroids = $scope.score;
        GameSvc.setHighscore("asteroids", $scope.currentUser._id, $scope.score);
      }
    } else {
      if ($scope.highscore < $scope.score) {
        $scope.highscore = $scope.score;
      }
    }
  }

  // Start listening to resize events and
  // draw canvas.

  function initialize() {
    // Register an event listener to
    // call the resizeCanvas() function each time
    // the window is resized.
    window.addEventListener("resize", resizeCanvas, false);

    // Draw canvas border for the first time.
    resizeCanvas();
  }
  // Runs each time the DOM window resize event fires.
  // Resets the canvas dimensions to match window,
  // then draws the new borders accordingly.
  function resizeCanvas() {
    console.log(window.innerWidth);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - (canvas.width <= 768 ? 50 : 105);
  }

  initialize();
  requestAnimationFrame(draw);

  var tally = 0;
  var direction = true;

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
    for (i in explosions) {
      if (explosions[i].lifespan <= 0) {
        delete explosions[i];
      } else {
        explosions[i].move();
      }
    }
    evaluateKeys();
    if ($scope.playing) {
      spaceship.move();
    } else {
      var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(
        "0",
        "rgb(" +
          Math.floor(256 - (256 * tally) / 100) +
          "," +
          Math.floor(0 + (256 * tally) / 100) +
          "," +
          Math.floor(0 + (256 * tally) / 100) +
          ")",
      );
      gradient.addColorStop(
        "0.25",
        "rgb(" +
          Math.floor(0 + (256 * tally) / 100) +
          "," +
          Math.floor(256 - (256 * tally) / 100) +
          "," +
          Math.floor(0 + (256 * tally) / 100) +
          ")",
      );
      gradient.addColorStop(
        "0.5",
        "rgb(" +
          Math.floor(0 + (256 * tally) / 100) +
          "," +
          Math.floor(0 + (256 * tally) / 100) +
          "," +
          Math.floor(256 - (256 * tally) / 100) +
          ")",
      );
      gradient.addColorStop(
        "0.75",
        "rgb(" +
          Math.floor(0 + (256 * tally) / 100) +
          "," +
          Math.floor(256 - (256 * tally) / 100) +
          "," +
          Math.floor(0 + (256 * tally) / 100) +
          ")",
      );
      gradient.addColorStop(
        "1.0",
        "rgb(" +
          Math.floor(256 - (256 * tally) / 100) +
          "," +
          Math.floor(0 + (256 * tally) / 100) +
          "," +
          Math.floor(0 + (256 * tally) / 100) +
          ")",
      );
      ctx.fillStyle = gradient;
      ctx.font = "60px Monoton";
      ctx.fillText("Asteroids", canvas.width / 2 - ctx.measureText("Asteroids").width / 2, canvas.height / 2);
      ctx.font = "20px Aldrich";
      ctx.fillText(
        "Press space to start",
        canvas.width / 2 - ctx.measureText("Press space to start").width / 2,
        canvas.height / 2 + 20,
      );
      ctx.fillText(
        "Designed and developed by Laurent Debacker",
        canvas.width / 2 - ctx.measureText("Designed and developed by Laurent Debacker").width / 2,
        canvas.height - 30,
      );
    }
    tally += direction ? 1 : -1;
    if (tally > 100) {
      tally = 100;
      direction = false;
    } else if (tally < 0) {
      tally = 0;
      direction = true;
    }
    requestAnimationFrame(draw);
  }

  $scope.space = function () {
    return {
      backgroundImage: 'url("asteroids/space' + space + '.jpg")',
    };
  };
});
