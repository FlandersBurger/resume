import { useEffect, useRef } from "react";

const LEFT = 0;
const RIGHT = 1;

const actions: Record<string, any> = {
  walk: { start: [0, 0], end: [320, 20], columns: 8, rows: 1, reverse: false },
  huh: { start: [320, 0], end: [640, 20], columns: 8, rows: 1, reverse: true },
  fall: { start: [0, 80], end: [160, 100], columns: 4, rows: 1, reverse: false },
  fly: { start: [160, 80], end: [480, 110], columns: 8, rows: 1, reverse: false },
  stop: { start: [0, 120], end: [640, 140], columns: 16, rows: 1, reverse: false },
  climb: { start: [0, 160], end: [640, 185], columns: 16, rows: 1, reverse: false },
  build: { start: [0, 200], end: [640, 225], columns: 16, rows: 1, reverse: false },
  punch: { start: [0, 240], end: [640, 300], columns: 16, rows: 2, reverse: false },
  dig: { start: [0, 320], end: [320, 345], columns: 8, rows: 1, reverse: false },
};

export default function Lemmings() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const lemmingsImage = new Image();
    lemmingsImage.src = "lemmings/lemmings.png";
    const decorImage = new Image();
    decorImage.src = "lemmings/decor.png";

    const lemmings: Record<string, any> = {};
    let started = false;
    let timeout: ReturnType<typeof setTimeout>;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function makeLemming(initAction: string) {
      const actionDef = actions[initAction];
      const l: any = {
        position: [
          Math.floor(Math.random() * (canvas.width - 200)) + 100,
          Math.floor(Math.random() * (canvas.height - 200)) + 100,
        ],
        direction: Math.random() * 2 > 1 ? LEFT : RIGHT,
        action: actionDef,
        cycle: 0,
        animation: true,
        width: (actionDef.end[0] - actionDef.start[0]) / actionDef.columns,
        height: (actionDef.end[1] - actionDef.start[1] - 20 * (actionDef.rows - 1)) / actionDef.rows,
      };
      l.act = (name: string) => {
        const a = actions[name];
        l.action = a;
        l.cycle = 0;
        l.width = (a.end[0] - a.start[0]) / a.columns;
        l.height = (a.end[1] - a.start[1] - 20 * (a.rows - 1)) / a.rows;
        l.animation = true;
      };
      l.move = () => {
        ctx.save();
        ctx.translate(l.position[0], l.position[1]);
        ctx.translate(l.width / 2, l.height / 2);
        if (l.direction === LEFT) ctx.scale(-1, 1);
        const column = l.cycle % l.action.columns;
        const row = Math.floor(l.cycle / l.action.columns);
        ctx.drawImage(
          lemmingsImage,
          l.width * column + l.action.start[0],
          (l.height + 20) * row + l.action.start[1],
          l.width,
          l.height,
          0,
          0,
          l.width * 2,
          l.height * 2,
        );
        ctx.restore();
        if (l.action.reverse) {
          if (l.animation) {
            l.cycle++;
            if (l.cycle >= l.action.columns * l.action.rows) {
              l.animation = false;
              l.cycle--;
            }
          } else {
            l.cycle--;
            if (l.cycle < 0) {
              l.animation = true;
              l.cycle = 0;
            }
          }
        } else {
          l.cycle++;
          if (l.cycle >= l.action.columns * l.action.rows) l.cycle = 0;
        }
      };
      return l;
    }

    function makeHatch() {
      const a = { start: [0, 0], end: [82, 500], columns: 1, rows: 10 };
      const h: any = {
        position: [20, 20],
        action: a,
        width: (a.end[0] - a.start[0]) / a.columns,
        height: (a.end[1] - a.start[1]) / a.rows,
        cycle: 0,
      };
      h.open = () => {
        ctx.save();
        ctx.translate(h.position[0], h.position[1]);
        ctx.translate(h.width / 2, h.height / 2);
        const column = started ? h.cycle % h.action.columns : 0;
        const row = started ? Math.floor(h.cycle / h.action.columns) : 0;
        if (started && h.cycle < 9) h.cycle++;
        ctx.drawImage(
          decorImage,
          h.width * column + h.action.start[0],
          h.height * row + h.action.start[1] - 1,
          h.width,
          h.height,
          0,
          0,
          h.width * 2,
          h.height * 2,
        );
        ctx.restore();
      };
      return h;
    }

    function spawnLemming() {
      Object.keys(actions).forEach((action) => {
        lemmings[Math.round(Math.random() * 100000000)] = makeLemming(action);
      });
    }

    const hatch = makeHatch();
    spawnLemming();

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (started) {
        for (const i in lemmings) lemmings[i].move();
      }
      hatch.open();
      started = true;
      timeout = setTimeout(draw, 150);
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    draw();

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} id="lemmings-page" style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }} />;
}
