export interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
  questions: Question[];
}

export const quizzes: Quiz[] = [
  {
    id: "general",
    title: "General Knowledge",
    description: "Test your wit across a bit of everything.",
    emoji: "🌍",
    color: "from-indigo-500 to-purple-500",
    questions: [
      { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], correctAnswer: 2 },
      { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correctAnswer: 1 },
      { question: "Who painted the Mona Lisa?", options: ["Van Gogh", "Picasso", "Da Vinci", "Michelangelo"], correctAnswer: 2 },
      { question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correctAnswer: 3 },
      { question: "In which year did World War II end?", options: ["1943", "1945", "1947", "1950"], correctAnswer: 1 },
      { question: "What is the currency of Japan?", options: ["Won", "Yuan", "Yen", "Ringgit"], correctAnswer: 2 },
      { question: "Which language has the most native speakers?", options: ["English", "Spanish", "Hindi", "Mandarin"], correctAnswer: 3 },
      { question: "How many continents are there?", options: ["5", "6", "7", "8"], correctAnswer: 2 },
    ],
  },
  {
    id: "science",
    title: "Science",
    description: "From atoms to galaxies — how much do you know?",
    emoji: "🔬",
    color: "from-cyan-500 to-blue-500",
    questions: [
      { question: "What is the chemical symbol for gold?", options: ["Go", "Gd", "Au", "Ag"], correctAnswer: 2 },
      { question: "How many bones are in the adult human body?", options: ["186", "206", "226", "246"], correctAnswer: 1 },
      { question: "What gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correctAnswer: 2 },
      { question: "What is the speed of light (approx)?", options: ["300,000 km/s", "150,000 km/s", "1,000,000 km/s", "30,000 km/s"], correctAnswer: 0 },
      { question: "Which organ pumps blood through the body?", options: ["Liver", "Brain", "Heart", "Lungs"], correctAnswer: 2 },
      { question: "What is H2O commonly known as?", options: ["Salt", "Water", "Hydrogen", "Oxygen"], correctAnswer: 1 },
      { question: "Which scientist proposed the theory of relativity?", options: ["Newton", "Einstein", "Tesla", "Galileo"], correctAnswer: 1 },
      { question: "What is the hardest natural substance?", options: ["Iron", "Quartz", "Diamond", "Gold"], correctAnswer: 2 },
    ],
  },
  {
    id: "math",
    title: "Mathematics",
    description: "Numbers, logic, and a little bit of magic.",
    emoji: "📐",
    color: "from-orange-500 to-pink-500",
    questions: [
      { question: "What is 15 × 12?", options: ["170", "180", "190", "200"], correctAnswer: 1 },
      { question: "What is the value of π (pi) to 2 decimals?", options: ["3.12", "3.14", "3.16", "3.18"], correctAnswer: 1 },
      { question: "What is the square root of 144?", options: ["10", "11", "12", "13"], correctAnswer: 2 },
      { question: "What is 7² + 3²?", options: ["52", "58", "60", "64"], correctAnswer: 1 },
      { question: "How many degrees are in a triangle?", options: ["90", "180", "270", "360"], correctAnswer: 1 },
      { question: "What is 25% of 240?", options: ["50", "55", "60", "65"], correctAnswer: 2 },
      { question: "What comes next: 2, 4, 8, 16, ...?", options: ["20", "24", "32", "30"], correctAnswer: 2 },
      { question: "Which is a prime number?", options: ["9", "15", "17", "21"], correctAnswer: 2 },
    ],
  },
];
