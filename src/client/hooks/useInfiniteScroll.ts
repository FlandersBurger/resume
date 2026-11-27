import { useCallback, useEffect, useRef, useState } from "react";

type Options = {
  hasMore: boolean;
  loading: boolean;
  onLoadMore: () => void;
  /** How far below the screen the sentinel may be when the next page starts loading. */
  rootMargin?: string;
};

/**
 * Loads the next page when a sentinel under the rows scrolls near the screen. Put the returned
 * `sentinel` ref on an empty element after the rows. Without IntersectionObserver `supported` is
 * false, and the page should show a "Load more" button instead.
 */
export function useInfiniteScroll({ hasMore, loading, onLoadMore, rootMargin = "600px" }: Options) {
  const supported = typeof IntersectionObserver !== "undefined";
  const [node, setNode] = useState<Element | null>(null);
  const inView = useRef(false);
  const latest = useRef({ hasMore, loading, onLoadMore });
  latest.current = { hasMore, loading, onLoadMore };

  const tryLoad = useCallback(() => {
    const { hasMore, loading, onLoadMore } = latest.current;
    if (inView.current && hasMore && !loading) onLoadMore();
  }, []);

  useEffect(() => {
    if (!node || !supported) return;
    const observer = new IntersectionObserver(
      (entries) => {
        inView.current = entries.some((entry) => entry.isIntersecting);
        tryLoad();
      },
      { rootMargin },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      inView.current = false;
    };
  }, [node, supported, rootMargin, tryLoad]);

  // A page that arrives without pushing the sentinel off screen (a tall window) loads the next one.
  useEffect(() => {
    if (!loading) tryLoad();
  }, [loading, hasMore, tryLoad]);

  return { sentinel: setNode, supported };
}
