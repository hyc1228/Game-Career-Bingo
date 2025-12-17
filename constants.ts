import { BingoItem } from './types';

// A curated list of Game Design & Career Growth themed questions
// The 'fallbackHint' is now the PRIMARY content for the offline Mentor mode.
export const BINGO_POOL: BingoItem[] = [
  {
    id: 1,
    category: 'personal',
    shortTitle: "Life Game",
    question: "What is your 'Life Game'? (The game that defined you)",
    fallbackHint: "Analyze the 'Core Loop' of that memory. Did the game give you a permanent Buff to your creativity, or did it unlock a new branch in your Skill Tree?"
  },
  {
    id: 2,
    category: 'career',
    shortTitle: "Tutorial Lv1",
    question: "Level 1: The First Job. What was the tutorial like?",
    fallbackHint: "Tutorials often have invisible walls. What mechanics were you forced to learn quickly to avoid a Game Over in that first month?"
  },
  {
    id: 3,
    category: 'career',
    shortTitle: "Skill Tree",
    question: "Skill Tree: What skill are you currently grinding?",
    fallbackHint: "Is this an 'Active Skill' (requires constant input) or a 'Passive Buff' (improves everything you do)? How much XP until you level it up?"
  },
  {
    id: 4,
    category: 'personal',
    shortTitle: "Main Quest",
    question: "Main Quest: What is your primary objective for this year?",
    fallbackHint: "Check your Quest Log. Is this quest 'Time-Limited'? What is the specific loot drop (outcome) you are expecting upon completion?"
  },
  {
    id: 5,
    category: 'personal',
    shortTitle: "Open World",
    question: "Map Exploration: Which city feels most like an 'Open World'?",
    fallbackHint: "Think about Level Design. Does the city encourage verticality (ambition) or horizontal exploration (variety)? Where are the best NPCs?"
  },
  {
    id: 6,
    category: 'creative',
    shortTitle: "Cinematics",
    question: "Cutscene: A movie or animation that inspired your visual style.",
    fallbackHint: "Deconstruct the Art Direction. Are you drawn to the color palette, the framing, or the emotional pacing? How do you port that to your work?"
  },
  {
    id: 7,
    category: 'personal',
    shortTitle: "Epic Loot",
    question: "Loot Drop: The best gift you've ever received.",
    fallbackHint: "Categorize this item: Is it a 'Consumable' (brief joy) or 'Legendary Gear' (permanent stat boost)? Why is its rarity so high for you?"
  },
  {
    id: 8,
    category: 'career',
    shortTitle: "Ideal Biome",
    question: "Ideal Biome: Describe your perfect work environment.",
    fallbackHint: "What environmental hazards reduce your HP (Health Points)? Noise? Micro-management? What buffs your Stamina recovery?"
  },
  {
    id: 9,
    category: 'career',
    shortTitle: "Achievement",
    question: "Achievement Unlocked: The most meaningful act last year.",
    fallbackHint: "Was this a 'Hidden Achievement' (personal satisfaction) or a 'Global Leaderboard' moment (public recognition)? Which matters more?"
  },
  {
    id: 10,
    category: 'personal',
    shortTitle: "Side Quest",
    question: "Side Quest: Something you wanted to do but skipped.",
    fallbackHint: "Is this content still in the DLC pipeline for later, or was it cut from the final build? What resource (Time/Money) was missing?"
  },
  {
    id: 11,
    category: 'philosophy',
    shortTitle: "Game Tags",
    question: "Tags: 3 Keywords that define 'Game Design' to you.",
    fallbackHint: "Imagine these are Steam Tags. If you filtered your career by these tags, would your current project show up in the results?"
  },
  {
    id: 12,
    category: 'personal',
    shortTitle: "Char. Stats",
    question: "Character Sheet: 3 Keywords describing your first impression of me.",
    fallbackHint: "Compare the 'Base Stats' (first look) vs. the 'Equipped Build' (current reality). Which stat was surprisingly high?"
  },
  {
    id: 13,
    category: 'personal',
    shortTitle: "Easter Egg",
    question: "Easter Egg: A hidden hobby/talent few people know about.",
    fallbackHint: "Why is this hidden? Is it a secret level only for close friends, or are you waiting for the right moment to reveal this mechanic?"
  },
  {
    id: 14,
    category: 'career',
    shortTitle: "Boss Fight",
    question: "Boss Battle: A professional challenge you overcame recently.",
    fallbackHint: "Analyze the Boss mechanics. Did you tank the damage, DPS it down quickly, or did you need to call in a Co-op partner to clear it?"
  },
  {
    id: 15,
    category: 'philosophy',
    shortTitle: "Game Over?",
    question: "Game Over?: A failure that taught you a core mechanic of life.",
    fallbackHint: "Post-Mortem time: Was the failure due to RNG (bad luck) or Skill Issue (preparation)? How has your strategy changed for the next run?"
  },
  {
    id: 16,
    category: 'career',
    shortTitle: "Co-op Mode",
    question: "Co-op Mode: What qualities do you value most in a teammate?",
    fallbackHint: "Are you looking for a Tank (protection), a Healer (support), or a DPS (execution)? How do your classes synergize?"
  },
  {
    id: 17,
    category: 'personal',
    shortTitle: "Patch Notes",
    question: "Patch Notes: One habit you want to fix/improve in yourself.",
    fallbackHint: "Is this a 'Hotfix' (urgent repair needed) or a planned 'QoL Update' (Quality of Life)? What creates the friction in the current build?"
  },
  {
    id: 18,
    category: 'philosophy',
    shortTitle: "My Studio",
    question: "Dream Studio: If you founded a studio, what is its core value?",
    fallbackHint: "Define the studio culture as a gameplay loop. Does it reward grinding (crunch) or exploration (creativity)? What is the win state for the team?"
  },
  {
    id: 19,
    category: 'career',
    shortTitle: "NPC Wisdom",
    question: "NPC Interaction: A mentor who gave you a key item/advice.",
    fallbackHint: "Dialogue check: Replay that conversation. Why did that specific line of text unlock a new map area in your career?"
  },
  {
    id: 20,
    category: 'creative',
    shortTitle: "Inventory",
    question: "Inventory: 3 physical objects on your desk you need.",
    fallbackHint: "Are these Quest Items (essential for work) or Lore Items (emotional support)? If you had limited inventory slots, which goes first?"
  },
  {
    id: 21,
    category: 'career',
    shortTitle: "Speedrun",
    question: "Speedrun: A task you are surprisingly fast at.",
    fallbackHint: "Is this speed due to high Dexterity (practice) or did you find a sequence break (shortcut)? Can you teach this exploit to others?"
  },
  {
    id: 22,
    category: 'career',
    shortTitle: "Fog of War",
    question: "Fog of War: An area of your career you are uncertain about.",
    fallbackHint: "Do you need a 'Scout' (mentor) to reveal the map, or do you just need to walk into the darkness and generate the terrain yourself?"
  },
  {
    id: 23,
    category: 'personal',
    shortTitle: "OST Flow",
    question: "Soundtrack: What music plays during your 'Flow State'?",
    fallbackHint: "Dynamic Audio: How does the BPM change when the deadline timer starts flashing red? Does silence buff or nerf you?"
  },
  {
    id: 24,
    category: 'personal',
    shortTitle: "Save Point",
    question: "Respawn Point: Where do you go to recharge when burned out?",
    fallbackHint: "Is this a Safe Room? How long does it take to refill your HP and Mana bars completely? Do you visit often enough?"
  },
  {
    id: 25,
    category: 'creative',
    shortTitle: "Beta Test",
    question: "Beta Test: An idea you're experimenting with right now.",
    fallbackHint: "It's okay if it's buggy. What data are you collecting from this test? Is it ready for public release or strictly closed beta?"
  },
  {
    id: 26,
    category: 'philosophy',
    shortTitle: "Core Lore",
    question: "Lore: A book or article that changed your worldview.",
    fallbackHint: "Did this lore retcon (rewrite) your previous beliefs? How does this knowledge affect your daily gameplay decisions?"
  },
  {
    id: 27,
    category: 'career',
    shortTitle: "UX of You",
    question: "User Experience: How do you want people to feel after talking to you?",
    fallbackHint: "Analyze the 'Player Feedback'. Do they leave feeling Empowered (buffed) or Drained (debuffed)? What is your UI (facial expression) signaling?"
  },
  {
    id: 28,
    category: 'philosophy',
    shortTitle: "Graphics?",
    question: "Graphics Setting: Aesthetics or Functionality? (In life/work)",
    fallbackHint: "Are you running on 'Ultra Settings' (perfectionism) and dropping frames, or 'Low Settings' (pragmatism) to keep the frame rate (productivity) high?"
  },
  {
    id: 29,
    category: 'personal',
    shortTitle: "The Glitch",
    question: "Glitch: A personal quirk that is actually a feature, not a bug.",
    fallbackHint: "Emergent Gameplay! How have you used this unique trait to solve puzzles that standard players couldn't figure out?"
  },
  {
    id: 30,
    category: 'career',
    shortTitle: "Endgame",
    question: "Endgame Content: What does 'Success' look like in 10 years?",
    fallbackHint: "Visualize the Platinum Trophy. Is the endgame about having the most Gold (wealth) or the biggest Guild (influence)?"
  },
  {
    id: 31,
    category: 'creative',
    shortTitle: "Cheat Code",
    question: "Superpower: If you could add one 'cheat code' to real life, what is it?",
    fallbackHint: "Would using this cheat break the game balance? Or would it just remove the tedious grinding parts of your daily loop?"
  },
  {
    id: 32,
    category: 'philosophy',
    shortTitle: "Save Scum",
    question: "Save Scumming: If you could redo one moment, would you?",
    fallbackHint: "Or do you play on 'Ironman Mode' (permadeath/no reloads)? How has living with that consequence shaped your current build?"
  }
];