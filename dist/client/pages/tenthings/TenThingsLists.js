"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const tenthings_1 = require("../../services/tenthings");
const AppContext_1 = require("../../context/AppContext");
const ListTable_1 = require("./ListTable");
const ListEditor_1 = require("./ListEditor");
const DeleteListsModal_1 = require("./DeleteListsModal");
function TenThingsLists() {
    const { currentUser, toast } = (0, AppContext_1.useApp)();
    const [searchParams, setSearchParams] = (0, react_router_dom_1.useSearchParams)();
    const [lists, setLists] = (0, react_1.useState)([]);
    const [count, setCount] = (0, react_1.useState)(0);
    const [selectedList, setSelectedList] = (0, react_1.useState)(null);
    const [search, setSearch] = (0, react_1.useState)(searchParams.get("search") || "");
    const [searchField, setSearchField] = (0, react_1.useState)(searchParams.get("field") || "name");
    const [page, setPage] = (0, react_1.useState)(1);
    const [hasMore, setHasMore] = (0, react_1.useState)(false);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [highlightedIds, setHighlightedIds] = (0, react_1.useState)([]);
    const [categoryOptions, setCategoryOptions] = (0, react_1.useState)([]);
    const [languageOptions, setLanguageOptions] = (0, react_1.useState)([]);
    const [languageFilter, setLanguageFilter] = (0, react_1.useState)(searchParams.get("lang") ? searchParams.get("lang").split(",") : []);
    const [categoryFilter, setCategoryFilter] = (0, react_1.useState)(searchParams.get("cat") ? searchParams.get("cat").split(",") : []);
    const [newList, setNewList] = (0, react_1.useState)(false);
    const [editorVisible, setEditorVisible] = (0, react_1.useState)(false);
    const [editorMounted, setEditorMounted] = (0, react_1.useState)(false);
    const [deleteModalLists, setDeleteModalLists] = (0, react_1.useState)([]);
    const readOnly = !newList &&
        (!currentUser ||
            (!currentUser.admin &&
                !!selectedList &&
                selectedList._id !== "new" &&
                String(selectedList.creator._id) !== String(currentUser._id)));
    const INITIAL_LIMIT = 50;
    const PAGE_LIMIT = 50;
    const prefetchRef = (0, react_1.useRef)(null);
    const prefetchingRef = (0, react_1.useRef)(false);
    const prefetchPage = (0, react_1.useCallback)(async (p) => {
        if (prefetchingRef.current)
            return;
        prefetchingRef.current = true;
        try {
            const data = await (0, tenthings_1.getLists)({
                page: p,
                limit: PAGE_LIMIT,
                search,
                language: languageFilter,
                categories: categoryFilter,
            });
            prefetchRef.current = { page: p, data: data.lists };
        }
        catch {
        }
        prefetchingRef.current = false;
    }, [search, languageFilter, categoryFilter]);
    (0, react_1.useEffect)(() => {
        (0, tenthings_1.getCategories)().then(setCategoryOptions);
        (0, tenthings_1.getLanguages)().then(setLanguageOptions);
    }, []);
    const fetchLists = (0, react_1.useCallback)(async (p = 1) => {
        const limit = p === 1 ? INITIAL_LIMIT : PAGE_LIMIT;
        setLoading(true);
        try {
            let lists;
            let count;
            const searchOpts = searchField === "name" ? { name: search } : { search };
            if (p > 1 && prefetchRef.current?.page === p) {
                lists = prefetchRef.current.data;
                count = 0;
                prefetchRef.current = null;
            }
            else {
                const data = await (0, tenthings_1.getLists)({
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
            if (p === 1)
                setLists(lists);
            else
                setLists((prev) => [...prev, ...lists]);
            setPage(p);
            if (more)
                prefetchPage(p + 1);
        }
        finally {
            setLoading(false);
        }
    }, [search, searchField, languageFilter, categoryFilter, prefetchPage]);
    (0, react_1.useEffect)(() => {
        fetchLists(1);
        const listId = searchParams.get("list");
        if (listId && listId !== "new") {
            (0, tenthings_1.getList)(listId).then((l) => {
                setSelectedList(l);
                setNewList(false);
                setEditorMounted(true);
                requestAnimationFrame(() => requestAnimationFrame(() => setEditorVisible(true)));
            });
        }
    }, [fetchLists]);
    const handleSelectList = async (list) => {
        try {
            const data = await (0, tenthings_1.getList)(list._id);
            setSelectedList(data);
            setSearchParams({ list: data._id });
            setNewList(false);
            setEditorMounted(true);
            requestAnimationFrame(() => requestAnimationFrame(() => setEditorVisible(true)));
        }
        catch {
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
        setSearchParams((prev) => {
            const next = new URLSearchParams(prev);
            next.delete("list");
            return next;
        }, { replace: true });
    };
    const handleAddList = () => {
        if (!currentUser)
            return;
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
    const handleSave = async (listToSave) => {
        const target = listToSave ?? selectedList;
        if (!target || !currentUser)
            return;
        try {
            if (target._id === "new") {
                const created = await (0, tenthings_1.createList)(currentUser._id, target);
                setSelectedList(created);
                setSearchParams({ list: created._id });
                toast("List created");
            }
            else {
                const updated = await (0, tenthings_1.updateList)(target);
                setSelectedList(updated);
            }
            fetchLists(1);
        }
        catch {
            toast("Failed to save list");
        }
    };
    const handleDelete = async () => {
        if (!selectedList || selectedList._id === "new")
            return;
        setDeleteModalLists([selectedList]);
    };
    const handleFavorite = async (list) => {
        try {
            const updated = await (0, tenthings_1.updateList)({ ...list, starred: !list.starred });
            setLists((prev) => prev.map((l) => (l._id === updated._id ? updated : l)));
            if (selectedList?._id === updated._id)
                setSelectedList(updated);
        }
        catch {
            toast("Failed to update list");
        }
    };
    const handleDeleteList = async (list) => {
        setDeleteModalLists([list]);
    };
    const handleDeleteHighlighted = async () => {
        if (!highlightedIds.length)
            return;
        const toDelete = lists.filter((l) => highlightedIds.includes(l._id));
        setDeleteModalLists(toDelete);
    };
    const confirmDelete = async () => {
        try {
            for (const l of deleteModalLists) {
                await (0, tenthings_1.deleteList)(l._id);
                if (selectedList?._id === l._id)
                    handleClose();
            }
            setHighlightedIds((prev) => prev.filter((id) => !deleteModalLists.some((l) => l._id === id)));
            setDeleteModalLists([]);
            fetchLists(1);
            toast("List" + (deleteModalLists.length > 1 ? "s" : "") + " deleted");
        }
        catch {
            toast("Failed to delete");
        }
    };
    const handleMerge = async () => {
        if (highlightedIds.length < 2)
            return;
        await (0, tenthings_1.mergeLists)(highlightedIds);
        setHighlightedIds([]);
        fetchLists(1);
        toast("Lists merged");
    };
    const toggleHighlight = (id) => {
        setHighlightedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
    };
    return (<div id="tenthings-page">
      <h1>Ten Things</h1>

      <div className="well well-sm">
        Works with the{" "}
        <a href="https://t.me/joinchat/I1Di-1MXGXkjhgNPXi6Vfg" target="_blank" rel="noreferrer">
          Ten Things Telegram Bot
        </a>
      </div>

      {!currentUser && <p className="text-danger">You have to be logged in to edit lists</p>}

      <div className="row">
        <div className={selectedList ? "col-md-5" : "col-md-12"}>
          <ListTable_1.ListTable lists={lists} count={count} loading={loading} search={search} searchField={searchField} highlightedIds={highlightedIds} isAdmin={!!currentUser?.admin} hasMore={hasMore} canAddList={!!currentUser} filterCount={languageFilter.length + categoryFilter.length} categoryOptions={categoryOptions} languageOptions={languageOptions} languageFilter={languageFilter} categoryFilter={categoryFilter} onLanguageFilterChange={(langs) => {
            setLanguageFilter(langs);
            setSearchParams((prev) => {
                const next = new URLSearchParams(prev);
                if (langs.length)
                    next.set("lang", langs.join(","));
                else
                    next.delete("lang");
                return next;
            }, { replace: true });
        }} onCategoryFilterChange={(cats) => {
            setCategoryFilter(cats);
            setSearchParams((prev) => {
                const next = new URLSearchParams(prev);
                if (cats.length)
                    next.set("cat", cats.join(","));
                else
                    next.delete("cat");
                return next;
            }, { replace: true });
        }} onSearchChange={(s, field) => {
            setSearch(s);
            setSearchField(field);
            setSearchParams((prev) => {
                const next = new URLSearchParams(prev);
                if (s)
                    next.set("search", s);
                else
                    next.delete("search");
                if (field && field !== "name")
                    next.set("field", field);
                else
                    next.delete("field");
                return next;
            }, { replace: true });
        }} onSelect={handleSelectList} onToggleHighlight={toggleHighlight} onLoadMore={() => fetchLists(page + 1)} onRefresh={() => fetchLists(1)} onAddList={handleAddList} onMerge={highlightedIds.length >= 2 ? handleMerge : undefined} onDeleteHighlighted={highlightedIds.length >= 1 ? handleDeleteHighlighted : undefined} highlightedCount={highlightedIds.length} onFavorite={handleFavorite} onDeleteList={handleDeleteList}/>
        </div>

        {editorMounted && selectedList && (<div className="col-md-7">
            <ListEditor_1.ListEditor list={selectedList} active={editorVisible} isAdmin={!!currentUser?.admin} readOnly={readOnly} languageOptions={languageOptions} categoryOptions={categoryOptions} onClose={handleClose} onChange={setSelectedList} onBlur={(list) => handleSave(list)} onDelete={handleDelete}/>
          </div>)}
      </div>

      {editorMounted && (<div id="overlay" onClick={handleClose} style={{ display: editorVisible ? "block" : "none" }}/>)}

      {deleteModalLists.length > 0 && (<DeleteListsModal_1.DeleteListsModal lists={deleteModalLists} onConfirm={confirmDelete} onCancel={() => setDeleteModalLists([])}/>)}
    </div>);
}
exports.default = TenThingsLists;
//# sourceMappingURL=TenThingsLists.js.map