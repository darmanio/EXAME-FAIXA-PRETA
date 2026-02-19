
import React, { useState, useEffect } from 'react';
import { GraduationType, Technique } from './types';
import { TECHNIQUES, GRADUATION_REQUIREMENTS } from './constants';
import { TechniqueCard } from './components/TechniqueCard';
import { QuizModule } from './components/QuizModule';
import { SenseiModule } from './components/SenseiModule';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'practical' | 'theoretical' | 'sensei' | 'info'>('practical');
  const [selectedDan, setSelectedDan] = useState<GraduationType>(GraduationType.DAN_1);
  const [currentTechnique, setCurrentTechnique] = useState<Technique>(TECHNIQUES[0]);

  const generateRandomTechnique = () => {
    const randomIndex = Math.floor(Math.random() * TECHNIQUES.length);
    setCurrentTechnique(TECHNIQUES[randomIndex]);
  };

  useEffect(() => {
    generateRandomTechnique();
  }, []);

  const requirements = GRADUATION_REQUIREMENTS[selectedDan] || GRADUATION_REQUIREMENTS[GraduationType.DAN_1];

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      {/* Header with Zen aesthetics */}
      <header className="bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-600/10 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-5">
              <div className="bg-white p-2 rounded-lg shadow-xl">
                 <svg className="w-12 h-12 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4Z" />
                   <circle cx="12" cy="12" r="5" />
                 </svg>
              </div>
              <div>
                <h1 className="text-4xl font-black tracking-tight leading-none mb-1 uppercase">ZEMPO <span className="text-red-600">YUDANSHA</span></h1>
                <p className="text-slate-400 font-medium tracking-wide text-xs">Simulador Oficial de Exame de Graduação</p>
              </div>
            </div>
            
            <div className="mt-8 md:mt-0 flex flex-col items-end">
              <label className="text-[10px] font-black uppercase text-slate-500 mb-1 tracking-widest">Graduação Desejada</label>
              <select 
                value={selectedDan}
                onChange={(e) => setSelectedDan(e.target.value as GraduationType)}
                className="bg-slate-900 border-2 border-slate-800 text-white rounded-xl px-5 py-3 font-bold focus:ring-2 focus:ring-red-600 outline-none transition-all cursor-pointer hover:border-slate-600"
              >
                {Object.values(GraduationType).map(dan => (
                  <option key={dan} value={dan}>{dan}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="container mx-auto px-4">
          <nav className="flex space-x-1 overflow-x-auto no-scrollbar">
            {[
              { id: 'practical', label: 'Prática Técnicas', icon: '🥋' },
              { id: 'theoretical', label: 'Simulado Teórico', icon: '📚' },
              { id: 'sensei', label: 'Dojo do Sensei', icon: '⛩️' },
              { id: 'info', label: 'Regulamento', icon: '📋' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-3 px-8 py-5 font-bold rounded-t-2xl transition-all duration-300 border-b-4 flex-shrink-0 ${
                  activeTab === tab.id 
                    ? 'bg-slate-50 text-slate-950 border-red-600 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]' 
                    : 'text-slate-500 border-transparent hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                <span className="uppercase tracking-wide text-xs">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-10">
        <div className="max-w-5xl mx-auto">
          {activeTab === 'practical' && (
            <div className="space-y-10 animate-fade-in">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-black text-slate-900 uppercase">Memorial Descritivo</h2>
                  <p className="text-slate-500 font-medium">Estude cada fase do movimento para a demonstração técnica.</p>
                </div>
                <button 
                  onClick={generateRandomTechnique}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-black shadow-xl transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center group uppercase text-sm tracking-widest"
                >
                  Gerar Técnica
                </button>
              </div>
              <TechniqueCard technique={currentTechnique} onRefresh={generateRandomTechnique} />
            </div>
          )}

          {activeTab === 'theoretical' && (
            <div className="space-y-8 animate-fade-in">
              <div className="mb-2">
                <h2 className="text-3xl font-black text-slate-900 uppercase">Avaliação de Conhecimento</h2>
                <p className="text-slate-500 font-medium">Teste seus conhecimentos sobre o currículo teórico oficial.</p>
              </div>
              <QuizModule />
            </div>
          )}

          {activeTab === 'sensei' && (
            <div className="animate-fade-in">
              <SenseiModule />
            </div>
          )}

          {activeTab === 'info' && (
            <div className="space-y-10 animate-fade-in">
              <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-200 relative overflow-hidden">
                <h2 className="text-4xl font-black text-slate-950 mb-8 flex items-center">
                  <span className="w-12 h-2 bg-red-600 inline-block mr-4"></span>
                  Currículo para {selectedDan}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                  <div className="space-y-8">
                    <section>
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-red-600 mb-4 bg-red-50 inline-block px-2 py-1 rounded">Elegibilidade Administrativa</h3>
                      <div className="space-y-4">
                        <div className="bg-slate-50 p-5 rounded-2xl flex justify-between items-center border border-slate-100">
                          <span className="text-xs font-bold text-slate-500 uppercase">Interstício Mínimo</span>
                          <span className="text-sm font-black text-slate-900">{requirements.intersticio}</span>
                        </div>
                        <div className="bg-slate-50 p-5 rounded-2xl flex justify-between items-center border border-slate-100">
                          <span className="text-xs font-bold text-slate-500 uppercase">Idade</span>
                          <span className="text-sm font-black text-slate-900">{requirements.minAge} anos completos</span>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-red-600 mb-4 bg-red-50 inline-block px-2 py-1 rounded">Cursos & Taxas</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {requirements.administrative.map((item: string, i: number) => (
                          <div key={i} className="text-sm font-bold text-slate-700 flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>

                  <div className="space-y-8">
                    <section>
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-red-600 mb-4 bg-red-50 inline-block px-2 py-1 rounded">Conteúdo de Exame</h3>
                      <div className="grid grid-cols-1 gap-3">
                        <div className="p-4 bg-slate-900 rounded-2xl">
                           <h4 className="text-white text-[10px] font-black uppercase tracking-widest mb-3 opacity-50">Prática</h4>
                           <div className="flex flex-wrap gap-2">
                             {requirements.practical.map((p: string, i: number) => (
                               <span key={i} className="bg-slate-800 text-white px-3 py-1.5 rounded-lg text-[10px] font-bold">
                                 {p}
                               </span>
                             ))}
                           </div>
                        </div>
                        <div className="p-4 bg-slate-100 rounded-2xl border border-slate-200">
                           <h4 className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-3">Teoria</h4>
                           <div className="flex flex-wrap gap-2">
                             {requirements.theoretical.map((t: string, i: number) => (
                               <span key={i} className="bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg text-[10px] font-bold">
                                 {t}
                               </span>
                             ))}
                           </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-200 flex flex-col md:flex-row items-center gap-8">
                  <div className="text-5xl">🥋</div>
                  <div className="flex-1">
                    <h4 className="font-black text-slate-900 uppercase tracking-tighter text-xl mb-2">Compromisso com o Judô</h4>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">
                      A outorga de uma faixa preta não é o fim da jornada, mas o início da responsabilidade como instrutor e guardião dos princípios de Jigoro Kano. Estude não apenas para a banca, mas para a vida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="mt-20 py-10 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
           <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">Zempo Yudansha Training System v2.0</p>
           <p className="text-slate-300 text-[9px] font-medium italic">"Conhecer a si mesmo é o começo de toda sabedoria."</p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default App;
