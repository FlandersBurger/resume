import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { updateList, deleteList, mergeLists, TenThingsList } from "../../services/tenthings";
import { useApp } from "../../context/AppContext";
import { ListTable } from "./ListTable";
import { ListEditorDrawer } from "./ListEditorDrawer";
import { ConfirmListsModal } from "./ConfirmListsModal";
import { EditListsModal } from "./EditListsModal";
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
  const [mergeModalLists, setMergeModalLists] = useState<TenThingsList[]>([]);
  const [editingHighlighted, setEditingHighlighted] = useState(false);
  const highlightedLists = lists.filter((l) => highlightedIds.includes(l._id));

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
    // A new List has to find its place in the sort; an edited one changes in place, keeping the pages loaded.
    if (created) {
      openList(saved._id);
      refresh();
    } else replaceList(saved);
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

  const handleMerge = () => {
    if (highlightedLists.length >= 2) setMergeModalLists(highlightedLists);
  };

  const confirmMerge = async () => {
    try {
      const merged = await mergeLists(mergeModalLists.map(({ _id }) => _id));
      setMergeModalLists([]);
      setHighlightedIds([]);
      refresh();
      toast("Lists merged");
      openList(merged._id);
    } catch (error: any) {
      toast(
        error?.response?.status === 400 ? "Only lists in the same language can be merged" : "Failed to merge the lists",
      );
    }
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
            onEditHighlighted={highlightedLists.length >= 1 ? () => setEditingHighlighted(true) : undefined}
            onMerge={highlightedLists.length >= 2 ? handleMerge : undefined}
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
          onOpenList={openList}
        />
      </div>

      {deleteModalLists.length > 0 && (
        <ConfirmListsModal
          action="Delete"
          lists={deleteModalLists}
          onConfirm={confirmDelete}
          onCancel={() => setDeleteModalLists([])}
        />
      )}
      {mergeModalLists.length > 0 && (
        <ConfirmListsModal
          action="Merge"
          lists={mergeModalLists}
          note="Their answers are combined into the oldest list, and the others are deleted."
          onConfirm={confirmMerge}
          onCancel={() => setMergeModalLists([])}
        />
      )}
      {editingHighlighted && highlightedLists.length > 0 && (
        <EditListsModal
          lists={highlightedLists}
          categoryOptions={categoryOptions}
          onUpdated={(updated) => updated.forEach(replaceList)}
          onError={toast}
          onClose={() => setEditingHighlighted(false)}
        />
      )}
    </div>
  );
}
