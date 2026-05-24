import { useEffect, useRef, useState } from "react";
import { getQuizFiles } from "../../services/quizzes";
import { fuzzyMatch } from "../../services/games";

interface ImageQuizProps {
  name: string;
  title: string;
  labelsUrl?: string;
}

export function ImageQuiz({ name, title }: ImageQuizProps) {
  const [files, setFiles] = useState<string[]>([]);

  useEffect(() => {
    getQuizFiles(name).then(setFiles);
  }, [name]);

  return (
    <div className="quiz-page quiz-photos-page">
      <h1>{title}</h1>
      {files.map((file, i) => (
        <div key={i} className="panel panel-default">
          <div className="panel-heading">{i + 1}</div>
          <div className="panel-body">
            <img className="img-responsive img-rounded" src={`/${name}/${file}`} alt={file.replace(/\.[^.]+$/, "")} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function GuessQuiz({ name, title }: ImageQuizProps) {
  const [files, setFiles] = useState<string[]>([]);
  const [current, setCurrent] = useState(0);
  const [choices, setChoices] = useState<string[]>([]);
  const [answered, setAnswered] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    getQuizFiles(name).then((data) => {
      const shuffled = [...data].sort(() => Math.random() - 0.5);
      setFiles(shuffled);
      if (shuffled.length > 0) pickChoices(shuffled, 0);
    });
  }, [name]);

  const getLabel = (filename: string) => filename.replace(/\.[^.]+$/, "");
  const toUrl = (filename: string) => `/${name}/${filename}`;

  const pickChoices = (all: string[], idx: number) => {
    const correct = all[idx];
    const others = all
      .filter((_, i) => i !== idx)
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);
    const all6 = [correct, ...others].sort(() => Math.random() - 0.5);
    setChoices(all6);
    setAnswered(null);
  };

  const handleAnswer = (choice: string) => {
    if (answered !== null) return;
    setAnswered(choice);
    if (getLabel(choice) === getLabel(files[current])) setScore((s) => s + 1);
  };

  const handleNext = () => {
    const next = current + 1;
    if (next >= files.length) {
      setDone(true);
      return;
    }
    setCurrent(next);
    pickChoices(files, next);
  };

  if (done)
    return (
      <div>
        <h1>{title}</h1>
        <h2>
          Score: {score} / {files.length}
        </h2>
        <button
          className="btn btn-primary"
          onClick={() => {
            setCurrent(0);
            setScore(0);
            setDone(false);
            pickChoices(files, 0);
          }}
        >
          Restart
        </button>
      </div>
    );

  if (!files.length) return <div>Loading...</div>;

  const correctLabel = getLabel(files[current]);

  return (
    <div>
      <h1>{title}</h1>
      <h4>Score: {score}</h4>
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <img src={toUrl(files[current])} alt="" style={{ maxHeight: 300, maxWidth: "100%", borderRadius: 4 }} />
      </div>
      <div className="row">
        {choices.map((c, i) => {
          const label = getLabel(c);
          let variant = "default";
          if (answered !== null) {
            if (label === correctLabel) variant = "success";
            else if (c === answered) variant = "danger";
          }
          return (
            <div key={i} className="col-xs-6 col-sm-4" style={{ marginBottom: 8 }}>
              <button className={`btn btn-${variant} btn-block`} onClick={() => handleAnswer(c)}>
                {label}
              </button>
            </div>
          );
        })}
      </div>
      {answered !== null && (
        <button className="btn btn-primary" onClick={handleNext} style={{ marginTop: 8 }}>
          Next
        </button>
      )}
    </div>
  );
}

type GuessState = "unanswered" | "correct" | "wrong";

interface FuzzyItem {
  file: string;
  label: string;
  inputValue: string;
  state: GuessState;
  matchedLabel: string | null;
}

export function FuzzyImageQuiz({ name, title, labelsUrl }: ImageQuizProps) {
  const [items, setItems] = useState<FuzzyItem[]>([]);
  const [fuzzyValues, setFuzzyValues] = useState<string[]>([]);
  const [aliasToLabel, setAliasToLabel] = useState<Record<string, string>>({});
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    Promise.all([
      getQuizFiles(name),
      fetch("/quiz-aliases.json").then((r) => r.json()) as Promise<Record<string, Record<string, string[]>>>,
      labelsUrl ? (fetch(labelsUrl).then((r) => r.json()) as Promise<Record<string, string>>) : Promise.resolve({}),
    ]).then(([files, allAliases, allLabels]) => {
      const labels = files.map((f) => {
        const stem = f.replace(/\.[^.]+$/, "");
        return allLabels[stem] ?? stem.replace(/_/g, " ");
      });
      const aliases = allAliases[name] ?? {};

      // Build reverse map: alias string → canonical label
      const reverseMap: Record<string, string> = {};
      for (const [label, alts] of Object.entries(aliases)) {
        for (const alt of alts) reverseMap[alt] = label;
      }
      setAliasToLabel(reverseMap);

      // All values passed to fuzzy: canonical labels + all aliases
      setFuzzyValues([...labels, ...Object.keys(reverseMap)]);

      setItems(
        files.map((file, i) => ({
          file,
          label: labels[i],
          inputValue: "",
          state: "unanswered",
          matchedLabel: null,
        })),
      );
    });
  }, [name, labelsUrl]);

  const handleGuess = async (index: number) => {
    const item = items[index];
    if (item.state !== "unanswered" || !item.inputValue.trim()) return;
    const result = await fuzzyMatch(fuzzyValues, item.inputValue.trim());
    const rawMatch: string | null = result?.value ?? null;
    // Resolve alias → canonical label if needed
    const matched = rawMatch !== null ? aliasToLabel[rawMatch] ?? rawMatch : null;
    const correct = matched === item.label;
    setItems((prev) =>
      prev.map((it, i) => (i === index ? { ...it, state: correct ? "correct" : "wrong", matchedLabel: matched } : it)),
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter") handleGuess(index);
  };

  const answered = items.filter((it) => it.state !== "unanswered").length;
  const score = items.filter((it) => it.state === "correct").length;

  return (
    <div className="quiz-page quiz-photos-page">
      <h1>{title}</h1>
      {items.map((item, i) => {
        const panelClass =
          item.state === "correct" ? "panel-success" : item.state === "wrong" ? "panel-danger" : "panel-default";
        return (
          <div key={i} className={`panel ${panelClass}`}>
            <div className="panel-heading">{i + 1}</div>
            <div className="panel-body">
              <img
                className="img-responsive img-rounded"
                src={`/${name}/${item.file}`}
                alt=""
                style={{ marginBottom: 10 }}
              />
              <div className="input-group">
                <input
                  ref={(el) => {
                    inputRefs.current[i] = el;
                  }}
                  type="text"
                  className="form-control"
                  placeholder="Your guess…"
                  value={item.inputValue}
                  disabled={item.state !== "unanswered"}
                  onChange={(e) =>
                    setItems((prev) => prev.map((it, idx) => (idx === i ? { ...it, inputValue: e.target.value } : it)))
                  }
                  onKeyDown={(e) => handleKeyDown(e, i)}
                />
                <span className="input-group-btn">
                  <button
                    className={`btn ${item.state === "correct" ? "btn-success" : item.state === "wrong" ? "btn-danger" : "btn-default"}`}
                    disabled={item.state !== "unanswered"}
                    onClick={() => handleGuess(i)}
                  >
                    <i
                      className={`fas ${item.state === "correct" ? "fa-check" : item.state === "wrong" ? "fa-times" : "fa-paper-plane"}`}
                    />
                  </button>
                </span>
              </div>
              {item.state === "correct" && (
                <p className="text-success" style={{ marginTop: 6, marginBottom: 0 }}>
                  <strong>{item.label}</strong>
                </p>
              )}
              {item.state === "wrong" && (
                <p className="text-danger" style={{ marginTop: 6, marginBottom: 0 }}>
                  {item.matchedLabel ? (
                    <>
                      Closest match: <strong>{item.matchedLabel}</strong> — correct answer:{" "}
                      <strong>{item.label}</strong>
                    </>
                  ) : (
                    <>
                      Correct answer: <strong>{item.label}</strong>
                    </>
                  )}
                </p>
              )}
            </div>
          </div>
        );
      })}
      {answered === items.length && items.length > 0 && (
        <h1>
          {score} / {items.length}
        </h1>
      )}
    </div>
  );
}
