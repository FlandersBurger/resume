import { useState, useRef } from "react";
import styled from "styled-components";
import { useApp } from "../context/AppContext";
import { useWebGame } from "./tenthings/useWebGame";

const TenThingsPlayPage = styled.div``;

const PlayProgress = styled.div`
  height: 8px;
  border-radius: 4px;
  background: var(--surface-alt);
  margin-bottom: 12px;
  overflow: hidden;
`;

const PlayProgressBar = styled.div<{ $width: number }>`
  height: 100%;
  width: ${({ $width }) => $width}%;
  background: var(--success-strong);
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
  ${({ $guessed }) => $guessed && `background-color: var(--success-soft);`}
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

/** The web Game this page plays. */
const WEB_GAME_ID = 1;

export default function TenThingsPlay() {
  const { currentUser } = useApp();
  const { view, sending, guess: sendGuess, hint, skip } = useWebGame(WEB_GAME_ID, !!currentUser);
  const [guess, setGuess] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCheckAnswer = async () => {
    if (!guess.trim()) return;
    const answer = guess;
    setGuess("");
    await sendGuess(answer);
    inputRef.current?.focus();
  };

  const handleHint = async () => {
    await hint();
    inputRef.current?.focus();
  };

  const handleSkip = async () => {
    await skip();
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleCheckAnswer();
  };

  if (!currentUser) return null; // guarded by the route

  const list = view?.list;
  const answers = list?.answers ?? [];
  const guessedCount = answers.filter((a) => a.guessed).length;
  const total = answers.length;
  const progress = total > 0 ? (guessedCount / total) * 100 : 0;

  return (
    <TenThingsPlayPage className="page container-fluid">
      {/* Header */}
      <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 4 }}>
        <h2 style={{ margin: 0 }}>{list?.name ?? "Loading..."}</h2>
        {total > 0 && (
          <span className="text-muted" style={{ fontSize: 14 }}>
            {guessedCount} / {total}
          </span>
        )}
      </div>

      {list?.description && (
        <p className="text-muted" style={{ marginBottom: 4 }}>
          {list.description}
        </p>
      )}
      {list?.creator && (
        <p style={{ marginBottom: 8, fontSize: 13 }}>
          <span className="text-muted">By </span>
          {list.creator}
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
          <button className="btn btn-success" onClick={handleCheckAnswer} disabled={!guess.trim() || sending}>
            <i className={`fas ${sending ? "fa-spinner fa-spin" : "fa-paper-plane"}`} />
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="btn-group" style={{ marginBottom: 16 }}>
        <button className="btn btn-primary" onClick={handleHint} disabled={!view || view.hintsLeft === 0}>
          <i className="fas fa-lightbulb" /> Hint ({view?.hints ?? 0}/{(view?.hints ?? 0) + (view?.hintsLeft ?? 0)})
        </button>
        {list?._id && (
          <button className="btn btn-default" onClick={handleSkip}>
            <i className="fas fa-forward" /> Skip
          </button>
        )}
      </div>

      <PlayListGroup>
        {answers.map((item) => (
          <PlayListGroupItem key={item._id} $guessed={item.guessed}>
            <AnswerRow>
              <h4>{item.maskedValue}</h4>
              {item.guessed && (
                <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
                  {item.blurb && item.blurbType !== "text" && (
                    <span>
                      {item.blurbType === "image" && <i className="fas fa-image text-muted" />}
                      {item.blurbType === "youtube" && <i className="fab fa-youtube text-danger" />}
                      {item.blurbType === "spotify" && <i className="fab fa-spotify text-success" />}
                      {item.blurbType === "link" && <i className="fas fa-link text-muted" />}
                    </span>
                  )}
                  <span className="label label-success">{item.guesser}</span>
                </div>
              )}
            </AnswerRow>
            {item.guessed && item.blurb && item.blurbType === "image" && (
              <Blurb>
                <img src={item.blurb} alt={item.value} />
              </Blurb>
            )}
            {item.guessed && item.blurb && item.blurbType === "text" && <Blurb>{item.blurb}</Blurb>}
          </PlayListGroupItem>
        ))}
      </PlayListGroup>
    </TenThingsPlayPage>
  );
}
