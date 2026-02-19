
import React, { useState } from 'react';
import { KATA_SEQUENCES } from '../constants';

export const KataModule: React.FC = () => {
  const kata = KATA_SEQUENCES[0]; // Nage-no-Kata padrão
  const [activeGroup, setActiveGroup] = useState<number | null>(null);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
        <div className="flex items-center space-x-4 mb-6">
          <div className="bg-slate-900 text-white p-3 rounded-2xl text-2xl">🏮</div>
          <div>
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">{kata.name}</h2>
            <p className="text-slate-500 font-medium">{kata.description}</p>
          </div>
        </div>

        <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-600 mb-8">
          <h4 className="text-xs font-black text-red-600 uppercase mb-2 tracking-widest">Protocolo e Ritualística</h4>
          <p className="text-red-900 text-sm font-medium leading-relaxed italic">
            {kata.ritual}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {kata.groups.map((group, idx) => (
            <div key={idx} className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setActiveGroup(activeGroup === idx ? null : idx)}
                className={`w-full flex items-center justify-between p-6 transition-all ${
                  activeGroup === idx ? 'bg-slate-900 text-white' : 'bg-white text-slate-900 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-xs font-black opacity-40">GRUPO {idx + 1}</span>
                  <span className="font-black uppercase tracking-wide">{group.title}</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${activeGroup === idx ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {activeGroup === idx && (
                <div className="p-6 bg-slate-50 grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in">
                  {group.techniques.map((tech, tIdx) => (
                    <div key={tIdx} className="bg-white p-5 rounded-xl border border-slate-200 flex items-center space-x-3 shadow-sm">
                      <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-black text-xs">
                        {tIdx + 1}
                      </span>
                      <span className="font-bold text-slate-800 text-sm uppercase tracking-tight">{tech}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-10 pt-8 border-t border-slate-100 text-center">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            Dica: No exame, a precisão do deslocamento e o ritmo são tão importantes quanto o arremesso.
          </p>
        </div>
      </div>
    </div>
  );
};
