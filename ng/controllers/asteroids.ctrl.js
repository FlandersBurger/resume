angular.module('app')
.controller('AsteroidsCtrl', function ($scope) {

  var canvas = document.getElementById('asteroids-page');
  var ctx = canvas.getContext('2d');
  var shots = [];

  function Spaceship() {
    this.width = 50;
    this.height = 50;
    this.x = canvas.width / 2 - this.width / 2;
    this.y = canvas.height / 2 - this.height / 2;
    this.img = new Image();
    this.img.src = 'spaceship.png';
    this.speed = 0;
    this.rotationSpeed = 1;
    this.rotation = 0;

    this.shoot = function() {
      shots.push(new Shot(this));
    };
  }

  function Shot(spaceship) {
    this.x = spaceship.x + spaceship.width / 2 + spaceship.width / 2 * Math.cos((spaceship.rotation - 90) * Math.PI / 180);
    this.y = spaceship.y + spaceship.height / 2 + spaceship.height / 2 * Math.sin((spaceship.rotation - 90) * Math.PI / 180);
    this.width = 9;
    this.height = 15;
    this.rotation = spaceship.rotation;
    this.speed = spaceship.speed + 2;
    this.age = 0;
    this.img = new Image();
    this.img.src = 'shot.png';
  }

  function move(object) {
     object.x += object.speed * Math.cos((object.rotation - 90) * Math.PI / 180);
     object.y += object.speed * Math.sin((object.rotation - 90) * Math.PI / 180);
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

  var spaceship = new Spaceship();

  $scope.start = function() {
    spaceship = new Spaceship();
  };

  //Below picks up the Keyboard keys pressed
  $(document).on("keydown", function(e) {
    if (e.keyCode === 32) {
      //Space
      spaceship.shoot();
    }
    if (e.keyCode === 37) {
      //Left Arrow
      if (spaceship.rotation === 0) {
        spaceship.rotation = 360;
      } else {
        spaceship.rotation -= spaceship.rotationSpeed;
      }
      if (spaceship.rotationSpeed < 3) {
        spaceship.rotationSpeed++;
      }
    }
    if (e.keyCode === 38) {
      //Up Arrow
      if (spaceship.speed <= 5) {
        spaceship.speed++;
      }
    }
    if (e.keyCode === 39) {
      //Right Arrow
      if (spaceship.rotation === 360) {
        spaceship.rotation = 0;
      } else {
        spaceship.rotation += spaceship.rotationSpeed;
      }
      if (spaceship.rotationSpeed < 3) {
        spaceship.rotationSpeed++;
      }
    }
    if (e.keyCode === 40) {
      //Down Arrow
      if (spaceship.speed >= 0) {
        spaceship.speed--;
      }
    }
  });

  $(document).on("keyup", function(e) {
    spaceship.rotationSpeed = 1;
  });

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
      move(spaceship);
      shots = shots.filter(function(shot) {
        return shot.age < 100;
      });
      shots.forEach(function(shot) {
        shot.age++;
        move(shot);
      });
      requestAnimationFrame(draw);
    }



});
