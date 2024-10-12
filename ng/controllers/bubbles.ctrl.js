angular.module("app").controller("BubblesCtrl", function ($scope) {
  var canvas = document.getElementById("bubbles-page");
  var ctx = canvas.getContext("2d");
  var bubbles = [];
  var colors = ["#ffc300", "#ff5733", "#c70039", "#900c3e", "#571845"];

  function Bubble() {
    this.lifespan = 0;
    this.radius = 1;
    this.expanding = true;
    this.speed = Math.round(Math.random() * 3);
    this.circumference = Math.round(Math.random() * 50) + 5;
    this.maxRadius = Math.round(Math.random() * 200) + 20;
    this.x = Math.round(Math.random() * canvas.width);
    this.y = Math.round(Math.random() * canvas.height);
    this.vx = Math.random() >= 0.5 ? 1 : -1;
    this.vy = Math.random() >= 0.5 ? 1 : -1;
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bubbles.forEach(function (bubble) {
      var color = colors[Math.round((colors.length * bubble.radius) / bubble.maxRadius)];
      ctx.beginPath();
      ctx.arc(bubble.x, bubble.y, bubble.radius, 0, 2 * Math.PI);
      ctx.fillStyle = colors[Math.round((colors.length * bubble.radius) / bubble.maxRadius)];
      ctx.fill();
      ctx.strokeStyle = colors[colors.length - Math.round((colors.length * bubble.radius) / bubble.maxRadius)];
      ctx.lineWidth = (bubble.circumference * bubble.radius) / bubble.maxRadius;
      ctx.stroke();
    });
  }

  function filterBubbles() {
    bubbles.push(new Bubble());
    bubbles = bubbles.filter(function (bubble) {
      if (bubble.radius === bubble.maxRadius) {
        bubble.expanding = false;
      }
      bubble.x += bubble.vx * bubble.speed;
      bubble.y += bubble.vy * bubble.speed;
      bubble.radius += bubble.expanding ? 1 : -1;
      return bubble.radius > 0;
    });
    draw();
    requestAnimationFrame(filterBubbles);
  }

  requestAnimationFrame(filterBubbles);

  (function () {
    // Start listening to resize events and
    // draw canvas.
    initialize();

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
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight - (canvas.width <= 768 ? 55 : 56);
    }
  })();
});
