import { useEffect, useRef } from "react";

const LEFT = 0,
  RIGHT = 1;
const GRAVITY = 2.5,
  MAX_FALL = 18,
  WALK_SPEED = 2;
const TICK_MS = 100,
  MAX_LEMMINGS = 12,
  SPAWN_EVERY = 6;
const WALL_W = 28,
  HATCH_W = 82,
  HATCH_H = 50,
  HATCH_FRAMES = 10;
const HATCH_TX = 20,
  HATCH_TY = 20;
// Hatch drawn: translate(20,20) → translate(41,25) → drawImage size 164×100 from (61,45)
const SPAWN_CX = HATCH_TX + HATCH_W / 2 + HATCH_W; // 143
const SPAWN_FEET_Y = HATCH_TY + HATCH_H / 2 + HATCH_H * 2; // 145

const ANIM = {
  walk: { start: [0, 0], end: [320, 20], columns: 8, rows: 1, reverse: false },
  huh: { start: [320, 0], end: [640, 20], columns: 8, rows: 1, reverse: true },
  fall: { start: [0, 80], end: [160, 100], columns: 4, rows: 1, reverse: false },
  fly: { start: [160, 80], end: [480, 110], columns: 8, rows: 1, reverse: false },
  stop: { start: [0, 120], end: [640, 140], columns: 16, rows: 1, reverse: false },
  climb: { start: [0, 160], end: [640, 185], columns: 16, rows: 1, reverse: false },
  build: { start: [0, 200], end: [640, 225], columns: 16, rows: 1, reverse: false },
  punch: { start: [0, 240], end: [640, 300], columns: 16, rows: 2, reverse: false },
  dig: { start: [0, 320], end: [320, 345], columns: 8, rows: 1, reverse: false },
} as const;

type AnimName = keyof typeof ANIM;
type TerrainKind = "wall" | "ground" | "platform";
type Terrain = { x: number; y: number; w: number; h: number; kind: TerrainKind };

function rnd(a: number, b: number) {
  return Math.random() * (b - a) + a;
}

function generateLevel(W: number, H: number): Terrain[] {
  // Pit: always present, right side of the floor
  const pitX = rnd(W * 0.52, W * 0.68);
  const floorY = H * rnd(0.76, 0.82);

  const terrain: Terrain[] = [
    { x: 0, y: 0, w: WALL_W, h: H, kind: "wall" },
    { x: W - WALL_W, y: 0, w: WALL_W, h: H, kind: "wall" },
    { x: WALL_W, y: floorY, w: pitX - WALL_W, h: H - floorY, kind: "ground" },
  ];

  // Platform 1: guaranteed, must cover the spawn point so lemmings land on it
  const p1Y = rnd(180, floorY - 70);
  const p1X = rnd(WALL_W + 4, SPAWN_CX - 30);
  const p1EndX = Math.min(rnd(SPAWN_CX + 60, pitX - 10), pitX - 10);
  terrain.push({ x: p1X, y: p1Y, w: p1EndX - p1X, h: 14, kind: "platform" });

  // Platform 2: optional, higher than platform 1
  if (Math.random() > 0.35 && p1Y > 240) {
    const p2Y = rnd(140, p1Y - 55);
    const p2X = rnd(WALL_W + 4, pitX * 0.65);
    const p2W = Math.min(rnd(W * 0.15, W * 0.38), pitX - p2X - 10);
    if (p2W > 60) terrain.push({ x: p2X, y: p2Y, w: p2W, h: 14, kind: "platform" });
  }

  return terrain;
}

function inTerrain(px: number, py: number, terrain: Terrain[]): boolean {
  return terrain.some((t) => px >= t.x && px < t.x + t.w && py >= t.y && py < t.y + t.h);
}

function spriteSize(name: AnimName) {
  const a = ANIM[name];
  return {
    w: (a.end[0] - a.start[0]) / a.columns,
    h: (a.end[1] - a.start[1] - 20 * (a.rows - 1)) / a.rows,
  };
}

