"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const quizzes_1 = require("../../services/quizzes");
function shuffle(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
}
function toName(filename) {
    return filename.replace(/\.[^.]+$/, "").replace(/_/g, " ");
}
function QuizSkeletons() {
    const [animals, setAnimals] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        (0, quizzes_1.getQuizFiles)("skeletons").then((files) => {
            const names = files.map(toName);
            setAnimals(files.map((image) => {
                const name = toName(image);
                const others = shuffle(names.filter((n) => n !== name)).slice(0, 5);
                return { image, name, answers: shuffle([name, ...others]), guess: null };
            }));
        });
    }, []);
    const guess = (index, answer) => {
        setAnimals((prev) => prev.map((a, i) => (i === index ? { ...a, guess: answer } : a)));
    };
    const score = animals.filter((a) => a.guess === a.name).length;
    const answered = animals.filter((a) => a.guess !== null).length;
    return (<div className="quiz-page quiz-photos-page">
      <h1>Animal Skeletons</h1>
      {animals.map((animal, i) => {
            const panelClass = !animal.guess
                ? "panel-default"
                : animal.guess === animal.name
                    ? "panel-success"
                    : "panel-danger";
            return (<div key={i} className={`panel ${panelClass}`}>
            <div className="panel-heading">{i + 1}</div>
            <div className="panel-body">
              <img className="img-responsive img-rounded" src={`/skeletons/${animal.image}`} alt={animal.name}/>
              <div className="input-group" style={{ marginTop: 8 }}>
                {animal.answers.map((answer) => {
                    let btnClass = "btn-default";
                    if (animal.guess) {
                        if (answer === animal.name)
                            btnClass = "btn-success";
                        else if (answer === animal.guess)
                            btnClass = "btn-danger";
                    }
                    return (<button key={answer} className={`btn ${btnClass}`} disabled={!!animal.guess} onClick={() => guess(i, answer)} style={{ marginRight: 4, marginBottom: 4 }}>
                      {answer}
                    </button>);
                })}
              </div>
            </div>
          </div>);
        })}
      {answered === animals.length && animals.length > 0 && (<h1>
          {score} / {animals.length}
        </h1>)}
    </div>);
}
exports.default = QuizSkeletons;
//# sourceMappingURL=QuizSkeletons.js.map