import { useState } from "react";
import { quizzes, Quiz } from "@/data/quizzes";
import { QuizCard } from "@/components/QuizCard";
import { QuizPlayer } from "@/components/QuizPlayer";
import { ResultsScreen } from "@/components/ResultsScreen";
import { Sparkles } from "lucide-react";

type Screen = "home" | "playing" | "results";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("home");
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleSelect = (quiz: Quiz) => {
    setActiveQuiz(quiz);
    setAnswers([]);
    setScreen("playing");
  };

  const handleComplete = (a: number[]) => {
    setAnswers(a);
    setScreen("results");
  };

  const handleHome = () => {
    setScreen("home");
    setActiveQuiz(null);
  };

  const handleRestart = () => {
    if (activeQuiz) handleSelect(activeQuiz);
  };

  if (screen === "playing" && activeQuiz) {
    return <QuizPlayer quiz={activeQuiz} onComplete={handleComplete} onExit={handleHome} />;
  }

  if (screen === "results" && activeQuiz) {
    return <ResultsScreen quiz={activeQuiz} answers={answers} onRestart={handleRestart} onHome={handleHome} />;
  }

  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

        <header className="relative mx-auto max-w-6xl px-4 pt-12 pb-20 md:pt-20 md:pb-32 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-card/80 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary border border-border mb-6 shadow-soft">
            <Sparkles className="h-3 w-3" /> Quick fire quizzes
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-[1.05]">
            Test what you know.<br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Discover what you don't.
            </span>
          </h1>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Bite-sized quizzes across topics you love. Pick a category, beat the clock of your own mind.
          </p>
        </header>
      </div>

      <main className="relative mx-auto max-w-6xl px-4 pb-20 -mt-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {quizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} onSelect={handleSelect} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
