import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { useApp } from "../context/AppContext";
import {
  getLanguages,
  getMinigame,
  getMinigames,
  getMinigameStats,
  Language,
  MinigameDetail,
  MinigameRow,
  MinigameStats,
  MinigameTop,
} from "../services/tenthings";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

const PAGE_SIZE = 50;

const Tiles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 8px;
  margin-bottom: 16px;
`;

const Tile = styled.div`
  border: 1px solid var(--border);
  background: var(--surface);
  padding: 8px 12px;
  strong {
    display: block;
    font-size: 22px;
    font-variant-numeric: tabular-nums;
  }
  span {
    color: var(--text-muted);
    font-size: 12px;
  }
`;

const Panels = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 12px;
  margin-bottom: 20px;
`;

const Panel = styled.div`
  border: 1px solid var(--border);
  background: var(--surface);
  padding: 8px 12px;
  h4 {
    margin: 0 0 8px;
    font-size: 14px;
  }
  ol {
    margin: 0;
    padding-left: 20px;
  }
`;

const BarRow = styled.button<{ $active?: boolean }>`
  display: grid;
  grid-template-columns: 90px 1fr 56px;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 1px 0;
  border: 0;
  background: none;
  color: inherit;
  text-align: left;
  font-size: 12px;
  font-weight: ${({ $active }) => ($active ? "bold" : "normal")};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  span:first-child {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  span:last-child {
    text-align: right;
    font-variant-numeric: tabular-nums;
  }
`;

const Bar = styled.span<{ $pct: number }>`
  display: block;
  height: 10px;
  background: var(--surface-alt);
  &::after {
    content: "";
    display: block;
    height: 100%;
    width: ${({ $pct }) => $pct}%;
    background: var(--accent);
  }
`;

const LinkButton = styled.button`
  border: 0;
  padding: 0;
  background: none;
  color: var(--link);
  text-align: left;
  &:hover {
    text-decoration: underline;
  }
`;

const Toolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;
  input {
    max-width: 280px;
  }
  select {
    width: auto;
  }
`;

const SortTh = styled.th`
  cursor: pointer;
  white-space: nowrap;
`;

const Num = styled.td`
  text-align: right;
  font-variant-numeric: tabular-nums;
