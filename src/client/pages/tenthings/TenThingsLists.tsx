import { useEffect, useState, useCallback, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  getLists,
  getList,
  createList,
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
import { ListEditor } from "./ListEditor";
import { DeleteListsModal } from "./DeleteListsModal";

export default function TenThingsLists() {
  const { currentUser, toast } = useApp();
  const [searchParams, setSearchParams] = useSearchParams();

  const [lists, setLists] = useState<TenThingsList[]>([]);
  const [count, setCount] = useState(0);
  const [selectedList, setSelectedList] = useState<TenThingsList | null>(null);
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
  const [newList, setNewList] = useState(false);
  const [editorVisible, setEditorVisible] = useState(false);
  const [editorMounted, setEditorMounted] = useState(false);
  const [deleteModalLists, setDeleteModalLists] = useState<TenThingsList[]>([]);

  const readOnly =
    !newList &&
    (!currentUser ||
      (!currentUser.admin &&
        !!selectedList &&
        selectedList._id !== "new" &&
        String(selectedList.creator._id) !== String(currentUser._id)));

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
        });
        prefetchRef.current = { page: p, data: data.lists };
      } catch {
        /* ignore prefetch errors */
      }
      prefetchingRef.current = false;
    },
    [search, languageFilter, categoryFilter],
  );

  useEffect(() => {
    getCategories().then(setCategoryOptions);
    getLanguages().then(setLanguageOptions);
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
    [search, searchField, languageFilter, categoryFilter, prefetchPage],
  );

  useEffect(() => {
    fetchLists(1);
    const listId = searchParams.get("list");
    if (listId && listId !== "new") {
      getList(listId).then((l) => {
        setSelectedList(l);
        setNewList(false);
        setEditorMounted(true);
        requestAnimationFrame(() => requestAnimationFrame(() => setEditorVisible(true)));
      });
    }
  }, [fetchLists]);

  const handleSelectList = async (list: TenThingsList) => {
    try {
      const data = await getList(list._id);
      setSelectedList(data);
      setSearchParams({ list: data._id });
      setNewList(false);
      setEditorMounted(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setEditorVisible(true)));
    } catch {
      toast("Failed to load list");
    }
  };

  const handleClose = () => {
    setEditorVisible(false);
    setTimeout(() => {
      setSelectedList(null);
      setEditorMounted(false);
    }, 320);
    setNewList(false);
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
    if (!currentUser) return;
    setSelectedList({
      _id: "new",
      name: "",
      language: "EN",
      categories: [],
      answers: 0,
      isDynamic: true,
      creator: { _id: currentUser._id, username: currentUser.username },
      values: [],
    });
    setNewList(true);
    setSearchParams({ list: "new" });
    setEditorMounted(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setEditorVisible(true)));
  };

  const handleSave = async (listToSave?: TenThingsList) => {
    const target = listToSave ?? selectedList;
    if (!target || !currentUser) return;
    try {
      if (target._id === "new") {
        const created = await createList(currentUser._id, target);
        setSelectedList(created);
        setSearchParams({ list: created._id });
        toast("List created");
      } else {
        const updated = await updateList(target);
        setSelectedList(updated);
      }
      fetchLists(1);
    } catch {
      toast("Failed to save list");
    }
  };

  const handleDelete = async () => {
    if (!selectedList || selectedList._id === "new") return;
    setDeleteModalLists([selectedList]);
  };

  const handleFavorite = async (list: TenThingsList) => {
    try {
      const updated = await updateList({ ...list, starred: !list.starred });
      setLists((prev) => prev.map((l) => (l._id === updated._id ? updated : l)));
      if (selectedList?._id === updated._id) setSelectedList(updated);
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
        if (selectedList?._id === l._id) handleClose();
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
        <title>Ten Things — Trivia Lists for the Telegram Bot</title>
        <meta
          name="description"
          content="Browse and manage thousands of trivia lists powering the Ten Things Telegram bot. Play the daily trivia game with friends on Telegram."
        />
        <meta property="og:title" content="Ten Things — Trivia Lists for the Telegram Bot" />
        <meta
          property="og:description"
          content="Browse and manage thousands of trivia lists powering the Ten Things Telegram bot. Play the daily trivia game with friends on Telegram."
        />
        <meta property="og:url" content="https://belgocanadian.com/tenthings" />
        <link rel="canonical" href="https://belgocanadian.com/tenthings" />
      </Helmet>
      <h1>Ten Things</h1>

      <div className="well well-sm">
        <p>
          <strong>Ten Things</strong> is a daily trivia game played by thousands of people on{" "}
          <a href="https://t.me/joinchat/I1Di-1MXGXkjhgNPXi6Vfg" target="_blank" rel="noreferrer">
            Telegram
          </a>
          . Each round, players race to name ten things in a category — from countries in Europe to Oscar-winning films.
          Browse the list library below, or log in to contribute your own lists to the game.
        </p>
      </div>

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
            isAdmin={!!currentUser?.admin}
            hasMore={hasMore}
            canAddList={!!currentUser}
            canViewCreator={!!currentUser}
            canOpenEditor={!!currentUser}
            filterCount={languageFilter.length + categoryFilter.length}
            categoryOptions={categoryOptions}
            languageOptions={languageOptions}
            languageFilter={languageFilter}
            categoryFilter={categoryFilter}
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

        {editorMounted && selectedList && (
          <div>
            <ListEditor
              list={selectedList}
              active={editorVisible}
              isAdmin={!!currentUser?.admin}
              readOnly={readOnly}
              languageOptions={languageOptions}
              categoryOptions={categoryOptions}
              onClose={handleClose}
              onChange={setSelectedList}
              onBlur={(list) => handleSave(list)}
              onDelete={handleDelete}
            />
          </div>
        )}
      </div>

      {editorMounted && (
        <div id="overlay" onClick={handleClose} style={{ display: editorVisible ? "block" : "none" }} />
      )}

      {deleteModalLists.length > 0 && (
        <DeleteListsModal lists={deleteModalLists} onConfirm={confirmDelete} onCancel={() => setDeleteModalLists([])} />
      )}
    </div>
  );
}
