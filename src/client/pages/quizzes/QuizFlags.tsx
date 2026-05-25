import { FuzzyImageQuiz } from "./QuizBase";

export default function QuizFlags() {
  return (
    <FuzzyImageQuiz
      name="flags"
      title="Flags"
      labelsUrl="/api/quizzes/flags/meta"
      description="Can you identify the flags of the world? Test your geography knowledge in this flag quiz."
    />
  );
}
