import { useEffect, useRef } from "react";
import styled from "styled-components";

const COLS = 16;
const ROWS = 16;
const MINE_COUNT = 40;
const NAVBAR_H = 50;

const NUM_COLORS = ["", "#0000ff", "#008000", "#ff0000", "#000080", "#800000", "#008080", "#000", "#808080"];

type Cell = { mine: boolean; revealed: boolean; flagged: boolean; adjacent: number };
type GameState = "idle" | "playing" | "won" | "lost";

type State = {
  grid: Cell[][];
  gameState: GameState;
  minesLeft: number;
  startTime: number | null;
  elapsed: number;
};

type Layout = { cell: number; headerH: number; w: number; h: number };

const Wrapper = styled.div`
  position: fixed;
  top: ${NAVBAR_H}px;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #c0c0c0;
`;

const Canvas = styled.canvas`
  display: block;
  touch-action: none;
`;

function computeLayout(): Layout {
  const availW = window.innerWidth;
  const availH = window.innerHeight - NAVBAR_H;
  // header takes 2 cell heights; leave a little padding
  const cell = Math.max(14, Math.floor(Math.min(availW / COLS, availH / (ROWS + 2))));
  const headerH = cell * 2;
  return { cell, headerH, w: COLS * cell, h: ROWS * cell + headerH };
}

function makeGrid(): Cell[][] {
  return Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => ({ mine: false, revealed: false, flagged: false, adjacent: 0 })),
  );
}

function placeMines(grid: Cell[][], safeR: number, safeC: number) {
  const positions: [number, number][] = [];
  for (let r = 0; r < ROWS; r++)
    for (let c = 0; c < COLS; c++) if (Math.abs(r - safeR) > 1 || Math.abs(c - safeC) > 1) positions.push([r, c]);

  for (let i = positions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [positions[i], positions[j]] = [positions[j], positions[i]];
  }
  for (let i = 0; i < MINE_COUNT; i++) grid[positions[i][0]][positions[i][1]].mine = true;

  for (let r = 0; r < ROWS; r++)
    for (let c = 0; c < COLS; c++)
      if (!grid[r][c].mine) {
        let count = 0;
        for (let dr = -1; dr <= 1; dr++)
          for (let dc = -1; dc <= 1; dc++) {
            const nr = r + dr,
              nc = c + dc;
            if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && grid[nr][nc].mine) count++;
          }
        grid[r][c].adjacent = count;
      }
}

function revealCell(grid: Cell[][], r: number, c: number) {
  if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return;
  const cell = grid[r][c];
  if (cell.revealed || cell.flagged) return;
  cell.revealed = true;
  if (!cell.mine && cell.adjacent === 0)
    for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) revealCell(grid, r + dr, c + dc);
}

function drawLCD(ctx: CanvasRenderingContext2D, x: number, y: number, value: string, cell: number) {
  const lw = Math.round(cell * 1.34),
    lh = Math.round(cell * 0.75);
  ctx.fillStyle = "#000";
  ctx.fillRect(x, y, lw, lh);
  ctx.fillStyle = "#f00";
  ctx.font = `bold ${Math.round(cell * 0.625)}px monospace`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(value, x + lw / 2, y + lh / 2);
}

function drawMine(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) {
  ctx.fillStyle = "#000";
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2;
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI * 2) / 8;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a) * r * 0.7, cy + Math.sin(a) * r * 0.7);
    ctx.lineTo(cx + Math.cos(a) * r * 1.5, cy + Math.sin(a) * r * 1.5);
    ctx.stroke();
  }
  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.arc(cx - r * 0.3, cy - r * 0.3, r * 0.25, 0, Math.PI * 2);
  ctx.fill();
}

function drawFlag(ctx: CanvasRenderingContext2D, x: number, y: number, cell: number) {
  const cx = x + cell / 2;
  const bot = y + cell - Math.round(cell * 0.22);
  ctx.fillStyle = "#000";
  ctx.fillRect(cx - 1, y + Math.round(cell * 0.16), 2, bot - (y + Math.round(cell * 0.16)));
  ctx.fillStyle = "#f00";
  ctx.beginPath();
  ctx.moveTo(cx + 1, y + Math.round(cell * 0.16));
  ctx.lineTo(cx + Math.round(cell * 0.41), y + Math.round(cell * 0.34));
  ctx.lineTo(cx + 1, y + Math.round(cell * 0.53));
  ctx.fill();
  ctx.fillStyle = "#000";
  ctx.fillRect(cx - Math.round(cell * 0.16), bot, Math.round(cell * 0.31), 2);
}

