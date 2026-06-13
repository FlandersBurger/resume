import { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { Helmet } from "react-helmet-async";

// ─── Types & constants ────────────────────────────────────────────────────────

type Category =
  | "ones"
  | "twos"
  | "threes"
  | "fours"
  | "fives"
  | "sixes"
  | "threeOfAKind"
  | "fourOfAKind"
  | "fullHouse"
  | "smallStraight"
  | "largeStraight"
  | "yahtzee"
  | "chance";

const UPPER: Category[] = ["ones", "twos", "threes", "fours", "fives", "sixes"];
const LOWER: Category[] = [
  "threeOfAKind",
  "fourOfAKind",
  "fullHouse",
  "smallStraight",
  "largeStraight",
  "yahtzee",
  "chance",
];
const ALL_CATS = [...UPPER, ...LOWER];

const LABELS: Record<Category, string> = {
  ones: "Ones",
  twos: "Twos",
  threes: "Threes",
  fours: "Fours",
  fives: "Fives",
  sixes: "Sixes",
  threeOfAKind: "3 of a Kind",
  fourOfAKind: "4 of a Kind",
  fullHouse: "Full House",
  smallStraight: "Sm. Straight",
  largeStraight: "Lg. Straight",
  yahtzee: "Yahtzee!",
  chance: "Chance",
};

const HINTS: Record<Category, string> = {
  ones: "Sum of 1s",
  twos: "Sum of 2s",
  threes: "Sum of 3s",
  fours: "Sum of 4s",
  fives: "Sum of 5s",
  sixes: "Sum of 6s",
  threeOfAKind: "Sum all if 3+ same",
  fourOfAKind: "Sum all if 4+ same",
  fullHouse: "25 pts",
  smallStraight: "30 pts",
  largeStraight: "40 pts",
  yahtzee: "50 pts",
  chance: "Sum of all",
};

// 3×3 grid positions (row-major 0–8): 0 1 2 / 3 4 5 / 6 7 8
const PIPS: Record<number, number[]> = {
  1: [4],
  2: [0, 8],
  3: [0, 4, 8],
  4: [0, 2, 6, 8],
  5: [0, 2, 4, 6, 8],
  6: [0, 2, 3, 5, 6, 8],
};

// ─── Scoring ─────────────────────────────────────────────────────────────────

function scoreFor(cat: Category, dice: number[]): number {
  const c: Record<number, number> = {};
  for (const d of dice) c[d] = (c[d] || 0) + 1;
  const vals = Object.values(c);
  const sum = dice.reduce((a, b) => a + b, 0);

  switch (cat) {
    case "ones":
      return c[1] || 0;
    case "twos":
      return (c[2] || 0) * 2;
    case "threes":
      return (c[3] || 0) * 3;
    case "fours":
      return (c[4] || 0) * 4;
    case "fives":
      return (c[5] || 0) * 5;
    case "sixes":
      return (c[6] || 0) * 6;
    case "threeOfAKind":
      return vals.some((v) => v >= 3) ? sum : 0;
    case "fourOfAKind":
      return vals.some((v) => v >= 4) ? sum : 0;
    case "fullHouse": {
      const sv = [...vals].sort((a, b) => a - b);
      return sv.length === 2 && sv[0] === 2 && sv[1] === 3 ? 25 : 0;
    }
    case "smallStraight": {
      const u = [...new Set(dice)].sort((a, b) => a - b);
      for (let i = 0; i <= u.length - 4; i++) {
        if (u[i + 1] === u[i] + 1 && u[i + 2] === u[i] + 2 && u[i + 3] === u[i] + 3) return 30;
      }
      return 0;
    }
    case "largeStraight": {
      const u = [...new Set(dice)].sort((a, b) => a - b);
      return u.length === 5 && u[4] - u[0] === 4 ? 40 : 0;
    }
    case "yahtzee":
      return vals.length === 1 ? 50 : 0;
    case "chance":
      return sum;
  }
}

function upperSubtotal(scores: Partial<Record<Category, number>>) {
  return UPPER.reduce((acc, c) => acc + (scores[c] ?? 0), 0);
}

function grandTotal(scores: Partial<Record<Category, number>>, bonuses: number) {
  const up = upperSubtotal(scores);
  const upBonus = up >= 63 ? 35 : 0;
  const low = LOWER.reduce((acc, c) => acc + (scores[c] ?? 0), 0);
  return up + upBonus + low + bonuses * 100;
}

// ─── Styled ───────────────────────────────────────────────────────────────────

const Page = styled.div`
  max-width: 680px;
  margin: 0 auto;
  padding: 20px 16px 60px;
`;

const Subtitle = styled.p`
  color: #999;
  font-size: 0.9em;
  margin-bottom: 28px;
`;

const Panel = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  padding: 20px 16px;
  margin-bottom: 20px;
`;

const DiceRow = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 16px;
  @media (max-width: 420px) {
    gap: 8px;
  }
`;

const shake = keyframes`
  0%,100% { transform: rotate(0); }
  33%      { transform: rotate(-10deg); }
  66%      { transform: rotate(10deg); }
`;

const DieWrap = styled.div<{ $held: boolean; $clickable: boolean; $shaking: boolean; $blank: boolean }>`
  width: 70px;
  height: 70px;
  border: 2px solid ${(p) => (p.$blank ? "#eee" : p.$held ? "#337ab7" : "#ccc")};
  border-radius: 10px;
  background: ${(p) => (p.$blank ? "#fafafa" : p.$held ? "#eff5ff" : "#fff")};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  padding: 9px;
  cursor: ${(p) => (p.$clickable ? "pointer" : "default")};
  transition:
    border-color 0.15s,
    background 0.15s;
  user-select: none;
  ${(p) =>
    p.$shaking &&
    css`
      animation: ${shake} 0.15s linear infinite;
    `}
  &:hover {
    ${(p) =>
      p.$clickable &&
      !p.$held &&
      css`
        border-color: #337ab7;
        background: #f8faff;
      `}
    ${(p) =>
      p.$clickable &&
      p.$held &&
      css`
        border-color: #286090;
        background: #dbe9ff;
      `}
  }
  @media (max-width: 420px) {
    width: 56px;
    height: 56px;
    padding: 7px;
  }
`;

const Pip = styled.div<{ $on: boolean }>`
  width: 100%;
  height: 100%;
  max-width: 14px;
  max-height: 14px;
  border-radius: 50%;
  background: ${(p) => (p.$on ? "#222" : "transparent")};
  margin: auto;
  @media (max-width: 420px) {
    max-width: 11px;
    max-height: 11px;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`;

const RollIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Dots = styled.div`
  display: flex;
  gap: 5px;
`;

const Dot = styled.div<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(p) => (p.$active ? "#337ab7" : "#ddd")};
`;

const RollLabel = styled.span`
  font-size: 0.82em;
  color: #999;
