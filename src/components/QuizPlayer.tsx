import { useState } from "react";
import { Quiz } from "@/data/quizzes";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { ArrowLeft, Check, X } from "lucide-react";

interface QuizPlayerProps {
  quiz: Quiz;
  onComplete: (answers: number[]) => void;
  onExit: () => void;
}

export const QuizPlayer = ({ quiz, onComplete, onExit }: QuizPlayerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [revealed, setRevealed] = useState(false);

  const question = quiz.questions[currentIndex];
  const isLast = currentIndex === quiz.questions.length - 1;
  const progress = ((currentIndex + (revealed ? 1 : 0)) / quiz.questions.length) * 100;

  const handleSelect = (index: number) => {
    if (revealed) return;
    setSelected(index);
  };

  const handleNext = () => {
    if (selected === null) return;
    if (!revealed) {
      setRevealed(true);
      return;
    }
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    if (isLast) {
      onComplete(newAnswers);
    } else {
      setCurrentIndex(currentIndex + 1);
      setSelected(null);
      setRevealed(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 md:py-16">
      <div className="mb-8 flex items-center justify-between">
        <button
          onClick={onExit}
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Exit
        </button>
        <span className="text-sm font-medium text-muted-foreground">
          Question {currentIndex + 1} of {quiz.questions.length}
        </span>
      </div>

      <Progress value={progress} className="mb-10 h-2" />

      <div className="mb-8">
        <div className="text-4xl mb-4">{quiz.emoji}</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
          {question.question}
        </h2>
      </div>

      <div className="space-y-3 mb-8">
        {question.options.map((option, index) => {
          const isSelected = selected === index;
          const isCorrect = index === question.correctAnswer;
          const showCorrect = revealed && isCorrect;
          const showWrong = revealed && isSelected && !isCorrect;

          return (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={revealed}
              className={cn(
                "group flex w-full items-center justify-between rounded-2xl border-2 bg-card p-5 text-left transition-smooth",
                !revealed && "hover:border-primary hover:shadow-soft",
                isSelected && !revealed && "border-primary bg-primary/5 shadow-soft",
                !isSelected && !revealed && "border-border",
                showCorrect && "border-success bg-success/10",
                showWrong && "border-destructive bg-destructive/10",
                revealed && !isSelected && !isCorrect && "border-border opacity-60"
              )}
            >
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-full border-2 font-display font-bold text-sm transition-smooth",
                    isSelected && !revealed && "border-primary bg-primary text-primary-foreground",
                    !isSelected && !revealed && "border-border",
                    showCorrect && "border-success bg-success text-success-foreground",
                    showWrong && "border-destructive bg-destructive text-destructive-foreground"
                  )}
                >
                  {String.fromCharCode(65 + index)}
                </div>
                <span className="font-medium">{option}</span>
              </div>
              {showCorrect && <Check className="h-5 w-5 text-success" />}
              {showWrong && <X className="h-5 w-5 text-destructive" />}
            </button>
          );
        })}
      </div>

      <Button
        onClick={handleNext}
        disabled={selected === null}
        size="lg"
        className="w-full h-14 text-base font-display font-semibold rounded-2xl"
      >
        {!revealed ? "Check answer" : isLast ? "See results" : "Next question"}
      </Button>
    </div>
  );
};
