"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function Charades() {
    const [charades, setCharades] = (0, react_1.useState)({});
    const [word, setWord] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
        fetch("/charades.json")
            .then((r) => r.json())
            .then(setCharades);
    }, []);
    const selectWord = (category) => {
        const words = charades[category];
        setWord(words[Math.floor(Math.random() * words.length)]);
    };
    return (<div id="charades-page">
      <h1>Charades Generator</h1>
      <div className="btn-group btn-group-lg">
        {Object.keys(charades).map((key) => (<button key={key} type="button" className="btn btn-primary" onClick={() => selectWord(key)}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>))}
      </div>
      {word && <h2>{word}</h2>}
    </div>);
}
exports.default = Charades;
//# sourceMappingURL=Charades.js.map