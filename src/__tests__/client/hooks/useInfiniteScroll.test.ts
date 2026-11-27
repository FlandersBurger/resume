import { act, renderHook } from "@testing-library/react";
import { useInfiniteScroll } from "../../../client/hooks/useInfiniteScroll";

type Callback = (entries: Partial<IntersectionObserverEntry>[]) => void;
let observers: { callback: Callback; disconnect: jest.Mock }[] = [];

class MockObserver {
  disconnect = jest.fn();
  constructor(public callback: Callback) {
    observers.push(this);
  }
  observe() {}
  unobserve() {}
}

beforeEach(() => {
  observers = [];
  (globalThis as any).IntersectionObserver = MockObserver;
});
afterEach(() => {
  delete (globalThis as any).IntersectionObserver;
});

function setup(props: { hasMore: boolean; loading: boolean }) {
  const onLoadMore = jest.fn();
  const hook = renderHook((p: { hasMore: boolean; loading: boolean }) => useInfiniteScroll({ ...p, onLoadMore }), {
    initialProps: props,
  });
  act(() => hook.result.current.sentinel(document.createElement("div")));
  const scrollTo = (isIntersecting: boolean) => act(() => observers.at(-1)!.callback([{ isIntersecting }]));
  return { ...hook, onLoadMore, scrollTo };
}

describe("useInfiniteScroll", () => {
  it("loads more when the sentinel comes into view", () => {
    const { onLoadMore, scrollTo } = setup({ hasMore: true, loading: false });
    scrollTo(false);
    expect(onLoadMore).not.toHaveBeenCalled();
    scrollTo(true);
    expect(onLoadMore).toHaveBeenCalledTimes(1);
  });

  it("waits while a page is loading, then loads the next if the sentinel is still in view", () => {
    const { onLoadMore, scrollTo, rerender } = setup({ hasMore: true, loading: true });
    scrollTo(true);
    expect(onLoadMore).not.toHaveBeenCalled();
    rerender({ hasMore: true, loading: false });
    expect(onLoadMore).toHaveBeenCalledTimes(1);
  });

  it("stops when there's nothing more", () => {
    const { onLoadMore, scrollTo } = setup({ hasMore: false, loading: false });
    scrollTo(true);
    expect(onLoadMore).not.toHaveBeenCalled();
  });

  it("reports no support without IntersectionObserver", () => {
    delete (globalThis as any).IntersectionObserver;
    const { result } = renderHook(() => useInfiniteScroll({ hasMore: true, loading: false, onLoadMore: jest.fn() }));
    expect(result.current.supported).toBe(false);
  });
});
