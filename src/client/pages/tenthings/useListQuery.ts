import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getLists, TenThingsList } from "../../services/tenthings";
import { useApp } from "../../context/AppContext";
import { ListFilter, filterFromParams, filterToParams, toRequest } from "./listQuery";

export const PAGE_SIZE = 50;

type Page = { lists: TenThingsList[]; count: number };

/**
 * The Lists page's query: the filter (kept in the URL), the Lists matching it, paging, and a
 * prefetch of the next page. Responses for an older filter are dropped, so fast typing or
 * filter changes never show the wrong rows.
 */
export function useListQuery() {
  const { currentUser, toast } = useApp();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilterState] = useState<ListFilter>(() => filterFromParams(searchParams));
  const [lists, setLists] = useState<TenThingsList[]>([]);
  const [count, setCount] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);

  const setFilter = useCallback((patch: Partial<ListFilter>) => setFilterState((prev) => ({ ...prev, ...patch })), []);

  // Keep the URL in step with the filter, so the view can be shared and survives a reload.
  useEffect(() => {
    setSearchParams(
      (prev) => {
        const next = filterToParams(filter, prev);
        return next.toString() === prev.toString() ? prev : next;
      },
      { replace: true },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps -- setSearchParams changes identity on navigation
  }, [filter]);

  // The server's answer depends on who is asking, so the User is part of the request's key.
  const userId = currentUser?._id;
  const request = useMemo(() => toRequest(filter, userId), [filter, userId]);
  const key = useMemo(() => JSON.stringify([request, userId ?? null]), [request, userId]);

  const live = useRef({ request, page: 0, ticket: 0 });
  live.current.request = request;
  // The next page, fetched early. Cleared whenever the request changes, and only a current
  // load may fill it, so it always belongs to the request on screen.
  const prefetched = useRef(new Map<number, Promise<Page | null>>());
  const toastRef = useRef(toast);
  toastRef.current = toast;

  const fetchPage = (page: number): Promise<Page> => {
    const { request } = live.current;
    const early = prefetched.current.get(page);
    prefetched.current.delete(page);
    const fresh = () => getLists({ ...request, page, limit: PAGE_SIZE });
    return early ? early.then((result) => result ?? fresh()) : fresh();
  };

  const load = useCallback(async (page: number) => {
    const ticket = ++live.current.ticket;
    const { request } = live.current;
    setLoading(true);
    try {
      const result = await fetchPage(page);
      if (ticket !== live.current.ticket) return; // a newer load has started
      const more = result.lists.length === PAGE_SIZE;
      live.current.page = page;
      setLists((prev) => (page === 1 ? result.lists : [...prev, ...result.lists]));
      if (page === 1) setCount(result.count);
      setHasMore(more);
      if (more) {
        prefetched.current.set(page + 1, getLists({ ...request, page: page + 1, limit: PAGE_SIZE }).catch(() => null));
      }
    } catch {
      if (ticket === live.current.ticket) toastRef.current("Failed to load lists");
    } finally {
      if (ticket === live.current.ticket) setLoading(false);
    }
  }, []);

  useEffect(() => {
    prefetched.current.clear();
    load(1);
  }, [key, load]);

  const loadMore = useCallback(() => load(live.current.page + 1), [load]);
  const refresh = useCallback(() => {
    prefetched.current.clear();
    return load(1);
  }, [load]);
  /** Show a changed List in place without reloading. */
  const replaceList = useCallback(
    (updated: TenThingsList) => setLists((prev) => prev.map((l) => (l._id === updated._id ? updated : l))),
    [],
  );

  return { filter, setFilter, lists, count, hasMore, loading, loadMore, refresh, replaceList };
}
