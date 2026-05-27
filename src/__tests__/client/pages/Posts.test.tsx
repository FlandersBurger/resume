import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useApp } from "../../../client/context/AppContext";
import Posts from "../../../client/pages/Posts";
import { fetchPosts, createPost } from "../../../client/services/posts";
import { defaultContextValue, AppContextValue } from "../../__mocks__/AppContextMock";

jest.mock("../../../client/context/AppContext", () => ({ useApp: jest.fn() }));
jest.mock("../../../client/services/posts", () => ({
  fetchPosts: jest.fn(),
  createPost: jest.fn(),
  getPost: jest.fn(),
}));
jest.mock("../../../client/hooks/useWebSocket", () => ({ useWebSocket: jest.fn() }));
jest.mock("react-helmet-async", () => ({ Helmet: ({ children }: any) => children ?? null }));

const mockUseApp = useApp as jest.MockedFunction<typeof useApp>;
const mockFetchPosts = fetchPosts as jest.MockedFunction<typeof fetchPosts>;
const mockCreatePost = createPost as jest.MockedFunction<typeof createPost>;

const samplePosts = [
  { _id: "p1", body: "Hello world", date: "2026-01-01", poster: { username: "alice" } },
  { _id: "p2", body: "Another post", date: "2026-01-02", poster: { username: "bob" } },
];

function renderPosts(overrides: Partial<AppContextValue> = {}) {
  mockUseApp.mockReturnValue({ ...defaultContextValue, ...overrides });
  return render(<Posts />);
}

describe("Posts page", () => {
  beforeEach(() => jest.clearAllMocks());

  it("shows login prompt when not authenticated", () => {
    renderPosts({ currentUser: null });
    expect(screen.getByText(/please login/i)).toBeInTheDocument();
  });

  it("fetches and displays posts when user is logged in", async () => {
    mockFetchPosts.mockResolvedValueOnce(samplePosts as any);
    renderPosts({ currentUser: { _id: "u1", username: "alice" } });
    await waitFor(() => expect(screen.getByText("Hello world")).toBeInTheDocument());
    expect(screen.getByText("Another post")).toBeInTheDocument();
  });

  it("renders the post input and submit button", () => {
    mockFetchPosts.mockResolvedValueOnce([]);
    renderPosts({ currentUser: { _id: "u1", username: "alice" } });
    expect(screen.getByPlaceholderText("Post")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("calls createPost when submit button is clicked with text", async () => {
    mockFetchPosts.mockResolvedValueOnce([]);
    mockCreatePost.mockResolvedValueOnce({ _id: "p3", body: "New post", date: "", poster: { username: "alice" } });
    renderPosts({ currentUser: { _id: "u1", username: "alice" } });
    await userEvent.type(screen.getByPlaceholderText("Post"), "New post");
    await userEvent.click(screen.getByRole("button"));
    expect(mockCreatePost).toHaveBeenCalledWith("New post");
  });

  it("does not call createPost when input is empty", async () => {
    mockFetchPosts.mockResolvedValueOnce([]);
    renderPosts({ currentUser: { _id: "u1", username: "alice" } });
    await userEvent.click(screen.getByRole("button"));
    expect(mockCreatePost).not.toHaveBeenCalled();
  });

  it("renders the search input when logged in", async () => {
    mockFetchPosts.mockResolvedValueOnce([]);
    renderPosts({ currentUser: { _id: "u1", username: "alice" } });
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  });

  it("filters posts by search text", async () => {
    mockFetchPosts.mockResolvedValueOnce(samplePosts as any);
    renderPosts({ currentUser: { _id: "u1", username: "alice" } });
    await waitFor(() => expect(screen.getByText("Hello world")).toBeInTheDocument());
    await userEvent.type(screen.getByPlaceholderText("Search"), "Hello");
    expect(screen.getByText("Hello world")).toBeInTheDocument();
    expect(screen.queryByText("Another post")).not.toBeInTheDocument();
  });
});
