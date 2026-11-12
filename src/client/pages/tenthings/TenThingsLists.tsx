import { useEffect, useState, useCallback, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  getLists,
  updateList,
  deleteList,
  mergeLists,
  getCategories,
  getLanguages,
  TenThingsList,
  CategoryOption,
  Language,
} from "../../services/tenthings";
import { useApp } from "../../context/AppContext";
import { ListTable } from "./ListTable";
import { ListEditorDrawer } from "./ListEditorDrawer";
import { DeleteListsModal } from "./DeleteListsModal";


export default function TenThingsLists() {
  const { currentUser, toast, isAdmin } = useApp();
  const [searchParams, setSearchParams] = useSearchParams();

  const [lists, setLists] = useState<TenThingsList[]>([]);
  const [count, setCount] = useState(0);
  // The List open in the editor drawer, "new" for a blank one. A link with ?list=<id> opens it.
  const [openListId, setOpenListId] = useState<string | null>(() => {
    const id = searchParams.get("list");
    return id && id !== "new" ? id : null;
  });
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [searchField, setSearchField] = useState(searchParams.get("field") || "name");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [highlightedIds, setHighlightedIds] = useState<string[]>([]);
  const [categoryOptions, setCategoryOptions] = useState<CategoryOption[]>([]);
  const [languageOptions, setLanguageOptions] = useState<Language[]>([]);
  const [languageFilter, setLanguageFilter] = useState<string[]>(
    searchParams.get("lang") ? searchParams.get("lang")!.split(",") : [],
  );
  const [categoryFilter, setCategoryFilter] = useState<string[]>(
    searchParams.get("cat") ? searchParams.get("cat")!.split(",") : [],
  );
  const [qualityFilter, setQualityFilter] = useState<string[]>(
    searchParams.get("quality") ? searchParams.get("quality")!.split(",") : [],
  );
  const [sortField, setSortField] = useState<string>("date");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [myListsOnly, setMyListsOnly] = useState(false);

  const handleSortChange = (field: string) => {
    if (sortField === field) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortField(field);
      setSortDir("asc");
    }
  };
  const [deleteModalLists, setDeleteModalLists] = useState<TenThingsList[]>([]);

  const INITIAL_LIMIT = 50;
  const PAGE_LIMIT = 50;
  const prefetchRef = useRef<{ page: number; data: TenThingsList[] } | null>(null);
  const prefetchingRef = useRef(false);

  const prefetchPage = useCallback(
    async (p: number) => {
      if (prefetchingRef.current) return;
      prefetchingRef.current = true;
      try {
        const data = await getLists({
          page: p,
          limit: PAGE_LIMIT,
          search,
          language: languageFilter,
          categories: categoryFilter,
          quality: qualityFilter,
          sortBy: sortField,
          orderBy: sortDir,
          creator: myListsOnly && currentUser ? currentUser._id : undefined,
        });
        prefetchRef.current = { page: p, data: data.lists };
      } catch {
        /* ignore prefetch errors */
      }
      prefetchingRef.current = false;
    },
    [search, languageFilter, categoryFilter, qualityFilter, sortField, sortDir, myListsOnly, currentUser],
  );

  useEffect(() => {
    getCategories()
      .then(setCategoryOptions)
      .catch(() => setCategoryOptions([]));
    getLanguages()
      .then(setLanguageOptions)
      .catch(() => setLanguageOptions([]));
  }, []);

  const fetchLists = useCallback(
    async (p = 1) => {
      const limit = p === 1 ? INITIAL_LIMIT : PAGE_LIMIT;
      setLoading(true);
      try {
        let lists: TenThingsList[];
        let count: number;
        const searchOpts = searchField === "name" ? { name: search } : { search };
        // Serve prefetched data instantly if available for this page
        if (p > 1 && prefetchRef.current?.page === p) {
          lists = prefetchRef.current.data;
          count = 0; // count doesn't change on load-more
          prefetchRef.current = null;
        } else {
          const data = await getLists({
            page: p,
            limit,
            ...searchOpts,
            language: languageFilter,
            categories: categoryFilter,
            quality: qualityFilter,
            sortBy: sortField,
            orderBy: sortDir,
            creator: myListsOnly && currentUser ? currentUser._id : undefined,
          });
          lists = data.lists;
          count = data.count;
          setCount(count);
        }
        const more = lists.length === limit;
        setHasMore(more);
        if (p === 1) setLists(lists);
        else setLists((prev) => [...prev, ...lists]);
        setPage(p);
        // Start prefetching next page in background
        if (more) prefetchPage(p + 1);
      } finally {
        setLoading(false);
      }
    },
    [
      search,
      searchField,
      languageFilter,
      categoryFilter,
      qualityFilter,
      sortField,
      sortDir,
      myListsOnly,
      currentUser,
      prefetchPage,
    ],
  );

  useEffect(() => {
    fetchLists(1);
  }, [fetchLists]);

  const openList = (id: string) => {
    setOpenListId(id);
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        next.set("list", id);
        return next;
      },
      { replace: true },
    );
  };

  const handleSelectList = (list: TenThingsList) => openList(list._id);

  const handleClose = () => {
    setOpenListId(null);
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        next.delete("list");
        return next;
      },
      { replace: true },
    );
  };

  const handleAddList = () => {
    if (currentUser) openList("new");
  };

  const handleSaved = (saved: TenThingsList, created: boolean) => {
    if (created) openList(saved._id);
    fetchLists(1);
  };

  const handleFavorite = async (list: TenThingsList) => {
    try {
      const updated = await updateList({ ...list, starred: !list.starred });
      setLists((prev) => prev.map((l) => (l._id === updated._id ? updated : l)));
    } catch {
      toast("Failed to update list");
    }
  };

  const handleDeleteList = async (list: TenThingsList) => {
    setDeleteModalLists([list]);
  };

  const handleDeleteHighlighted = async () => {
    if (!highlightedIds.length) return;
    const toDelete = lists.filter((l) => highlightedIds.includes(l._id));
    setDeleteModalLists(toDelete);
  };

  const confirmDelete = async () => {
    try {
      for (const l of deleteModalLists) {
        await deleteList(l._id);
        if (openListId === l._id) handleClose();
      }
      setHighlightedIds((prev) => prev.filter((id) => !deleteModalLists.some((l) => l._id === id)));
      setDeleteModalLists([]);
      fetchLists(1);
      toast("List" + (deleteModalLists.length > 1 ? "s" : "") + " deleted");
    } catch {
      toast("Failed to delete");
    }
  };

  const handleMerge = async () => {
    if (highlightedIds.length < 2) return;
    await mergeLists(highlightedIds);
    setHighlightedIds([]);
    fetchLists(1);
    toast("Lists merged");
  };

  const toggleHighlight = (id: string) => {
    setHighlightedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  return (
    <div id="tenthings-page">
      <Helmet>
        <title>Ten Things Lists — Trivia for Telegram &amp; Discord</title>
        <meta
          name="description"
          content="Browse the trivia lists powering the Ten Things bot on Telegram and Discord, or log in to write your own."
        />
        <meta property="og:title" content="Ten Things Lists — Trivia for Telegram &amp; Discord" />
        <meta
          property="og:description"
          content="Browse the trivia lists powering the Ten Things bot on Telegram and Discord, or log in to write your own."
        />
        <meta property="og:url" content="https://belgocanadian.com/tenthings-lists" />
        <link rel="canonical" href="https://belgocanadian.com/tenthings-lists" />
      </Helmet>

      {!currentUser && <p className="text-muted">Log in to create and edit lists.</p>}

      <div className="row">
        <div className="col-md-12">
          <ListTable
            lists={lists}
            count={count}
            loading={loading}
            search={search}
            searchField={searchField}
            highlightedIds={highlightedIds}
            isAdmin={isAdmin}
            hasMore={hasMore}
            canAddList={!!currentUser}
            canViewCreator={!!currentUser}
            canOpenEditor={!!currentUser}
            filterCount={languageFilter.length + categoryFilter.length + qualityFilter.length + (myListsOnly ? 1 : 0)}
            categoryOptions={categoryOptions}
            languageOptions={languageOptions}
            languageFilter={languageFilter}
            categoryFilter={categoryFilter}
            qualityFilter={qualityFilter}
            myListsOnly={myListsOnly}
            onMyListsToggle={currentUser ? () => setMyListsOnly((v) => !v) : undefined}
            sortField={sortField}
            sortDir={sortDir}
            onSortChange={handleSortChange}
            onLanguageFilterChange={(langs) => {
              setLanguageFilter(langs);
              setSearchParams(
                (prev) => {
                  const next = new URLSearchParams(prev);
                  if (langs.length) next.set("lang", langs.join(","));
                  else next.delete("lang");
                  return next;
                },
                { replace: true },
              );
            }}
            onCategoryFilterChange={(cats) => {
              setCategoryFilter(cats);
              setSearchParams(
                (prev) => {
                  const next = new URLSearchParams(prev);
                  if (cats.length) next.set("cat", cats.join(","));
                  else next.delete("cat");
                  return next;
                },
                { replace: true },
              );
            }}
            onQualityFilterChange={(states) => {
              setQualityFilter(states);
              setSearchParams(
                (prev) => {
                  const next = new URLSearchParams(prev);
                  if (states.length) next.set("quality", states.join(","));
                  else next.delete("quality");
                  return next;
                },
                { replace: true },
              );
            }}
            onSearchChange={(s, field) => {
              setSearch(s);
              setSearchField(field);
              setSearchParams(
                (prev) => {
                  const next = new URLSearchParams(prev);
                  if (s) next.set("search", s);
                  else next.delete("search");
                  if (field && field !== "name") next.set("field", field);
                  else next.delete("field");
                  return next;
                },
                { replace: true },
              );
            }}
            onSelect={handleSelectList}
            onToggleHighlight={toggleHighlight}
            onLoadMore={() => fetchLists(page + 1)}
            onRefresh={() => fetchLists(1)}
            onAddList={handleAddList}
            onMerge={highlightedIds.length >= 2 ? handleMerge : undefined}
            onDeleteHighlighted={highlightedIds.length >= 1 ? handleDeleteHighlighted : undefined}
            highlightedCount={highlightedIds.length}
            onFavorite={handleFavorite}
            onDeleteList={handleDeleteList}
          />
        </div>

        <ListEditorDrawer
          listId={openListId}
          onClose={handleClose}
          onSaved={handleSaved}
          onDelete={(list) => setDeleteModalLists([list])}
        />
      </div>

      {deleteModalLists.length > 0 && (
        <DeleteListsModal lists={deleteModalLists} onConfirm={confirmDelete} onCancel={() => setDeleteModalLists([])} />
      )}
    </div>
  );
}
