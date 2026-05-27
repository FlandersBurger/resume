import { fetchPosts, createPost, getPost } from "../../../client/services/posts";
import http from "../../../client/services/http";

jest.mock("../../../client/services/http", () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
    defaults: { headers: { common: {} } },
  },
  setAuthToken: jest.fn(),
  clearAuthToken: jest.fn(),
}));

const mockHttp = http as jest.Mocked<typeof http>;

const samplePost = { _id: "p1", body: "Hello", date: "2026-01-01", poster: { username: "alice" } };

describe("fetchPosts", () => {
  beforeEach(() => jest.clearAllMocks());

  it("GETs /api/posts and returns the data array", async () => {
    mockHttp.get.mockResolvedValueOnce({ data: [samplePost] });
    const posts = await fetchPosts();
    expect(mockHttp.get).toHaveBeenCalledWith("/api/posts");
    expect(posts).toEqual([samplePost]);
  });
});

describe("createPost", () => {
  beforeEach(() => jest.clearAllMocks());

  it("POSTs to /api/posts with the body", async () => {
    mockHttp.post.mockResolvedValueOnce({ data: samplePost });
    const post = await createPost("Hello");
    expect(mockHttp.post).toHaveBeenCalledWith("/api/posts", { body: "Hello" });
    expect(post).toEqual(samplePost);
  });
});

describe("getPost", () => {
  beforeEach(() => jest.clearAllMocks());

  it("GETs /api/posts/:id and returns the post", async () => {
    mockHttp.get.mockResolvedValueOnce({ data: samplePost });
    const post = await getPost("p1");
    expect(mockHttp.get).toHaveBeenCalledWith("/api/posts/p1");
    expect(post).toEqual(samplePost);
  });
});
