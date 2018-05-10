angular.module('app')
.controller('ExplosionsCtrl', function ($scope) {

  var canvas = document.getElementById('explosions-page');
  var ctx = canvas.getContext("2d");
  var explosions = [];
  var colors = ['#ffc300','#ff5733','#c70039','#900c3e','#571845'];

  function Explosion() {
    this.lifespan = 0;
    this.radius = 1;
    this.expanding = true;
    this.maxRadius = Math.round(Math.random() * 200) + 20;
    this.x =  Math.round(Math.random() * canvas.width);
    this.y =  Math.round(Math.random() * canvas.height);
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    explosions.forEach(function(explosion) {
      var color = colors[Math.round(colors.length * explosion.radius / explosion.maxRadius)];
      ctx.beginPath();
      ctx.arc(explosion.x, explosion.y, explosion.radius, 0, 2 * Math.PI);
      ctx.fillStyle = color;
      ctx.fill();
    });
  }



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

  function filterExplosions() {
    explosions.push(new Explosion());
    explosions = explosions.filter(function (explosion) {
      if (explosion.radius === explosion.maxRadius) {
        explosion.expanding = false;
      }
      explosion.radius += (explosion.expanding ? 1 : -1);
      return explosion.radius > 0;
    });
    draw();
    setTimeout(function() {
      filterExplosions();
    }, 20);
  }

  filterExplosions();


});
