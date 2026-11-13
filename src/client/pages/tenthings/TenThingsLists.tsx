import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  updateList,
  deleteList,
  mergeLists,
  TenThingsList,
} from "../../services/tenthings";
import { useApp } from "../../context/AppContext";
import { ListTable } from "./ListTable";
import { ListEditorDrawer } from "./ListEditorDrawer";
import { DeleteListsModal } from "./DeleteListsModal";
import { useListQuery } from "./useListQuery";
import { useTenThingsReference } from "../../hooks/useTenThingsReference";


export default function TenThingsLists() {
  const { currentUser, toast, isAdmin } = useApp();
  const [searchParams, setSearchParams] = useSearchParams();

  const { filter, setFilter, lists, count, hasMore, loading, loadMore, refresh, replaceList } = useListQuery();
  // The List open in the editor drawer, "new" for a blank one. A link with ?list=<id> opens it.
  const [openListId, setOpenListId] = useState<string | null>(() => {
    const id = searchParams.get("list");
    return id && id !== "new" ? id : null;
  });
  const [highlightedIds, setHighlightedIds] = useState<string[]>([]);
  const { categoryOptions, languageOptions } = useTenThingsReference();
  const [deleteModalLists, setDeleteModalLists] = useState<TenThingsList[]>([]);

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
    refresh();
  };

  const handleFavorite = async (list: TenThingsList) => {
    try {
      const updated = await updateList({ ...list, starred: !list.starred });
      replaceList(updated);
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
      refresh();
      toast("List" + (deleteModalLists.length > 1 ? "s" : "") + " deleted");
    } catch {
      toast("Failed to delete");
    }
  };

  const handleMerge = async () => {
    if (highlightedIds.length < 2) return;
    await mergeLists(highlightedIds);
    setHighlightedIds([]);
    refresh();
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
            filter={filter}
            onFilterChange={setFilter}
            canFilterMine={!!currentUser}
            highlightedIds={highlightedIds}
            isAdmin={isAdmin}
            hasMore={hasMore}
            canAddList={!!currentUser}
            canViewCreator={!!currentUser}
            canOpenEditor={!!currentUser}
            categoryOptions={categoryOptions}
            languageOptions={languageOptions}
            onSelect={handleSelectList}
            onToggleHighlight={toggleHighlight}
            onLoadMore={loadMore}
            onRefresh={refresh}
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
