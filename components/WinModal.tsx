import React from 'react';
import { GameState } from '../types';
import { RefreshCw, Star, Trophy, Timer, Hash, Sparkles } from 'lucide-react';

interface WinModalProps {
  state: GameState;
  onReset: () => void;
}

export const WinModal: React.FC<WinModalProps> = ({ state, onReset }) => {
  const duration = state.endTime && state.startTime 
    ? Math.floor((state.endTime - state.startTime) / 1000) 
    : 0;

  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-purple-900/60 animate-pop">
      
      {/* Invisible SVG definition for the Supercell-style Gradient */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="supercellGold" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff04b" /> {/* Bright Lemon Top */}
            <stop offset="50%" stopColor="#fbbf24" /> {/* Rich Gold Middle */}
            <stop offset="100%" stopColor="#f59e0b" /> {/* Deep Orange Bottom */}
          </linearGradient>
        </defs>
      </svg>

      {/* Main Card Container */}
      <div className="w-full max-w-sm bg-white rounded-[32px] p-6 shadow-2xl border-4 border-white relative overflow-visible flex flex-col items-center gap-6">
        
        {/* Background Decorative Pattern */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-100 to-white -z-10 rounded-t-[28px]"></div>
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-yellow-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-20 -left-12 w-32 h-32 bg-purple-300 rounded-full blur-3xl opacity-40"></div>

        {/* Header Section */}
        <div className="text-center space-y-2 mt-2 relative z-10">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase border border-purple-200 shadow-sm">
                <Trophy size={14} className="text-yellow-600 fill-yellow-500" />
                Level Cleared
            </div>
            <h2 className="text-5xl font-black font-cartoon text-transparent bg-clip-text bg-gradient-to-b from-purple-500 to-indigo-700 filter drop-shadow-sm tracking-wide pt-2">
                BINGO!
            </h2>
        </div>

        {/* Supercell Style Stars */}
        <div className="flex justify-center items-center h-28 w-full -space-x-4 mb-2">
            {[0, 1, 2].map((i) => {
                const isCenter = i === 1;
                const size = isCenter ? 96 : 72; 
                const rotate = isCenter ? 0 : (i === 0 ? -15 : 15);
                const yOffset = isCenter ? '-translate-y-4' : 'translate-y-2';
                const zIndex = isCenter ? 'z-20' : 'z-10';
                
                return (
                    <div 
                        key={i} 
                        className={`relative ${yOffset} ${zIndex} flex items-center justify-center`}
                        style={{ 
                            transform: `rotate(${rotate}deg)`,
                            opacity: 0,
                            animation: `popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards ${i * 0.15 + 0.2}s`
                        }}
                    >
                        {/* 3D Drop Shadow Block (Hard Edge Shadow) */}
                        <div className="relative filter drop-shadow-[0px_6px_0px_#ca8a04]">
                            <Star 
                                size={size} 
                                strokeWidth={0} /* REMOVED STROKE */
                                fill="url(#supercellGold)"
                                className="overflow-visible"
                            />
                        </div>
                        
                        {/* Gloss/Reflection Layer - The "Shiny" Plastic Look */}
                        <div className="absolute top-[22%] right-[22%] w-[25%] h-[15%] bg-white rounded-full opacity-90 skew-x-12 blur-[0.5px] pointer-events-none"></div>
                        <div className="absolute top-[40%] right-[18%] w-[10%] h-[8%] bg-white rounded-full opacity-60 blur-[0.5px] pointer-events-none"></div>
                    </div>
                )
            })}
        </div>

        {/* Avatar & Message */}
        <div className="flex flex-col items-center gap-3 -mt-2">
            <div className="relative">
                <div className="w-24 h-24 bg-white rounded-full border-[6px] border-purple-200 flex items-center justify-center text-5xl shadow-lg relative z-10">
                    {state.playerAvatar.length > 10 ? (
                        <img src={state.playerAvatar} alt="avatar" className="w-full h-full rounded-full object-cover" />
                    ) : (
                        state.playerAvatar
                    )}
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full border-2 border-white uppercase tracking-wider shadow-md whitespace-nowrap z-20">
                    Best Teammate
                </div>
            </div>
            
            <p className="text-slate-500 font-bold text-center text-sm leading-relaxed max-w-[80%] mt-2">
                "Sync complete! You've unlocked new insights about each other."
            </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 w-full">
            {/* Time Stat */}
            <div className="bg-indigo-50 border-2 border-indigo-100 rounded-2xl p-3 flex flex-col items-center justify-center gap-1">
                <div className="flex items-center gap-1.5 text-indigo-400 mb-1">
                    <Timer size={14} strokeWidth={3} />
                    <span className="text-[10px] font-black uppercase tracking-wider">Duration</span>
                </div>
                <span className="font-cartoon font-black text-xl text-indigo-900">
                    {minutes}m {seconds}s
                </span>
            </div>
            
            {/* Seed Stat */}
            <div className="bg-pink-50 border-2 border-pink-100 rounded-2xl p-3 flex flex-col items-center justify-center gap-1">
                <div className="flex items-center gap-1.5 text-pink-400 mb-1">
                    <Hash size={14} strokeWidth={3} />
                    <span className="text-[10px] font-black uppercase tracking-wider">Room ID</span>
                </div>
                <span className="font-cartoon font-black text-xl text-pink-900">
                    {state.seed}
                </span>
            </div>
        </div>

        {/* Action Button */}
        <div className="w-full pt-2">
            <button 
                onClick={onReset}
                className="w-full bg-gradient-to-b from-pink-400 to-rose-500 hover:from-pink-300 hover:to-rose-400 text-white border-b-[6px] border-rose-700 active:border-b-0 active:translate-y-[6px] transition-all py-4 rounded-2xl shadow-xl flex items-center justify-center gap-2 group"
            >
                <RefreshCw className="group-hover:-rotate-180 transition-transform duration-500" size={22} strokeWidth={3} />
                <span className="font-cartoon font-black text-lg tracking-wide uppercase text-shadow-sm">Play Again</span>
            </button>
        </div>
        
      </div>
    </div>
  );
};