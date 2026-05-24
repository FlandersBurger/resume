"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const posts_1 = require("../services/posts");
const AppContext_1 = require("../context/AppContext");
const useWebSocket_1 = require("../hooks/useWebSocket");
function Posts() {
    const { currentUser } = (0, AppContext_1.useApp)();
    const [posts, setPosts] = (0, react_1.useState)([]);
    const [postBody, setPostBody] = (0, react_1.useState)("");
    const [searchText, setSearchText] = (0, react_1.useState)("");
    (0, useWebSocket_1.useWebSocket)({
        new_post: async (data) => {
            const post = await (0, posts_1.getPost)(data._id);
            setPosts((prev) => [post, ...prev]);
        },
    });
    (0, react_1.useEffect)(() => {
        if (currentUser)
            (0, posts_1.fetchPosts)().then(setPosts);
    }, [currentUser]);
    const handleAddPost = async () => {
        if (!postBody.trim())
            return;
        await (0, posts_1.createPost)(postBody);
        setPostBody("");
    };
    const loggedIn = !!currentUser;
    const filtered = posts
        .filter((p) => !searchText || p.body.toLowerCase().includes(searchText.toLowerCase()))
        .slice(0, 50);
    return (<div className="container">
      <br />
      <div className="form-group">
        <div className="input-group">
          <input value={postBody} onChange={(e) => setPostBody(e.target.value)} className="form-control" placeholder="Post"/>
          <span className="input-group-btn">
            <button onClick={handleAddPost} className="btn btn-default" disabled={!loggedIn}>
              <i className="fa fa-lg fa-envelope"/>
            </button>
          </span>
        </div>
        {loggedIn && (<input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} className="form-control" placeholder="Search"/>)}
      </div>
      {!loggedIn && <h2>Please login to see the chat and post</h2>}
      {loggedIn && (<ul className="list-group">
          {filtered.map((post) => (<li key={post._id} className="list-group-item">
              <strong>{post.poster ? post.poster.username : post.username}:</strong> <span>{post.body}</span>
            </li>))}
        </ul>)}
    </div>);
}
exports.default = Posts;
//# sourceMappingURL=Posts.js.map