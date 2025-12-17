// A simple seeded random number generator (Linear Congruential Generator)
// Allows both users to see the exact same grid if they use the same seed code.

export class SeededRNG {
  private seed: number;

  constructor(seedString: string) {
    this.seed = this.hashString(seedString);
  }

  private hashString(str: string): number {
    let hash = 0;
    if (str.length === 0) return hash;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
  }

  // Returns a random number between 0 and 1
  public next(): number {
    const a = 1664525;
    const c = 1013904223;
    const m = 4294967296; // 2^32
    this.seed = (a * this.seed + c) % m;
    return this.seed / m;
  }

  // Fisher-Yates shuffle using the seeded RNG
  public shuffle<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(this.next() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}