angular.module('app')
.controller('AsteroidsCtrl', function ($scope) {

  var canvas = document.getElementById('asteroids-page');
  var ctx = canvas.getContext('2d');

  function Spaceship() {
    this.x = canvas.width / 2 - 25;
    this.y = canvas.height / 2 - 25;
    this.img = new Image();
    this.img.src = 'spaceship.png';
    this.speed = 0;
    this.rotationSpeed = 1;
    this.rotation = 0;

    this.shoot = function() {

    };
  }

  function Shot() {
    this.x = spaceship.x;
    this.y = spaceship.y;
    this.rotation = spaceship.rotation;
    this.speed = spaceship.speed + 2;
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
    } else if (e.keyCode === 37) {
      //Left Arrow
      if (spaceship.rotation === 0) {
        spaceship.rotation = 360;
      } else {
        spaceship.rotation -= spaceship.rotationSpeed;
      }
      if (spaceship.rotationSpeed < 3) {
        spaceship.rotationSpeed++;
      }
    } else if (e.keyCode === 38) {
      //Up Arrow
      if (spaceship.speed <= 5) {
        spaceship.speed++;
      }
    } else if (e.keyCode === 39) {
      //Right Arrow
      if (spaceship.rotation === 360) {
        spaceship.rotation = 0;
      } else {
        spaceship.rotation += spaceship.rotationSpeed;
      }
      if (spaceship.rotationSpeed < 3) {
        spaceship.rotationSpeed++;
      }
    } else if (e.keyCode === 40) {
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
      spaceship.x += spaceship.speed * Math.cos((spaceship.rotation - 90) * Math.PI / 180);
      spaceship.y += spaceship.speed * Math.sin((spaceship.rotation - 90) * Math.PI / 180);
      if (spaceship.x > canvas.width) {
        spaceship.x = -50;
      } else if (spaceship.x < -50) {
        spaceship.x = canvas.width;
      }
      if (spaceship.y > canvas.height) {
        spaceship.y = -50;
      } else if (spaceship.y < -50) {
        spaceship.y = canvas.height;
      }
    	ctx.save();
      ctx.translate(spaceship.x, spaceship.y);
      ctx.translate(25, 25);
      ctx.rotate(spaceship.rotation * Math.PI / 180);
      ctx.drawImage(spaceship.img, -25, -25, 50, 50);
      ctx.restore();
      requestAnimationFrame(draw);
    }



});
