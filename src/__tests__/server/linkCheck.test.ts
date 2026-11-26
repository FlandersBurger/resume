const get = jest.fn();
jest.mock("axios", () => ({ __esModule: true, default: { get } }));

import { checkLink, isPrivateAddress } from "@root/connections/link-check";

/** A response whose body is a stream the check closes straight away. */
const reply = (status: number, location?: string) => ({
  status,
  headers: location ? { location } : {},
  data: { destroy: jest.fn() },
});

beforeEach(() => get.mockReset());

describe("isPrivateAddress", () => {
  it("refuses addresses the public internet can't reach", () => {
    for (const address of [
      "127.0.0.1",
      "10.1.2.3",
      "172.16.0.1",
      "192.168.1.1",
      "169.254.169.254",
      "100.64.0.1",
      "0.0.0.0",
      "::1",
      "fd00::1",
      "fe80::1",
      "::ffff:127.0.0.1",
    ])
      expect([address, isPrivateAddress(address)]).toEqual([address, true]);
  });

  it("allows public ones", () => {
    for (const address of ["8.8.8.8", "151.101.1.69", "172.32.0.1", "2606:4700::6810:84e5", "::ffff:8.8.8.8"])
      expect([address, isPrivateAddress(address)]).toEqual([address, false]);
  });
});

describe("checkLink", () => {
  it("accepts a page that loads, after redirects", async () => {
    get.mockResolvedValueOnce(reply(301, "/wiki/Ninjago")).mockResolvedValueOnce(reply(200));
    expect(await checkLink("https://ninjago.fandom.com/")).toEqual({ ok: true, checked: true });
    expect(get.mock.calls[1][0]).toBe("https://ninjago.fandom.com/wiki/Ninjago");
  });

  it("refuses a page or site that doesn't exist", async () => {
    get.mockResolvedValueOnce(reply(404));
    expect(await checkLink("https://en.wikipedia.org/wiki/Nope")).toMatchObject({ ok: false });
    get.mockRejectedValueOnce(Object.assign(new Error("getaddrinfo"), { code: "ENOTFOUND" }));
    expect(await checkLink("https://no-such-site.example")).toEqual({
      ok: false,
      error: "There's no website at no-such-site.example.",
    });
  });

  it("stores a link unchecked when the site turns the check away or doesn't answer", async () => {
    get.mockResolvedValueOnce(reply(403));
    expect(await checkLink("https://example.com/")).toEqual({ ok: true, checked: false });
    get.mockRejectedValueOnce(Object.assign(new Error("timeout"), { code: "ECONNABORTED" }));
    expect(await checkLink("https://example.com/")).toEqual({ ok: true, checked: false });
  });

  it("never loads anything but public web pages", async () => {
    for (const link of [
      "javascript:alert(1)",
      "ftp://example.com",
      "http://localhost:6379",
      "http://127.0.0.1/",
      "http://[::1]/",
      "http://2130706433/",
      "http://redis:6379/",
      "https://user:pw@example.com/",
    ])
      expect([link, (await checkLink(link)).ok]).toEqual([link, false]);
    expect(get).not.toHaveBeenCalled();
  });

  it("refuses a redirect to a private address, and a name that resolves to one", async () => {
    get.mockResolvedValueOnce(reply(302, "http://169.254.169.254/latest/meta-data"));
    expect(await checkLink("https://example.com/")).toMatchObject({ ok: false });
    expect(get).toHaveBeenCalledTimes(1);
    get.mockRejectedValueOnce(Object.assign(new Error("private"), { code: "EPRIVATE" }));
    expect(await checkLink("https://internal.example.com/")).toEqual({
      ok: false,
      error: "A source must be a page on the public web.",
    });
  });
});
