import { useEffect, useRef, useState } from "react";
import { getPlayStats, getListLanguageStats, getGameStats } from "../api/tenthings";
import { useApp } from "../context/AppContext";

function BarChart({ data, label }: { data: { label: string; value: number }[]; label: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !data.length) return;
    const ctx = canvas.getContext("2d")!;
    const maxVal = Math.max(...data.map((d) => d.value));
    const w = canvas.width;
    const h = canvas.height;
    const barW = w / data.length;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#eceff1";
    ctx.fillRect(0, 0, w, h);
    data.forEach((d, i) => {
      const barH = maxVal > 0 ? (d.value / maxVal) * (h - 30) : 0;
      ctx.fillStyle = "#2196f3";
      ctx.fillRect(i * barW + 2, h - barH - 20, barW - 4, barH);
      ctx.fillStyle = "#333";
      ctx.font = "10px sans-serif";
      ctx.fillText(d.label.substring(0, 3), i * barW + 2, h - 5);
    });
  }, [data]);
  return (
    <div style={{ marginBottom: 20 }}>
      <h5>{label}</h5>
      <canvas ref={canvasRef} width={600} height={200} style={{ width: "100%", height: "auto" }} />
    </div>
  );
}

export default function TenThingsStats() {
  const { currentUser } = useApp();
  const [playStats, setPlayStats] = useState<any[]>([]);
  const [langStats, setLangStats] = useState<any[]>([]);
  const [gameStats, setGameStats] = useState<any[]>([]);

  useEffect(() => {
    if (!currentUser?.admin) return;
    getPlayStats().then((d) => setPlayStats(d || []));
    getListLanguageStats().then((d) => setLangStats(d || []));
    getGameStats().then((d) => setGameStats(d || []));
  }, [currentUser]);

  if (!currentUser?.admin) return <h2 className="text-danger">Admin only</h2>;

  return (
    <div>
      <h1>TenThings Stats</h1>
      <BarChart
        label="Play Stats"
        data={playStats.map((d) => ({ label: d._id || d.date || String(d.x), value: d.count || d.y || 0 }))}
      />
      <BarChart
        label="Language Stats"
        data={langStats.map((d) => ({ label: d._id || d.language || String(d.x), value: d.count || d.y || 0 }))}
      />
      <BarChart
        label="Game Stats"
        data={gameStats.map((d) => ({ label: d._id || d.date || String(d.x), value: d.count || d.y || 0 }))}
      />
    </div>
  );
}
