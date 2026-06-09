import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useApp } from "../context/AppContext";
import { getHighscore, setHighscore } from "../services/games";

const COLS = 16;
const ROWS = 16;
const MINE_COUNT = 40;
const NAVBAR_H = 50;

// Classic minesweeper number colors — kept for gameplay clarity
const NUM_COLORS = ["", "#1565c0", "#2e7d32", "#c62828", "#283593", "#6a1515", "#00695c", "#212121", "#555"];

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
  background: #111;
`;

const Canvas = styled.canvas`
  display: block;
  touch-action: none;
`;

function computeLayout(): Layout {
  const availW = window.innerWidth;
  const availH = window.innerHeight - NAVBAR_H;
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

function faIcon(ctx: CanvasRenderingContext2D, icon: string, x: number, y: number, size: number, color: string) {
  ctx.fillStyle = color;
  ctx.font = `900 ${size}px "Font Awesome 5 Pro"`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(icon, x, y);
}

const LCD_W_RATIO = 2.5;
const LCD_H_RATIO = 0.88;

function drawLCD(ctx: CanvasRenderingContext2D, x: number, y: number, value: string, cell: number) {
  const lw = Math.round(cell * LCD_W_RATIO),
    lh = Math.round(cell * LCD_H_RATIO);
  ctx.fillStyle = "#000";
  ctx.fillRect(x, y, lw, lh);
  ctx.fillStyle = "#fff";
  const fs = Math.max(8, Math.round(cell * 0.46));
  ctx.font = `${fs}px "Press Start 2P", monospace`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(value, x + lw / 2, y + lh / 2 + 1);
}

function drawFace(ctx: CanvasRenderingContext2D, gameState: GameState, w: number, headerH: number) {
  const cx = w / 2,
    cy = headerH / 2;
  const fr = headerH * 0.28;

  ctx.fillStyle = "#e8e8e8";
  ctx.beginPath();
  ctx.arc(cx, cy, fr, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#555";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.strokeStyle = "#222";
  ctx.lineWidth = 1.5;

  if (gameState === "won") {
    const gw = fr * 0.65,
      gh = fr * 0.35;
    ctx.fillStyle = "#222";
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
    ctx.fillStyle = "#222";
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
  const actionsRef = useRef({ doReveal: (_x: number, _y: number) => {}, doChord: (_x: number, _y: number) => {} });
  const { currentUser } = useApp();
  const bestTimeRef = useRef(0);

  useEffect(() => {
    if (!currentUser) return;
    getHighscore("minesweeper", currentUser._id)
      .then((t: number) => {
        bestTimeRef.current = t ?? 0;
      })
      .catch(() => {});
  }, [currentUser?._id]);

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

      // Header — flat white with a single bottom border
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, w, headerH);
      ctx.fillStyle = "#ddd";
      ctx.fillRect(0, headerH - 1, w, 1);

      // Grid background
      ctx.fillStyle = "#f5f5f5";
      ctx.fillRect(0, headerH, w, h - headerH);

      const secs =
        gameState === "playing" && startTime ? Math.min(999, Math.floor((Date.now() - startTime) / 1000)) : elapsed;

      const lcdW = Math.round(cell * LCD_W_RATIO),
        lcdH = Math.round(cell * LCD_H_RATIO);
      const lcdY = Math.round(headerH / 2 - lcdH / 2);
      drawLCD(ctx, 8, lcdY, String(Math.max(0, minesLeft)).padStart(3, "0"), cell);
      drawLCD(ctx, w - lcdW - 8, lcdY, String(secs).padStart(3, "0"), cell);

      const best = bestTimeRef.current;
      if (best > 0) {
        const smallFs = Math.max(6, Math.round(cell * 0.22));
        ctx.fillStyle = "#555";
        ctx.font = `${smallFs}px "Press Start 2P", monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.fillText(`BEST ${String(best).padStart(3, "0")}`, w - lcdW / 2 - 8, lcdY + lcdH + 3);
      }

      drawFace(ctx, gameState, w, headerH);

      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const x = c * cell,
            y = headerH + r * cell;
          const cd = grid[r][c];

          if (cd.revealed) {
            ctx.fillStyle = cd.mine ? "#fee2e2" : "#e9e9e9";
            ctx.fillRect(x, y, cell, cell);
            ctx.strokeStyle = "#d1d1d1";
            ctx.lineWidth = 1;
            ctx.strokeRect(x + 0.5, y + 0.5, cell - 1, cell - 1);

            if (cd.mine) {
              faIcon(ctx, "", x + cell / 2, y + cell / 2 + 1, Math.round(cell * 0.5), "#991b1b");
            } else if (cd.adjacent > 0) {
              ctx.fillStyle = NUM_COLORS[cd.adjacent];
              ctx.font = `bold ${Math.round(cell * 0.52)}px sans-serif`;
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillText(String(cd.adjacent), x + cell / 2, y + cell / 2 + 1);
            }
          } else {
            ctx.fillStyle = "#fff";
            ctx.fillRect(x, y, cell, cell);
            ctx.strokeStyle = "#ccc";
            ctx.lineWidth = 1;
            ctx.strokeRect(x + 0.5, y + 0.5, cell - 1, cell - 1);

            if (cd.flagged) {
              faIcon(ctx, "", x + cell / 2, y + cell / 2 + 1, Math.round(cell * 0.46), "#dc2626");
            }
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

  useEffect(() => {
    const canvas = canvasRef.current!;
    let timer: ReturnType<typeof setTimeout> | null = null;
    let startX = 0,
      startY = 0,
      moved = false;

    const onTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      moved = false;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      timer = setTimeout(() => {
        if (!moved) actionsRef.current.doChord(startX, startY);
        timer = null;
      }, 450);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (Math.hypot(e.touches[0].clientX - startX, e.touches[0].clientY - startY) > 8) {
        moved = true;
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      e.preventDefault();
      if (timer) {
        clearTimeout(timer);
        timer = null;
        const t = e.changedTouches[0];
        actionsRef.current.doReveal(t.clientX, t.clientY);
      }
    };

    canvas.addEventListener("touchstart", onTouchStart, { passive: false });
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });
    canvas.addEventListener("touchend", onTouchEnd, { passive: false });
    return () => {
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
      if (timer) clearTimeout(timer);
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

    const t = s.elapsed;
    if (currentUser && t > 0 && (bestTimeRef.current === 0 || t < bestTimeRef.current)) {
      bestTimeRef.current = t;
      setHighscore("minesweeper", currentUser._id, t).catch(() => {});
    }
  };

  actionsRef.current.doReveal = doReveal;
  actionsRef.current.doChord = doChord;

  return (
    <Wrapper>
      <Canvas
        ref={canvasRef}
        onClick={(e) => doReveal(e.clientX, e.clientY)}
        onContextMenu={(e) => {
          e.preventDefault();
          doChord(e.clientX, e.clientY);
        }}
      />
    </Wrapper>
  );
}