export default function Lemmings() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const lemmingImg = new Image();
    lemmingImg.src = "lemmings/lemmings.png";
    const decorImg = new Image();
    decorImg.src = "lemmings/decor.png";

    let W = 0,
      H = 0;
    let terrain: Terrain[] = [];
    let lemmings: any[] = [];
    let totalSpawned = 0;
    let tick = 0;
    let timeoutId: ReturnType<typeof setTimeout>;
    let restartId: ReturnType<typeof setTimeout>;

    type HatchPhase = "opening" | "open" | "closing" | "closed";
    let hatchPhase: HatchPhase = "opening";
    let hatchFrame = 0;

    function makeLemming() {
      const { w, h } = spriteSize("fall");
      const sw = w * 2,
        sh = h * 2;
      const l: any = {
        pos: [SPAWN_CX - sw / 2, SPAWN_FEET_Y - sh],
        dir: Math.random() < 0.5 ? LEFT : RIGHT,
        anim: ANIM.fall,
        cycle: 0,
        animForward: true,
        w,
        h,
        sw,
        sh,
        vy: 0,
        state: "fall",
        alive: true,
      };

      l.setAnim = (name: AnimName) => {
        const a = ANIM[name];
        const sz = spriteSize(name);
        l.anim = a;
        l.cycle = 0;
        l.animForward = true;
        l.w = sz.w;
        l.h = sz.h;
        l.sw = sz.w * 2;
        l.sh = sz.h * 2;
      };

      l.draw = () => {
        const { w, h, sw, sh, pos, dir, anim, cycle } = l;
        const col = cycle % anim.columns;
        const row = Math.floor(cycle / anim.columns);
        const srcX = w * col + anim.start[0];
        const srcY = (h + 20) * row + anim.start[1];
        ctx.save();
        if (dir === RIGHT) {
          ctx.drawImage(lemmingImg, srcX, srcY, w, h, pos[0], pos[1], sw, sh);
        } else {
          ctx.translate(pos[0] + sw, 0);
          ctx.scale(-1, 1);
          ctx.drawImage(lemmingImg, srcX, srcY, w, h, 0, pos[1], sw, sh);
        }
        ctx.restore();

        if (anim.reverse) {
          if (l.animForward) {
            l.cycle++;
            if (l.cycle >= anim.columns * anim.rows) {
              l.animForward = false;
              l.cycle -= 2;
            }
          } else {
            l.cycle--;
            if (l.cycle < 0) {
              l.animForward = true;
              l.cycle = 1;
            }
          }
        } else {
          l.cycle = (l.cycle + 1) % (anim.columns * anim.rows);
        }
      };

      return l;
    }

    function updateLemming(l: any) {
      const { sw, sh } = l;
      const cx = l.pos[0] + sw / 2;
      const feet = l.pos[1] + sh;

      if (l.state === "walk") {
        const dx = l.dir === RIGHT ? WALK_SPEED : -WALK_SPEED;
        const nextX = l.pos[0] + dx;
        const wallX = l.dir === RIGHT ? nextX + sw + 1 : nextX - 1;
        const midY = feet - sh * 0.4;

        if (inTerrain(wallX, midY, terrain)) {
          l.dir = 1 - l.dir;
        } else {
          l.pos[0] = nextX;
        }

        if (!inTerrain(cx, feet + 1, terrain)) {
          l.state = "fall";
          l.vy = 0;
          l.setAnim("fall");
        }
      } else if (l.state === "fall") {
        l.vy = Math.min(l.vy + GRAVITY, MAX_FALL);
        l.pos[1] += l.vy;

        const newFeet = l.pos[1] + sh;
        if (inTerrain(cx, newFeet, terrain)) {
          let snapY = l.pos[1];
          let i = 0;
          while (inTerrain(cx, snapY + sh, terrain) && i++ < 30) snapY--;
          l.pos[1] = snapY;
          l.vy = 0;
          l.state = "walk";
          l.setAnim("walk");
        }

        if (l.pos[1] > H + 100) l.alive = false;
      }
    }

    function drawTerrain() {
      for (const t of terrain) {
        if (t.kind === "wall") {
          ctx.fillStyle = "rgba(80, 68, 50, 0.42)";
          ctx.fillRect(t.x, 0, t.w, H);
          ctx.fillStyle = "rgba(115, 98, 72, 0.28)";
          const edgeX = t.x === 0 ? t.w - 3 : t.x;
          ctx.fillRect(edgeX, 0, 3, H);
        } else if (t.kind === "ground") {
          ctx.fillStyle = "rgba(28, 88, 28, 0.25)";
          ctx.fillRect(t.x, t.y + 5, t.w, t.h);
          ctx.fillStyle = "rgba(55, 160, 55, 0.42)";
          ctx.fillRect(t.x, t.y, t.w, 5);
        } else {
          ctx.fillStyle = "rgba(30, 96, 30, 0.28)";
          ctx.fillRect(t.x, t.y + 4, t.w, t.h - 4);
          ctx.fillStyle = "rgba(60, 175, 60, 0.44)";
          ctx.fillRect(t.x, t.y, t.w, 4);
        }
      }
    }

    function drawHatch() {
      ctx.save();
      ctx.translate(HATCH_TX, HATCH_TY);
      ctx.translate(HATCH_W / 2, HATCH_H / 2);
      const srcY = HATCH_H * hatchFrame - (hatchFrame > 0 ? 1 : 0);
      ctx.drawImage(decorImg, 0, srcY, HATCH_W, HATCH_H, 0, 0, HATCH_W * 2, HATCH_H * 2);
      ctx.restore();

      if (hatchPhase === "opening") {
        if (hatchFrame < HATCH_FRAMES - 1) hatchFrame++;
        else hatchPhase = "open";
      } else if (hatchPhase === "closing") {
        if (hatchFrame > 0) hatchFrame--;
        else hatchPhase = "closed";
      }
    }

    function frame() {
      ctx.clearRect(0, 0, W, H);
      drawTerrain();

      if (hatchPhase === "open" && totalSpawned < MAX_LEMMINGS && tick % SPAWN_EVERY === 0) {
        lemmings.push(makeLemming());
        totalSpawned++;
        if (totalSpawned >= MAX_LEMMINGS) hatchPhase = "closing";
      }

      lemmings = lemmings.filter((l) => l.alive);
      for (const l of lemmings) {
        updateLemming(l);
        l.draw();
      }

      drawHatch();

      if (hatchPhase === "closed" && lemmings.length === 0) {
        restartId = setTimeout(startGame, 1500);
        return;
      }

      tick++;
      timeoutId = setTimeout(frame, TICK_MS);
    }

    function startGame() {
      clearTimeout(timeoutId);
      clearTimeout(restartId);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      W = canvas.width;
      H = canvas.height;
      terrain = generateLevel(W, H);
      lemmings = [];
      totalSpawned = 0;
      tick = 0;
      hatchPhase = "opening";
      hatchFrame = 0;
      frame();
    }

    startGame();

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(restartId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }} />;
}
