angular.module('app')
.controller('AsteroidsCtrl', function ($scope) {

  var canvas = document.getElementById('asteroids-page');
  var ctx = canvas.getContext('2d');

  function Spaceship() {
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
    this.img = new Image();
    this.img.src = 'spaceship.png';
    this.speed = 0;
    this.rotationSpeed = 1;
    this.rotation = 0;
  }

  var spaceship;

  $scope.start = function() {
    spaceship = new Spaceship();
    spaceship.img.onload = function() {

      ctx.drawImage(spaceship.img, spaceship.x, spaceship.y, 50, 50);
      ctx.restore();
    };
  };

  $scope.start();

  //Below picks up the Keyboard keys pressed
  $(document).on("keydown", function(e) {
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
    } else if (e.keyCode === 38) {
      //Up Arrow
      spaceship.speed++;
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
      spaceship.speed--;
    }
  });

  $(document).on("keyup", function(e) {
    spaceship.rotationSpeed = 1;
  });

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    spaceship.x -= spaceship.speed * Math.sin(spaceship.rotation * Math.PI / 180);
    spaceship.y -= spaceship.speed * Math.cos(spaceship.rotation * Math.PI / 180);
  	ctx.save();
    ctx.translate(spaceship.x / 2, spaceship.y / 2);
    ctx.translate(25, 25);
    ctx.rotate(spaceship.rotation * Math.PI / 180);
    ctx.drawImage(spaceship.img, -25, -25, 50, 50);
    ctx.restore();
  }

  function redraw() {
    draw();
    requestAnimationFrame(redraw);
  }

  requestAnimationFrame(redraw);

	(function() {

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
		}

	})();

});
