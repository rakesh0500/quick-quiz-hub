import { Quiz } from "@/data/quizzes";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface QuizCardProps {
  quiz: Quiz;
  onSelect: (quiz: Quiz) => void;
}

export const QuizCard = ({ quiz, onSelect }: QuizCardProps) => {
  return (
    <button
      onClick={() => onSelect(quiz)}
      className="group relative overflow-hidden rounded-3xl bg-gradient-card p-8 text-left shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-bold border border-border"
    >
      <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${quiz.color} opacity-20 blur-2xl transition-smooth group-hover:opacity-40`} />
      <div className="relative">
        <div className="text-5xl mb-4">{quiz.emoji}</div>
        <h3 className="font-display text-2xl font-bold mb-2">{quiz.title}</h3>
        <p className="text-muted-foreground mb-6">{quiz.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">
            {quiz.questions.length} questions
          </span>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-smooth group-hover:translate-x-1">
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </button>
  );
};
