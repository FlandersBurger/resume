import { useEffect, useState, useRef } from "react";
import { getTenthings, answerTenthings, getTenthingsHint, skipTenthingsList } from "../api/games";
import { useApp } from "../context/AppContext";
import { useWebSocket } from "../hooks/useWebSocket";

export default function TenThingsPlay() {
  const { currentUser, toast } = useApp();
  const [game, setGame] = useState<any>(null);
  const [guess, setGuess] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const loadGame = async () => {
    if (!currentUser?.admin) return;
    const data = await getTenthings();
    setGame(data);
  };

  useWebSocket({
    tenthings_message: (data: any) => {
      if (data.message) toast(data.message);
      loadGame();
    },
  });

  useEffect(() => { loadGame(); }, [currentUser]);

  const handleCheckAnswer = async () => {
    const answer = guess;
    setGuess("");
    await answerTenthings(1, answer);
  };

  const handleHint = async () => {
    await getTenthingsHint();
    inputRef.current?.focus();
  };

  const handleSkip = async () => {
    await skipTenthingsList();
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleCheckAnswer();
  };

  if (!currentUser?.admin) return <h2 className="text-danger">Admin only</h2>;

  return (
    <div id="tenthings-page" className="col-md-12">
      <h1>Ten Things</h1>
      <h2>{game?.list?.name}</h2>
      {game?.list?._id && (
        <div>
          <p>{game.list.description}</p>
          <h5>By {game.list.creator?.username}</h5>
          <h5>Possible values: {game.list.answers}</h5>
        </div>
      )}
      <div>
        <div className="input-group play-buttons">
          <input
            ref={inputRef}
            className="form-control"
            type="search"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Guess"
          />
          <div className="input-group-append">
            <button className="btn btn-default" onClick={handleCheckAnswer} disabled={!guess}>
              <i className="fas fa-paper-plane" />
            </button>
          </div>
        </div>
        <div className="btn-group">
          <button className="btn btn-primary" onClick={handleHint} disabled={game?.hints >= 6}>
            Hint ({game?.hints ?? 0})
          </button>
          {game?.list?._id && (
            <button className="btn btn-default" onClick={handleSkip}>Skip</button>
          )}
        </div>
        <hr />
        <ul className="list-group">
          {game?.list?.values?.map((item: any) => (
            <li key={item._id} className={`list-group-item${item.guesser ? " guessed" : ""}`}>
              <div className="answer">
                <h4>{item.guesser ? item.value : item.maskedValue}</h4>
                {item.guesser && item.blurb && item.blurbType !== "text" && (
                  <div className="blurb">
                    {item.blurbType === "image" && <img src={item.blurb} alt="" />}
                    {item.blurbType === "youtube" && <i className="fab fa-youtube" />}
                    {item.blurbType === "spotify" && <i className="fab fa-spotify" />}
                    {item.blurbType === "link" && <i className="fas fa-link" />}
                  </div>
                )}
                {item.guesser && (
                  <span className="label label-success">
                    {item.guesser.username || item.guesser.first_name}
                  </span>
                )}
              </div>
              {item.guesser && item.blurb && item.blurbType === "text" && (
                <div className="blurb">{item.blurb}</div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