`;

const Drawer = styled.aside<{ $open: boolean }>`
  position: fixed;
  top: 50px;
  right: 0;
  height: calc(100% - 50px);
  width: min(520px, 100%);
  overflow-y: auto;
  background: var(--surface);
  border-left: 1px solid var(--border);
  padding: 0 16px 16px;
  z-index: 100;
  transform: translateX(${({ $open }) => ($open ? "0" : "100%")});
  transition: transform 0.25s ease-in-out;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    margin: 0 -16px 12px;
    padding: 8px 16px;
  }
  h2 {
    margin: 0;
    font-size: 20px;
  }
  dl {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 4px 12px;
  }
  dt {
    color: var(--text-muted);
    font-weight: normal;
  }
  dd {
    margin: 0;
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 99;
`;

const n = (value: number | undefined) => (value ?? 0).toLocaleString();
const pct = (value: number | null | undefined) => (value == null ? "–" : `${Math.round(value * 100)}%`);
const day = (value?: string) => (value ? new Date(value).toLocaleDateString() : "–");

const bucketLabel = (id: number | string, next?: number | string) => {
  if (typeof id === "string") return id;
  if (typeof next !== "number" || next === id + 1) return String(id);
  return `${id}–${next - 1}`;
};

function Bars({
  rows,
  active,
  onPick,
}: {
  rows: { key: string; label: string; count: number }[];
  active?: string[];
  onPick?: (key: string) => void;
}) {
  const max = Math.max(1, ...rows.map((r) => r.count));
  return (
    <>
      {rows.map((r) => (
        <BarRow
          key={r.key}
          type="button"
          disabled={!onPick}
          $active={active?.includes(r.key)}
          onClick={() => onPick?.(r.key)}
          title={r.label}
        >
          <span>{r.label}</span>
          <Bar $pct={(r.count / max) * 100} />
          <span>{n(r.count)}</span>
        </BarRow>
      ))}
    </>
  );
}

function TopList({
  title,
  rows,
  format = n,
  onOpen,
}: {
  title: string;
  rows: MinigameTop[];
  format?: (value: number) => string;
  onOpen: (id: string) => void;
}) {
  return (
    <Panel>
      <h4>{title}</h4>
      {rows.length ? (
        <ol>
          {rows.map((r) => (
            <li key={r._id}>
              <LinkButton type="button" onClick={() => onOpen(r._id)}>
                {r.answer}
              </LinkButton>{" "}
              <small className="text-muted">
                {r.language} · {format(r.value)}
              </small>
            </li>
          ))}
        </ol>
      ) : (
        <em className="text-muted">Nothing counted yet</em>
      )}
    </Panel>
  );
}

const csv = (value: string | null) => (value ? value.split(",").filter(Boolean) : []);

export default function TenThingsMinigames() {
  const { isAdmin } = useApp();
  const [params, setParams] = useSearchParams();
  const search = params.get("search") ?? "";
  const languages = csv(params.get("lang"));
  const categories = csv(params.get("cat"));
  const sortBy = params.get("sort") || "answer";
  const sortDir = params.get("dir") === "desc" ? "desc" : "asc";
  const openId = params.get("open");

  const [searchText, setSearchText] = useState(search);
  const [stats, setStats] = useState<MinigameStats | null>(null);
  const [rows, setRows] = useState<MinigameRow[]>([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [languageNames, setLanguageNames] = useState<Language[]>([]);
  const [detail, setDetail] = useState<MinigameDetail | null>(null);

  // Pages scrolled in so far, and a ticket so a late answer for an older filter is dropped.
  const live = useRef({ page: 0, ticket: 0 });

  /** Changes the URL. */
  const update = (changes: Record<string, string | null>) => {
    setParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        for (const [key, value] of Object.entries(changes)) {
          if (value) next.set(key, value);
          else next.delete(key);
        }
        next.delete("page"); // from before the table scrolled
        return next;
      },
      { replace: "open" in changes },
    );
  };

  const toggleIn = (key: "lang" | "cat", current: string[], value: string) => {
    const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
    update({ [key]: next.join(",") || null });
  };

  const loadStats = () => getMinigameStats().then(setStats);

  useEffect(() => {
    if (!isAdmin) return;
    loadStats();
    getLanguages().then(setLanguageNames);
  }, [isAdmin]);

  const loadPage = (page: number) => {
    const ticket = ++live.current.ticket;
    setLoading(true);
    getMinigames({
      search,
      language: languages,
      categories,
      sortBy,
      orderBy: sortDir,
      page,
      limit: PAGE_SIZE,
    })
      .then(({ result, count }) => {
        if (ticket !== live.current.ticket) return;
        live.current.page = page;
        setRows((prev) => (page === 1 ? result : [...prev, ...result]));
        setCount(count);
      })
      .finally(() => ticket === live.current.ticket && setLoading(false));
  };

  useEffect(() => {
    if (isAdmin) loadPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdmin, search, params.get("lang"), params.get("cat"), sortBy, sortDir]);

  const scroll = useInfiniteScroll({
    hasMore: rows.length < count,
    loading,
    onLoadMore: () => loadPage(live.current.page + 1),
  });

  // Back and forward change the search under the box.
  useEffect(() => setSearchText(search), [search]);

  // Search as you type, a moment after the typing stops.
  useEffect(() => {
    if (searchText === search) return;
    const timer = setTimeout(() => update({ search: searchText.trim() || null }), 300);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  useEffect(() => {
    if (!openId) {
      setDetail(null);
      return;
    }
    let current = true;
    getMinigame(openId)
      .then((d) => current && setDetail(d))
      .catch(() => current && update({ open: null }));
    return () => {
      current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openId]);

  if (!isAdmin) return null; // guarded by the route

  const open = (id: string | null) => update({ open: id });
  const languageName = (code: string) => languageNames.find((l) => l.code === code)?.name ?? code;

  const sortHeader = (column: string, label: string, numeric = false) => (
    <SortTh
      style={numeric ? { textAlign: "right" } : undefined}
      onClick={() =>
        update({
          sort: column,
          // Numbers start biggest first; text starts at A.
          dir: sortBy === column ? (sortDir === "asc" ? "desc" : "asc") : numeric ? "desc" : "asc",
        })
      }
    >
      {label} {sortBy === column && <i className={`fas fa-sort-${sortDir === "asc" ? "up" : "down"}`} />}
    </SortTh>
  );

  const settled = stats ? stats.solves + stats.skips : 0;

  return (
    <div className="page container-fluid">
      <h1 style={{ marginTop: 0 }}>Ten Things Minigames</h1>

      {stats && (
        <>
          <Tiles>
            <Tile>
              <strong>{n(stats.total)}</strong>
              <span>Minigames</span>
            </Tile>
            <Tile>
              <strong>{n(stats.newThisWeek)}</strong>
              <span>New this week</span>
            </Tile>
            <Tile>
              <strong>{(stats.avgLists ?? 0).toFixed(1)}</strong>
              <span>Lists per Minigame</span>
            </Tile>
            <Tile>
              <strong>{n(stats.inPlay)}</strong>
              <span>Showing in Games now</span>
            </Tile>
            <Tile>
              <strong>{n(stats.draws)}</strong>
              <span>Draws ({n(stats.played)} different)</span>
            </Tile>
            <Tile>
              <strong>{n(stats.solves)}</strong>
              <span>Answered</span>
            </Tile>
            <Tile>
              <strong>{n(stats.skips)}</strong>
              <span>Skipped</span>
            </Tile>
            <Tile>
              <strong>{settled ? pct(stats.solves / settled) : "–"}</strong>
              <span>Answered, not skipped</span>
            </Tile>
            <Tile>
              <strong>{n(stats.hints)}</strong>
              <span>Hints</span>
            </Tile>
          </Tiles>

          <Panels>
            <Panel>
              <h4>Languages</h4>
              <Bars
                rows={stats.languages.map((l) => ({ key: l._id, label: languageName(l._id), count: l.count }))}
                active={languages}
                onPick={(code) => toggleIn("lang", languages, code)}
              />
            </Panel>
            <Panel>
              <h4>Categories</h4>
              <Bars
                rows={stats.categories.map((c) => ({ key: c._id, label: c._id, count: c.count }))}
                active={categories}
                onPick={(cat) => toggleIn("cat", categories, cat)}
              />
            </Panel>
            <Panel>
              <h4>Lists per Minigame</h4>
              <Bars
                rows={stats.listCounts.map((b, i) => ({
                  key: String(b._id),
                  label: bucketLabel(b._id, stats.listCounts[i + 1]?._id),
                  count: b.count,
                }))}
              />
            </Panel>
            <TopList title="Most drawn" rows={stats.mostDrawn} onOpen={open} />
            <TopList title="Most skipped" rows={stats.mostSkipped} onOpen={open} />
            <TopList title="Most hinted" rows={stats.mostHinted} onOpen={open} />
            <TopList title="Least answered (5+ outcomes)" rows={stats.hardest} format={pct} onOpen={open} />
          </Panels>
        </>
      )}

      <Toolbar>
        <button
          className="btn btn-default"
          title="Refresh"
          onClick={() => {
            loadStats();
            loadPage(1);
          }}
        >
          <i className="fas fa-sync" />
        </button>
        <input
          className="form-control"
          type="search"
          placeholder="Search answers and lists"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <select
          className="form-control"
          value=""
          onChange={(e) => e.target.value && toggleIn("lang", languages, e.target.value)}
        >
          <option value="">Language…</option>
          {(stats?.languages ?? []).map((l) => (
            <option key={l._id} value={l._id}>
              {languageName(l._id)}
            </option>
          ))}
        </select>
        {languages.map((code) => (
          <button key={code} className="btn btn-sm btn-primary" onClick={() => toggleIn("lang", languages, code)}>
            {languageName(code)} <i className="fas fa-times" />
          </button>
        ))}
        {categories.map((cat) => (
          <button key={cat} className="btn btn-sm btn-primary" onClick={() => toggleIn("cat", categories, cat)}>
            {cat} <i className="fas fa-times" />
          </button>
        ))}
        <span className="text-muted">{loading ? "Loading…" : `${n(count)} Minigame${count === 1 ? "" : "s"}`}</span>
      </Toolbar>

      <table className="table table-striped table-condensed table-hover">
        <thead>
          <tr>
            {sortHeader("answer", "Answer")}
            {sortHeader("language", "Lang")}
            <th>Categories</th>
            {sortHeader("lists", "Lists", true)}
            {sortHeader("draws", "Draws", true)}
            {sortHeader("solves", "Answered", true)}
            {sortHeader("skips", "Skipped", true)}
            {sortHeader("hints", "Hints", true)}
            {sortHeader("solveRate", "Answer rate", true)}
            {sortHeader("date", "Created", true)}
          </tr>
        </thead>
        <tbody>
          {rows.map((m) => (
            <tr key={m._id} style={{ cursor: "pointer" }} onClick={() => open(m._id)}>
              <td>{m.answer}</td>
              <td>{m.language}</td>
              <td>
                <small>{m.categories.filter((c) => !c.includes(".")).join(", ")}</small>
              </td>
              <Num>{m.listCount}</Num>
              <Num>{n(m.draws)}</Num>
              <Num>{n(m.solves)}</Num>
              <Num>{n(m.skips)}</Num>
              <Num>{n(m.hints)}</Num>
              <Num>{pct(m.solveRate)}</Num>
              <Num>{day(m.createdAt)}</Num>
            </tr>
          ))}
          {!loading && rows.length === 0 && (
            <tr>
              <td colSpan={10}>
                <em className="text-muted">No Minigames match</em>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {loading && rows.length > 0 && (
        <div style={{ textAlign: "center", padding: 12 }}>
          <i className="fas fa-spinner fa-spin" /> Loading...
        </div>
      )}
      {scroll.supported ? (
        <div ref={scroll.sentinel} aria-hidden="true" />
      ) : (
        !loading &&
        rows.length < count && (
          <button className="btn btn-default btn-block" onClick={() => loadPage(live.current.page + 1)}>
            Load more
          </button>
        )
      )}

      {openId && <Overlay onClick={() => open(null)} />}
      <Drawer $open={!!openId && !!detail} aria-hidden={!openId}>
        {detail && (
          <>
            <header>
              <h2>{detail.answer}</h2>
              <button className="btn btn-default" onClick={() => open(null)} title="Close">
                <i className="fas fa-times" />
              </button>
            </header>
            <dl>
              <dt>Language</dt>
              <dd>{languageName(detail.language)}</dd>
              <dt>Categories</dt>
              <dd>
                {detail.categories.map((c) => (
                  <LinkButton
                    key={c}
                    type="button"
                    style={{ marginRight: 8 }}
                    onClick={() => update({ cat: c, open: null })}
                  >
                    {c}
                  </LinkButton>
                ))}
              </dd>
              <dt>Draws</dt>
              <dd>{n(detail.draws)}</dd>
              <dt>Answered</dt>
              <dd>{n(detail.solves)}</dd>
              <dt>Skipped</dt>
              <dd>{n(detail.skips)}</dd>
              <dt>Answer rate</dt>
              <dd>{pct(detail.solves + detail.skips ? detail.solves / (detail.solves + detail.skips) : null)}</dd>
              <dt>Hints</dt>
              <dd>{n(detail.hints)}</dd>
              <dt>In Games now</dt>
              <dd>{n(detail.inPlay)}</dd>
              <dt>Created</dt>
              <dd>{day(detail.createdAt)}</dd>
              <dt>Last updated</dt>
              <dd>{day(detail.updatedAt)}</dd>
            </dl>
            <h4>
              From {detail.lists.length} List{detail.lists.length === 1 ? "" : "s"}{" "}
              <small className="text-muted">(a Game shows 10 at random)</small>
            </h4>
            <ul>
              {detail.lists.map((l) => (
                <li key={l.name}>
                  {l._id ? (
                    <Link to={`/tenthings-lists?list=${l._id}`}>{l.name}</Link>
                  ) : (
                    <Link
                      to={`/tenthings-lists?search=${encodeURIComponent(l.name)}&lang=${detail.language}`}
                      title="No List has this exact name any more; search for it"
                    >
                      {l.name} <i className="fas fa-search" />
                    </Link>
                  )}{" "}
                  {l.starred && <i className="fas fa-star text-warning" title="Starred" />}
                </li>
              ))}
            </ul>
            <button
              className="btn btn-default btn-sm"
              onClick={() => {
                setSearchText(detail.answer);
                update({ search: detail.answer, open: null });
              }}
            >
              <i className="fas fa-search" /> Search for this answer
            </button>
          </>
        )}
      </Drawer>
    </div>
  );
}
