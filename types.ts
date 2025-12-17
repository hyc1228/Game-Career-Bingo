export interface BingoItem {
  id: number;
  shortTitle: string; // New field for grid display
  question: string;   // Full question for modal
  category: 'career' | 'personal' | 'philosophy' | 'creative';
  fallbackHint: string; // Used if API is unavailable
}

export interface GameState {
  seed: string;
  items: BingoItem[];
  markedIndices: number[];
  startTime: number | null;
  endTime: number | null;
  isComplete: boolean;
  playerAvatar: string;
}

export enum ViewState {
  LANDING,
  GAME,
  SUMMARY
}