`;

const ActionBtn = styled.button<{ $primary?: boolean }>`
  padding: 9px 24px;
  border-radius: 6px;
  font-size: 0.9em;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  border: 1px solid ${(p) => (p.$primary ? "#2e6da4" : "#ddd")};
  background: ${(p) => (p.$primary ? "#337ab7" : "#fff")};
  color: ${(p) => (p.$primary ? "#fff" : "#555")};
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background: ${(p) => (p.$primary ? "#286090" : "#f5f5f5")};
    border-color: ${(p) => (p.$primary ? "#204d74" : "#bbb")};
    color: ${(p) => (p.$primary ? "#fff" : "#333")};
  }
`;

const Scorecard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
`;

const SectionTitle = styled.div`
  background: #f7f7f7;
  border-bottom: 1px solid #ddd;
  padding: 7px 16px;
  font-size: 0.78em;
  font-weight: 700;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const Row = styled.div<{ $clickable?: boolean; $muted?: boolean }>`
  display: flex;
  align-items: center;
  padding: 8px 14px;
  border-bottom: 1px solid #f0f0f0;
  background: ${(p) => (p.$muted ? "#fafafa" : "#fff")};
  cursor: ${(p) => (p.$clickable ? "pointer" : "default")};
  transition: background 0.1s;
  &:last-child {
    border-bottom: none;
  }
  ${(p) =>
    p.$clickable &&
    css`
      &:hover {
        background: #eff6ff;
      }
    `}
`;

const RowLabel = styled.div`
  flex: 1;
`;

const RowName = styled.div<{ $faded?: boolean }>`
  font-size: 0.9em;
  font-weight: 500;
  color: ${(p) => (p.$faded ? "#bbb" : "#333")};
`;

const RowHint = styled.div`
  font-size: 0.75em;
  color: #bbb;
  margin-top: 1px;
`;

const RowScore = styled.div<{ $potential?: boolean; $zero?: boolean; $empty?: boolean }>`
  font-size: 0.9em;
  font-weight: ${(p) => (p.$potential || p.$empty ? "400" : "600")};
  color: ${(p) => (p.$empty ? "#ddd" : p.$potential ? "#999" : p.$zero ? "#ccc" : "#222")};
  min-width: 36px;
  text-align: right;
