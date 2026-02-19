
import React from 'react';
import { Technique } from '../types';

interface TechniqueCardProps {
  technique: Technique;
  onRefresh: () => void;
}

export const TechniqueCard: React.FC<TechniqueCardProps> = ({ technique, onRefresh }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden transition-all">
      <div className="p-8 border-b border-slate-100 bg-slate-950 text-white flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-black uppercase tracking-tighter text-red-600">{technique.japaneseName}</h3>
          <p className="text-slate-400 text-sm font-bold tracking-widest">{technique.name} • {technique.category}</p>
        </div>
        <button 
          onClick={onRefresh}
          className="bg-red-600 p-3 hover:bg-red-700 rounded-xl transition-all shadow-lg active:scale-90"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-1 gap-8 mb-10">
          {technique.steps.map((step, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-red-200 transition-colors group">
              <div className="flex-shrink-0 w-16 h-16 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center text-xl font-black text-slate-400 group-hover:border-red-500 group-hover:text-red-600 transition-colors">
                {idx + 1}
              </div>
              <div>
                <h4 className="font-black text-slate-900 uppercase tracking-wide mb-2 text-lg">{step.title}</h4>
                <p className="text-slate-600 leading-relaxed text-base font-medium">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-600">
          <h5 className="text-xs font-black text-red-600 uppercase mb-2 tracking-widest">Resumo do Movimento</h5>
          <p className="text-red-900 font-bold italic leading-relaxed">"{technique.description}"</p>
        </div>
      </div>
    </div>
  );
};
