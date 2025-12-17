import React, { useEffect, useState, useMemo } from 'react';
import { BingoItem } from '../types';
import { Sparkles, X, MessageCircle, Key, Gamepad2 } from 'lucide-react';

interface QuestionModalProps {
  item: BingoItem;
  seed: string;
  onClose: () => void;
}

const LOADING_MESSAGES = [
  "Loading Hidden Level...",
  "Decrypting Lore...",
  "Spawning Rare Loot...",
  "Compiling Shaders...",
  "Unlocking Achievement...",
  "Rendering Wisdom...",
  "Buffing Intelligence..."
];

export const QuestionModal: React.FC<QuestionModalProps> = ({ item, onClose }) => {
  const [displayedHint, setDisplayedHint] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Pick a random loading message only once on mount
  const loadingMsg = useMemo(() => {
    return LOADING_MESSAGES[Math.floor(Math.random() * LOADING_MESSAGES.length)];
  }, []);

  useEffect(() => {
    // Simulate "AI Thinking" delay for effect, but use local data (Reliable/Offline)
    const timer = setTimeout(() => {
      setDisplayedHint(item.fallbackHint);
      setIsLoading(false);
    }, 1500); // 1.5s delay for dramatic effect

    return () => clearTimeout(timer);
  }, [item]);

  // Cartoon header colors
  const getHeaderStyle = () => {
    switch(item.category) {
        case 'career': return 'bg-blue-500';
        case 'personal': return 'bg-purple-500';
        case 'philosophy': return 'bg-amber-500';
        case 'creative': return 'bg-pink-500';
        default: return 'bg-slate-500';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-pop">
      
      {/* Modal Container */}
      <div className="w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl transform transition-all border-4 border-white">
        
        {/* Header */}
        <div className={`${getHeaderStyle()} p-4 flex justify-between items-center relative overflow-hidden`}>
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')]"></div>
            
            <div className="flex items-center gap-2 relative z-10 text-white">
                <div className="bg-white/20 p-2 rounded-xl">
                   <MessageCircle size={20} strokeWidth={3} />
                </div>
                <h3 className="font-cartoon font-black text-lg uppercase tracking-wide text-shadow-sm">
                    {item.category} Quest
                </h3>
            </div>
            
            <button 
                onClick={onClose}
                className="bg-black/20 hover:bg-black/30 text-white p-2 rounded-xl transition-colors relative z-10 active:scale-95"
            >
                <X size={24} strokeWidth={4} />
            </button>
        </div>

        {/* Body */}
        <div className="p-8 bg-slate-50 flex flex-col gap-6 max-h-[70vh] overflow-y-auto">
            
            <div className="text-center space-y-2">
                <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">Question</p>
                <p className="font-cartoon text-2xl md:text-3xl font-black text-slate-800 leading-tight">
                    "{item.question}"
                </p>
            </div>

            {/* AI Bubble */}
            <div className="bg-white rounded-2xl p-6 border-b-4 border-slate-200 relative shadow-sm min-h-[120px] flex flex-col justify-center">
                 <div className="absolute -top-4 left-6 bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-1.5 rounded-full text-white font-bold text-xs flex items-center gap-2 shadow-md transform -rotate-1">
                    <Key size={14} />
                    <span className="tracking-widest">SECRET INTEL</span>
                 </div>
                 
                 {isLoading ? (
                     <div className="flex flex-col items-center justify-center gap-3 py-2 animate-pulse">
                         <div className="relative">
                            <div className="absolute inset-0 bg-purple-300 blur-lg opacity-40 rounded-full"></div>
                            <Gamepad2 className="animate-bounce text-purple-600 relative z-10" size={32} />
                         </div>
                         <span className="font-cartoon font-bold text-purple-400 text-lg tracking-wide">
                            {loadingMsg}
                         </span>
                     </div>
                 ) : (
                     <p className="font-medium text-lg text-slate-600 leading-relaxed animate-pop">
                        {displayedHint}
                     </p>
                 )}
            </div>
        </div>
        
        {/* Footer */}
        <div className="bg-slate-100 p-4 text-center border-t border-slate-200">
            <button onClick={onClose} className="text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors">
                Tap anywhere outside to close
            </button>
        </div>

      </div>
    </div>
  );
};