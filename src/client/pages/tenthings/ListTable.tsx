import { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { TenThingsList, CategoryOption, Language } from "../../services/tenthings";
import { TenThingsTableContainer } from "./SharedStyles";
import { ListFilter, activeFilterCount, toggleSort } from "./listQuery";
import { categoryLabel, formatDate, formatPct } from "./format";
import { DIFFICULTIES, FREQUENCIES } from "@utils/list-suggestions";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";

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

interface FilterOption {
  value: string;
  label: string;
  icon?: string;
  title?: string;
}

const NOT_SET: FilterOption = { value: "none", label: "Not set", icon: "far fa-circle" };

const STARRED_OPTIONS: FilterOption[] = [
  { value: "starred", label: "Starred", icon: "fas fa-star text-warning" },
  { value: "unstarred", label: "Unstarred", icon: "far fa-star" },
];

const DIFFICULTY_ICONS = ["fas fa-smile-beam", "fas fa-grin-beam-sweat", "fas fa-dizzy"];
const DIFFICULTY_OPTIONS: FilterOption[] = [
  ...DIFFICULTIES.map((label, i) => ({ value: String(i), label, icon: DIFFICULTY_ICONS[i] })),
  NOT_SET,
];

const FREQUENCY_ICONS = ["fas fa-rabbit-fast", "fas fa-turtle", "fas fa-snowflake", "fas fa-chimney"];
const FREQUENCY_OPTIONS: FilterOption[] = [
  ...FREQUENCIES.map((label, i) => ({ value: String(i), label, icon: FREQUENCY_ICONS[i] })),
  NOT_SET,
];

const QUALITY_OPTIONS: FilterOption[] = [
  { value: "high", label: "High", icon: "fas fa-award text-success" },
  { value: "neutral", label: "Neutral", icon: "far fa-circle" },
  { value: "low", label: "Low", icon: "fas fa-exclamation-triangle text-warning" },
];

const STATUS_OPTIONS: FilterOption[] = [
  { value: "enabled", label: "Enabled", icon: "fas fa-check text-success" },
  { value: "disabled", label: "Disabled", icon: "fas fa-ban text-danger" },
];

/** One row of toggle buttons in the filter panel, with a Clear button once any is on. */
function FilterRow({
  label,
  options,
  selected,
  onChange,
  activeClass = "btn-primary",
}: {
  label: string;
  options: FilterOption[];
  selected: string[];
  onChange: (next: string[]) => void;
  activeClass?: string;
}) {
  return (
    <div style={{ marginBottom: 8 }}>
      <strong style={{ marginRight: 8 }}>{label}:</strong>
      {options.map((opt) => {
        const active = selected.includes(opt.value);
        return (
          <button
            key={opt.value}
            className={`btn btn-xs ${active ? activeClass : "btn-default"}`}
            style={{ margin: "2px 3px" }}
            title={opt.title}
            onClick={() => onChange(active ? selected.filter((v) => v !== opt.value) : [...selected, opt.value])}
          >
            {opt.icon && <i className={opt.icon} />} {opt.label}
          </button>
        );
      })}
      {selected.length > 0 && (
        <button className="btn btn-xs btn-danger" style={{ margin: "2px 3px" }} onClick={() => onChange([])}>
          <i className="fas fa-times" /> Clear
        </button>
      )}
    </div>
  );
}

interface Props {
  lists: TenThingsList[];
  count: number;
  loading: boolean;
  /** Search, filters and sort; change them through onFilterChange. */
  filter: ListFilter;
  onFilterChange: (patch: Partial<ListFilter>) => void;
  /** Shows the "My lists" filter. */
  canFilterMine?: boolean;
  highlightedIds: string[];
  highlightedCount: number;
  isAdmin: boolean;
  hasMore: boolean;
  canAddList: boolean;
  canViewCreator?: boolean;
  canOpenEditor?: boolean;
  categoryOptions?: CategoryOption[];
  languageOptions?: Language[];
  onSelect: (list: TenThingsList) => void;
  onToggleHighlight: (id: string) => void;
  onLoadMore: () => void;
  onRefresh: () => void;
  onAddList: () => void;
  /** Sets categories on the selected lists. */
  onEditHighlighted?: () => void;
  /** Asks to merge the selected lists. */
  onMerge?: () => void;
  onDeleteHighlighted?: () => void;
  onFavorite?: (list: TenThingsList) => void;
  onDeleteList?: (list: TenThingsList) => void;
}

export function ListTable({
  lists,
  count,
  loading,
  filter,
  onFilterChange,
  canFilterMine = false,
  highlightedIds,
  highlightedCount,
  isAdmin,
  hasMore,
  canAddList,
  canViewCreator = true,
  canOpenEditor = true,
  categoryOptions = [],
  languageOptions = [],
  onSelect,
  onToggleHighlight,
  onLoadMore,
  onRefresh,
  onAddList,
  onEditHighlighted,
  onMerge,
  onDeleteHighlighted,
  onFavorite,
  onDeleteList,
}: Props) {
  const scroll = useInfiniteScroll({ hasMore, loading, onLoadMore });
  const {
    search,
    searchField,
    languages: languageFilter,
    categories: categoryFilter,
    quality: qualityFilter,
    starred: starredFilter,
    difficulty: difficultyFilter,
    frequency: frequencyFilter,
    enabled: enabledFilter,
    sortBy: sortField,
    sortDir,
    mine: myListsOnly,
  } = filter;
  const filterCount = activeFilterCount(filter);
  const onSortChange = (column: string) => onFilterChange(toggleSort(filter, column));
  const onSearchChange = (s: string, field: ListFilter["searchField"]) =>
    onFilterChange({ search: s, searchField: field });
  const onMyListsToggle = canFilterMine ? () => onFilterChange({ mine: !myListsOnly }) : undefined;

  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const sortIcon = (field: string) =>
    sortField === field ? (
      <i
        className={`fas ${sortDir === "asc" ? "fa-sort-alpha-down" : "fa-sort-alpha-down-alt"}`}
        style={{ marginLeft: 4 }}
      />
    ) : null;
  const handleSearchField = (field: ListFilter["searchField"]) => {
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
          {isAdmin && onEditHighlighted && (
            <button className="btn btn-primary" onClick={onEditHighlighted} title="Edit selected lists">
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
              <FilterRow
                label="Language"
                options={languageOptions.map((lang) => ({
                  value: lang.code,
                  label: lang.code.toUpperCase(),
                  title: lang.native || lang.name,
                }))}
                selected={languageFilter}
                onChange={(languages) => onFilterChange({ languages })}
              />
            )}
            {categoryOptions.length > 0 && (
              <FilterRow
                label="Category"
                options={categoryOptions}
                selected={categoryFilter}
                onChange={(categories) => onFilterChange({ categories })}
                activeClass="btn-info"
              />
            )}
            <FilterRow
              label="Starred"
              options={STARRED_OPTIONS}
              selected={starredFilter}
              onChange={(starred) => onFilterChange({ starred })}
            />
            <FilterRow
              label="Difficulty"
              options={DIFFICULTY_OPTIONS}
              selected={difficultyFilter}
              onChange={(difficulty) => onFilterChange({ difficulty })}
            />
            <FilterRow
              label="Frequency"
              options={FREQUENCY_OPTIONS}
              selected={frequencyFilter}
              onChange={(frequency) => onFilterChange({ frequency })}
            />
            {isAdmin && (
              <>
                <FilterRow
                  label="Quality"
                  options={QUALITY_OPTIONS}
                  selected={qualityFilter}
                  onChange={(quality) => onFilterChange({ quality })}
                />
                <FilterRow
                  label="Status"
                  options={STATUS_OPTIONS}
                  selected={enabledFilter}
                  onChange={(enabled) => onFilterChange({ enabled })}
                />
              </>
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
              <th className="hidden-sm visible-md visible-lg">
                <i className="fas fa-check" title="Completed" />
              </th>
              <th className="hidden-sm visible-md visible-lg">
                <i className="fas fa-forward" title="Skipped" />
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
                <th
                  className="hidden-sm hidden-md visible-lg"
                  style={{ cursor: "pointer" }}
                  onClick={() => onSortChange("quality")}
                  title="Quality"
                >
                  <i className="fas fa-award" />
                  {sortIcon("quality")}
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
                  {categoryLabel(list.categories ?? [], categoryOptions)}
                </td>
                <td className="hidden-sm hidden-md visible-lg" onClick={() => canOpenEditor && onSelect(list)}>
                  {canViewCreator ? list.creator?.username : null}
                </td>
                <td
                  className="hidden-xs visible-sm visible-md visible-lg"
                  onClick={() => canOpenEditor && onSelect(list)}
                >
                  {formatDate(list.date)}
                </td>
                <td className="hidden-sm hidden-md visible-lg" onClick={() => canOpenEditor && onSelect(list)}>
                  {formatDate(list.modifyDate)}
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
                  {formatPct(list.likeRatio)}
                </td>
                <td className="hidden-sm visible-md visible-lg" onClick={() => canOpenEditor && onSelect(list)}>
                  {list.completedRounds ?? ""}
                </td>
                <td className="hidden-sm visible-md visible-lg" onClick={() => canOpenEditor && onSelect(list)}>
                  {list.skippedRounds ?? ""}
                </td>
                <td className="hidden-sm visible-md visible-lg" onClick={() => canOpenEditor && onSelect(list)}>
                  {list.bans ?? ""}
                </td>
                {isAdmin && (
                  <td className="hidden-sm hidden-md visible-lg">
                    {list.lowQuality ? (
                      <i className="fas fa-exclamation-triangle text-warning" title="Low Quality" />
                    ) : list.highQuality ? (
                      <i className="fas fa-award text-success" title="High Quality" />
                    ) : null}
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
      {scroll.supported ? (
        <div ref={scroll.sentinel} aria-hidden="true" />
      ) : (
        !loading &&
        hasMore && (
          <button className="btn btn-default btn-block" onClick={onLoadMore}>
            Load more
          </button>
        )
      )}
    </div>
  );
}
