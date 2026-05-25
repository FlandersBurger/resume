import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { getTenthings, answerTenthings, getTenthingsHint, skipTenthingsList } from "../services/games";
import { useApp } from "../context/AppContext";
import { useWebSocket } from "../hooks/useWebSocket";

const TenThingsPlayPage = styled.div``;

const PlayProgress = styled.div`
  height: 8px;
  border-radius: 4px;
  background: #e9ecef;
  margin-bottom: 12px;
  overflow: hidden;
`;

const PlayProgressBar = styled.div<{ $width: number }>`
  height: 100%;
  width: ${({ $width }) => $width}%;
  background: #28a745;
  transition: width 0.4s ease;
`;

const PlayListGroup = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 0;
  list-style: none;
`;

const PlayListGroupItem = styled.li<{ $guessed?: boolean }>`
  flex-basis: 280px;
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.3s;
  ${({ $guessed }) => $guessed && `background-color: #d4edda;`}
`;

const AnswerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 8px;
  h4 {
    margin: 0;
    font-size: 15px;
  }
`;

const Blurb = styled.div`
  background-color: rgba(64, 182, 24, 0.25);
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 4px;
  text-align: center;
  width: 100%;
  font-size: 13px;
  img {
    max-width: 100%;
    max-height: 120px;
    border-radius: 4px;
  }
`;

interface GameValue {
  _id: string;
  value: string;
  maskedValue: string;
  blurb?: string;
  blurbType?: string;
  guesser?: { username?: string; first_name?: string };
}

interface Game {
  hints: number;
  list?: {
    _id?: string;
    name?: string;
    description?: string;
    answers?: number;
    creator?: { username?: string };
    values?: GameValue[];
  };
}

export default function TenThingsPlay() {
  const { currentUser, toast } = useApp();
  const [game, setGame] = useState<Game | null>(null);
  const [guess, setGuess] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const loadGame = async () => {
    if (!currentUser?.admin) return;
    const data = await getTenthings();
    setGame(data);
  };

  // Keep a stable ref so intervals always call the latest loadGame
  const loadGameRef = useRef(loadGame);
  loadGameRef.current = loadGame;

  useWebSocket({
    tenthings_message: (data: any) => {
      if ((data as any)?.message) toast((data as any).message);
      // Small delay to let the queue finish before reloading
      setTimeout(() => loadGameRef.current(), 300);
    },
  });

  useEffect(() => {
    loadGame();
  }, [currentUser]);

  // Poll every 5s to keep all tabs in sync
  useEffect(() => {
    const interval = setInterval(() => loadGameRef.current(), 5000);
    return () => clearInterval(interval);
  }, []);

  // Poll faster (every 2s) when the game is complete waiting for a new round
  useEffect(() => {
    const values = game?.list?.values ?? [];
    const complete = values.length > 0 && values.every((v) => v.guesser);
    if (!complete) return;
    const interval = setInterval(loadGame, 2000);
    return () => clearInterval(interval);
  }, [game]);

  const handleCheckAnswer = async () => {
    if (!guess.trim()) return;
    const answer = guess;
    setGuess("");
    setLoading(true);
    try {
      await answerTenthings(1, answer);
      // Reload after short delay to let the queue process the guess
      setTimeout(loadGame, 800);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleHint = async () => {
    await getTenthingsHint();
    await loadGame();
    inputRef.current?.focus();
  };

  const handleSkip = async () => {
    await skipTenthingsList();
    await loadGame();
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleCheckAnswer();
  };

  if (!currentUser?.admin) return <h2 className="text-danger">Admin only</h2>;

  const values = game?.list?.values ?? [];
  const guessedCount = values.filter((v) => v.guesser).length;
  const total = values.length || game?.list?.answers || 0;
  const progress = total > 0 ? (guessedCount / total) * 100 : 0;

  return (
    <TenThingsPlayPage className="page container-fluid">
      {/* Header */}
      <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 4 }}>
        <h2 style={{ margin: 0 }}>{game?.list?.name ?? "Loading..."}</h2>
        {total > 0 && (
          <span className="text-muted" style={{ fontSize: 14 }}>
            {guessedCount} / {total}
          </span>
        )}
      </div>

      {game?.list?.description && (
        <p className="text-muted" style={{ marginBottom: 4 }}>
          {game.list.description}
        </p>
      )}
      {game?.list?.creator?.username && (
        <p style={{ marginBottom: 8, fontSize: 13 }}>
          <span className="text-muted">By </span>
          {game.list.creator.username}
        </p>
      )}

      {/* Progress bar */}
      {total > 0 && (
        <PlayProgress>
          <PlayProgressBar $width={progress} />
        </PlayProgress>
      )}

      {/* Input */}
      <div className="play-buttons input-group" style={{ marginBottom: 8, width: "100%", display: "table" }}>
        <input
          ref={inputRef}
          className="form-control"
          type="search"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your guess and press Enter"
          autoFocus
          autoComplete="off"
        />
        <div className="input-group-btn">
          <button className="btn btn-success" onClick={handleCheckAnswer} disabled={!guess.trim() || loading}>
            <i className={`fas ${loading ? "fa-spinner fa-spin" : "fa-paper-plane"}`} />
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="btn-group" style={{ marginBottom: 16 }}>
        <button className="btn btn-primary" onClick={handleHint} disabled={(game?.hints ?? 0) >= 6}>
          <i className="fas fa-lightbulb" /> Hint ({game?.hints ?? 0}/6)
        </button>
        {game?.list?._id && (
          <button className="btn btn-default" onClick={handleSkip}>
            <i className="fas fa-forward" /> Skip
          </button>
        )}
      </div>

      <PlayListGroup>
        {values.map((item) => (
          <PlayListGroupItem key={item._id} $guessed={!!item.guesser}>
            <AnswerRow>
              <h4>{item.guesser ? item.value : item.maskedValue}</h4>
              <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
                {item.guesser && item.blurb && item.blurbType !== "text" && (
                  <span>
                    {item.blurbType === "image" && <i className="fas fa-image text-muted" />}
                    {item.blurbType === "youtube" && <i className="fab fa-youtube text-danger" />}
                    {item.blurbType === "spotify" && <i className="fab fa-spotify text-success" />}
                    {item.blurbType === "link" && <i className="fas fa-link text-muted" />}
                  </span>
                )}
                {item.guesser && (
                  <span className="label label-success">{item.guesser.username || item.guesser.first_name}</span>
                )}
              </div>
            </AnswerRow>
            {item.guesser && item.blurb && item.blurbType === "image" && (
              <Blurb>
                <img src={item.blurb} alt={item.value} />
              </Blurb>
            )}
            {item.guesser && item.blurb && item.blurbType === "text" && <Blurb>{item.blurb}</Blurb>}
          </PlayListGroupItem>
        ))}
      </PlayListGroup>
    </TenThingsPlayPage>
  );
}
