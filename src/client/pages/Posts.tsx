import { useEffect, useState } from "react";
import { fetchPosts, createPost, getPost, Post } from "../services/posts";
import { useApp } from "../context/AppContext";
import { useWebSocket } from "../hooks/useWebSocket";

export default function Posts() {
  const { currentUser } = useApp();
  const [posts, setPosts] = useState<Post[]>([]);
  const [postBody, setPostBody] = useState("");
  const [searchText, setSearchText] = useState("");

  useWebSocket({
    new_post: async (data: any) => {
      const post = await getPost(data._id);
      setPosts((prev) => [post, ...prev]);
    },
  });

  useEffect(() => {
    if (currentUser) fetchPosts().then(setPosts);
  }, [currentUser]);

  const handleAddPost = async () => {
    if (!postBody.trim()) return;
    await createPost(postBody);
    setPostBody("");
  };

  const loggedIn = !!currentUser;
  const filtered = posts
    .filter((p) => !searchText || p.body.toLowerCase().includes(searchText.toLowerCase()))
    .slice(0, 50);

  return (
    <div className="container">
      <br />
      <div className="form-group">
        <div className="input-group">
          <input
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
            className="form-control"
            placeholder="Post"
          />
          <span className="input-group-btn">
            <button onClick={handleAddPost} className="btn btn-default" disabled={!loggedIn}>
              <i className="fa fa-lg fa-envelope" />
            </button>
          </span>
        </div>
        {loggedIn && (
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="form-control"
            placeholder="Search"
          />
        )}
      </div>
      {!loggedIn && <h2>Please login to see the chat and post</h2>}
      {loggedIn && (
        <ul className="list-group">
          {filtered.map((post) => (
            <li key={post._id} className="list-group-item">
              <strong>{post.poster ? post.poster.username : post.username}:</strong> <span>{post.body}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
