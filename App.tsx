import React, { useState, useEffect, useRef } from 'react';
import { GameState, ViewState, BingoItem } from './types';
import { BINGO_POOL } from './constants';
import { SeededRNG } from './utils/rng';
import { BingoCard } from './components/BingoCard';
import { WinModal } from './components/WinModal';
import { QuestionModal } from './components/QuestionModal';
import { Gamepad2, Users, Play, Hash, Upload, Image as ImageIcon } from 'lucide-react';

// Winning combinations indices for 4x4 grid
const WIN_LINES = [
  // Rows
  [0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15],
  // Columns
  [0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15],
  // Diagonals
  [0, 5, 10, 15], [3, 6, 9, 12]
];

// Reduced to 5 Hearts as requested
const PRESET_AVATARS = ['❤️', '💛', '💚', '💙', '💜'];

export default function App() {
  const [view, setView] = useState<ViewState>(ViewState.LANDING);
  const [seedInput, setSeedInput] = useState('');
  const [selectedCard, setSelectedCard] = useState<BingoItem | null>(null);
  const [hintIndex, setHintIndex] = useState<number | null>(null);
  const [votedIndex, setVotedIndex] = useState<number | null>(null);
  const [tempAvatar, setTempAvatar] = useState<string>(PRESET_AVATARS[0]);
  const [winningLine, setWinningLine] = useState<number[] | null>(null);
  
  const [gameState, setGameState] = useState<GameState>({
    seed: '',
    items: [],
    markedIndices: [],
    startTime: null,
    endTime: null,
    isComplete: false,
    playerAvatar: PRESET_AVATARS[0]
  });

  // Idle Timer Logic
  const lastInteractionRef = useRef<number>(Date.now());
  
  useEffect(() => {
    // Reset interaction timer on any user action
    const handleInteraction = () => {
      lastInteractionRef.current = Date.now();
      // Only clear hint if it exists, to avoid unnecessary state updates
      if (hintIndex !== null) setHintIndex(null);
    };

    window.addEventListener('pointerdown', handleInteraction);
    window.addEventListener('keydown', handleInteraction);
    window.addEventListener('mousemove', handleInteraction);

    // Check for idle every 1s
    const idleCheckInterval = setInterval(() => {
      // Logic update: Only set a hint if we don't already have one (avoids flashing)
      // And only if game is not won/doing winning animation
      if (view === ViewState.GAME && !gameState.isComplete && !winningLine && !selectedCard && hintIndex === null) {
        if (Date.now() - lastInteractionRef.current > 5000) {
          // If idle > 5s and no hint is active, pick a random unmarked card
          const unmarked = gameState.items
            .map((_, i) => i)
            .filter(i => !gameState.markedIndices.includes(i));
            
          if (unmarked.length > 0) {
             const randomIdx = unmarked[Math.floor(Math.random() * unmarked.length)];
             setHintIndex(randomIdx);
          }
        }
      }
    }, 1000);

    return () => {
      window.removeEventListener('pointerdown', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
      window.removeEventListener('mousemove', handleInteraction);
      clearInterval(idleCheckInterval);
    };
  }, [view, gameState, selectedCard, hintIndex, winningLine]);

  // Check for win condition
  useEffect(() => {
    if (view === ViewState.GAME && !gameState.isComplete && !winningLine) {
       const winLine = WIN_LINES.find(line => 
         line.every(index => gameState.markedIndices.includes(index))
       );

       if (winLine) {
         setWinningLine(winLine);
         // Play animation for 2 seconds before showing the modal
         setTimeout(() => {
             setGameState(prev => ({
               ...prev,
               isComplete: true,
               endTime: Date.now()
             }));
         }, 2000);
       }
    }
  }, [gameState.markedIndices, gameState.isComplete, view, winningLine]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const startGame = (customSeed: string) => {
    const finalSeed = customSeed.trim() || Math.random().toString(36).substring(7).toUpperCase();
    const rng = new SeededRNG(finalSeed);
    
    // Select 16 unique random items
    const shuffledPool = rng.shuffle(BINGO_POOL);
    const selectedItems = shuffledPool.slice(0, 16);

    setGameState({
      seed: finalSeed,
      items: selectedItems,
      markedIndices: [],
      startTime: Date.now(),
      endTime: null,
      isComplete: false,
      playerAvatar: tempAvatar
    });
    setSeedInput(finalSeed); // Sync input
    setWinningLine(null);
    setVotedIndex(null);
    setView(ViewState.GAME);
  };

  const toggleMark = (index: number) => {
    if (gameState.isComplete || winningLine) return;

    setGameState(prev => {
      const isMarked = prev.markedIndices.includes(index);
      const newIndices = isMarked 
        ? prev.markedIndices.filter(i => i !== index)
        : [...prev.markedIndices, index];
      
      // If marking, remove the vote visual as it's now done
      if (!isMarked && votedIndex === index) {
          setVotedIndex(null);
      }

      return { ...prev, markedIndices: newIndices };
    });
  };

  const handleCardSelect = (item: BingoItem, index: number) => {
      setVotedIndex(index);
      setSelectedCard(item);
  };

  const resetGame = () => {
    setView(ViewState.LANDING);
    setGameState(prev => ({ ...prev, isComplete: false, markedIndices: [], startTime: null, endTime: null, playerAvatar: tempAvatar }));
    setSelectedCard(null);
    setHintIndex(null);
    setWinningLine(null);
    setVotedIndex(null);
  };

  const getLineCoordinates = (indices: number[]) => {
      if (!indices || indices.length === 0) return { x1: 0, y1: 0, x2: 0, y2: 0 };
      
      // Assumes 4x4 grid
      const startIdx = indices[0];
      const endIdx = indices[indices.length - 1];
      
      const getCoord = (idx: number) => {
          const col = idx % 4;
          const row = Math.floor(idx / 4);
          // Center of cell: (col * 25 + 12.5)%, (row * 25 + 12.5)%
          return {
              x: `${col * 25 + 12.5}%`,
              y: `${row * 25 + 12.5}%`
          };
      };

      const start = getCoord(startIdx);
      const end = getCoord(endIdx);

      return { x1: start.x, y1: start.y, x2: end.x, y2: end.y };
  };

  return (
    <div className="min-h-screen flex flex-col items-center pb-8 overflow-hidden relative">
      
      {/* Background Texture - Animated */}
      <div className="fixed inset-0 pointer-events-none bg-pattern-moving z-0 opacity-50"></div>

      {/* Background Particles/Decoration */}
      <div className="fixed inset-0 pointer-events-none opacity-30 z-0">
         <div className="absolute top-10 left-10 w-24 h-24 bg-purple-500 rounded-full blur-3xl animate-float"></div>
         <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
         <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-fuchsia-500 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Header */}
      <header className="w-full max-w-md p-4 flex items-center justify-between relative z-20">
        <div className="flex items-center gap-3 bg-purple-900/60 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-purple-500/50">
           {view === ViewState.GAME && (
             <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-pink-400 shadow-sm">
                {gameState.playerAvatar.length > 10 ? (
                  <img src={gameState.playerAvatar} alt="avatar" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-lg leading-none pt-0.5">{gameState.playerAvatar}</span>
                )}
             </div>
           )}
           {view === ViewState.LANDING && <Gamepad2 className="text-yellow-400" size={24} />}
           
           <h1 className="font-cartoon text-xl font-bold text-white tracking-wide drop-shadow-md">
             DesignBingo
           </h1>
        </div>
        
        {view === ViewState.GAME && (
           <div className="flex items-center gap-2 bg-purple-900/60 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg font-cartoon font-bold text-purple-100 text-sm border border-purple-500/50">
             <Hash size={14} className="text-yellow-400" />
             {gameState.seed}
           </div>
        )}
      </header>

      <main className="flex-1 w-full max-w-lg p-4 flex flex-col justify-center relative z-10">
        
        {/* Landing View */}
        {view === ViewState.LANDING && (
          <div className="flex flex-col gap-6 animate-pop">
            
            {/* COMPACT HERO SECTION */}
            <div className="bg-white rounded-[24px] p-6 shadow-[0_6px_0_rgba(0,0,0,0.15)] flex items-center gap-5 border-4 border-white">
               {/* Hero Icon */}
               <div className="relative w-16 h-16 flex-shrink-0">
                 <div className="absolute inset-0 bg-pink-400 rounded-2xl blur-md opacity-50"></div>
                 <div className="w-16 h-16 bg-gradient-to-br from-pink-300 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3 hover:rotate-3 transition-transform relative z-10 border-2 border-white">
                    <Users className="w-8 h-8 text-white drop-shadow-md" strokeWidth={2.5} />
                 </div>
               </div>
               
               <div className="flex flex-col items-start text-left">
                 <h2 className="font-cartoon text-2xl font-black text-slate-800 leading-none mb-1">
                   Co-op Quest
                 </h2>
                 <p className="text-slate-400 font-bold text-sm leading-tight">
                   Discover your superpowers.
                 </p>
               </div>
            </div>

            {/* Avatar Selector */}
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-[28px] shadow-lg border-2 border-purple-300 space-y-4">
               <label className="block text-center font-cartoon font-bold text-purple-900 uppercase tracking-wider text-sm">
                  Choose Your Hero
               </label>
               
               <div className="flex justify-center gap-3 flex-wrap">
                  {PRESET_AVATARS.map((avatar) => (
                    <button
                      key={avatar}
                      onClick={() => setTempAvatar(avatar)}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl transition-all border-b-4 active:border-b-0 active:translate-y-1 ${
                        tempAvatar === avatar 
                        ? 'bg-pink-100 border-pink-400 scale-110 shadow-md' 
                        : 'bg-slate-100 border-slate-200 hover:bg-slate-200'
                      }`}
                    >
                      <span className="leading-none pt-0.5">{avatar}</span>
                    </button>
                  ))}
                  <label className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all border-b-4 active:border-b-0 active:translate-y-1 cursor-pointer ${
                        tempAvatar.length > 10
                        ? 'bg-pink-100 border-pink-400 shadow-md'
                        : 'bg-blue-100 border-blue-300 hover:bg-blue-200'
                  }`}>
                    <input type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
                    {tempAvatar.length > 10 ? (
                       <img src={tempAvatar} className="w-8 h-8 rounded-lg object-cover" alt="custom" />
                    ) : (
                       <Upload size={18} className="text-blue-500" />
                    )}
                  </label>
               </div>
            </div>

            {/* Room Code */}
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-[28px] shadow-lg border-2 border-purple-300 space-y-4">
              <label className="block text-center font-cartoon font-bold text-purple-900 uppercase tracking-wider text-sm">
                Enter Room Code
              </label>
              <input 
                type="text" 
                value={seedInput}
                onChange={(e) => setSeedInput(e.target.value.toUpperCase())}
                placeholder="GAMEJAM"
                className="w-full bg-slate-100 border-2 border-transparent focus:border-pink-400 focus:bg-white rounded-xl py-4 text-center font-cartoon text-3xl font-black text-purple-700 outline-none transition-all placeholder:text-slate-300"
              />
            </div>

            <button 
              onClick={() => startGame(seedInput)}
              className="w-full bg-gradient-to-b from-pink-400 to-rose-500 hover:from-pink-300 hover:to-rose-400 text-white border-b-8 border-rose-700 active:border-b-0 active:translate-y-2 transition-all font-cartoon font-black text-xl py-5 rounded-2xl shadow-xl flex items-center justify-center gap-3 text-shadow-sm"
            >
              <Play fill="currentColor" />
              START GAME
            </button>
          </div>
        )}

        {/* Game View */}
        {view === ViewState.GAME && (
          <div className="w-full max-w-md mx-auto relative">
             <div className="grid grid-cols-4 gap-2 md:gap-3 mb-6 perspective-1000 relative z-10">
                {gameState.items.map((item, index) => (
                   <BingoCard 
                     key={`${gameState.seed}-${item.id}`}
                     item={item}
                     isMarked={gameState.markedIndices.includes(index)}
                     isHinted={index === hintIndex}
                     isVoted={votedIndex === index}
                     playerAvatar={gameState.playerAvatar}
                     onToggleMark={() => toggleMark(index)}
                     onSelect={() => handleCardSelect(item, index)}
                   />
                ))}
                
                {/* Winning Line Overlay */}
                {winningLine && (
                   <div className="absolute inset-0 pointer-events-none z-50">
                     <svg className="w-full h-full overflow-visible">
                        <line 
                           {...getLineCoordinates(winningLine)}
                           stroke="#fbbf24" 
                           strokeWidth="8" 
                           strokeLinecap="round"
                           className="drop-shadow-lg animate-draw"
                        />
                     </svg>
                   </div>
                )}
             </div>
             
             <div className="flex justify-center gap-3">
                 <div className="bg-purple-900/50 backdrop-blur shadow-lg px-4 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-2 border border-purple-400/30">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    Tap to Vote/Open
                 </div>
                 <div className="bg-purple-900/50 backdrop-blur shadow-lg px-4 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-2 border border-purple-400/30">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    Hold 2s to Mark
                 </div>
             </div>
          </div>
        )}

        {/* Modals */}
        {selectedCard && (
            <QuestionModal 
                item={selectedCard} 
                seed={gameState.seed} 
                onClose={() => setSelectedCard(null)} 
            />
        )}

        {gameState.isComplete && (
           <WinModal state={gameState} onReset={resetGame} />
        )}

      </main>
    </div>
  );
}