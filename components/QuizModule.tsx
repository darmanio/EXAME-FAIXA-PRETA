
import React, { useState } from 'react';
import { TheoryQuestion } from '../types';
import { THEORY_QUESTIONS } from '../constants';
import { generateRandomTheoryQuestion } from '../geminiService';

export const QuizModule: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<TheoryQuestion>(THEORY_QUESTIONS[0]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);

  const handleOptionSelect = (idx: number) => {
    if (selectedOption !== null || isLoading) return;
    setSelectedOption(idx);
    setTotalAnswered(prev => prev + 1);
    if (idx === currentQuestion.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = async () => {
    setIsLoading(true);
    setSelectedOption(null);
    
    // Mix static questions with AI ones
    if (Math.random() > 0.5) {
      const aiQuestion = await generateRandomTheoryQuestion();
      if (aiQuestion) {
        setCurrentQuestion({ ...aiQuestion, id: Date.now().toString() });
        setIsLoading(false);
        return;
      }
    }
    
    const nextStaticIdx = Math.floor(Math.random() * THEORY_QUESTIONS.length);
    setCurrentQuestion(THEORY_QUESTIONS[nextStaticIdx]);
    setIsLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-xs font-bold text-slate-400 uppercase">Simulado Contínuo</span>
          <div className="text-sm font-bold text-blue-600">Acertos: {score} de {totalAnswered}</div>
        </div>
        <div className="flex space-x-2">
           {isLoading && <span className="animate-pulse text-xs text-blue-500 font-bold italic">Gerando nova pergunta...</span>}
        </div>
      </div>

      <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-30' : 'opacity-100'}`}>
        <h3 className="text-lg font-bold mb-6 text-slate-800 leading-tight">
          {currentQuestion.question}
        </h3>

        <div className="grid grid-cols-1 gap-3 mb-8">
          {currentQuestion.options.map((option, idx) => {
            let className = "w-full text-left p-4 rounded-xl border-2 transition-all font-medium flex items-center ";
            if (selectedOption === null) {
              className += "border-slate-100 hover:border-blue-400 hover:bg-blue-50 bg-slate-50";
            } else {
              if (idx === currentQuestion.correctAnswer) {
                className += "border-green-500 bg-green-50 text-green-800";
              } else if (idx === selectedOption) {
                className += "border-red-500 bg-red-50 text-red-800 shadow-inner";
              } else {
                className += "border-slate-50 opacity-40";
              }
            }

            return (
              <button 
                key={idx} 
                onClick={() => handleOptionSelect(idx)} 
                className={className}
                disabled={selectedOption !== null}
              >
                <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 text-xs font-bold ${
                  selectedOption === null ? 'bg-white text-slate-400' : 
                  idx === currentQuestion.correctAnswer ? 'bg-green-500 text-white' : 'bg-slate-200'
                }`}>
                  {String.fromCharCode(65 + idx)}
                </span>
                {option}
              </button>
            );
          })}
        </div>

        {selectedOption !== null && (
          <div className="animate-fade-in bg-blue-50 p-5 rounded-xl border-l-4 border-blue-500 mb-6">
            <p className="text-sm text-blue-900 leading-relaxed">
              <span className="font-bold uppercase text-[10px] block mb-1">Fundamentação Técnica:</span>
              {currentQuestion.explanation}
            </p>
          </div>
        )}

        {selectedOption !== null && (
          <button 
            onClick={handleNext}
            className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center space-x-2 shadow-lg"
          >
            <span>Próximo Desafio</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};
