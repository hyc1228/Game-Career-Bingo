export type Language = 'en' | 'zh';

// Every piece of player-facing content carries all languages,
// so a mid-game language switch (or two players on different
// languages sharing a room code) always resolves to the same board.
export type LocalizedText = Record<Language, string>;

export interface BingoItem {
  id: number;
  shortTitle: LocalizedText; // Compact label for the grid cell
  question: LocalizedText;   // Full question for the modal
  category: 'career' | 'personal' | 'philosophy' | 'creative';
  fallbackHint: LocalizedText; // Mentor hint used when the API is unavailable
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