`;

const TotalRow = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 14px;
  background: #f7f7f7;
  border-top: 2px solid #ddd;
  font-weight: 700;
  font-size: 0.95em;
`;

const GameOverPanel = styled(Panel)`
  text-align: center;
  padding: 40px 20px;
`;

const BigScore = styled.div`
  font-size: 3.5em;
  font-weight: 700;
  color: #222;
  line-height: 1;
  margin: 16px 0 8px;
`;

const ScoreBreakdown = styled.div`
  font-size: 0.85em;
  color: #aaa;
  margin-bottom: 28px;
`;

// ─── Die component ────────────────────────────────────────────────────────────

function Die({
  value,
  held,
  clickable,
  shaking,
}: {
  value: number;
  held: boolean;
  clickable: boolean;
  shaking: boolean;
}) {
  const pips = PIPS[value] ?? [];
  return (
    <DieWrap $held={held} $clickable={clickable} $shaking={shaking} $blank={value === 0}>
      {Array.from({ length: 9 }, (_, i) => (
        <Pip key={i} $on={pips.includes(i)} />
      ))}
    </DieWrap>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Yahtzee() {
  const [dice, setDice] = useState([0, 0, 0, 0, 0]);
  const [held, setHeld] = useState([false, false, false, false, false]);
  const [rollsLeft, setRollsLeft] = useState(3);
  const [scores, setScores] = useState<Partial<Record<Category, number>>>({});
  const [yahtzeeBonuses, setYahtzeeBonuses] = useState(0);
  const [isRolling, setIsRolling] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(
    () => () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    },
    [],
  );

  const hasRolled = dice[0] !== 0;
  const canRoll = !isRolling && rollsLeft > 0 && !gameOver;
  const canScore = !isRolling && hasRolled && !gameOver;
  const isCurrentYahtzee = hasRolled && scoreFor("yahtzee", dice) === 50;

  const handleRoll = () => {
    if (!canRoll) return;
    const snapshot = [...held];
    setIsRolling(true);
    let frames = 0;
    intervalRef.current = setInterval(() => {
      setDice((prev) => prev.map((d, i) => (snapshot[i] ? d : Math.ceil(Math.random() * 6))));
      frames++;
      if (frames >= 6) {
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
        setIsRolling(false);
        setRollsLeft((r) => r - 1);
      }
    }, 80);
  };

  const toggleHold = (i: number) => {
    if (!hasRolled || isRolling || rollsLeft === 0) return;
    setHeld((prev) => prev.map((h, idx) => (idx === i ? !h : h)));
  };

  const handleScore = (cat: Category) => {
    if (!canScore || cat in scores) return;
    const value = scoreFor(cat, dice);
    const bonusAdd = isCurrentYahtzee && scores.yahtzee === 50 ? 1 : 0;
    const newScores = { ...scores, [cat]: value };
    const newBonuses = yahtzeeBonuses + bonusAdd;

    setScores(newScores);
    setYahtzeeBonuses(newBonuses);

    if (ALL_CATS.every((c) => c in newScores)) {
      setGameOver(true);
    } else {
      setDice([0, 0, 0, 0, 0]);
      setHeld([false, false, false, false, false]);
      setRollsLeft(3);
    }
  };

  const handleNewGame = () => {
    setDice([0, 0, 0, 0, 0]);
    setHeld([false, false, false, false, false]);
    setRollsLeft(3);
    setScores({});
    setYahtzeeBonuses(0);
    setIsRolling(false);
    setGameOver(false);
  };

  const upTotal = upperSubtotal(scores);
  const upBonus = upTotal >= 63 ? 35 : 0;
  const lowTotal = LOWER.reduce((a, c) => a + (scores[c] ?? 0), 0);
  const grand = grandTotal(scores, yahtzeeBonuses);
  const turnsPlayed = ALL_CATS.filter((c) => c in scores).length;

  const rollLabelText =
    rollsLeft === 3
      ? "3 rolls"
      : rollsLeft === 0
        ? "Pick a category"
        : `${rollsLeft} roll${rollsLeft > 1 ? "s" : ""} left`;

  return (
    <Page>
      <Helmet>
        <title>Yahtzee — Laurent Debacker</title>
        <meta name="description" content="Play Yahtzee — roll five dice and fill your scorecard." />
      </Helmet>

      <h2>Yahtzee</h2>
      <Subtitle>Roll the dice up to 3 times, then score a category</Subtitle>

      {gameOver ? (
        <GameOverPanel>
          <div style={{ fontSize: "1.1em", color: "#555" }}>Game complete</div>
          <BigScore>{grand}</BigScore>
          <ScoreBreakdown>
            Upper: {upTotal}
            {upBonus ? ` + 35 bonus` : ""} &nbsp;·&nbsp; Lower: {lowTotal}
            {yahtzeeBonuses > 0 ? ` · Yahtzee bonus: +${yahtzeeBonuses * 100}` : ""}
          </ScoreBreakdown>
          <ActionBtn $primary onClick={handleNewGame}>
            Play Again
          </ActionBtn>
        </GameOverPanel>
      ) : (
        <Panel>
          <DiceRow>
            {dice.map((d, i) => (
              <div key={i} onClick={() => toggleHold(i)}>
                <Die
                  value={d}
                  held={held[i]}
                  clickable={hasRolled && !isRolling && rollsLeft > 0}
                  shaking={isRolling && !held[i]}
                />
              </div>
            ))}
          </DiceRow>
          <Controls>
            <RollIndicator>
              <Dots>
                {[0, 1, 2].map((i) => (
                  <Dot key={i} $active={i < rollsLeft} />
                ))}
              </Dots>
              <RollLabel>
                {turnsPlayed > 0 && `Turn ${turnsPlayed + 1}/13 · `}
                {rollLabelText}
              </RollLabel>
            </RollIndicator>
            <ActionBtn $primary onClick={handleRoll} disabled={!canRoll}>
              Roll
            </ActionBtn>
          </Controls>
        </Panel>
      )}

      <Scorecard>
        <SectionTitle>Upper Section</SectionTitle>
        {UPPER.map((cat) => {
          const scored = cat in scores;
          const potential = canScore && !scored ? scoreFor(cat, dice) : null;
          return (
            <Row key={cat} $clickable={canScore && !scored} onClick={() => handleScore(cat)}>
              <RowLabel>
                <RowName $faded={scored && scores[cat] === 0}>{LABELS[cat]}</RowName>
                <RowHint>{HINTS[cat]}</RowHint>
              </RowLabel>
              <RowScore
                $potential={potential !== null}
                $zero={scored && scores[cat] === 0}
                $empty={!scored && potential === null}
              >
                {scored ? (scores[cat] === 0 ? "—" : scores[cat]) : potential !== null ? potential : "—"}
              </RowScore>
            </Row>
          );
        })}
        <Row $muted>
          <RowLabel>
            <RowName>Upper Bonus</RowName>
            <RowHint>+35 if upper ≥ 63 &nbsp;({upTotal}/63)</RowHint>
          </RowLabel>
          <RowScore $zero={upBonus === 0}>{upBonus > 0 ? "+35" : "—"}</RowScore>
        </Row>

        <SectionTitle>Lower Section</SectionTitle>
        {LOWER.map((cat) => {
          const scored = cat in scores;
          const potential = canScore && !scored ? scoreFor(cat, dice) : null;
          return (
            <Row key={cat} $clickable={canScore && !scored} onClick={() => handleScore(cat)}>
              <RowLabel>
                <RowName $faded={scored && scores[cat] === 0}>
                  {LABELS[cat]}
                  {cat === "yahtzee" && yahtzeeBonuses > 0 && (
                    <span style={{ color: "#e67e22", marginLeft: 6, fontSize: "0.82em" }}>+{yahtzeeBonuses * 100}</span>
                  )}
                </RowName>
                <RowHint>{HINTS[cat]}</RowHint>
              </RowLabel>
              <RowScore
                $potential={potential !== null}
                $zero={scored && scores[cat] === 0}
                $empty={!scored && potential === null}
              >
                {scored ? (scores[cat] === 0 ? "—" : scores[cat]) : potential !== null ? potential : "—"}
              </RowScore>
            </Row>
          );
        })}
        {yahtzeeBonuses > 0 && (
          <Row $muted>
            <RowLabel>
              <RowName>Yahtzee Bonus</RowName>
              <RowHint>+100 × {yahtzeeBonuses}</RowHint>
            </RowLabel>
            <RowScore>{yahtzeeBonuses * 100}</RowScore>
          </Row>
        )}

        <TotalRow>
          <div style={{ flex: 1 }}>Grand Total</div>
          <div>{grand}</div>
        </TotalRow>
      </Scorecard>
    </Page>
  );
}
