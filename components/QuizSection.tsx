"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Award } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "What is the most important item in an emergency kit?",
    options: ["Water", "Extra clothes", "Entertainment", "Snacks"],
    correct: 0,
    explanation: "Water is essential. You need at least one gallon per person per day for at least three days."
  },
  {
    id: 2,
    question: "During an earthquake, if you are indoors, you should:",
    options: ["Run outside immediately", "Drop, Cover, and Hold On", "Stand in a doorway", "Get near a window"],
    correct: 1,
    explanation: "Drop, Cover, and Hold On is the safest action. Running outside or standing in doorways exposes you to falling debris."
  },
  {
    id: 3,
    question: "If authorities issue a Flood Evacuation Order, you should:",
    options: ["Wait to see if the water reaches your house", "Gather all your belongings first", "Evacuate immediately to higher ground", "Move to the second floor of your house"],
    correct: 2,
    explanation: "Evacuate immediately. Floodwaters can rise incredibly fast and cut off escape routes."
  },
  {
    id: 4,
    question: "What should you do if you are caught outside during a thunderstorm?",
    options: ["Stand under a tall tree", "Lie flat on the ground", "Seek shelter in a sturdy building or hard-topped vehicle", "Hold an umbrella up"],
    correct: 2,
    explanation: "A sturdy building or a hard-topped vehicle is the safest place. Trees and umbrellas attract lightning."
  }
];

export function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const handleAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
    
    if (index === questions[currentQuestion].correct) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setIsQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setIsQuizComplete(false);
  };

  const readinessPercentage = Math.round((score / questions.length) * 100);

  return (
    <section id="quiz" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-20"></div>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--primary-dark)] mb-4">
            Test Your Preparedness
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take our quick awareness quiz to see how ready you are for an emergency.
          </p>
        </div>

        <div className="bg-[var(--background)] rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[var(--accent)] rounded-full opacity-50 blur-3xl"></div>
          
          <AnimatePresence mode="wait">
            {!isQuizComplete ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="relative z-10"
              >
                <div className="flex justify-between items-center mb-8">
                  <span className="text-[var(--primary-light)] font-bold">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <div className="flex gap-1">
                    {questions.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`w-12 h-2 rounded-full ${idx <= currentQuestion ? 'bg-[var(--primary)]' : 'bg-gray-200'}`}
                      />
                    ))}
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary-dark)] mb-8">
                  {questions[currentQuestion].question}
                </h3>
                
                <div className="space-y-4 mb-8">
                  {questions[currentQuestion].options.map((option, idx) => {
                    let btnClass = "bg-white border-2 border-gray-200 text-gray-700 hover:border-[var(--primary-light)] hover:bg-[var(--accent)]";
                    if (showResult) {
                      if (idx === questions[currentQuestion].correct) {
                        btnClass = "bg-[var(--success)]/10 border-[var(--success)] text-[var(--success)]";
                      } else if (idx === selectedAnswer) {
                        btnClass = "bg-[var(--warning)]/10 border-[var(--warning)] text-[var(--warning)]";
                      } else {
                        btnClass = "bg-white border-gray-200 text-gray-400 opacity-50";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(idx)}
                        disabled={showResult}
                        className={`w-full text-left p-5 rounded-2xl font-bold text-lg transition-all duration-300 ${btnClass} flex justify-between items-center`}
                      >
                        {option}
                        {showResult && idx === questions[currentQuestion].correct && <CheckCircle2 className="w-6 h-6" />}
                        {showResult && idx === selectedAnswer && idx !== questions[currentQuestion].correct && <AlertCircle className="w-6 h-6" />}
                      </button>
                    );
                  })}
                </div>

                <AnimatePresence>
                  {showResult && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="bg-[var(--accent)] p-6 rounded-2xl border border-[var(--primary-light)]/30 mb-8"
                    >
                      <p className="font-medium text-[var(--primary-dark)]">
                        {questions[currentQuestion].explanation}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {showResult && (
                  <button
                    onClick={nextQuestion}
                    className="w-full bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white py-4 rounded-xl font-bold text-lg transition-colors"
                  >
                    {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
                  </button>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center relative z-10 py-10"
              >
                <Award className="w-24 h-24 text-[var(--primary)] mx-auto mb-6" />
                <h3 className="text-4xl font-extrabold text-[var(--primary-dark)] mb-4">Quiz Complete!</h3>
                <p className="text-xl text-gray-600 mb-8">
                  Your Emergency Readiness Score:
                </p>
                
                <div className="flex justify-center items-end gap-2 mb-10">
                  <span className={`text-7xl font-extrabold ${readinessPercentage >= 75 ? 'text-[var(--success)]' : readinessPercentage >= 50 ? 'text-[var(--primary)]' : 'text-[var(--warning)]'}`}>
                    {readinessPercentage}%
                  </span>
                </div>

                <p className="text-lg text-gray-700 mb-10 max-w-lg mx-auto">
                  {readinessPercentage >= 75 
                    ? "Great job! You have a solid understanding of emergency preparedness." 
                    : "You're on the right track, but reviewing our safety guides will help you be fully prepared."}
                </p>

                <button
                  onClick={resetQuiz}
                  className="bg-white border-2 border-[var(--primary)] text-[var(--primary-dark)] hover:bg-[var(--accent)] px-8 py-4 rounded-full font-bold text-lg transition-all"
                >
                  Retake Quiz
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
