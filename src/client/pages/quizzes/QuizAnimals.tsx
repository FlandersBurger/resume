import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getQuizFiles } from "../../services/quizzes";

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function toName(filename: string) {
  return filename.replace(/\.[^.]+$/, "").replace(/_/g, " ");
}

export default function QuizAnimals() {
  const [animals, setAnimals] = useState<{ sound: string; name: string; answers: string[]; guess: string | null }[]>(
    [],
  );

  useEffect(() => {
    getQuizFiles("animals").then((files) => {
      const names = files.map(toName);
      setAnimals(
        files.map((sound) => {
          const name = toName(sound);
          const others = shuffle(names.filter((n) => n !== name)).slice(0, 5);
          return { sound, name, answers: shuffle([name, ...others]), guess: null };
        }),
      );
    });
  }, []);

  const guess = (index: number, answer: string) => {
    setAnimals((prev) => prev.map((a, i) => (i === index ? { ...a, guess: answer } : a)));
  };

  const score = animals.filter((a) => a.guess === a.name).length;
  const answered = animals.filter((a) => a.guess !== null).length;

  return (
    <div className="quiz-page">
      <Helmet>
        <title>Animal Sounds Quiz — belgocanadian.com</title>
        <meta
          name="description"
          content="Can you identify animals by their sound? Listen and guess in this fun animal sounds quiz."
        />
        <meta property="og:title" content="Animal Sounds Quiz" />
        <meta property="og:url" content="https://belgocanadian.com/animals" />
        <link rel="canonical" href="https://belgocanadian.com/animals" />
      </Helmet>
      <h1>Animal Sounds</h1>
      {animals.map((animal, i) => {
        const panelClass = !animal.guess
          ? "panel-default"
          : animal.guess === animal.name
            ? "panel-success"
            : "panel-danger";
        return (
          <div key={i} className={`panel ${panelClass}`}>
            <div className="panel-heading">{i + 1}</div>
            <div className="panel-body">
              <audio controls>
                <source src={`/animals/${animal.sound}`} type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
              <div className="input-group" style={{ marginTop: 8 }}>
                {animal.answers.map((answer) => {
                  let btnClass = "btn-default";
                  if (animal.guess) {
                    if (answer === animal.name) btnClass = "btn-success";
                    else if (answer === animal.guess) btnClass = "btn-danger";
                  }
                  return (
                    <button
                      key={answer}
                      className={`btn ${btnClass}`}
                      disabled={!!animal.guess}
                      onClick={() => guess(i, answer)}
                      style={{ marginRight: 4, marginBottom: 4 }}
                    >
                      {answer}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
      {answered === animals.length && animals.length > 0 && (
        <h1>
          {score} / {animals.length}
        </h1>
      )}
    </div>
  );
}
