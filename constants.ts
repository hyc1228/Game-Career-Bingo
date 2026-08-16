import { BingoItem } from './types';

// A curated list of Game Design & Career Growth themed questions.
// Every item is fully bilingual (en/zh); the seeded shuffle operates on
// this single array, so the same room code produces the same board in
// every language. The 'fallbackHint' is the PRIMARY content for the
// offline Mentor mode.
export const BINGO_POOL: BingoItem[] = [
  {
    id: 1,
    category: 'personal',
    shortTitle: { en: 'Life Game', zh: '人生之作' },
    question: {
      en: "What is your 'Life Game'? (The game that defined you)",
      zh: '你的「人生之作」是哪款游戏？（那个定义了你的游戏）'
    },
    fallbackHint: {
      en: "Analyze the 'Core Loop' of that memory. Did the game give you a permanent Buff to your creativity, or did it unlock a new branch in your Skill Tree?",
      zh: '分析一下那段记忆的「核心循环」：这款游戏是给你的创造力上了一个永久Buff，还是在你的技能树上解锁了一条全新分支？'
    }
  },
  {
    id: 2,
    category: 'career',
    shortTitle: { en: 'Tutorial Lv1', zh: '新手教程' },
    question: {
      en: 'Level 1: The First Job. What was the tutorial like?',
      zh: '第一关：你的第一份工作。那段「新手教程」是什么样的？'
    },
    fallbackHint: {
      en: 'Tutorials often have invisible walls. What mechanics were you forced to learn quickly to avoid a Game Over in that first month?',
      zh: '新手教程里往往藏着空气墙。在入职的第一个月里，你被迫火速掌握了哪些机制才没有Game Over？'
    }
  },
  {
    id: 3,
    category: 'career',
    shortTitle: { en: 'Skill Tree', zh: '技能树' },
    question: {
      en: 'Skill Tree: What skill are you currently grinding?',
      zh: '技能树：你现在正在肝哪个技能？'
    },
    fallbackHint: {
      en: "Is this an 'Active Skill' (requires constant input) or a 'Passive Buff' (improves everything you do)? How much XP until you level it up?",
      zh: '这是一个「主动技能」（需要持续操作），还是一个「被动Buff」（能强化你做的所有事）？距离升级还差多少经验值？'
    }
  },
  {
    id: 4,
    category: 'personal',
    shortTitle: { en: 'Main Quest', zh: '主线任务' },
    question: {
      en: 'Main Quest: What is your primary objective for this year?',
      zh: '主线任务：你今年的首要目标是什么？'
    },
    fallbackHint: {
      en: "Check your Quest Log. Is this quest 'Time-Limited'? What is the specific loot drop (outcome) you are expecting upon completion?",
      zh: '打开你的任务日志：这个任务是「限时任务」吗？完成后你期待掉落的具体战利品（成果）是什么？'
    }
  },
  {
    id: 5,
    category: 'personal',
    shortTitle: { en: 'Open World', zh: '开放世界' },
    question: {
      en: "Map Exploration: Which city feels most like an 'Open World'?",
      zh: '地图探索：哪座城市最让你有「开放世界」的感觉？'
    },
    fallbackHint: {
      en: 'Think about Level Design. Does the city encourage verticality (ambition) or horizontal exploration (variety)? Where are the best NPCs?',
      zh: '从关卡设计的角度想想：这座城市鼓励纵向攀升（野心），还是横向探索（多样性）？最好的NPC都在哪里出没？'
    }
  },
  {
    id: 6,
    category: 'creative',
    shortTitle: { en: 'Cinematics', zh: '过场动画' },
    question: {
      en: 'Cutscene: A movie or animation that inspired your visual style.',
      zh: '过场动画：一部影响了你视觉风格的电影或动画。'
    },
    fallbackHint: {
      en: 'Deconstruct the Art Direction. Are you drawn to the color palette, the framing, or the emotional pacing? How do you port that to your work?',
      zh: '拆解一下它的美术指导：吸引你的是配色、构图，还是情绪节奏？你是怎么把这些「移植」到自己的作品里的？'
    }
  },
  {
    id: 7,
    category: 'personal',
    shortTitle: { en: 'Epic Loot', zh: '史诗战利品' },
    question: {
      en: "Loot Drop: The best gift you've ever received.",
      zh: '战利品掉落：你收到过的最棒的礼物。'
    },
    fallbackHint: {
      en: "Categorize this item: Is it a 'Consumable' (brief joy) or 'Legendary Gear' (permanent stat boost)? Why is its rarity so high for you?",
      zh: '给这件物品分个类：它是「消耗品」（短暂的快乐），还是「传说装备」（永久属性加成）？它对你来说为什么稀有度这么高？'
    }
  },
  {
    id: 8,
    category: 'career',
    shortTitle: { en: 'Ideal Biome', zh: '理想生态' },
    question: {
      en: 'Ideal Biome: Describe your perfect work environment.',
      zh: '理想生态区：描述一下你心中完美的工作环境。'
    },
    fallbackHint: {
      en: 'What environmental hazards reduce your HP (Health Points)? Noise? Micro-management? What buffs your Stamina recovery?',
      zh: '哪些环境伤害会持续扣你的HP？噪音？微观管理？又是什么能给你的体力回复上Buff？'
    }
  },
  {
    id: 9,
    category: 'career',
    shortTitle: { en: 'Achievement', zh: '成就解锁' },
    question: {
      en: 'Achievement Unlocked: The most meaningful act last year.',
      zh: '成就解锁：去年你做过的最有意义的一件事。'
    },
    fallbackHint: {
      en: "Was this a 'Hidden Achievement' (personal satisfaction) or a 'Global Leaderboard' moment (public recognition)? Which matters more?",
      zh: '这是一个「隐藏成就」（自我满足），还是一个「全球排行榜」时刻（公开认可）？哪一种对你更重要？'
    }
  },
  {
    id: 10,
    category: 'personal',
    shortTitle: { en: 'Side Quest', zh: '支线任务' },
    question: {
      en: 'Side Quest: Something you wanted to do but skipped.',
      zh: '支线任务：一件你一直想做却跳过了的事。'
    },
    fallbackHint: {
      en: 'Is this content still in the DLC pipeline for later, or was it cut from the final build? What resource (Time/Money) was missing?',
      zh: '这段内容是还排在DLC计划里，还是已经从正式版本里被砍掉了？当时缺的是哪种资源——时间还是金钱？'
    }
  },
  {
    id: 11,
    category: 'philosophy',
    shortTitle: { en: 'Game Tags', zh: '游戏标签' },
    question: {
      en: "Tags: 3 Keywords that define 'Game Design' to you.",
      zh: '标签：用3个关键词定义你心中的「游戏设计」。'
    },
    fallbackHint: {
      en: 'Imagine these are Steam Tags. If you filtered your career by these tags, would your current project show up in the results?',
      zh: '把它们想象成Steam标签：如果用这3个标签筛选你的职业生涯，你现在做的项目会出现在搜索结果里吗？'
    }
  },
  {
    id: 12,
    category: 'personal',
    shortTitle: { en: 'Char. Stats', zh: '角色面板' },
    question: {
      en: 'Character Sheet: 3 Keywords describing your first impression of me.',
      zh: '角色面板：用3个关键词描述你对我的第一印象。'
    },
    fallbackHint: {
      en: "Compare the 'Base Stats' (first look) vs. the 'Equipped Build' (current reality). Which stat was surprisingly high?",
      zh: '对比一下「初始属性」（第一眼）和「当前配装」（真实的我）：哪一项属性高得出乎你的意料？'
    }
  },
  {
    id: 13,
    category: 'personal',
    shortTitle: { en: 'Easter Egg', zh: '隐藏彩蛋' },
    question: {
      en: 'Easter Egg: A hidden hobby/talent few people know about.',
      zh: '彩蛋：一个很少有人知道的隐藏爱好或天赋。'
    },
    fallbackHint: {
      en: 'Why is this hidden? Is it a secret level only for close friends, or are you waiting for the right moment to reveal this mechanic?',
      zh: '它为什么是隐藏的？这是只对亲密好友开放的秘密关卡，还是你在等一个合适的时机公开这个新机制？'
    }
  },
  {
    id: 14,
    category: 'career',
    shortTitle: { en: 'Boss Fight', zh: 'Boss战' },
    question: {
      en: 'Boss Battle: A professional challenge you overcame recently.',
      zh: 'Boss战：最近你攻克的一个职业难关。'
    },
    fallbackHint: {
      en: 'Analyze the Boss mechanics. Did you tank the damage, DPS it down quickly, or did you need to call in a Co-op partner to clear it?',
      zh: '分析一下这个Boss的机制：你是硬抗伤害（坦克流），高输出速通（DPS流），还是叫了联机队友才通关的？'
    }
  },
  {
    id: 15,
    category: 'philosophy',
    shortTitle: { en: 'Game Over?', zh: '游戏结束?' },
    question: {
      en: 'Game Over?: A failure that taught you a core mechanic of life.',
      zh: 'Game Over？：一次让你学会人生核心机制的失败。'
    },
    fallbackHint: {
      en: 'Post-Mortem time: Was the failure due to RNG (bad luck) or Skill Issue (preparation)? How has your strategy changed for the next run?',
      zh: '复盘时间：这次失败是RNG问题（运气差），还是技术问题（准备不足）？下一个周目你的策略有什么变化？'
    }
  },
  {
    id: 16,
    category: 'career',
    shortTitle: { en: 'Co-op Mode', zh: '联机模式' },
    question: {
      en: 'Co-op Mode: What qualities do you value most in a teammate?',
      zh: '联机模式：你最看重队友的什么品质？'
    },
    fallbackHint: {
      en: 'Are you looking for a Tank (protection), a Healer (support), or a DPS (execution)? How do your classes synergize?',
      zh: '你在找坦克（保护）、奶妈（支援），还是DPS（执行力）？你们的职业之间怎么打出配合？'
    }
  },
  {
    id: 17,
    category: 'personal',
    shortTitle: { en: 'Patch Notes', zh: '更新公告' },
    question: {
      en: 'Patch Notes: One habit you want to fix/improve in yourself.',
      zh: '更新公告：一个你想修复或改进的自身习惯。'
    },
    fallbackHint: {
      en: "Is this a 'Hotfix' (urgent repair needed) or a planned 'QoL Update' (Quality of Life)? What creates the friction in the current build?",
      zh: '这是一个「紧急热修复」，还是计划中的「体验优化更新」？当前版本里的摩擦到底出在哪里？'
    }
  },
  {
    id: 18,
    category: 'philosophy',
    shortTitle: { en: 'My Studio', zh: '梦想工作室' },
    question: {
      en: 'Dream Studio: If you founded a studio, what is its core value?',
      zh: '梦想工作室：如果你创办一家工作室，它的核心价值观是什么？'
    },
    fallbackHint: {
      en: 'Define the studio culture as a gameplay loop. Does it reward grinding (crunch) or exploration (creativity)? What is the win state for the team?',
      zh: '把工作室文化定义成一个玩法循环：它奖励刷子式的肝（加班），还是探索（创造力）？团队的「胜利条件」是什么？'
    }
  },
  {
    id: 19,
    category: 'career',
    shortTitle: { en: 'NPC Wisdom', zh: 'NPC智慧' },
    question: {
      en: 'NPC Interaction: A mentor who gave you a key item/advice.',
      zh: 'NPC对话：一位给过你关键道具（建议）的导师。'
    },
    fallbackHint: {
      en: 'Dialogue check: Replay that conversation. Why did that specific line of text unlock a new map area in your career?',
      zh: '对话检定：回放那次谈话。为什么恰恰是那一句话，为你的职业生涯解锁了一片新地图？'
    }
  },
  {
    id: 20,
    category: 'creative',
    shortTitle: { en: 'Inventory', zh: '背包物品' },
    question: {
      en: 'Inventory: 3 physical objects on your desk you need.',
      zh: '背包：你桌上离不开的3件实物。'
    },
    fallbackHint: {
      en: 'Are these Quest Items (essential for work) or Lore Items (emotional support)? If you had limited inventory slots, which goes first?',
      zh: '它们是「任务道具」（工作必需），还是「设定收藏品」（情绪支持）？如果背包格子有限，先扔哪一个？'
    }
  },
  {
    id: 21,
    category: 'career',
    shortTitle: { en: 'Speedrun', zh: '速通' },
    question: {
      en: 'Speedrun: A task you are surprisingly fast at.',
      zh: '速通：一件你快得出奇的事。'
    },
    fallbackHint: {
      en: 'Is this speed due to high Dexterity (practice) or did you find a sequence break (shortcut)? Can you teach this exploit to others?',
      zh: '这种速度是敏捷值高（练出来的），还是你发现了流程破解（捷径）？这个技巧能教给别人吗？'
    }
  },
  {
    id: 22,
    category: 'career',
    shortTitle: { en: 'Fog of War', zh: '战争迷雾' },
    question: {
      en: 'Fog of War: An area of your career you are uncertain about.',
      zh: '战争迷雾：你职业版图上一块看不清的区域。'
    },
    fallbackHint: {
      en: "Do you need a 'Scout' (mentor) to reveal the map, or do you just need to walk into the darkness and generate the terrain yourself?",
      zh: '你需要一个「侦察兵」（导师）帮你开图，还是干脆自己走进黑暗，亲手生成那片地形？'
    }
  },
  {
    id: 23,
    category: 'personal',
    shortTitle: { en: 'OST Flow', zh: '心流原声' },
    question: {
      en: "Soundtrack: What music plays during your 'Flow State'?",
      zh: '原声带：你进入「心流状态」时放的是什么音乐？'
    },
    fallbackHint: {
      en: 'Dynamic Audio: How does the BPM change when the deadline timer starts flashing red? Does silence buff or nerf you?',
      zh: '动态音效：当死线倒计时开始闪红光时，你的BPM会怎么变？安静对你来说是Buff还是Debuff？'
    }
  },
  {
    id: 24,
    category: 'personal',
    shortTitle: { en: 'Save Point', zh: '存档点' },
    question: {
      en: 'Respawn Point: Where do you go to recharge when burned out?',
      zh: '重生点：你燃尽（Burnout）的时候去哪里回血？'
    },
    fallbackHint: {
      en: 'Is this a Safe Room? How long does it take to refill your HP and Mana bars completely? Do you visit often enough?',
      zh: '那里算是你的安全屋吗？把HP和蓝条完全回满需要多久？你去得够频繁吗？'
    }
  },
  {
    id: 25,
    category: 'creative',
    shortTitle: { en: 'Beta Test', zh: '内测中' },
    question: {
      en: "Beta Test: An idea you're experimenting with right now.",
      zh: 'Beta测试：一个你正在实验中的想法。'
    },
    fallbackHint: {
      en: "It's okay if it's buggy. What data are you collecting from this test? Is it ready for public release or strictly closed beta?",
      zh: '有Bug没关系。你想从这次测试里收集什么数据？它已经可以公测了，还是必须严格保持封闭内测？'
    }
  },
  {
    id: 26,
    category: 'philosophy',
    shortTitle: { en: 'Core Lore', zh: '核心设定' },
    question: {
      en: 'Lore: A book or article that changed your worldview.',
      zh: '世界观设定：一本改变了你世界观的书或文章。'
    },
    fallbackHint: {
      en: 'Did this lore retcon (rewrite) your previous beliefs? How does this knowledge affect your daily gameplay decisions?',
      zh: '这段「设定」是不是直接重写（Retcon）了你之前的信念？这些知识如何影响你每天的玩法决策？'
    }
  },
  {
    id: 27,
    category: 'career',
    shortTitle: { en: 'UX of You', zh: '你的UX' },
    question: {
      en: 'User Experience: How do you want people to feel after talking to you?',
      zh: '用户体验：你希望别人和你聊完之后是什么感受？'
    },
    fallbackHint: {
      en: "Analyze the 'Player Feedback'. Do they leave feeling Empowered (buffed) or Drained (debuffed)? What is your UI (facial expression) signaling?",
      zh: '分析一下「玩家反馈」：他们离开时是被赋能了（吃到Buff），还是被消耗了（挨了Debuff）？你的UI（表情）在传递什么信号？'
    }
  },
  {
    id: 28,
    category: 'philosophy',
    shortTitle: { en: 'Graphics?', zh: '画质设置' },
    question: {
      en: 'Graphics Setting: Aesthetics or Functionality? (In life/work)',
      zh: '画质设置：美感还是功能性？（在生活/工作中）'
    },
    fallbackHint: {
      en: "Are you running on 'Ultra Settings' (perfectionism) and dropping frames, or 'Low Settings' (pragmatism) to keep the frame rate (productivity) high?",
      zh: '你是开着「极致画质」（完美主义）疯狂掉帧，还是用「流畅画质」（实用主义）保住帧率（生产力）？'
    }
  },
  {
    id: 29,
    category: 'personal',
    shortTitle: { en: 'The Glitch', zh: '特性Bug' },
    question: {
      en: 'Glitch: A personal quirk that is actually a feature, not a bug.',
      zh: 'Glitch：一个其实是特性（Feature）而不是Bug的个人怪癖。'
    },
    fallbackHint: {
      en: "Emergent Gameplay! How have you used this unique trait to solve puzzles that standard players couldn't figure out?",
      zh: '这是涌现式玩法！你是怎么用这个独特特性，解开那些「标准玩家」解不开的谜题的？'
    }
  },
  {
    id: 30,
    category: 'career',
    shortTitle: { en: 'Endgame', zh: '终局内容' },
    question: {
      en: "Endgame Content: What does 'Success' look like in 10 years?",
      zh: '终局内容：10年后的「成功」在你眼里长什么样？'
    },
    fallbackHint: {
      en: 'Visualize the Platinum Trophy. Is the endgame about having the most Gold (wealth) or the biggest Guild (influence)?',
      zh: '想象那座白金奖杯：你的终局目标是攒最多的金币（财富），还是建最大的公会（影响力）？'
    }
  },
  {
    id: 31,
    category: 'creative',
    shortTitle: { en: 'Cheat Code', zh: '作弊码' },
    question: {
      en: "Superpower: If you could add one 'cheat code' to real life, what is it?",
      zh: '超能力：如果能给现实生活加一条「作弊码」，你会加什么？'
    },
    fallbackHint: {
      en: 'Would using this cheat break the game balance? Or would it just remove the tedious grinding parts of your daily loop?',
      zh: '用了这条作弊码会破坏游戏平衡吗？还是它只是帮你跳过日常循环里最无聊的刷子环节？'
    }
  },
  {
    id: 32,
    category: 'philosophy',
    shortTitle: { en: 'Save Scum', zh: 'SL大法' },
    question: {
      en: 'Save Scumming: If you could redo one moment, would you?',
      zh: 'SL大法：如果能重来一个瞬间，你会读档吗？'
    },
    fallbackHint: {
      en: "Or do you play on 'Ironman Mode' (permadeath/no reloads)? How has living with that consequence shaped your current build?",
      zh: '还是说你玩的是「铁人模式」（永久死亡，禁止读档）？带着那个后果活到现在，它如何塑造了你当前的Build？'
    }
  },
  {
    id: 33,
    category: 'creative',
    shortTitle: { en: 'Art Style', zh: '美术风格' },
    question: {
      en: 'Art Direction: If your life were a game, what art style would it be?',
      zh: '美术方向：如果你的人生是一款游戏，它会是什么美术风格？'
    },
    fallbackHint: {
      en: 'Pixel art (nostalgic), cel-shaded (playful), or photorealistic (serious)? Does the style match the genre, or is the contrast the whole point?',
      zh: '像素风（怀旧）、卡通渲染（俏皮），还是写实渲染（严肃）？这个风格和你人生的「游戏类型」匹配吗，还是说反差本身才是亮点？'
    }
  },
  {
    id: 34,
    category: 'creative',
    shortTitle: { en: 'Juicy SFX', zh: '爽点音效' },
    question: {
      en: 'Game Feel: A tiny sound or interaction that gives you instant dopamine.',
      zh: '打击感：一个能让你瞬间分泌多巴胺的小音效或小交互。'
    },
    fallbackHint: {
      en: "Designers call this 'Juice'. What makes it so satisfying — the timing, the feedback, or the anticipation? Could you add more Juice to your daily routine?",
      zh: '设计师管这叫「Juice」。它爽在哪里——时机、反馈，还是期待感？你能给自己的日常生活也加点Juice吗？'
    }
  },
  {
    id: 35,
    category: 'career',
    shortTitle: { en: 'Meta Doubt', zh: '质疑版本' },
    question: {
      en: "Meta Check: An industry trend everyone follows that you're skeptical of.",
      zh: '版本答案：一个人人都在追、但你持怀疑态度的行业趋势。'
    },
    fallbackHint: {
      en: "Every meta eventually gets patched. Are you seeing a weakness others ignore, or are you just refusing to re-spec? What would change your mind?",
      zh: '任何版本答案终会被削弱。你是看到了别人忽视的弱点，还是单纯不想洗点重练？什么证据会让你改变想法？'
    }
  },
  {
    id: 36,
    category: 'personal',
    shortTitle: { en: 'Daily Quest', zh: '每日任务' },
    question: {
      en: 'Daily Quest: A small ritual that keeps you sane.',
      zh: '每日任务：一个让你保持清醒的小仪式。'
    },
    fallbackHint: {
      en: 'Good dailies give small rewards but build long-term retention. What does this ritual actually reward you with — energy, clarity, or just streak-keeping?',
      zh: '好的每日任务奖励虽小，却能建立长期留存。这个仪式真正奖励你的是什么——能量、清醒，还是仅仅为了不断签？'
    }
  },
  {
    id: 37,
    category: 'philosophy',
    shortTitle: { en: 'Difficulty', zh: '难度模式' },
    question: {
      en: 'Difficulty Select: What difficulty mode is your life on right now?',
      zh: '难度选择：你的人生现在开的是什么难度？'
    },
    fallbackHint: {
      en: "Story Mode, Normal, or Nightmare? More importantly: did you choose this difficulty, or was it assigned? Is there an accessibility option you're not using?",
      zh: '剧情模式、普通，还是噩梦难度？更重要的是：这个难度是你自己选的，还是系统分配的？有没有什么「辅助功能选项」你一直没打开？'
    }
  },
  {
    id: 38,
    category: 'creative',
    shortTitle: { en: 'Level 1-1', zh: '第一关' },
    question: {
      en: "Onboarding Design: A game's first level (or product's first minute) you find masterful.",
      zh: '引导设计：一个你认为堪称大师级的游戏第一关（或产品的第一分钟）。'
    },
    fallbackHint: {
      en: 'Super Mario 1-1 teaches everything without a single word. What does your favorite opening teach silently? How would you design the Level 1-1 of knowing you?',
      zh: '《超级马力欧》1-1一个字都没写却教会了一切。你最爱的开场默默教会了玩家什么？如果给「认识你」这件事设计一个1-1关卡，你会怎么设计？'
    }
  },
  {
    id: 39,
    category: 'career',
    shortTitle: { en: 'Raid Role', zh: '团本定位' },
    question: {
      en: 'Raid Night: When the team hits a crisis, what role do you naturally take?',
      zh: '开荒之夜：团队陷入危机时，你会自然而然扮演什么角色？'
    },
    fallbackHint: {
      en: 'The shot-caller, the calm healer, the improviser, or the one who reads the wipe logs? Is this role chosen, or is it your default class? Do you ever want to re-roll?',
      zh: '指挥、冷静的奶妈、即兴发挥的救场王，还是灭团后看战斗日志复盘的人？这个定位是你选的，还是默认职业？你想过转职吗？'
    }
  },
  {
    id: 40,
    category: 'personal',
    shortTitle: { en: 'Rare Drop', zh: '稀有掉落' },
    question: {
      en: 'Random Encounter: A chance meeting that changed your path.',
      zh: '随机遭遇：一次改变了你人生路线的偶然相遇。'
    },
    fallbackHint: {
      en: 'Low drop-rate events feel like fate, but you still had to be farming in the right zone. What zone were you in, and what made you talk to that NPC?',
      zh: '低爆率事件总让人觉得是命运，但前提是你恰好在对的地图里刷怪。你当时在哪张地图？又是什么让你主动跟那位NPC搭了话？'
    }
  },
  {
    id: 41,
    category: 'philosophy',
    shortTitle: { en: 'No Pay2Win', zh: '拒绝氪金' },
    question: {
      en: 'Pay-to-Win: A shortcut you refuse to take on principle.',
      zh: 'Pay-to-Win：一条你出于原则拒绝走的捷径。'
    },
    fallbackHint: {
      en: 'Is the refusal about fairness, about the journey being the point, or about what the shortcut would cost your reputation stat? Would future-you agree?',
      zh: '你的拒绝是出于公平、出于「过程本身才是意义」，还是因为这条捷径会扣你的声望值？十年后的你会同意现在的选择吗？'
    }
  },
  {
    id: 42,
    category: 'creative',
    shortTitle: { en: 'UI Crush', zh: '心动UI' },
    question: {
      en: 'Interface Love: A piece of UI/UX (in any product) you find genuinely beautiful.',
      zh: '界面之恋：一个（任何产品里）让你觉得真正美的UI/UX设计。'
    },
    fallbackHint: {
      en: "Beauty in UI is usually invisible logic. Is it beautiful because of what it shows, or what it hides? What would you steal from it for your own work?",
      zh: 'UI的美通常是看不见的逻辑。它的美来自它展示了什么，还是隐藏了什么？你会从中「偷」哪一招用到自己的作品里？'
    }
  },
  {
    id: 43,
    category: 'career',
    shortTitle: { en: 'Nerf & Buff', zh: '增删改' },
    question: {
      en: 'Balance Patch: Nerf one thing about your job and buff another.',
      zh: '平衡性补丁：给你的工作削弱（Nerf）一项，强化（Buff）一项。'
    },
    fallbackHint: {
      en: 'Every nerf has side effects. If your nerf shipped tomorrow, who else would be affected? And is your buff request actually a disguised complaint?',
      zh: '每次削弱都有副作用：如果你的Nerf明天就上线，还有谁会被波及？而你想要的那个Buff，会不会其实是一句伪装过的抱怨？'
    }
  },
  {
    id: 44,
    category: 'personal',
    shortTitle: { en: 'AFK Mode', zh: '挂机模式' },
    question: {
      en: 'AFK Mode: What does a perfect day completely off the grid look like?',
      zh: '挂机模式：一个彻底离线的完美假日，长什么样？'
    },
    fallbackHint: {
      en: "True AFK means no background processes. Can you actually log out, or does your brain keep running the client? What's your longest clean logout?",
      zh: '真正的挂机意味着没有后台进程。你能真的下线吗，还是大脑仍在后台挂着客户端？你最长的一次「彻底登出」是多久？'
    }
  },
  {
    id: 45,
    category: 'philosophy',
    shortTitle: { en: 'Rails/Sandbox', zh: '线性/沙盒' },
    question: {
      en: 'Structure Check: Linear story or open-world sandbox — which do you prefer in life?',
      zh: '结构检定：线性叙事还是开放沙盒——你的人生更喜欢哪种？'
    },
    fallbackHint: {
      en: "Linear games guarantee pacing; sandboxes guarantee freedom but risk aimlessness. Which failure scares you more: a railroaded life, or an empty map?",
      zh: '线性游戏保证节奏，沙盒保证自由但可能漫无目的。哪种失败更让你害怕：被剧本锁死的人生，还是一张空荡荡的地图？'
    }
  },
  {
    id: 46,
    category: 'creative',
    shortTitle: { en: 'Mood Board', zh: '灵感板' },
    question: {
      en: "Mood Board: What's on your current inspiration board (colors, images, vibes)?",
      zh: '灵感板：你现在的灵感收集板上都有什么（颜色、图片、氛围）？'
    },
    fallbackHint: {
      en: 'A mood board is a diff between who you are and who you\'re becoming. What theme keeps repeating that you didn\'t consciously choose?',
      zh: '灵感板其实是「现在的你」和「正在成为的你」之间的差异对比。有没有哪个主题在反复出现，而你并不是有意选的？'
    }
  },
  {
    id: 47,
    category: 'career',
    shortTitle: { en: 'Dream LFG', zh: '理想招募' },
    question: {
      en: 'LFG Post: Write the recruitment post for your dream role (real or invented).',
      zh: '组队招募帖：为你的梦想职位写一条招募帖（真实或虚构的都行）。'
    },
    fallbackHint: {
      en: "Ignore existing job titles — describe the daily gameplay loop instead. Which line of your post doesn't exist in any real posting yet? That's your niche.",
      zh: '别管现有的职位名称——直接描述这份工作的每日玩法循环。你这条帖子里哪一句在现实招聘里还不存在？那就是你的生态位。'
    }
  },
  {
    id: 48,
    category: 'personal',
    shortTitle: { en: 'Party Chat', zh: '队伍频道' },
    question: {
      en: 'Party Chat: Who do you message first when good news drops?',
      zh: '队伍频道：好消息降临时，你第一个发消息给谁？'
    },
    fallbackHint: {
      en: 'Your first ping reveals your true party composition. Is this person a permanent party member or a recent invite? Do they ping you first too?',
      zh: '你的第一条消息暴露了你真正的固定队配置。这个人是常驻队友，还是最近才入队的？TA有好消息时也会第一个@你吗？'
    }
  },
  {
    id: 49,
    category: 'philosophy',
    shortTitle: { en: 'New Game+', zh: '二周目' },
    question: {
      en: 'New Game+: Restart your career keeping all knowledge. What do you do differently?',
      zh: '二周目：保留全部记忆重开职业生涯，你会有什么不同的玩法？'
    },
    fallbackHint: {
      en: "In NG+ the enemies stay the same but you've changed. Would you rush the main quest faster, or finally do all the side content you skipped?",
      zh: '二周目里敌人没变，变的是你。你会更快地推主线，还是终于去做那些一周目跳过的支线？'
    }
  },
  {
    id: 50,
    category: 'creative',
    shortTitle: { en: 'Signature', zh: '招牌表情' },
    question: {
      en: 'Emote: A signature phrase, gesture, or emoji you definitely overuse.',
      zh: '表情动作：一个你绝对用得太多的口头禅、手势或Emoji。'
    },
    fallbackHint: {
      en: "Signature emotes are personal branding. What does yours signal — approachability, irony, or enthusiasm? Would friends recognize you by it in a blind test?",
      zh: '招牌表情就是个人品牌。你的招牌在传递什么信号——亲和力、反讽，还是热情？盲测的话，朋友能光凭它认出你吗？'
    }
  },
  {
    id: 51,
    category: 'career',
    shortTitle: { en: 'Crunch Time', zh: '死线冲刺' },
    question: {
      en: 'Final Boss Timer: How do you actually behave under deadline pressure?',
      zh: '最终Boss倒计时：死线压顶时，你的真实状态是什么样的？'
    },
    fallbackHint: {
      en: 'Some players kite the boss (scope-cut early), some burn all cooldowns at 10% HP. Which are you, and what does it cost your party (team) afterwards?',
      zh: '有的玩家会提前风筝Boss（尽早砍需求），有的会在血线10%时才交完所有技能。你是哪一种？事后你的队伍（团队）为此付出了什么代价？'
    }
  },
  {
    id: 52,
    category: 'personal',
    shortTitle: { en: 'Home Base', zh: '玩家小屋' },
    question: {
      en: 'Base Building: Describe your dream home base (real or fantasy).',
      zh: '基地建设：描述你梦想中的家园基地（现实或幻想的都行）。'
    },
    fallbackHint: {
      en: 'Player housing reveals values: is yours optimized for crafting (productivity), display (identity), or rest (recovery)? What is the first room you would build?',
      zh: '玩家小屋暴露价值观：你的基地是为制作台（生产力）、展示柜（身份认同），还是休息区（恢复）优化的？你会最先造哪个房间？'
    }
  },
  {
    id: 53,
    category: 'philosophy',
    shortTitle: { en: 'The Grind', zh: '刷子哲学' },
    question: {
      en: 'The Grind: When is grinding worth it, and when is it a trap?',
      zh: '刷子哲学：什么时候「肝」是值得的，什么时候是陷阱？'
    },
    fallbackHint: {
      en: "Grinding is worth it when the stat gain compounds; it's a trap when you grind to avoid the boss fight. What boss are you avoiding right now?",
      zh: '当属性收益能复利增长时，肝是值得的；当你用刷怪来逃避Boss战时，肝就是陷阱。你现在正在逃避哪场Boss战？'
    }
  },
  {
    id: 54,
    category: 'creative',
    shortTitle: { en: 'Photo Mode', zh: '拍照模式' },
    question: {
      en: 'Photo Mode: A recent moment you wish you could screenshot forever.',
      zh: '拍照模式：最近一个你希望能永久截图保存的瞬间。'
    },
    fallbackHint: {
      en: "What made it screenshot-worthy — the lighting, the company, or knowing it wouldn't last? Great photo modes let you hide the UI. What UI (worry) would you hide?",
      zh: '是什么让它值得截图——光线、身边的人，还是「它转瞬即逝」这个事实本身？好的拍照模式可以隐藏UI，你想隐藏的那个「UI」（烦恼）是什么？'
    }
  },
  {
    id: 55,
    category: 'career',
    shortTitle: { en: 'Cross-Class', zh: '跨界技能' },
    question: {
      en: 'Cross-Class Skill: An ability from outside your field that you imported into your work.',
      zh: '跨职业技能：一个来自你专业领域之外、却被你带进工作里的能力。'
    },
    fallbackHint: {
      en: "Multi-classing costs levels but unlocks unique builds. What can you do that no 'pure class' colleague can? Where did you originally level this skill?",
      zh: '兼职会损失等级，却能解锁独特Build。有什么事是你能做、而「纯职业」同事做不到的？这个技能你最初是在哪里练出来的？'
    }
  },
  {
    id: 56,
    category: 'personal',
    shortTitle: { en: 'Companion', zh: '同伴角色' },
    question: {
      en: 'Companion: A pet, plant, or object that functions as your companion character.',
      zh: '同伴：一只宠物、一株植物或一件物品——你人生中的「同伴角色」。'
    },
    fallbackHint: {
      en: "Companions in games provide passive auras. What aura does yours give you — calm, purpose, or comic relief? What do you provide in return?",
      zh: '游戏里的同伴会提供被动光环。你的同伴给你的光环是什么——平静、目标感，还是搞笑担当？作为交换，你又给了TA什么？'
    }
  }
];
