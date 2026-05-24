import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { getPlayStats, getListLanguageStats, getGameStats, getListCategoryStats } from "../services/tenthings";
import { useApp } from "../context/AppContext";

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, Filler);

type PlayRow = { month: number; year: number; uniquePlayers: number; listsPlayed: number };
type YearLangRow = { _id: { language: string; year: number }; count: number };
type CategoryRow = { _id: string; count: number };

const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const PALETTE = [
  "#4e79a7",
  "#f28e2b",
  "#e15759",
  "#76b7b2",
  "#59a14f",
  "#edc948",
  "#b07aa1",
  "#ff9da7",
  "#9c755f",
  "#bab0ac",
];

function uniq<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

export default function TenThingsStats() {
  const { currentUser } = useApp();
  const [playStats, setPlayStats] = useState<PlayRow[]>([]);
  const [langStats, setLangStats] = useState<YearLangRow[]>([]);
  const [gameStats, setGameStats] = useState<YearLangRow[]>([]);
  const [categoryStats, setCategoryStats] = useState<CategoryRow[]>([]);

  useEffect(() => {
    if (!currentUser?.admin) return;
    getPlayStats().then((d) => setPlayStats(d || []));
    getListLanguageStats().then((d) => setLangStats(d || []));
    getGameStats().then((d) => setGameStats(d || []));
    getListCategoryStats().then((d) => setCategoryStats(d || []));
  }, [currentUser]);

  if (!currentUser?.admin) return <h2 className="text-danger">Admin only</h2>;

  // ── Play stats: line chart, x=month, series=year ──
  const playYears = uniq(playStats.map((r) => r.year)).sort();
  const playData = {
    labels: MONTH_LABELS,
    datasets: playYears.map((year, i) => ({
      label: String(year),
      data: MONTH_LABELS.map((_, mi) => {
        const row = playStats.find((r) => r.year === year && r.month === mi + 1);
        return row ? Math.round(row.uniquePlayers) : null;
      }),
      borderColor: PALETTE[i % PALETTE.length],
      backgroundColor: PALETTE[i % PALETTE.length] + "33",
      tension: 0.3,
      spanGaps: true,
    })),
  };

  const listsPlayedData = {
    labels: MONTH_LABELS,
    datasets: playYears.map((year, i) => ({
      label: String(year),
      data: MONTH_LABELS.map((_, mi) => {
        const row = playStats.find((r) => r.year === year && r.month === mi + 1);
        return row ? Math.round(row.listsPlayed) : null;
      }),
      borderColor: PALETTE[i % PALETTE.length],
      backgroundColor: PALETTE[i % PALETTE.length] + "33",
      tension: 0.3,
      spanGaps: true,
    })),
  };

  // ── Language stats: line chart, x=year, series=language ──
  const langYears = uniq(langStats.map((r) => r._id.year)).sort();
  const langLanguages = uniq(langStats.map((r) => r._id.language)).sort();
  const langData = {
    labels: langYears.map(String),
    datasets: langLanguages.map((lang, i) => ({
      label: lang,
      data: langYears.map(
        (year) => langStats.find((r) => r._id.language === lang && r._id.year === year)?.count ?? null,
      ),
      borderColor: PALETTE[i % PALETTE.length],
      backgroundColor: PALETTE[i % PALETTE.length] + "33",
      tension: 0.3,
      spanGaps: true,
    })),
  };

  // ── Game stats: line chart, x=year, series=language ──
  const gameYears = uniq(gameStats.map((r) => r._id.year)).sort();
  const gameLanguages = uniq(gameStats.map((r) => r._id.language)).sort();
  const gameData = {
    labels: gameYears.map(String),
    datasets: gameLanguages.map((lang, i) => ({
      label: lang,
      data: gameYears.map(
        (year) => gameStats.find((r) => r._id.language === lang && r._id.year === year)?.count ?? null,
      ),
      borderColor: PALETTE[i % PALETTE.length],
      backgroundColor: PALETTE[i % PALETTE.length] + "33",
      tension: 0.3,
      spanGaps: true,
    })),
  };

  // ── Category stats: horizontal bar, top 30 ──
  const topCats = [...categoryStats].sort((a, b) => b.count - a.count).slice(0, 30);
  const catData = {
    labels: topCats.map((r) => r._id),
    datasets: [
      {
        label: "Lists",
        data: topCats.map((r) => r.count),
        backgroundColor: topCats.map((_, i) => PALETTE[i % PALETTE.length] + "cc"),
      },
    ],
  };

  const lineOpts = (title: string) => ({
    responsive: true,
    plugins: { legend: { position: "top" as const }, title: { display: true, text: title } },
  });

  return (
    <div className="page container-fluid">
      <h1 style={{ marginTop: 0 }}>Ten Things Stats</h1>

      <div className="row" style={{ marginBottom: 32 }}>
        <div className="col-md-6">
          <Line data={playData} options={lineOpts("Unique Players per Month")} />
        </div>
        <div className="col-md-6">
          <Line data={listsPlayedData} options={lineOpts("Lists Played per Month")} />
        </div>
      </div>

      <div className="row" style={{ marginBottom: 32 }}>
        <div className="col-md-6">
          <Line data={langData} options={lineOpts("Lists Created by Language (per Year)")} />
        </div>
        <div className="col-md-6">
          <Line data={gameData} options={lineOpts("Games Played by Language (per Year)")} />
        </div>
      </div>

      <div className="row" style={{ marginBottom: 32 }}>
        <div className="col-md-12">
          <Bar
            data={catData}
            options={{
              indexAxis: "y",
              responsive: true,
              plugins: {
                legend: { display: false },
                title: { display: true, text: "Top 30 Categories by List Count" },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
