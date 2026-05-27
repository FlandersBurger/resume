"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const user_event_1 = __importDefault(require("@testing-library/user-event"));
const AppContext_1 = require("../../../client/context/AppContext");
const Posts_1 = __importDefault(require("../../../client/pages/Posts"));
const posts_1 = require("../../../client/services/posts");
const AppContextMock_1 = require("../../__mocks__/AppContextMock");
jest.mock("../../../client/context/AppContext", () => ({ useApp: jest.fn() }));
jest.mock("../../../client/services/posts", () => ({
  fetchPosts: jest.fn(),
  createPost: jest.fn(),
  getPost: jest.fn(),
}));
jest.mock("../../../client/hooks/useWebSocket", () => ({ useWebSocket: jest.fn() }));
jest.mock("react-helmet-async", () => ({ Helmet: ({ children }) => children ?? null }));
const mockUseApp = AppContext_1.useApp;
const mockFetchPosts = posts_1.fetchPosts;
const mockCreatePost = posts_1.createPost;
const samplePosts = [
  { _id: "p1", body: "Hello world", date: "2026-01-01", poster: { username: "alice" } },
  { _id: "p2", body: "Another post", date: "2026-01-02", poster: { username: "bob" } },
];
function renderPosts(overrides = {}) {
  mockUseApp.mockReturnValue({ ...AppContextMock_1.defaultContextValue, ...overrides });
  return (0, react_1.render)(<Posts_1.default />);
}
describe("Posts page", () => {
  beforeEach(() => jest.clearAllMocks());
  it("shows login prompt when not authenticated", () => {
    renderPosts({ currentUser: null });
    expect(react_1.screen.getByText(/please login/i)).toBeInTheDocument();
  });
  it("fetches and displays posts when user is logged in", async () => {
    mockFetchPosts.mockResolvedValueOnce(samplePosts);
    renderPosts({ currentUser: { _id: "u1", username: "alice" } });
    await (0, react_1.waitFor)(() => expect(react_1.screen.getByText("Hello world")).toBeInTheDocument());
    expect(react_1.screen.getByText("Another post")).toBeInTheDocument();
  });
  it("renders the post input and submit button", () => {
    mockFetchPosts.mockResolvedValueOnce([]);
    renderPosts({ currentUser: { _id: "u1", username: "alice" } });
    expect(react_1.screen.getByPlaceholderText("Post")).toBeInTheDocument();
    expect(react_1.screen.getByRole("button")).toBeInTheDocument();
  });
  it("calls createPost when submit button is clicked with text", async () => {
    mockFetchPosts.mockResolvedValueOnce([]);
    mockCreatePost.mockResolvedValueOnce({ _id: "p3", body: "New post", date: "", poster: { username: "alice" } });
    renderPosts({ currentUser: { _id: "u1", username: "alice" } });
    await user_event_1.default.type(react_1.screen.getByPlaceholderText("Post"), "New post");
    await user_event_1.default.click(react_1.screen.getByRole("button"));
    expect(mockCreatePost).toHaveBeenCalledWith("New post");
  });
  it("does not call createPost when input is empty", async () => {
    mockFetchPosts.mockResolvedValueOnce([]);
    renderPosts({ currentUser: { _id: "u1", username: "alice" } });
    await user_event_1.default.click(react_1.screen.getByRole("button"));
    expect(mockCreatePost).not.toHaveBeenCalled();
  });
  it("renders the search input when logged in", async () => {
    mockFetchPosts.mockResolvedValueOnce([]);
    renderPosts({ currentUser: { _id: "u1", username: "alice" } });
    expect(react_1.screen.getByPlaceholderText("Search")).toBeInTheDocument();
  });
  it("filters posts by search text", async () => {
    mockFetchPosts.mockResolvedValueOnce(samplePosts);
    renderPosts({ currentUser: { _id: "u1", username: "alice" } });
    await (0, react_1.waitFor)(() => expect(react_1.screen.getByText("Hello world")).toBeInTheDocument());
    await user_event_1.default.type(react_1.screen.getByPlaceholderText("Search"), "Hello");
    expect(react_1.screen.getByText("Hello world")).toBeInTheDocument();
    expect(react_1.screen.queryByText("Another post")).not.toBeInTheDocument();
  });
});
//# sourceMappingURL=Posts.test.js.map
