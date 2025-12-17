import React, { useRef, useState, useEffect } from 'react';
import { BingoItem } from '../types';
import { Check, User, Briefcase, Lightbulb, Palette, Sparkles } from 'lucide-react';

interface BingoCardProps {
  item: BingoItem;
  isMarked: boolean;
  isHinted: boolean;
  isVoted: boolean;
  playerAvatar: string;
  onToggleMark: () => void;
  onSelect: () => void;
}

export const BingoCard: React.FC<BingoCardProps> = ({ item, isMarked, isHinted, isVoted, playerAvatar, onToggleMark, onSelect }) => {
  const [isPressing, setIsPressing] = useState(false);
  const [isPopping, setIsPopping] = useState(false); // New state for click feedback
  const [progress, setProgress] = useState(0);

  const pressTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const popTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  const PRESS_DURATION = 1000; // Faster mark time (1s) feels snappier

  const handlePointerDown = (e: React.PointerEvent) => {
    if (isMarked) return;
    
    setIsPressing(true);
    setProgress(0);
    
    const startTime = Date.now();

    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const p = Math.min((elapsed / PRESS_DURATION) * 100, 100);
      setProgress(p);
    }, 20);

    pressTimerRef.current = setTimeout(() => {
      onToggleMark();
      setIsPressing(false);
      setProgress(100);
      clearTimers();
      if (navigator.vibrate) navigator.vibrate([50, 50, 50]); 
    }, PRESS_DURATION);
  };

  const clearTimers = () => {
    if (pressTimerRef.current) clearTimeout(pressTimerRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    pressTimerRef.current = null;
    progressIntervalRef.current = null;
  };

  const handlePointerUp = () => {
    if (isMarked) return;
    if (isPressing && progress < 100) {
      if (progress < 30) { 
         // Trigger click feedback animation
         setIsPopping(true);
         if (popTimerRef.current) clearTimeout(popTimerRef.current);
         popTimerRef.current = setTimeout(() => setIsPopping(false), 300);
         
         onSelect();
      }
    }
    setIsPressing(false);
    setProgress(0);
    clearTimers();
  };

  const handlePointerLeave = () => {
    if (isPressing) {
        setIsPressing(false);
        setProgress(0);
        clearTimers();
    }
  };

  // Cleanup pop timer
  useEffect(() => {
      return () => {
          if (popTimerRef.current) clearTimeout(popTimerRef.current);
      }
  }, []);

  // Modern, Clean Design Style (Less Cartoonish)
  const getStyle = () => {
      if (isMarked) {
          // Elegant dark/colored fill for marked state
          return 'bg-indigo-600 border-indigo-800 text-white shadow-inner';
      }
      
      // Clean white styling with subtle hints
      return 'bg-white border-slate-200 hover:border-indigo-300 text-slate-700 shadow-sm';
  };

  const renderIcon = () => {
      const size = 18;
      // Icons provide the color pop
      if (isMarked) return null;

      switch(item.category) {
          case 'career': return <Briefcase size={size} className="text-cyan-500" />;
          case 'personal': return <User size={size} className="text-pink-500" />;
          case 'philosophy': return <Lightbulb size={size} className="text-amber-500" />;
          case 'creative': return <Palette size={size} className="text-purple-500" />;
      }
  };

  const getCategoryBorder = () => {
      if (isMarked) return '';
      switch(item.category) {
        case 'career': return 'border-b-4 border-cyan-100';
        case 'personal': return 'border-b-4 border-pink-100';
        case 'philosophy': return 'border-b-4 border-amber-100';
        case 'creative': return 'border-b-4 border-purple-100';
        default: return 'border-b-4 border-slate-100';
      }
  }

  return (
    <div 
      className={`
        relative w-full aspect-square rounded-2xl
        cursor-pointer select-none touch-none 
        flex flex-col items-center justify-between p-2
        transition-all duration-200
        border
        ${getStyle()}
        ${getCategoryBorder()}
        ${isPressing ? 'scale-95 animate-wiggle' : 'hover:-translate-y-0.5'}
        ${isPopping ? 'animate-click-pop' : ''}
        ${isHinted && !isPressing ? 'ring-4 ring-yellow-300 ring-offset-2 ring-offset-purple-900 animate-pulse' : ''}
        ${isVoted && !isMarked ? 'ring-2 ring-pink-400 ring-offset-1 ring-offset-white' : ''}
      `}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Voted Indicator */}
      {isVoted && !isMarked && (
          <div className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full shadow-md border-2 border-pink-400 flex items-center justify-center z-20 animate-bounce">
              {playerAvatar.length > 10 ? (
                  <img src={playerAvatar} className="w-full h-full rounded-full object-cover" alt="vote" />
              ) : (
                  <span className="text-xs leading-none">{playerAvatar}</span>
              )}
          </div>
      )}

      {/* Progress Ring or Overlay for Long Press */}
      {isPressing && !isMarked && (
         <div className="absolute inset-0 bg-indigo-50/50 rounded-2xl overflow-hidden pointer-events-none">
             <div 
                className="absolute bottom-0 left-0 right-0 bg-indigo-200/50 transition-all ease-linear"
                style={{ height: `${progress}%`, transitionDuration: '20ms' }}
             />
         </div>
      )}

      {isMarked ? (
          <div className="flex-1 flex items-center justify-center animate-pop">
               <Check className="w-10 h-10 text-white drop-shadow-md" strokeWidth={4} />
          </div>
      ) : (
          <>
            <div className="w-full flex justify-between items-start">
                {isHinted ? <Sparkles size={14} className="text-yellow-500 animate-spin" /> : <div></div>}
                <div className="opacity-80">{renderIcon()}</div>
            </div>
            
            <div className="flex-1 flex items-center justify-center w-full -mt-1">
                <p className="font-cartoon text-[11px] md:text-[13px] leading-tight text-center font-bold line-clamp-3 px-1">
                    {item.shortTitle}
                </p>
            </div>
             <div className="h-2"></div>
          </>
      )}
    </div>
  );
};