function drawFace(ctx: CanvasRenderingContext2D, gameState: GameState, w: number, headerH: number) {
  const cx = w / 2,
    cy = headerH / 2;
  const fr = headerH * 0.28;

  ctx.fillStyle = "#ff0";
  ctx.beginPath();
  ctx.arc(cx, cy, fr, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.strokeStyle = "#000";
  ctx.lineWidth = 1.5;

  if (gameState === "won") {
    const gw = fr * 0.65,
      gh = fr * 0.35;
    ctx.fillStyle = "#000";
    ctx.fillRect(cx - fr * 0.75, cy - fr * 0.4, gw, gh);
    ctx.fillRect(cx + fr * 0.12, cy - fr * 0.4, gw, gh);
    ctx.beginPath();
    ctx.arc(cx, cy + fr * 0.12, fr * 0.56, 0, Math.PI);
    ctx.stroke();
  } else if (gameState === "lost") {
    const eo = fr * 0.5,
      ey = cy - fr * 0.31,
      ex = fr * 0.25;
    [
      [cx - eo, ey, cx - ex, ey + fr * 0.25],
      [cx - ex, ey, cx - eo, ey + fr * 0.25],
      [cx + ex, ey, cx + eo, ey + fr * 0.25],
      [cx + eo, ey, cx + ex, ey + fr * 0.25],
    ].forEach(([x1, y1, x2, y2]) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    });
    ctx.beginPath();
    ctx.arc(cx, cy + fr * 0.62, fr * 0.5, Math.PI, 0);
    ctx.stroke();
  } else {
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(cx - fr * 0.31, cy - fr * 0.19, fr * 0.12, 0, Math.PI * 2);
    ctx.arc(cx + fr * 0.31, cy - fr * 0.19, fr * 0.12, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx, cy + fr * 0.25, fr * 0.5, 0, Math.PI);
    ctx.stroke();
  }
}

