"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const exercises = [
    { name: "Jumping Jacks", split: false },
    { name: "Wall Sit", split: false },
    { name: "Push-Up", split: false },
    { name: "Crunch", split: false },
    { name: "Step-Up", split: true },
    { name: "Squat", split: false },
    { name: "Triceps Dip", split: false },
    { name: "Plank", split: false },
    { name: "High Knees", split: false },
    { name: "Lunge", split: false },
    { name: "Push-Up with Rotation", split: false },
    { name: "Side Plank", split: true },
];
function Workout() {
    const [timeExercising, setTimeExercising] = (0, react_1.useState)(30);
    const [timeResting, setTimeResting] = (0, react_1.useState)(10);
    const [timeRemaining, setTimeRemaining] = (0, react_1.useState)(0);
    const [timer, setTimer] = (0, react_1.useState)("");
    const [rest, setRest] = (0, react_1.useState)(false);
    const [exercise, setExercise] = (0, react_1.useState)({ name: "", split: false });
    const intervalRef = (0, react_1.useRef)(null);
    const sounds = (0, react_1.useRef)({
        on: new Audio("on.wav"),
        off: new Audio("off.wav"),
        switch: new Audio("switch.wav"),
    });
    const progress = () => {
        const remaining = Math.floor(timeRemaining / (timeExercising + timeResting));
        return `${exercises.length - remaining}/${exercises.length}`;
    };
    const startWorkout = () => {
        const excerciseTime = timeExercising + timeResting;
        let remaining = exercises.length * excerciseTime;
        setTimeRemaining(remaining);
        intervalRef.current = setInterval(() => {
            remaining--;
            if (remaining === 0) {
                setExercise({ name: "Finished! Congrats!", split: false });
                setTimer("");
                setTimeRemaining(0);
                setRest(false);
                clearInterval(intervalRef.current);
                return;
            }
            const currentExercise = Math.floor(remaining / excerciseTime);
            const t = remaining - currentExercise * excerciseTime;
            const displayTimer = t > timeExercising ? t - timeExercising : t;
            setTimer(displayTimer);
            setRest(t > timeExercising);
            setExercise(exercises[exercises.length - currentExercise - 1]);
            setTimeRemaining(remaining);
            if (t === timeExercising)
                sounds.current.on.play();
            else if (t === 0)
                sounds.current.off.play();
            else if (exercises[exercises.length - currentExercise - 1].split && t === Math.floor(timeExercising / 2))
                sounds.current.switch.play();
        }, 1000);
    };
    const stopWorkout = () => {
        if (intervalRef.current)
            clearInterval(intervalRef.current);
        setTimer("");
        setTimeRemaining(0);
        setRest(false);
        setExercise({ name: "", split: false });
    };
    const handleWorkout = () => {
        if (timeRemaining)
            stopWorkout();
        else
            startWorkout();
    };
    (0, react_1.useEffect)(() => () => {
        if (intervalRef.current)
            clearInterval(intervalRef.current);
    }, []);
    return (<div id="workout-page">
      <div className="well well-lg">
        <div className="input-group">
          <span className="input-group-addon">Exercise Time</span>
          <input className="form-control" type="number" value={timeExercising} disabled={!!timeRemaining} onChange={(e) => setTimeExercising(Number(e.target.value))}/>
        </div>
        <div className="input-group">
          <span className="input-group-addon">Rest Time</span>
          <input className="form-control" type="number" value={timeResting} disabled={!!timeRemaining} onChange={(e) => setTimeResting(Number(e.target.value))}/>
        </div>
        <br />
        <button className="btn btn-default" onClick={handleWorkout}>
          {timeRemaining ? "Stop" : "Start"} Workout
        </button>
      </div>
      <h1 className="display-2">{timer}</h1>
      {timeRemaining > 0 && (<h2 className="display-3">
          {rest ? "Next up: " : ""}
          {exercise.name} ({progress()})
        </h2>)}
      {exercise.split && !rest && typeof timer === "number" && <h2>{timer < timeExercising / 2 ? "Right" : "Left"}</h2>}
      {!rest && timeRemaining > 0 && exercise.name && (<img className="img-div" src={`/exercises/${encodeURIComponent(exercise.name)}.gif`} alt={exercise.name}/>)}
    </div>);
}
exports.default = Workout;
//# sourceMappingURL=Workout.js.map