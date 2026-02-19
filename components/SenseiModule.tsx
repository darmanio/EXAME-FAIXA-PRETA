
import React, { useState } from 'react';
import { askSenseiAboutTheme } from '../geminiService';

const THEMES = [
  { id: 'nage', label: 'Arremessos (Nage-waza)', icon: '🥋' },
  { id: 'katame', label: 'Controle (Katame-waza)', icon: '🔗' },
  { id: 'philosophy', label: 'Filosofia e Budo', icon: '🧘' },
  { id: 'history', label: 'História e Jigoro Kano', icon: '📜' },
  { id: 'etiquette', label: 'Reigi (Etiqueta/Cerimonial)', icon: '🙇' }
];

export const SenseiModule: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState(THEMES[0].label);
  const [content, setContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleConsultSensei = async () => {
    setIsLoading(true);
    const result = await askSenseiAboutTheme(selectedTheme);
    setContent(result);
    setIsLoading(false);
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 overflow-hidden relative">
        <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none">
           <svg className="w-64 h-64" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4Z" /></svg>
        </div>
        
        <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center">
          <span className="bg-red-600 text-white p-3 rounded-2xl mr-4 shadow-lg">🥋</span>
          Dojo do Sensei
        </h2>
        
        <p className="text-slate-600 font-medium mb-8 max-w-2xl">
          Escolha um tema e peça ao Sensei uma lição aleatória e profunda. Este módulo utiliza inteligência artificial treinada em manuais técnicos de Yudansha.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
          {THEMES.map(theme => (
            <button
              key={theme.id}
              onClick={() => setSelectedTheme(theme.label)}
              className={`p-4 rounded-2xl border-2 transition-all font-bold text-xs flex flex-col items-center justify-center space-y-2 ${
                selectedTheme === theme.label 
                  ? 'border-red-600 bg-red-50 text-red-600 shadow-md' 
                  : 'border-slate-100 bg-slate-50 text-slate-400 hover:border-slate-300'
              }`}
            >
              <span className="text-2xl">{theme.icon}</span>
              <span className="text-center uppercase leading-tight">{theme.label}</span>
            </button>
          ))}
        </div>

        <button
          onClick={handleConsultSensei}
          disabled={isLoading}
          className="w-full bg-slate-950 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl flex items-center justify-center space-x-3 disabled:opacity-50"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-6 w-6 border-4 border-white border-t-transparent"></div>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Solicitar Lição ao Sensei</span>
            </>
          )}
        </button>
      </div>

      {content && !isLoading && (
        <div className="bg-white p-10 rounded-3xl shadow-2xl border-l-8 border-red-600 animate-fade-in relative">
           <div className="absolute top-0 right-0 p-6 text-slate-100 text-6xl font-black select-none">🥋</div>
           <div className="prose prose-slate max-w-none">
             <div className="whitespace-pre-wrap text-slate-800 leading-loose font-medium text-lg">
               {content}
             </div>
           </div>
           <div className="mt-10 pt-8 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Ensinamento Oral (Kuden)</span>
              <button onClick={() => setContent(null)} className="text-red-600 text-xs font-black uppercase hover:underline">Fechar Lição</button>
           </div>
        </div>
      )}
    </div>
  );
};
