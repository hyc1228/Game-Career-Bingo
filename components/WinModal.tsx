import React, { useState } from 'react';
import { GameState, BingoItem } from '../types';
import { RefreshCw, Trophy, Timer, Hash, BookOpen, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface WinModalProps {
  state: GameState;
  onReset: () => void;
}

export const WinModal: React.FC<WinModalProps> = ({ state, onReset }) => {
  const { t, tx } = useLanguage();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const duration = state.endTime && state.startTime 
    ? Math.floor((state.endTime - state.startTime) / 1000) 
    : 0;

  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;

  // Get the items that were marked during the game
  const markedItems = state.items.filter((_, i) => state.markedIndices.includes(i));

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-purple-900/60 animate-pop overflow-y-auto py-10">
      
      {/* Main Card Container */}
      <div className="w-full max-w-sm bg-white rounded-[40px] p-8 shadow-2xl border-4 border-white relative overflow-visible flex flex-col items-center gap-6 mt-auto mb-auto">
        
        {/* Background Decorative Pattern */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-purple-100 to-white -z-10 rounded-t-[36px]"></div>
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-yellow-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-20 -left-12 w-40 h-40 bg-purple-300 rounded-full blur-3xl opacity-30"></div>

        {/* Header Section */}
        <div className="text-center space-y-2 mt-2 relative z-10">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-5 py-2 rounded-full text-xs font-black tracking-widest uppercase border border-purple-200 shadow-sm animate-float">
                <Trophy size={16} className="text-yellow-600 fill-yellow-500" />
                {t('levelCleared')}
            </div>
            <h2 className="text-6xl font-black font-cartoon text-transparent bg-clip-text bg-gradient-to-b from-purple-500 to-indigo-700 filter drop-shadow-sm tracking-wide pt-2">
                {t('bingo')}
            </h2>
        </div>

        {/* Big Step Message */}
        <div className="text-center space-y-3 px-2">
            <div className="flex items-center justify-center gap-2 text-yellow-500">
                <Sparkles size={20} className="animate-pulse" />
                <p className="font-cartoon font-black text-2xl text-indigo-900 tracking-tight">
                    {t('bigStep')}
                </p>
                <Sparkles size={20} className="animate-pulse" />
            </div>
            <p className="text-slate-500 font-bold text-sm leading-relaxed max-w-[90%] mx-auto">
                {t('winMessage')}
            </p>
        </div>

        {/* Stats Grid - Colorful */}
        <div className="grid grid-cols-2 gap-4 w-full">
            <div className="bg-indigo-50 border-2 border-indigo-100 rounded-3xl p-4 flex flex-col items-center justify-center gap-1 shadow-sm transition-transform hover:scale-105">
                <div className="flex items-center gap-1.5 text-indigo-400 mb-1">
                    <Timer size={16} strokeWidth={3} />
                    <span className="text-[10px] font-black uppercase tracking-wider">{t('playtime')}</span>
                </div>
                <span className="font-cartoon font-black text-xl text-indigo-700">
                    {minutes}{t('minutesShort')} {seconds}{t('secondsShort')}
                </span>
            </div>
            
            <div className="bg-rose-50 border-2 border-rose-100 rounded-3xl p-4 flex flex-col items-center justify-center gap-1 shadow-sm transition-transform hover:scale-105">
                <div className="flex items-center gap-1.5 text-rose-400 mb-1">
                    <Hash size={16} strokeWidth={3} />
                    <span className="text-[10px] font-black uppercase tracking-wider">{t('roomId')}</span>
                </div>
                <span className="font-cartoon font-black text-xl text-rose-700">
                    {state.seed}
                </span>
            </div>
        </div>

        {/* Action Button */}
        <div className="w-full pt-2">
            <button 
                onClick={onReset}
                className="w-full bg-gradient-to-b from-pink-400 to-rose-500 hover:from-pink-300 hover:to-rose-400 text-white border-b-[8px] border-rose-700 active:border-b-0 active:translate-y-[8px] transition-all py-5 rounded-[24px] shadow-xl flex items-center justify-center gap-3 group"
            >
                <RefreshCw className="group-hover:-rotate-180 transition-transform duration-700" size={24} strokeWidth={3} />
                <span className="font-cartoon font-black text-xl tracking-wide uppercase text-shadow-sm">{t('anotherRound')}</span>
            </button>
        </div>

        {/* Completed Topics Section - Now at the very bottom */}
        <div className="w-full bg-indigo-50/50 rounded-3xl p-5 border-2 border-indigo-100/50 shadow-sm flex flex-col gap-3">
            <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                    <BookOpen size={18} className="text-indigo-500" />
                    <span className="text-[12px] font-black uppercase text-indigo-400 tracking-wider">{t('milestones')}</span>
                </div>
                <div className="bg-indigo-600 text-white text-[10px] font-black px-2 py-0.5 rounded-md shadow-sm">
                    {markedItems.length} {t('topicsUnit')}
                </div>
            </div>
            
            <div className="flex flex-col gap-2 w-full">
                {markedItems.map((item) => (
                    <div 
                        key={item.id} 
                        className="bg-white border-2 border-indigo-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300"
                    >
                        <button 
                            onClick={() => toggleExpand(item.id)}
                            className={`w-full px-4 py-3 flex items-center justify-between gap-3 text-left transition-colors ${expandedId === item.id ? 'bg-indigo-50/50' : 'hover:bg-indigo-50/30'}`}
                        >
                            <span className="text-[13px] font-bold text-indigo-700">
                                {tx(item.shortTitle)}
                            </span>
                            <div className={`transition-transform duration-300 ${expandedId === item.id ? 'rotate-180' : ''}`}>
                                <ChevronDown size={16} className="text-indigo-400" />
                            </div>
                        </button>
                        
                        {expandedId === item.id && (
                            <div className="px-4 pb-4 animate-pop origin-top">
                                <div className="h-px bg-indigo-100 mb-3"></div>
                                <p className="text-[12px] text-slate-600 leading-relaxed font-medium">
                                    {tx(item.question)}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
        
      </div>
    </div>
  );
};