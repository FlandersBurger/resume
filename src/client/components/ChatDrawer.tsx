import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useApp } from "../context/AppContext";
import { fetchPosts, createPost, getPost, Post } from "../services/posts";
import { useWebSocket } from "../hooks/useWebSocket";

const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 99998;
  opacity: ${(p) => (p.$open ? 1 : 0)};
  pointer-events: ${(p) => (p.$open ? "auto" : "none")};
  transition: opacity 0.25s ease;
`;

const Panel = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 50px;
  right: 0;
  width: 340px;
  height: calc(100vh - 50px);
  background: #fff;
  border-left: 1px solid #ddd;
  z-index: 99999;
  transform: translateX(${(p) => (p.$open ? "0" : "100%")});
  transition: transform 0.25s ease;
  display: flex;
  flex-direction: column;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  border-bottom: 1px solid #ddd;
  flex-shrink: 0;
  h4 {
    margin: 0;
    font-size: 1em;
    font-weight: 600;
  }
`;

const MessageList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const MessageRow = styled.div`
  font-size: 0.86em;
  line-height: 1.45;
  word-break: break-word;
  strong {
    color: #555;
    margin-right: 5px;
  }
`;

const InputArea = styled.div`
  padding: 10px 12px;
  border-top: 1px solid #ddd;
  flex-shrink: 0;
`;

export function ChatDrawer() {
  const { currentUser, showChat, closeChat } = useApp();
  const [posts, setPosts] = useState<Post[]>([]);
  const [body, setBody] = useState("");
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useWebSocket({
    new_post: async (data: unknown) => {
      const post = await getPost((data as { _id: string })._id);
      setPosts((prev) => [...prev, post]);
    },
  });

  useEffect(() => {
    if (currentUser) {
      fetchPosts().then((data) => setPosts([...data].reverse()));
    }
  }, [currentUser]);

  useEffect(() => {
    if (showChat) {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [showChat]);

  useEffect(() => {
    if (showChat) {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [posts]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeChat();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeChat]);

  const handleSend = async () => {
    const text = body.trim();
    if (!text) return;
    setBody("");
    await createPost(text);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!currentUser) return null;

  return (
    <>
      <Overlay $open={showChat} onClick={closeChat} />
      <Panel $open={showChat}>
        <PanelHeader>
          <h4>Chat</h4>
          <i className="fa fa-times" style={{ cursor: "pointer" }} onClick={closeChat} />
        </PanelHeader>
        <MessageList ref={listRef}>
          {posts.map((post) => (
            <MessageRow key={post._id}>
              <strong>{post.poster?.username ?? post.username}</strong>
              {post.body}
            </MessageRow>
          ))}
        </MessageList>
        <InputArea>
          <div className="input-group">
            <input
              ref={inputRef}
              type="text"
              className="form-control"
              placeholder="Message…"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <span className="input-group-btn">
              <button className="btn btn-default" onClick={handleSend} disabled={!body.trim()}>
                <i className="fa fa-paper-plane" />
              </button>
            </span>
          </div>
        </InputArea>
      </Panel>
    </>
  );
}
