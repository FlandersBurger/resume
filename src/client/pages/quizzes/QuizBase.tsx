import { useEffect, useState } from "react";
import { getQuizFiles } from "../../api/quizzes";

interface ImageQuizProps {
  name: string;
  title: string;
}

export function ImageQuiz({ name, title }: ImageQuizProps) {
  const [files, setFiles] = useState<string[]>([]);

  useEffect(() => {
    getQuizFiles(name).then(setFiles);
  }, [name]);

  return (
    <div>
      <h1>{title}</h1>
      <div className="row">
        {files.map((file, i) => (
          <div key={i} className="col-xs-6 col-sm-4 col-md-3" style={{ marginBottom: 16 }}>
            <img src={file} alt={`${name}-${i}`} style={{ width: "100%", borderRadius: 4 }} />
          </div>
        ))}
      </div>
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

  const getLabel = (path: string) => {
    const parts = path.split("/");
    return parts[parts.length - 1].replace(/\.[^.]+$/, "").replace(/_/g, " ");
  };

  const pickChoices = (all: string[], idx: number) => {
    const correct = all[idx];
    const others = all.filter((_, i) => i !== idx).sort(() => Math.random() - 0.5).slice(0, 5);
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
    if (next >= files.length) { setDone(true); return; }
    setCurrent(next);
    pickChoices(files, next);
  };

  if (done) return (
    <div>
      <h1>{title}</h1>
      <h2>Score: {score} / {files.length}</h2>
      <button className="btn btn-primary" onClick={() => { setCurrent(0); setScore(0); setDone(false); pickChoices(files, 0); }}>
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
        <img src={files[current]} alt="" style={{ maxHeight: 300, maxWidth: "100%", borderRadius: 4 }} />
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
