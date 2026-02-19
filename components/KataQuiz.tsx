
import React, { useState } from 'react';
import { TheoryQuestion } from '../types';
import { KATA_QUIZ_QUESTIONS } from '../constants';

export const KataQuiz: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = KATA_QUIZ_QUESTIONS[currentIdx];

  const handleOptionSelect = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    if (idx === currentQuestion.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIdx < KATA_QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
  };

  if (showResult) {
    return (
      <div className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-2xl mx-auto border-4 border-red-600">
        <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Mestre do Kata</h3>
        <div className="text-7xl font-black text-red-600 mb-6">{score}/{KATA_QUIZ_QUESTIONS.length}</div>
        <p className="text-slate-600 font-medium mb-10 text-lg leading-relaxed">
          {score === KATA_QUIZ_QUESTIONS.length 
            ? "Impecável! Seu conhecimento sobre a estrutura do Kata é de um verdadeiro Yudansha." 
            : "O Kata exige precisão absoluta. Estude mais a sequência e os nomes das técnicas."}
        </p>
        <button 
          onClick={restartQuiz}
          className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl"
        >
          Reiniciar Simulado
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
      <div className="flex justify-between items-center mb-8">
        <div className="bg-red-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
          Simulado Kata
        </div>
        <span className="text-xs font-black text-slate-400">Questão {currentIdx + 1} de {KATA_QUIZ_QUESTIONS.length}</span>
      </div>

      <h3 className="text-xl font-black mb-8 text-slate-900 leading-tight">
        {currentQuestion.question}
      </h3>

      <div className="grid grid-cols-1 gap-4 mb-10">
        {currentQuestion.options.map((option, idx) => {
          let className = "w-full text-left p-5 rounded-2xl border-2 transition-all font-bold flex items-center ";
          if (selectedOption === null) {
            className += "border-slate-50 bg-slate-50 hover:border-red-600 hover:bg-red-50 text-slate-700";
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
            <button key={idx} onClick={() => handleOptionSelect(idx)} className={className}>
              <span className={`w-10 h-10 rounded-xl flex items-center justify-center mr-4 font-black ${
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
        <div className="animate-fade-in bg-slate-900 p-6 rounded-2xl mb-8">
          <p className="text-sm text-slate-300 font-medium">
            <span className="text-red-500 font-black uppercase text-[10px] block mb-2 tracking-widest">Análise Técnica</span>
            {currentQuestion.explanation}
          </p>
        </div>
      )}

      {selectedOption !== null && (
        <button 
          onClick={nextQuestion}
          className="w-full bg-red-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl"
        >
          Próxima Pergunta
        </button>
      )}
    </div>
  );
};
