import { useEffect, useRef, useState } from "react";

const spacepics = 10;

export default function Asteroids() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [highscore, setHighscore] = useState(0);
  const [announce, setAnnounce] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const [spaceIndex, setSpaceIndex] = useState(0);

  // Use refs for mutable game state to avoid stale closures in rAF loop
  const gameRef = useRef({
    playing: false,
    score: 0,
    highscore: 0,
    shots: {} as Record<string, any>,
    asteroids: {} as Record<string, any>,
    powerups: {} as Record<string, any>,
    explosions: {} as Record<string, any>,
    spaceship: null as any,
    map: {} as Record<number, boolean>,
    space: Math.floor(Math.random() * spacepics),
    tally: 0,
    direction: true,
    animId: 0,
    spawnTimeout: null as ReturnType<typeof setTimeout> | null,
    setScore: null as ((n: number) => void) | null,
    setPlaying: null as ((b: boolean) => void) | null,
    setAnnounce: null as ((b: boolean) => void) | null,
    setAnnouncement: null as ((s: string) => void) | null,
  });

  useEffect(() => {
    const g = gameRef.current;
    g.setScore = setScore;
    g.setPlaying = setPlaying;
    g.setAnnounce = setAnnounce;
    g.setAnnouncement = setAnnouncement;
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const g = gameRef.current;

    const explosionImage = new Image();
    explosionImage.src = "asteroids/explosion.png";

    const powerupTypes = [
      {
        name: "speed", announcement: "Max Speed ⇧",
        cycle: { rows: 1, columns: 4, size: [14, 35], i: 0, direction: true },
        img: new Image(),
        activate: (s: any) => { s.maxSpeed += 100; },
      },
      {
        name: "cooldown", announcement: "Cooldown ⇩",
        cycle: { rows: 1, columns: 3, size: [17, 17], i: 0, direction: true },
        img: new Image(),
        activate: (s: any) => { if (s.cooldown > 0) s.cooldownTime -= 1; },
      },
      {
        name: "range", announcement: "Firing Range ⇧",
        cycle: { rows: 4, columns: 1, size: [30, 8], i: 0, direction: true },
        img: new Image(),
        activate: (s: any) => { s.range += 5; },
      },
      {
        name: "shield", announcement: "Shield",
        cycle: { rows: 5, columns: 1, size: [19, 19], i: 0, direction: true },
        img: new Image(),
        activate: (s: any) => { s.shield = true; },
      },
      {
        name: "nuke", announcement: "Nuke",
        cycle: { rows: 1, columns: 8, size: [15, 15], i: 0, direction: true },
        img: new Image(),
        activate: (_: any) => {
          for (const i in g.asteroids) g.asteroids[i].explode();
          spawnAsteroids(5);
        },
      },
    ];
    powerupTypes.forEach((p) => { p.img.src = `asteroids/${p.name}.png`; });

    function resizeCanvas() {
      canvas.width = window.innerWidth - 1;
      canvas.height = window.innerHeight - (canvas.width <= 768 ? 50 : 59);
    }

    function getEntryPosition(width: number, height: number): [number, number] {
      const gridX = Math.random() * 2;
      const gridY = Math.random() * 2;
      let x = 0, y = 0;
      if (gridX >= 1) {
        x = Math.random() * canvas.width;
        y = gridY >= 1 ? -height : canvas.height;
      } else {
        y = Math.random() * canvas.height;
        x = gridY >= 1 ? -width : canvas.width;
      }
      return [x, y];
    }

    function hit(o1: any, o2: any) {
      return (
        o1.position[0] < o2.position[0] + o2.width &&
        o2.position[0] < o1.position[0] + o1.width &&
        o1.position[1] < o2.position[1] + o2.height &&
        o2.position[1] < o1.position[1] + o1.height
      );
    }

    function moveObject(obj: any) {
      obj.position[0] += (obj.speed / 100) * Math.cos(((obj.angle - 90) * Math.PI) / 180);
      obj.position[1] += (obj.speed / 100) * Math.sin(((obj.angle - 90) * Math.PI) / 180);
      if (obj.position[0] > canvas.width) obj.position[0] = -obj.width;
      else if (obj.position[0] < -obj.width) obj.position[0] = canvas.width;
      if (obj.position[1] > canvas.height) obj.position[1] = -obj.height;
      else if (obj.position[1] < -obj.height) obj.position[1] = canvas.height;

      ctx.save();
      ctx.translate(obj.position[0], obj.position[1]);
      ctx.translate(obj.width / 2, obj.height / 2);
      ctx.rotate((obj.rotation * Math.PI) / 180);
      if (obj.cycle) {
        const column = obj.cycle.i % obj.cycle.columns;
        const row = Math.floor(obj.cycle.i / obj.cycle.columns);
        ctx.drawImage(obj.img, obj.cycle.size[0] * column, obj.cycle.size[1] * row,
          obj.cycle.size[0], obj.cycle.size[1], -obj.width / 2, -obj.height / 2, obj.width, obj.height);
        if (obj.cycle.i <= 0) { obj.cycle.i = 0; obj.cycle.direction = true; }
        else if (obj.cycle.i >= obj.cycle.columns * obj.cycle.rows) {
          obj.cycle.i = obj.cycle.columns * obj.cycle.rows - 1;
          obj.cycle.direction = false;
        }
      } else {
        ctx.drawImage(obj.img, -obj.width / 2, -obj.height / 2, obj.width, obj.height);
      }
      ctx.restore();
    }

    function makeSpaceship() {
      const s: any = {
        width: 50, height: 50, shield: false, range: 80,
        cannon: { x: 50 / 2 - 4.5, y: 50 / 2 - 50 * 0.078125 },
        cooldown: 0, cooldownTime: 20,
        position: [canvas.width / 2 - 25, canvas.height / 2 - 25],
        img: new Image(), speed: 0, maxSpeed: 1000, angle: 0, rotation: 0,
      };
      s.img.src = "asteroids/spaceship.png";
      s.shoot = () => {
        s.cooldown = s.cooldownTime;
        const id = Math.round(Math.random() * 100000000);
        g.shots[id] = makeShot(id, s);
      };
      s.move = () => {
        if (s.shield) {
          ctx.beginPath();
          ctx.arc(s.position[0] + s.width / 2, s.position[1] + s.height / 2, 30, 0, 2 * Math.PI);
          ctx.fillStyle = "rgb(35,237,86,0.5)"; ctx.strokeStyle = "rgb(66,168,36,0.8)";
          ctx.lineWidth = 5; ctx.stroke(); ctx.fill();
        }
        for (const i in g.asteroids) {
          if (hit(g.asteroids[i], s)) {
            if (s.shield) { s.shield = false; g.asteroids[i].explode(); }
            else return gameOver();
          }
        }
        s.angle = s.rotation;
        if (s.cooldown > 0) s.cooldown--;
        moveObject(s);
      };
      return s;
    }

    function makeShot(id: number, spaceship: any) {
      const s: any = {
        id, width: 9, height: 15,
        position: [
          spaceship.position[0] + spaceship.cannon.x + spaceship.cannon.x * Math.cos(((spaceship.rotation - 90) * Math.PI) / 180),
          spaceship.position[1] + spaceship.cannon.y + spaceship.cannon.y * Math.sin(((spaceship.rotation - 90) * Math.PI) / 180),
        ],
        angle: spaceship.angle, rotation: spaceship.rotation,
        speed: spaceship.speed + 500, lifespan: spaceship.range,
        img: new Image(),
      };
      s.img.src = "asteroids/shot.png";
      s.move = () => { s.lifespan--; moveObject(s); };
      return s;
    }

    function makeAsteroid(id: number) {
      const a: any = {
        id, width: Math.random() * 50 + 20,
        angle: Math.random() * 360, rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 6 - 3, speed: Math.random() * 300 + 2,
        img: new Image(),
      };
      a.height = a.width;
      a.position = getEntryPosition(a.width, a.height);
      a.img.src = `asteroids/asteroid${Math.round(Math.random() * 6) + 1}.png`;
      a.explode = () => {
        g.explosions[a.id] = makeExplosion(a);
        delete g.asteroids[a.id];
      };
      a.move = () => {
        a.rotation += a.rotationSpeed;
        if (a.rotation > 360) a.rotation -= 360;
        else if (a.rotation < 0) a.rotation = 360 + a.rotation;
        for (const i in g.shots) {
          if (hit(g.shots[i], a)) {
            a.explode();
            const points = Math.floor((g.shots[i].speed - 500) / 10 + 70 - a.width);
            if (Math.floor((points + g.score) / 100) > Math.floor(g.score / 100)) spawnPowerup();
            g.score += points;
            g.setScore!(g.score);
            delete g.shots[i];
            return;
          }
        }
        moveObject(a);
      };
      return a;
    }

    function makeExplosion(obj: any) {
      const e: any = {
        position: [obj.position[0], obj.position[1]],
        width: obj.width, height: obj.height, speed: 0,
        angle: Math.random() * 360,
        cycle: { rows: 6, columns: 8, size: [256, 256], i: 0, direction: true },
        lifespan: 47, img: explosionImage,
      };
      e.move = () => { e.lifespan--; moveObject(e); e.cycle.direction ? e.cycle.i++ : e.cycle.i--; };
      return e;
    }

    function makePowerup(id: number) {
      const type = powerupTypes[Math.floor(Math.random() * powerupTypes.length)];
      const cyc = { ...type.cycle, i: 0, direction: true };
      const p: any = {
        id, powerup: type, cycle: cyc, lifespan: 1000, img: type.img,
        angle: Math.random() * 360, speed: Math.random() * 150 + 50,
        width: 0, height: 0,
      };
      if (cyc.size[1] > cyc.size[0]) {
        p.height = 40; p.width = Math.round((p.height / cyc.size[1]) * cyc.size[0]);
      } else {
        p.width = 40; p.height = Math.round((p.width / cyc.size[0]) * cyc.size[1]);
      }
      p.position = getEntryPosition(p.width, p.height);
      let delay = 5;
      p.move = () => {
        if (p.lifespan <= 0) { delete g.powerups[id]; return; }
        if (g.spaceship && hit(g.spaceship, p)) {
          g.setAnnounce!(true); g.setAnnouncement!(type.announcement);
          setTimeout(() => g.setAnnounce!(false), 1000);
          type.activate(g.spaceship);
          delete g.powerups[id]; return;
        }
        p.lifespan--;
        moveObject(p);
        if (delay <= 0) { p.cycle.direction ? p.cycle.i++ : p.cycle.i--; delay = 5; }
        else delay--;
      };
      return p;
    }

    function spawnAsteroids(amount: number) {
      for (let i = 0; i <= amount; i++) {
        const id = Math.round(Math.random() * 100000000);
        g.asteroids[id] = makeAsteroid(id);
      }
    }

    function spawnPowerup() {
      if (Object.keys(g.powerups).length < 3) {
        const id = Math.round(Math.random() * 100000000);
        g.powerups[id] = makePowerup(id);
      }
    }

    function spawnInterval() {
      if (g.score < 1000) return 1000;
      if (g.score < 2000) return 900;
      if (g.score < 3000) return 800;
      if (g.score < 4000) return 700;
      if (g.score < 5000) return 600;
      if (g.score < 6000) return 500;
      if (g.score < 7000) return 400;
      if (g.score < 8000) return 300;
      return 200;
    }

    function autoSpawn() {
      if (Object.keys(g.asteroids).length < 200) {
        const id = Math.round(Math.random() * 100000000);
        g.asteroids[id] = makeAsteroid(id);
      }
      if (g.playing) g.spawnTimeout = setTimeout(autoSpawn, spawnInterval());
    }

    function gameOver() {
      g.playing = false; g.setPlaying!(false);
      for (const i in g.asteroids) g.asteroids[i].explode();
      g.shots = {};
      if (g.score > g.highscore) { g.highscore = g.score; setHighscore(g.score); }
    }

    function start() {
      g.playing = true; g.score = 0; g.setPlaying!(true); g.setScore!(0);
      g.space = Math.floor(Math.random() * spacepics);
      setSpaceIndex(g.space);
      g.spaceship = makeSpaceship();
      spawnAsteroids(5); autoSpawn();
    }

    function evaluateKeys() {
      const s = g.spaceship;
      if (g.playing && s) {
        if (g.map[32] && s.cooldown === 0) s.shoot();
        if (g.map[37]) s.rotation = s.rotation === 0 ? 360 : s.rotation - 3;
        if (g.map[39]) s.rotation = s.rotation === 360 ? 0 : s.rotation + 3;
        if (g.map[38]) { if (s.speed <= s.maxSpeed) s.speed += 5; }
        else { if (s.speed > 0) s.speed--; }
        if (g.map[40] && s.speed > 0) s.speed -= 2;
      } else {
        if (g.map[32]) start();
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const i in g.shots) {
        if (g.shots[i].lifespan <= 0) delete g.shots[i];
        else g.shots[i].move();
      }
      for (const i in g.asteroids) g.asteroids[i].move();
      for (const i in g.powerups) g.powerups[i].move();
      for (const i in g.explosions) {
        if (g.explosions[i].lifespan <= 0) delete g.explosions[i];
        else g.explosions[i].move();
      }
      evaluateKeys();
      if (g.playing) {
        g.spaceship.move();
      } else {
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        const t = g.tally;
        const c = (a: number, b: number) => Math.floor(a + (b * t) / 100);
        gradient.addColorStop("0", `rgb(${c(256, -256)},${c(0, 256)},${c(0, 256)})`);
        gradient.addColorStop("0.25", `rgb(${c(0, 256)},${c(256, -256)},${c(0, 256)})`);
        gradient.addColorStop("0.5", `rgb(${c(0, 256)},${c(0, 256)},${c(256, -256)})`);
        gradient.addColorStop("0.75", `rgb(${c(0, 256)},${c(256, -256)},${c(0, 256)})`);
        gradient.addColorStop("1.0", `rgb(${c(256, -256)},${c(0, 256)},${c(0, 256)})`);
        ctx.fillStyle = gradient;
        ctx.font = "60px Monoton";
        ctx.fillText("Asteroids", canvas.width / 2 - ctx.measureText("Asteroids").width / 2, canvas.height / 2);
        ctx.font = "20px Aldrich";
        ctx.fillText("Press space to start", canvas.width / 2 - ctx.measureText("Press space to start").width / 2, canvas.height / 2 + 20);
        ctx.fillText(
          "Designed and developed by Laurent Debacker",
          canvas.width / 2 - ctx.measureText("Designed and developed by Laurent Debacker").width / 2,
          canvas.height - 30,
        );
      }
      g.tally += g.direction ? 1 : -1;
      if (g.tally > 100) { g.tally = 100; g.direction = false; }
      else if (g.tally < 0) { g.tally = 0; g.direction = true; }
      g.animId = requestAnimationFrame(draw);
    }

    const onKeyDown = (e: KeyboardEvent) => { g.map[e.keyCode || e.which] = true; };
    const onKeyUp = (e: KeyboardEvent) => { g.map[e.keyCode || e.which] = false; };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("keydown", onKeyDown, true);
    window.addEventListener("keyup", onKeyUp, true);
    g.animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(g.animId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("keydown", onKeyDown, true);
      window.removeEventListener("keyup", onKeyUp, true);
      if (g.spawnTimeout) clearTimeout(g.spawnTimeout);
    };
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
      backgroundImage: `url(asteroids/space${spaceIndex}.jpg)`, backgroundSize: "cover" }}
    >
      <canvas ref={canvasRef} id="asteroids-page"
        style={{ width: "100%", height: "100%", backgroundColor: "#111" }} />
      <div style={{ position: "fixed", top: 10, right: 20, color: "#fff", fontSize: 24 }}>
        Score: {score} | High: {highscore}
      </div>
      {announce && (
        <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          color: "#fff", fontSize: 36, textShadow: "0 0 10px #0f0" }}>
          {announcement}
        </div>
      )}
    </div>
  );
}
