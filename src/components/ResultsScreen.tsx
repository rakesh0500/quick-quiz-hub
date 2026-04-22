import { Quiz } from "@/data/quizzes";
import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw, Home, Check, X } from "lucide-react";

interface ResultsScreenProps {
  quiz: Quiz;
  answers: number[];
  onRestart: () => void;
  onHome: () => void;
}

export const ResultsScreen = ({ quiz, answers, onRestart, onHome }: ResultsScreenProps) => {
  const correct = answers.filter((a, i) => a === quiz.questions[i].correctAnswer).length;
  const total = quiz.questions.length;
  const percent = Math.round((correct / total) * 100);

  const message =
    percent === 100 ? "Flawless! 🏆" :
    percent >= 75 ? "Brilliant work!" :
    percent >= 50 ? "Solid effort!" :
    "Keep practicing!";

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 md:py-16">
      <div className="rounded-3xl bg-gradient-hero p-10 md:p-14 text-center text-primary-foreground shadow-bold mb-8">
        <Trophy className="mx-auto h-14 w-14 mb-4" />
        <p className="text-sm font-medium uppercase tracking-widest opacity-80 mb-2">
          {quiz.title}
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-4">{message}</h1>
        <div className="font-display text-7xl md:text-8xl font-bold">
          {correct}<span className="text-3xl opacity-60">/{total}</span>
        </div>
        <p className="mt-2 text-lg opacity-90">{percent}% correct</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="rounded-2xl bg-card border border-border p-6 text-center shadow-soft">
          <Check className="mx-auto h-8 w-8 text-success mb-2" />
          <div className="font-display text-3xl font-bold">{correct}</div>
          <div className="text-sm text-muted-foreground">Correct</div>
        </div>
        <div className="rounded-2xl bg-card border border-border p-6 text-center shadow-soft">
          <X className="mx-auto h-8 w-8 text-destructive mb-2" />
          <div className="font-display text-3xl font-bold">{total - correct}</div>
          <div className="text-sm text-muted-foreground">Incorrect</div>
        </div>
      </div>

      <div className="space-y-3 mb-8">
        <h3 className="font-display text-xl font-bold mb-3">Review</h3>
        {quiz.questions.map((q, i) => {
          const isRight = answers[i] === q.correctAnswer;
          return (
            <div key={i} className="rounded-2xl bg-card border border-border p-5">
              <div className="flex items-start gap-3 mb-2">
                <div className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${isRight ? 'bg-success' : 'bg-destructive'} text-white`}>
                  {isRight ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                </div>
                <p className="font-medium">{q.question}</p>
              </div>
              <div className="ml-9 text-sm">
                {!isRight && (
                  <p className="text-muted-foreground">
                    Your answer: <span className="text-destructive font-medium">{q.options[answers[i]]}</span>
                  </p>
                )}
                <p className="text-muted-foreground">
                  Correct: <span className="text-success font-medium">{q.options[q.correctAnswer]}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button onClick={onRestart} size="lg" className="flex-1 h-14 rounded-2xl font-display font-semibold">
          <RotateCcw className="mr-2 h-4 w-4" /> Restart quiz
        </Button>
        <Button onClick={onHome} variant="outline" size="lg" className="flex-1 h-14 rounded-2xl font-display font-semibold">
          <Home className="mr-2 h-4 w-4" /> All quizzes
        </Button>
      </div>
    </div>
  );
};
