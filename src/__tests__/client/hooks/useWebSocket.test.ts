import { act, renderHook } from "@testing-library/react";
import { resetWebSocket, useWebSocket } from "../../../client/hooks/useWebSocket";

/** Stands in for the browser's WebSocket, and remembers every one opened. */
class FakeSocket {
  static opened: FakeSocket[] = [];
  onmessage: ((e: { data: string }) => void) | null = null;
  onclose: (() => void) | null = null;
  onerror: ((e: unknown) => void) | null = null;
  closed = false;
  constructor(public url: string) {
    FakeSocket.opened.push(this);
  }
  close() {
    this.closed = true;
    this.onclose?.();
  }
  /** The server broadcasting `data` on `topic`. */
  receive(topic: string, data: unknown) {
    this.onmessage?.({ data: JSON.stringify({ topic, data }) });
  }
  /** The connection dropping on its own. */
  drop() {
    this.onclose?.();
  }
}

const latest = () => FakeSocket.opened.at(-1)!;

beforeAll(() => {
  (globalThis as unknown as { WebSocket: unknown }).WebSocket = FakeSocket;
});

beforeEach(() => {
  jest.useFakeTimers();
  FakeSocket.opened = [];
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  resetWebSocket();
  jest.useRealTimers();
  jest.restoreAllMocks();
});

it("shares one connection between subscribers, each getting its own topics", () => {
  const posts = jest.fn();
  const events = jest.fn();
  renderHook(() => useWebSocket({ new_post: posts }));
  renderHook(() => useWebSocket({ tenthings_events: events, new_post: posts }));

  expect(FakeSocket.opened).toHaveLength(1);
  expect(latest().url).toMatch(/\/ws$/);
  latest().receive("new_post", { _id: "p1" });
  latest().receive("tenthings_events", { webGameId: 1 });

  expect(posts).toHaveBeenCalledTimes(2);
  expect(posts).toHaveBeenCalledWith({ _id: "p1" });
  expect(events).toHaveBeenCalledWith({ webGameId: 1 });
});

it("uses the latest handlers after a re-render", () => {
  const first = jest.fn();
  const second = jest.fn();
  const { rerender } = renderHook(({ handler }) => useWebSocket({ new_post: handler }), {
    initialProps: { handler: first },
  });
  rerender({ handler: second });
  latest().receive("new_post", {});
  expect(first).not.toHaveBeenCalled();
  expect(second).toHaveBeenCalled();
});

it("keeps delivering when one handler throws, or a message is malformed", () => {
  const other = jest.fn();
  renderHook(() =>
    useWebSocket({
      new_post: () => {
        throw new Error("boom");
      },
    }),
  );
  renderHook(() => useWebSocket({ new_post: other }));
  latest().onmessage?.({ data: "not json" });
  latest().receive("new_post", {});
  expect(other).toHaveBeenCalledTimes(1);
});

it("reconnects when the connection drops while someone is listening", () => {
  const handler = jest.fn();
  renderHook(() => useWebSocket({ new_post: handler }));
  latest().drop();
  act(() => jest.advanceTimersByTime(1000));

  expect(FakeSocket.opened).toHaveLength(2);
  latest().receive("new_post", {});
  expect(handler).toHaveBeenCalledTimes(1);
});

it("closes shortly after the last subscriber leaves, but not on a quick page change", () => {
  const page1 = renderHook(() => useWebSocket({ new_post: jest.fn() }));
  page1.unmount();
  renderHook(() => useWebSocket({ new_post: jest.fn() }));
  act(() => jest.advanceTimersByTime(5000));
  expect(FakeSocket.opened).toHaveLength(1);
  expect(latest().closed).toBe(false);

  resetWebSocket();
  const page2 = renderHook(() => useWebSocket({ new_post: jest.fn() }));
  page2.unmount();
  act(() => jest.advanceTimersByTime(1000));
  expect(latest().closed).toBe(true);
  act(() => jest.advanceTimersByTime(5000));
  expect(FakeSocket.opened).toHaveLength(2); // no reconnect once nobody listens
});

it("opens nothing while disabled", () => {
  renderHook(() => useWebSocket({ new_post: jest.fn() }, false));
  expect(FakeSocket.opened).toHaveLength(0);
});
