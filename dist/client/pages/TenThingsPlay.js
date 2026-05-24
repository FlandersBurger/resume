"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const games_1 = require("../services/games");
const AppContext_1 = require("../context/AppContext");
const useWebSocket_1 = require("../hooks/useWebSocket");
function TenThingsPlay() {
    const { currentUser, toast } = (0, AppContext_1.useApp)();
    const [game, setGame] = (0, react_1.useState)(null);
    const [guess, setGuess] = (0, react_1.useState)("");
    const [loading, setLoading] = (0, react_1.useState)(false);
    const inputRef = (0, react_1.useRef)(null);
    const loadGame = async () => {
        if (!currentUser?.admin)
            return;
        const data = await (0, games_1.getTenthings)();
        setGame(data);
    };
    const loadGameRef = (0, react_1.useRef)(loadGame);
    loadGameRef.current = loadGame;
    (0, useWebSocket_1.useWebSocket)({
        tenthings_message: (data) => {
            if (data?.message)
                toast(data.message);
            setTimeout(() => loadGameRef.current(), 300);
        },
    });
    (0, react_1.useEffect)(() => {
        loadGame();
    }, [currentUser]);
    (0, react_1.useEffect)(() => {
        const interval = setInterval(() => loadGameRef.current(), 5000);
        return () => clearInterval(interval);
    }, []);
    (0, react_1.useEffect)(() => {
        const values = game?.list?.values ?? [];
        const complete = values.length > 0 && values.every((v) => v.guesser);
        if (!complete)
            return;
        const interval = setInterval(loadGame, 2000);
        return () => clearInterval(interval);
    }, [game]);
    const handleCheckAnswer = async () => {
        if (!guess.trim())
            return;
        const answer = guess;
        setGuess("");
        setLoading(true);
        try {
            await (0, games_1.answerTenthings)(1, answer);
            setTimeout(loadGame, 800);
        }
        finally {
            setLoading(false);
            inputRef.current?.focus();
        }
    };
    const handleHint = async () => {
        await (0, games_1.getTenthingsHint)();
        await loadGame();
        inputRef.current?.focus();
    };
    const handleSkip = async () => {
        await (0, games_1.skipTenthingsList)();
        await loadGame();
        inputRef.current?.focus();
    };
    const handleKeyDown = (e) => {
        if (e.key === "Enter")
            handleCheckAnswer();
    };
    if (!currentUser?.admin)
        return <h2 className="text-danger">Admin only</h2>;
    const values = game?.list?.values ?? [];
    const guessedCount = values.filter((v) => v.guesser).length;
    const total = values.length || game?.list?.answers || 0;
    const progress = total > 0 ? (guessedCount / total) * 100 : 0;
    return (<div id="tenthings-play-page" className="page container-fluid">
      
      <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 4 }}>
        <h2 style={{ margin: 0 }}>{game?.list?.name ?? "Loading..."}</h2>
        {total > 0 && (<span className="text-muted" style={{ fontSize: 14 }}>
            {guessedCount} / {total}
          </span>)}
      </div>

      {game?.list?.description && (<p className="text-muted" style={{ marginBottom: 4 }}>
          {game.list.description}
        </p>)}
      {game?.list?.creator?.username && (<p style={{ marginBottom: 8, fontSize: 13 }}>
          <span className="text-muted">By </span>
          {game.list.creator.username}
        </p>)}

      
      {total > 0 && (<div className="play-progress">
          <div className="play-progress-bar" style={{ width: `${progress}%` }}/>
        </div>)}

      
      <div className="play-buttons input-group" style={{ marginBottom: 8, width: "100%", display: "table" }}>
        <input ref={inputRef} className="form-control" type="search" value={guess} onChange={(e) => setGuess(e.target.value)} onKeyDown={handleKeyDown} placeholder="Type your guess and press Enter" autoFocus autoComplete="off"/>
        <div className="input-group-btn">
          <button className="btn btn-success" onClick={handleCheckAnswer} disabled={!guess.trim() || loading}>
            <i className={`fas ${loading ? "fa-spinner fa-spin" : "fa-paper-plane"}`}/>
          </button>
        </div>
      </div>

      
      <div className="btn-group" style={{ marginBottom: 16 }}>
        <button className="btn btn-primary" onClick={handleHint} disabled={(game?.hints ?? 0) >= 6}>
          <i className="fas fa-lightbulb"/> Hint ({game?.hints ?? 0}/6)
        </button>
        {game?.list?._id && (<button className="btn btn-default" onClick={handleSkip}>
            <i className="fas fa-forward"/> Skip
          </button>)}
      </div>

      
      <ul className="list-group">
        {values.map((item) => (<li key={item._id} className={`list-group-item${item.guesser ? " guessed" : ""}`}>
            <div className="answer">
              <h4>{item.guesser ? item.value : item.maskedValue}</h4>
              <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
                {item.guesser && item.blurb && item.blurbType !== "text" && (<span>
                    {item.blurbType === "image" && <i className="fas fa-image text-muted"/>}
                    {item.blurbType === "youtube" && <i className="fab fa-youtube text-danger"/>}
                    {item.blurbType === "spotify" && <i className="fab fa-spotify text-success"/>}
                    {item.blurbType === "link" && <i className="fas fa-link text-muted"/>}
                  </span>)}
                {item.guesser && (<span className="label label-success">{item.guesser.username || item.guesser.first_name}</span>)}
              </div>
            </div>
            {item.guesser && item.blurb && item.blurbType === "image" && (<div className="blurb">
                <img src={item.blurb} alt={item.value}/>
              </div>)}
            {item.guesser && item.blurb && item.blurbType === "text" && <div className="blurb">{item.blurb}</div>}
          </li>))}
      </ul>
    </div>);
}
exports.default = TenThingsPlay;
//# sourceMappingURL=TenThingsPlay.js.map