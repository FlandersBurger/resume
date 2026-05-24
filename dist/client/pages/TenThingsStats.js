"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const chart_js_1 = require("chart.js");
const react_chartjs_2_1 = require("react-chartjs-2");
const tenthings_1 = require("../services/tenthings");
const AppContext_1 = require("../context/AppContext");
chart_js_1.Chart.register(chart_js_1.CategoryScale, chart_js_1.LinearScale, chart_js_1.BarElement, chart_js_1.LineElement, chart_js_1.PointElement, chart_js_1.Title, chart_js_1.Tooltip, chart_js_1.Legend, chart_js_1.Filler);
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
function uniq(arr) {
    return [...new Set(arr)];
}
function TenThingsStats() {
    const { currentUser } = (0, AppContext_1.useApp)();
    const [playStats, setPlayStats] = (0, react_1.useState)([]);
    const [langStats, setLangStats] = (0, react_1.useState)([]);
    const [gameStats, setGameStats] = (0, react_1.useState)([]);
    const [categoryStats, setCategoryStats] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        if (!currentUser?.admin)
            return;
        (0, tenthings_1.getPlayStats)().then((d) => setPlayStats(d || []));
        (0, tenthings_1.getListLanguageStats)().then((d) => setLangStats(d || []));
        (0, tenthings_1.getGameStats)().then((d) => setGameStats(d || []));
        (0, tenthings_1.getListCategoryStats)().then((d) => setCategoryStats(d || []));
    }, [currentUser]);
    if (!currentUser?.admin)
        return <h2 className="text-danger">Admin only</h2>;
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
    const langYears = uniq(langStats.map((r) => r._id.year)).sort();
    const langLanguages = uniq(langStats.map((r) => r._id.language)).sort();
    const langData = {
        labels: langYears.map(String),
        datasets: langLanguages.map((lang, i) => ({
            label: lang,
            data: langYears.map((year) => langStats.find((r) => r._id.language === lang && r._id.year === year)?.count ?? null),
            borderColor: PALETTE[i % PALETTE.length],
            backgroundColor: PALETTE[i % PALETTE.length] + "33",
            tension: 0.3,
            spanGaps: true,
        })),
    };
    const gameYears = uniq(gameStats.map((r) => r._id.year)).sort();
    const gameLanguages = uniq(gameStats.map((r) => r._id.language)).sort();
    const gameData = {
        labels: gameYears.map(String),
        datasets: gameLanguages.map((lang, i) => ({
            label: lang,
            data: gameYears.map((year) => gameStats.find((r) => r._id.language === lang && r._id.year === year)?.count ?? null),
            borderColor: PALETTE[i % PALETTE.length],
            backgroundColor: PALETTE[i % PALETTE.length] + "33",
            tension: 0.3,
            spanGaps: true,
        })),
    };
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
    const lineOpts = (title) => ({
        responsive: true,
        plugins: { legend: { position: "top" }, title: { display: true, text: title } },
    });
    return (<div className="page container-fluid">
      <h1 style={{ marginTop: 0 }}>Ten Things Stats</h1>

      <div className="row" style={{ marginBottom: 32 }}>
        <div className="col-md-6">
          <react_chartjs_2_1.Line data={playData} options={lineOpts("Unique Players per Month")}/>
        </div>
        <div className="col-md-6">
          <react_chartjs_2_1.Line data={listsPlayedData} options={lineOpts("Lists Played per Month")}/>
        </div>
      </div>

      <div className="row" style={{ marginBottom: 32 }}>
        <div className="col-md-6">
          <react_chartjs_2_1.Line data={langData} options={lineOpts("Lists Created by Language (per Year)")}/>
        </div>
        <div className="col-md-6">
          <react_chartjs_2_1.Line data={gameData} options={lineOpts("Games Played by Language (per Year)")}/>
        </div>
      </div>

      <div className="row" style={{ marginBottom: 32 }}>
        <div className="col-md-12">
          <react_chartjs_2_1.Bar data={catData} options={{
            indexAxis: "y",
            responsive: true,
            plugins: {
                legend: { display: false },
                title: { display: true, text: "Top 30 Categories by List Count" },
            },
        }}/>
        </div>
      </div>
    </div>);
}
exports.default = TenThingsStats;
//# sourceMappingURL=TenThingsStats.js.map