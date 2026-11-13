import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useApp, User } from "../../context/AppContext";
import {
  TenThingsList,
  createList,
  getList,
  updateList,
} from "../../services/tenthings";
import { ListEditor } from "./ListEditor";
import { useTenThingsReference } from "../../hooks/useTenThingsReference";

/** Matches the ListEditor panel's slide transition. */
const SLIDE_MS = 320;

const Backdrop = styled.div<{ $visible: boolean }>`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  cursor: pointer;
  display: ${({ $visible }) => ($visible ? "block" : "none")};
`;

/** A new List is only created once it has a name, a category and at least ten Answers. */
export const isComplete = (list: TenThingsList) =>
  list.values.length >= 10 && !!list.name && list.categories.length > 0;

/** Admins can edit any List; everyone else only the Lists they created. */
export const canEdit = (list: TenThingsList, user: User | null, isAdmin: boolean) =>
  !!user && (isAdmin || list._id === "new" || String(list.creator?._id) === String(user._id));

const blankList = (user: User): TenThingsList => ({
  _id: "new",
  name: "",
  language: "EN",
  categories: [],
  answers: 0,
  isDynamic: true,
  creator: { _id: user._id, username: user.username },
  values: [],
});

interface Props {
  /** The List to show, `"new"` for a blank one, or null when the drawer is closed. */
  listId: string | null;
  /** Never save, whoever is looking. */
  readOnly?: boolean;
  onClose: () => void;
  /** After every successful save; `created` is true when a new List was just created. */
  onSaved?: (list: TenThingsList, created: boolean) => void;
  /** Shows a delete button; the host confirms and deletes. */
  onDelete?: (list: TenThingsList) => void;
}

/**
 * The List editor in a slide-in drawer. It loads the List, decides who may edit it, and saves
 * changes: an existing List on every change, a new List only once it's complete. Edits made
 * while a new List is being created are saved to that List rather than creating another.
 */
export function ListEditorDrawer({ listId, readOnly: forceReadOnly = false, onClose, onSaved, onDelete }: Props) {
  const { currentUser, isAdmin, toast } = useApp();
  const [list, setList] = useState<TenThingsList | null>(null);
  const [visible, setVisible] = useState(false);

  const listRef = useRef(list);
  listRef.current = list;
  const callbacks = useRef({ onClose, onSaved, toast });
  callbacks.current = { onClose, onSaved, toast };

  // Open, switch or close as listId changes.
  useEffect(() => {
    if (!listId) {
      setVisible(false);
      const timer = setTimeout(() => setList(null), SLIDE_MS);
      return () => clearTimeout(timer);
    }
    // Already showing it: the host switched to the id of a List this drawer just created, or
    // reopened the List while it was still sliding shut.
    if (listRef.current?._id === listId) {
      setVisible(true);
      return;
    }

    let cancelled = false;
    const load = listId === "new" ? (currentUser ? Promise.resolve(blankList(currentUser)) : null) : getList(listId);
    if (!load) {
      callbacks.current.onClose();
      return;
    }
    load
      .then((loaded) => {
        if (cancelled) return;
        setList(loaded);
        // Let the panel render off-screen first so it slides in.
        requestAnimationFrame(() => requestAnimationFrame(() => !cancelled && setVisible(true)));
      })
      .catch(() => {
        if (cancelled) return;
        callbacks.current.toast("Failed to load list");
        callbacks.current.onClose();
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- reload only when the requested List changes
  }, [listId]);

  // Categories and languages for the pickers, loaded the first time a drawer opens.
  const { categoryOptions, languageOptions } = useTenThingsReference(!!list);

  const readOnly = forceReadOnly || !list || !canEdit(list, currentUser, isAdmin);

  // Saves run one at a time; edits made meanwhile collapse into the latest one.
  const pending = useRef<TenThingsList | null>(null);
  const saving = useRef(false);
  const createdId = useRef<string | null>(null);
  useEffect(() => {
    createdId.current = null;
  }, [listId]);

  const save = async (next: TenThingsList) => {
    if (readOnly || !currentUser) return;
    // Not created yet and not being created: wait until it's complete.
    if (next._id === "new" && !createdId.current && !saving.current && !isComplete(next)) return;
    pending.current = next;
    if (saving.current) return;
    saving.current = true;
    try {
      while (pending.current) {
        let target = pending.current;
        pending.current = null;
        if (target._id === "new" && createdId.current) target = { ...target, _id: createdId.current };
        const created = target._id === "new";
        const saved = created ? await createList(currentUser._id, target) : await updateList(target);
        if (created) createdId.current = saved._id;
        // Keep what's on screen while a newer edit is waiting, and don't reopen a closed drawer.
        if (!pending.current && listRef.current) setList(saved);
        callbacks.current.onSaved?.(saved, created);
        if (created) callbacks.current.toast("List created");
      }
    } catch {
      pending.current = null;
      callbacks.current.toast("Failed to save list");
    } finally {
      saving.current = false;
    }
  };

  if (!list) return null;

  return (
    <>
      <ListEditor
        list={list}
        active={visible}
        isAdmin={isAdmin}
        readOnly={readOnly}
        languageOptions={languageOptions}
        categoryOptions={categoryOptions}
        onClose={onClose}
        onChange={setList}
        onSave={save}
        onDelete={onDelete && !readOnly ? () => onDelete(list) : undefined}
      />
      <Backdrop $visible={visible} onClick={onClose} data-testid="list-editor-backdrop" />
    </>
  );
}