export default function Minesweeper() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<State>({
    grid: makeGrid(),
    gameState: "idle",
    minesLeft: MINE_COUNT,
    startTime: null,
    elapsed: 0,
  });
  const layoutRef = useRef<Layout>(computeLayout());
  const rafRef = useRef(0);
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchMoved = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current!;

    const applyLayout = () => {
      const layout = computeLayout();
      layoutRef.current = layout;
      canvas.width = layout.w;
      canvas.height = layout.h;
    };

    applyLayout();

    const draw = () => {
      const ctx = canvas.getContext("2d")!;
      const { grid, gameState, minesLeft, startTime, elapsed } = stateRef.current;
      const { cell, headerH, w, h } = layoutRef.current;

      ctx.fillStyle = "#c0c0c0";
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, w, 3);
      ctx.fillRect(0, 0, 3, headerH);
      ctx.fillStyle = "#808080";
      ctx.fillRect(0, headerH - 3, w, 3);
      ctx.fillRect(w - 3, 0, 3, headerH);

      const secs =
        gameState === "playing" && startTime ? Math.min(999, Math.floor((Date.now() - startTime) / 1000)) : elapsed;

      const lcdW = Math.round(cell * 1.34),
        lcdH = Math.round(cell * 0.75);
      const lcdY = headerH / 2 - lcdH / 2;
      drawLCD(ctx, 8, lcdY, String(Math.max(0, minesLeft)).padStart(3, "0"), cell);
      drawLCD(ctx, w - lcdW - 8, lcdY, String(secs).padStart(3, "0"), cell);
      drawFace(ctx, gameState, w, headerH);

      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const x = c * cell,
            y = headerH + r * cell;
          const cd = grid[r][c];

          if (cd.revealed) {
            ctx.fillStyle = cd.mine ? "#f88" : "#bdbdbd";
            ctx.fillRect(x, y, cell, cell);
            ctx.strokeStyle = "#999";
            ctx.lineWidth = 0.5;
            ctx.strokeRect(x + 0.5, y + 0.5, cell - 1, cell - 1);

            if (cd.mine) {
              drawMine(ctx, x + cell / 2, y + cell / 2, cell * 0.28);
            } else if (cd.adjacent > 0) {
              ctx.fillStyle = NUM_COLORS[cd.adjacent];
              ctx.font = `bold ${Math.round(cell * 0.55)}px sans-serif`;
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillText(String(cd.adjacent), x + cell / 2, y + cell / 2 + 1);
            }
          } else {
            ctx.fillStyle = "#bdbdbd";
            ctx.fillRect(x, y, cell, cell);
            ctx.fillStyle = "#fff";
            ctx.fillRect(x, y, cell, 2);
            ctx.fillRect(x, y, 2, cell);
            ctx.fillStyle = "#808080";
            ctx.fillRect(x, y + cell - 2, cell, 2);
            ctx.fillRect(x + cell - 2, y, 2, cell);
            if (cd.flagged) drawFlag(ctx, x, y, cell);
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    window.addEventListener("resize", applyLayout);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", applyLayout);
    };
  }, []);

  const coordsFromPoint = (clientX: number, clientY: number): [number, number] | null => {
    const rect = canvasRef.current!.getBoundingClientRect();
    const { cell, headerH } = layoutRef.current;
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    if (y < headerH) return null;
    const col = Math.floor(x / cell);
    const row = Math.floor((y - headerH) / cell);
    if (row < 0 || row >= ROWS || col < 0 || col >= COLS) return null;
    return [row, col];
  };

  const isOnFace = (clientX: number, clientY: number): boolean => {
    const rect = canvasRef.current!.getBoundingClientRect();
    const { w, headerH } = layoutRef.current;
    return Math.hypot(clientX - rect.left - w / 2, clientY - rect.top - headerH / 2) < headerH * 0.3;
  };

  const doReveal = (clientX: number, clientY: number) => {
    const s = stateRef.current;

    if (isOnFace(clientX, clientY)) {
      s.grid = makeGrid();
      s.gameState = "idle";
      s.minesLeft = MINE_COUNT;
      s.startTime = null;
      s.elapsed = 0;
      return;
    }

    if (s.gameState === "won" || s.gameState === "lost") return;

    const pos = coordsFromPoint(clientX, clientY);
    if (!pos) return;
    const [row, col] = pos;
    const cd = s.grid[row][col];
    if (cd.revealed || cd.flagged) return;

    if (s.gameState === "idle") {
      placeMines(s.grid, row, col);
      s.gameState = "playing";
      s.startTime = Date.now();
    }

    revealCell(s.grid, row, col);

    if (cd.mine) {
      for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) if (s.grid[r][c].mine) s.grid[r][c].revealed = true;
      s.elapsed = s.startTime ? Math.min(999, Math.floor((Date.now() - s.startTime) / 1000)) : 0;
      s.startTime = null;
      s.gameState = "lost";
      return;
    }

    checkWin(s);
  };

  const doFlag = (clientX: number, clientY: number) => {
    const s = stateRef.current;
    if (s.gameState !== "playing") return;
    const pos = coordsFromPoint(clientX, clientY);
    if (!pos) return;
    const [row, col] = pos;
    const cd = s.grid[row][col];
    if (cd.revealed) return;
    cd.flagged = !cd.flagged;
    s.minesLeft += cd.flagged ? -1 : 1;
  };

  const doChord = (clientX: number, clientY: number) => {
    const s = stateRef.current;
    if (s.gameState !== "playing") return;
    const pos = coordsFromPoint(clientX, clientY);
    if (!pos) return;
    const [row, col] = pos;
    const cd = s.grid[row][col];

    if (cd.revealed && cd.adjacent > 0) {
      let flagCount = 0;
      for (let dr = -1; dr <= 1; dr++)
        for (let dc = -1; dc <= 1; dc++) {
          const nr = row + dr,
            nc = col + dc;
          if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && s.grid[nr][nc].flagged) flagCount++;
        }
      if (flagCount !== cd.adjacent) return;

      let hitMine = false;
      for (let dr = -1; dr <= 1; dr++)
        for (let dc = -1; dc <= 1; dc++) {
          const nr = row + dr,
            nc = col + dc;
          if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS) continue;
          const nb = s.grid[nr][nc];
          if (!nb.revealed && !nb.flagged) {
            revealCell(s.grid, nr, nc);
            if (nb.mine) hitMine = true;
          }
        }

      if (hitMine) {
        for (let r = 0; r < ROWS; r++)
          for (let c = 0; c < COLS; c++) if (s.grid[r][c].mine) s.grid[r][c].revealed = true;
        s.elapsed = s.startTime ? Math.min(999, Math.floor((Date.now() - s.startTime) / 1000)) : 0;
        s.startTime = null;
        s.gameState = "lost";
        return;
      }

      checkWin(s);
      return;
    }

    doFlag(clientX, clientY);
  };

  const checkWin = (s: State) => {
    if (!s.grid.every((row) => row.every((cd) => cd.mine || cd.revealed))) return;
    s.elapsed = s.startTime ? Math.min(999, Math.floor((Date.now() - s.startTime) / 1000)) : 0;
    s.startTime = null;
    s.gameState = "won";
    for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) if (s.grid[r][c].mine) s.grid[r][c].flagged = true;
    s.minesLeft = 0;
  };

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => doReveal(e.clientX, e.clientY);

  const handleRightClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    doChord(e.clientX, e.clientY);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    touchMoved.current = false;
    const { clientX, clientY } = e.touches[0];
    longPressTimer.current = setTimeout(() => {
      if (!touchMoved.current) doChord(clientX, clientY);
      longPressTimer.current = null;
    }, 400);
  };

  const handleTouchMove = () => {
    touchMoved.current = true;
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
      const t = e.changedTouches[0];
      doReveal(t.clientX, t.clientY);
    }
  };

  return (
    <Wrapper>
      <Canvas
        ref={canvasRef}
        onClick={handleClick}
        onContextMenu={handleRightClick}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />
    </Wrapper>
  );
}
