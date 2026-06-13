import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";

const Page = styled.div`
  max-width: 540px;
  margin: 0 auto;
  padding: 20px 16px 40px;
  text-align: center;
`;

const SettingsCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  padding: 14px 20px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
`;

const SettingsRow = styled.div<{ $center?: boolean }>`
  display: flex;
  gap: 12px;
  align-items: ${(p) => (p.$center ? "center" : "flex-end")};
  flex-wrap: wrap;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
`;

const FieldLabel = styled.label`
  font-size: 0.78em;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const NumberInput = styled.input`
  width: 90px;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1em;
  text-align: center;
  color: #333;
  &:disabled {
    background: #f9f9f9;
    color: #bbb;
  }
  &:focus {
    outline: none;
    border-color: #337ab7;
  }
`;

const StartBtn = styled.button`
  padding: 10px 32px;
  border: 1px solid #337ab7;
  border-radius: 6px;
  background: #337ab7;
  color: #fff;
  font-size: 0.9em;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
  &:hover {
    background: #286090;
  }
`;

const StopBtn = styled.button`
  padding: 4px 14px;
  border: 1px solid #c9302c;
  border-radius: 6px;
  background: #d9534f;
  color: #fff;
  font-size: 0.82em;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
  &:hover {
    background: #c9302c;
  }
`;

const WorkoutCard = styled.div`
  position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  padding: 40px 32px 32px;
  margin-bottom: 20px;
`;

const TimerDisplay = styled.div<{ $rest: boolean }>`
  font-size: 2.4em;
  font-weight: 700;
  line-height: 1;
  min-width: 1.8ch;
  text-align: right;
  color: ${(p) => (p.$rest ? "#e8a000" : "#337ab7")};
`;

const PhaseBadge = styled.span<{ $rest: boolean }>`
  display: inline-block;
  padding: 2px 12px;
  border-radius: 20px;
  font-size: 0.72em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border: 1px solid ${(p) => (p.$rest ? "#f5d87a" : "#9fc8e8")};
  background: ${(p) => (p.$rest ? "#fef9e7" : "#eaf4fb")};
  color: ${(p) => (p.$rest ? "#e8a000" : "#337ab7")};
`;

const ExerciseName = styled.div`
  font-size: 1.7em;
  font-weight: 600;
  color: #222;
  margin-bottom: 6px;
`;

const ProgressText = styled.div`
  position: absolute;
  top: 10px;
  right: 14px;
  font-size: 0.8em;
  color: #bbb;
`;

const SideLabel = styled.div`
  font-size: 1em;
  font-weight: 600;
  color: #666;
  margin-top: 8px;
`;

const ExerciseImg = styled.img`
  max-width: 100%;
  max-height: 180px;
  border-radius: 6px;
  margin-top: 20px;
`;

const FinishedMsg = styled.div`
  font-size: 1.8em;
  font-weight: 700;
  color: #3c763d;
  padding: 16px 0;
`;

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

export default function Workout() {
  const [timeExercising, setTimeExercising] = useState(30);
  const [timeResting, setTimeResting] = useState(10);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [timer, setTimer] = useState<number | "">("");
  const [rest, setRest] = useState(false);
  const [exercise, setExercise] = useState({ name: "", split: false });
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const sounds = useRef({
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
        clearInterval(intervalRef.current!);
        return;
      }
      const currentExercise = Math.floor(remaining / excerciseTime);
      const t = remaining - currentExercise * excerciseTime;
      const displayTimer = t > timeExercising ? t - timeExercising : t;
      setTimer(displayTimer);
      setRest(t > timeExercising);
      setExercise(exercises[exercises.length - currentExercise - 1]);
      setTimeRemaining(remaining);
      if (t === timeExercising) sounds.current.on.play();
      else if (t === 0) sounds.current.off.play();
      else if (exercises[exercises.length - currentExercise - 1].split && t === Math.floor(timeExercising / 2))
        sounds.current.switch.play();
    }, 1000);
  };

  const stopWorkout = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTimer("");
    setTimeRemaining(0);
    setRest(false);
    setExercise({ name: "", split: false });
  };

  useEffect(
    () => () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    },
    [],
  );

  const finished = exercise.name === "Finished! Congrats!";

  return (
    <Page>
      <Helmet>
        <title>Workout — Laurent Debacker</title>
      </Helmet>
      <h2>Workout</h2>
      {timeRemaining > 0 ? (
        <SettingsCard>
          <SettingsRow $center>
            <TimerDisplay $rest={rest}>{timer}</TimerDisplay>
            <PhaseBadge $rest={rest}>{rest ? "Rest" : "Go"}</PhaseBadge>
            <StopBtn onClick={stopWorkout}>Stop</StopBtn>
          </SettingsRow>
        </SettingsCard>
      ) : (
        <SettingsCard>
          <SettingsRow>
            <Field>
              <FieldLabel>Exercise (s)</FieldLabel>
              <NumberInput
                type="number"
                value={timeExercising}
                disabled={!!timeRemaining}
                onChange={(e) => setTimeExercising(Number(e.target.value))}
              />
            </Field>
            <Field>
              <FieldLabel>Rest (s)</FieldLabel>
              <NumberInput
                type="number"
                value={timeResting}
                disabled={!!timeRemaining}
                onChange={(e) => setTimeResting(Number(e.target.value))}
              />
            </Field>
            <StartBtn onClick={startWorkout}>Start</StartBtn>
          </SettingsRow>
        </SettingsCard>
      )}
      {finished && (
        <WorkoutCard>
          <FinishedMsg>Finished! Congrats!</FinishedMsg>
        </WorkoutCard>
      )}
      {timeRemaining > 0 && (
        <WorkoutCard>
          <ProgressText>{progress()}</ProgressText>
          <ExerciseName>
            {rest ? "Next up: " : ""}
            {exercise.name}
          </ExerciseName>
          {exercise.split && !rest && typeof timer === "number" && (
            <SideLabel>{timer < timeExercising / 2 ? "Right" : "Left"}</SideLabel>
          )}
          {!rest && exercise.name && (
            <ExerciseImg src={`/exercises/${encodeURIComponent(exercise.name)}.gif`} alt={exercise.name} />
          )}
        </WorkoutCard>
      )}
    </Page>
  );
}
