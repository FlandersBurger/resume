import { useEffect, useState } from "react";

interface CharadesData {
  [category: string]: string[];
}

export default function Charades() {
  const [charades, setCharades] = useState<CharadesData>({});
  const [word, setWord] = useState("");

  useEffect(() => {
    fetch("/charades.json").then((r) => r.json()).then(setCharades);
  }, []);

  const selectWord = (category: string) => {
    const words = charades[category];
    setWord(words[Math.floor(Math.random() * words.length)]);
  };

  return (
    <div id="charades-page">
      <h1>Charades Generator</h1>
      <div className="btn-group btn-group-lg">
        {Object.keys(charades).map((key) => (
          <button
            key={key}
            type="button"
            className="btn btn-primary"
            onClick={() => selectWord(key)}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>
      {word && <h2>{word}</h2>}
    </div>
  );
}
