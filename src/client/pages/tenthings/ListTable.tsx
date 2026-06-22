import { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { TenThingsList, CategoryOption, Language } from "../../services/tenthings";
import { TenThingsTableContainer } from "./SharedStyles";

const ListRowTooltip = styled.div`
  position: fixed;
  background: #333;
  color: #fff;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.85em;
  max-width: 320px;
  z-index: 9000;
  pointer-events: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
  white-space: pre-wrap;
`;

const ListRowTooltipArrow = styled.div`
  position: absolute;
  top: -10px;
  left: 12px;
  border: 5px solid transparent;
  border-bottom-color: #333;
`;

const Toolbar = styled.div`
  display: flex;
  margin-bottom: 8px;

  .toolbar-actions {
    display: flex;
    flex: 0 0 auto;
  }

  .toolbar-search {
    display: flex;
    flex: 1 1 auto;
    min-width: 0;
  }

  @media (max-width: 767px) {
    flex-wrap: wrap;

    .toolbar-actions {
      width: 100%;
      margin-bottom: 4px;
    }

    .toolbar-search {
      width: 100%;
    }
  }
`;

const ListsTableWrapper = styled(TenThingsTableContainer)`
  tr:hover {
    font-weight: bold;
    cursor: pointer;
  }
`;

interface Props {
  lists: TenThingsList[];
  count: number;
  loading: boolean;
  search: string;
  searchField: string;
  highlightedIds: string[];
  highlightedCount: number;
  isAdmin: boolean;
  hasMore: boolean;
  canAddList: boolean;
  canViewCreator?: boolean;
  canOpenEditor?: boolean;
  filterCount?: number;
  categoryOptions?: CategoryOption[];
  languageOptions?: Language[];
  languageFilter?: string[];
  categoryFilter?: string[];
  sortField: string;
  sortDir: "asc" | "desc";
  onSortChange: (field: string) => void;
  myListsOnly?: boolean;
  onMyListsToggle?: () => void;
  onLanguageFilterChange?: (langs: string[]) => void;
  onCategoryFilterChange?: (cats: string[]) => void;
  onSearchChange: (s: string, field: string) => void;
  onSelect: (list: TenThingsList) => void;
  onToggleHighlight: (id: string) => void;
  onLoadMore: () => void;
  onRefresh: () => void;
  onAddList: () => void;
  onMerge?: () => void;
  onDeleteHighlighted?: () => void;
  onFavorite?: (list: TenThingsList) => void;
  onDeleteList?: (list: TenThingsList) => void;
}

export function ListTable({
  lists,
  count,
  loading,
  search,
  searchField,
  highlightedIds,
  highlightedCount,
  isAdmin,
  hasMore,
  canAddList,
  canViewCreator = true,
  canOpenEditor = true,
  filterCount = 0,
  categoryOptions = [],
  languageOptions = [],
  languageFilter = [],
  categoryFilter = [],
  sortField,
  sortDir,
  onSortChange,
  myListsOnly = false,
  onMyListsToggle,
  onLanguageFilterChange,
  onCategoryFilterChange,
  onSearchChange,
  onSelect,
  onToggleHighlight,
  onLoadMore,
  onRefresh,
  onAddList,
  onMerge,
  onDeleteHighlighted,
  onFavorite,
  onDeleteList,
}: Props) {
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const sortIcon = (field: string) =>
    sortField === field ? (
      <i
        className={`fas ${sortDir === "asc" ? "fa-sort-alpha-down" : "fa-sort-alpha-down-alt"}`}
        style={{ marginLeft: 4 }}
      />
    ) : null;
  const fmt = (d?: string) => {
    if (!d) return "";
    const date = new Date(d);
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("en", { month: "short" });
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
  const pct = (n?: number) => (n != null ? `${Math.round(n * 100)}%` : "");

  const getCategoryLabel = (cats: string[]) => {
    if (!cats || cats.length === 0) return "";
    const mainCats = cats.filter((c) => !c.includes("."));
    return mainCats
      .sort()
      .map((cat) => {
        const opt = categoryOptions.find((o) => o.value === cat);
        const label = opt?.label ?? cat;
        const subCats = cats
          .filter((c) => c.startsWith(cat + "."))
          .map((c) => opt?.subcategories?.find((s) => s.value === c)?.label ?? c.split(".")[1]);
        return label + (subCats.length > 0 ? ` (${subCats.sort().join(", ")})` : "");
      })
      .join(", ");
  };

  const handleSearchField = (field: string) => {
    onSearchChange(search, field);
  };

  return (
    <div>
      {tooltip &&
        createPortal(
          <ListRowTooltip style={{ left: tooltip.x + 12, top: tooltip.y + 16 }}>
            <ListRowTooltipArrow />
            {tooltip.text}
          </ListRowTooltip>,
          document.body,
        )}
      {/* Toolbar */}
      <Toolbar>
        <div className="toolbar-actions btn-group">
          {canAddList && (
            <button className="btn btn-default" onClick={onAddList}>
              <i className="far fa-sparkles" /> New list
            </button>
          )}
          {isAdmin && onMerge && (
            <button className="btn btn-primary" onClick={onMerge} title="Edit selected lists">
              <i className="far fa-edit" /> ({highlightedCount})
            </button>
          )}
          {isAdmin && onMerge && (
            <button className="btn btn-info" onClick={onMerge} title="Merge selected lists">
              <i className="far fa-code-merge" /> ({highlightedCount})
            </button>
          )}
          {isAdmin && onDeleteHighlighted && (
            <button className="btn btn-danger" onClick={onDeleteHighlighted} title="Delete selected lists">
              <i className="fas fa-trash-alt" /> ({highlightedCount})
            </button>
          )}
          <button
            className={`btn ${showFilters || filterCount > 0 ? "btn-primary" : "btn-default"}`}
            title="Filter"
            onClick={() => setShowFilters((v) => !v)}
          >
            <i className="fas fa-filter" /> {filterCount > 0 ? `(${filterCount})` : ""}
          </button>
        </div>
        <div className="toolbar-search btn-group">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            value={search}
            onChange={(e) => onSearchChange(e.target.value, searchField)}
            style={{ flex: 1, minWidth: 0 }}
          />
          {search && (
            <button className="btn btn-default" onClick={() => onSearchChange("", searchField)}>
              <i className="fas fa-times" />
            </button>
          )}
          <button
            className={`btn ${searchField === "all" ? "btn-primary" : "btn-default"}`}
            onClick={() => handleSearchField("all")}
            title="Search in names, blurbs and values"
          >
            <i className="fas fa-search" /> All
          </button>
          <button
            className={`btn ${searchField === "name" ? "btn-primary" : "btn-default"}`}
            onClick={() => handleSearchField("name")}
            title="Search only in list names"
          >
            <i className="fas fa-search" /> Name
          </button>
          <button className="btn btn-default" onClick={onRefresh} title="Refresh">
            <i className={`fas fa-sync${loading ? " fa-spin" : ""}`} />
          </button>
        </div>
      </Toolbar>

      {showFilters && (
        <div className="panel panel-default" style={{ marginBottom: 8 }}>
          <div className="panel-body" style={{ padding: "8px 12px" }}>
            {onMyListsToggle && (
              <div style={{ marginBottom: 8 }}>
                <strong style={{ marginRight: 8 }}>Lists:</strong>
                <button
                  className={`btn btn-xs ${myListsOnly ? "btn-primary" : "btn-default"}`}
                  style={{ margin: "2px 3px" }}
                  onClick={onMyListsToggle}
                >
                  <i className="fas fa-user" /> My Lists
                </button>
              </div>
            )}
            {languageOptions.length > 0 && (
              <div style={{ marginBottom: 8 }}>
                <strong style={{ marginRight: 8 }}>Language:</strong>
                {languageOptions.map((lang) => {
                  const active = languageFilter.includes(lang.code);
                  return (
                    <button
                      key={lang.code}
                      className={`btn btn-xs ${active ? "btn-primary" : "btn-default"}`}
                      style={{ margin: "2px 3px" }}
                      onClick={() => {
                        const next = active
                          ? languageFilter.filter((c) => c !== lang.code)
                          : [...languageFilter, lang.code];
                        onLanguageFilterChange?.(next);
                      }}
                    >
                      {lang.native || lang.name || lang.code}
                    </button>
                  );
                })}
                {languageFilter.length > 0 && (
                  <button
                    className="btn btn-xs btn-danger"
                    style={{ margin: "2px 3px" }}
                    onClick={() => onLanguageFilterChange?.([])}
                  >
                    <i className="fas fa-times" /> Clear
                  </button>
                )}
              </div>
            )}
            {categoryOptions.length > 0 && (
              <div>
                <strong style={{ marginRight: 8 }}>Category:</strong>
                {categoryOptions.map((cat) => {
                  const active = categoryFilter.includes(cat.value);
                  return (
                    <button
                      key={cat.value}
                      className={`btn btn-xs ${active ? "btn-info" : "btn-default"}`}
                      style={{ margin: "2px 3px" }}
                      onClick={() => {
                        const next = active
                          ? categoryFilter.filter((c) => c !== cat.value)
                          : [...categoryFilter, cat.value];
                        onCategoryFilterChange?.(next);
                      }}
                    >
                      {cat.label}
                    </button>
                  );
                })}
                {categoryFilter.length > 0 && (
                  <button
                    className="btn btn-xs btn-danger"
                    style={{ margin: "2px 3px" }}
                    onClick={() => onCategoryFilterChange?.([])}
                  >
                    <i className="fas fa-times" /> Clear
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      <ListsTableWrapper>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              {isAdmin && <th style={{ width: 24 }} />}
              {isAdmin && (
                <th style={{ width: 24 }}>
                  <i className="fas fa-star-half-alt" />
                </th>
              )}
              <th style={{ cursor: "pointer" }} onClick={() => onSortChange("name")}>
                Name{" "}
                <span style={{ fontWeight: "lighter", fontSize: "small" }}>
                  ({lists.length}/{count})
                </span>
                {sortIcon("name")}
              </th>
              <th
                className="hidden-sm visible-md visible-lg"
                style={{ cursor: "pointer" }}
                onClick={() => onSortChange("categories")}
              >
                Categories{sortIcon("categories")}
              </th>
              <th
                className="hidden-sm hidden-md visible-lg"
                style={{ cursor: "pointer" }}
                onClick={() => onSortChange("creator")}
              >
                {canViewCreator && <>Creator{sortIcon("creator")}</>}
              </th>
              <th
                className="hidden-xs visible-sm visible-md visible-lg"
                style={{ cursor: "pointer" }}
                onClick={() => onSortChange("date")}
              >
                Created{sortIcon("date")}
              </th>
              <th
                className="hidden-sm hidden-md visible-lg"
                style={{ cursor: "pointer" }}
                onClick={() => onSortChange("modifyDate")}
              >
                Updated{sortIcon("modifyDate")}
              </th>
              <th style={{ cursor: "pointer" }} onClick={() => onSortChange("answers")}>
                <i className="fas fa-list-ol" title="Values" />
                {sortIcon("answers")}
              </th>
              <th
                className="hidden-xs visible-sm visible-md visible-lg"
                style={{ cursor: "pointer" }}
                onClick={() => onSortChange("language")}
              >
                <i className="fas fa-language" title="Language" />
                {sortIcon("language")}
              </th>
              <th
                className="hidden-sm visible-md visible-lg"
                style={{ cursor: "pointer" }}
                onClick={() => onSortChange("upvotes")}
              >
                <i className="fas fa-thumbs-up text-success" title="Upvotes" />
                {sortIcon("upvotes")}
              </th>
              <th
                className="hidden-sm visible-md visible-lg"
                style={{ cursor: "pointer" }}
                onClick={() => onSortChange("downvotes")}
              >
                <i className="fas fa-thumbs-down text-danger" title="Downvotes" />
                {sortIcon("downvotes")}
              </th>
              <th
                className="hidden-sm visible-md visible-lg"
                style={{ cursor: "pointer" }}
                onClick={() => onSortChange("likeRatio")}
              >
                <i className="fas fa-heart" title="Like Ratio" />
                {sortIcon("likeRatio")}
              </th>
              <th
                className="hidden-sm visible-md visible-lg"
                style={{ cursor: "pointer" }}
                onClick={() => onSortChange("plays")}
              >
                <i className="fas fa-play" title="Plays" />
                {sortIcon("plays")}
              </th>
              <th
                className="hidden-sm visible-md visible-lg"
                style={{ cursor: "pointer" }}
                onClick={() => onSortChange("playRatio")}
              >
                <i className="fas fa-percentage" title="Play Ratio" />
                {sortIcon("playRatio")}
              </th>
              <th
                className="hidden-sm visible-md visible-lg"
                style={{ cursor: "pointer" }}
                onClick={() => onSortChange("bans")}
              >
                <i className="fas fa-ban" title="Bans" />
                {sortIcon("bans")}
              </th>
              {isAdmin && (
                <th className="hidden-sm hidden-md visible-lg">
                  <i className="fas fa-exclamation-triangle text-warning" title="Low Quality" />
                </th>
              )}
              {isAdmin && <th className="hidden-xs visible-sm visible-md visible-lg" style={{ width: 32 }} />}
            </tr>
          </thead>
          <tbody>
            {lists.map((list) => (
              <tr
                key={list._id}
                className={highlightedIds.includes(list._id) ? "success" : ""}
                style={{ cursor: canOpenEditor ? "pointer" : "default" }}
                onMouseEnter={
                  list.description
                    ? (e) => setTooltip({ text: list.description!, x: e.clientX, y: e.clientY })
                    : undefined
                }
                onMouseMove={
                  list.description
                    ? (e) => setTooltip((t) => (t ? { ...t, x: e.clientX, y: e.clientY } : t))
                    : undefined
                }
                onMouseLeave={list.description ? () => setTooltip(null) : undefined}
              >
                {isAdmin && (
                  <td
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleHighlight(list._id);
                    }}
                  >
                    <i className={highlightedIds.includes(list._id) ? "fas fa-check-square" : "far fa-square"} />
                  </td>
                )}
                {isAdmin && (
                  <td
                    onClick={(e) => {
                      e.stopPropagation();
                      onFavorite?.(list);
                    }}
                  >
                    <i className={list.starred ? "fas fa-star" : "far fa-star"} style={{ cursor: "pointer" }} />
                  </td>
                )}
                <td onClick={() => canOpenEditor && onSelect(list)}>{list.name}</td>
                <td className="hidden-sm visible-md visible-lg" onClick={() => canOpenEditor && onSelect(list)}>
                  {getCategoryLabel(list.categories)}
                </td>
                <td className="hidden-sm hidden-md visible-lg" onClick={() => canOpenEditor && onSelect(list)}>
                  {canViewCreator ? list.creator?.username : null}
                </td>
                <td
                  className="hidden-xs visible-sm visible-md visible-lg"
                  onClick={() => canOpenEditor && onSelect(list)}
                >
                  {fmt(list.date)}
                </td>
                <td className="hidden-sm hidden-md visible-lg" onClick={() => canOpenEditor && onSelect(list)}>
                  {fmt(list.modifyDate)}
                </td>
                <td onClick={() => canOpenEditor && onSelect(list)}>{list.answers}</td>
                <td
                  className="hidden-xs visible-sm visible-md visible-lg"
                  onClick={() => canOpenEditor && onSelect(list)}
                >
                  {list.language}
                </td>
                <td className="hidden-sm visible-md visible-lg" onClick={() => canOpenEditor && onSelect(list)}>
                  {list.upvotes != null && <span className="label label-success">{list.upvotes}</span>}
                </td>
                <td className="hidden-sm visible-md visible-lg" onClick={() => canOpenEditor && onSelect(list)}>
                  {list.downvotes != null && <span className="label label-danger">{list.downvotes}</span>}
                </td>
                <td className="hidden-sm visible-md visible-lg" onClick={() => canOpenEditor && onSelect(list)}>
                  {pct(list.likeRatio)}
                </td>
                <td className="hidden-sm visible-md visible-lg" onClick={() => canOpenEditor && onSelect(list)}>
                  {list.plays ?? ""}
                </td>
                <td className="hidden-sm visible-md visible-lg" onClick={() => canOpenEditor && onSelect(list)}>
                  {pct(list.playRatio)}
                </td>
                <td className="hidden-sm visible-md visible-lg" onClick={() => canOpenEditor && onSelect(list)}>
                  {list.bans ?? ""}
                </td>
                {isAdmin && (
                  <td className="hidden-sm hidden-md visible-lg">
                    {list.lowQuality && <i className="fas fa-exclamation-triangle text-warning" />}
                  </td>
                )}
                {isAdmin && (
                  <td
                    className="hidden-xs visible-sm visible-md visible-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteList?.(list);
                    }}
                  >
                    <i className="fas fa-trash-alt delete" style={{ cursor: "pointer" }} />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </ListsTableWrapper>

      {loading && (
        <div style={{ textAlign: "center", padding: 12 }}>
          <i className="fas fa-spinner fa-spin" /> Loading...
        </div>
      )}
      {!loading && hasMore && (
        <button className="btn btn-default btn-block" onClick={onLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
}
