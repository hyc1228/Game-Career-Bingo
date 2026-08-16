import { Language } from '../types';

// All UI copy lives here. Add a new language by extending the
// Language type in types.ts and filling in a new column below.
const STRINGS = {
  appTitle: {
    en: 'DesignBingo',
    zh: 'DesignBingo'
  },
  landingTitle: {
    en: 'Co-op Quest',
    zh: '双人共斗任务'
  },
  landingSubtitle: {
    en: 'Discover your superpowers.',
    zh: '发现你们的隐藏超能力。'
  },
  chooseHero: {
    en: 'Choose Your Hero',
    zh: '选择你的角色'
  },
  enterRoomCode: {
    en: 'Enter Room Code',
    zh: '输入房间代码'
  },
  roomCodePlaceholder: {
    en: 'HELLO',
    zh: 'HELLO'
  },
  startGame: {
    en: 'START GAME',
    zh: '开始游戏'
  },
  tapToVote: {
    en: 'Tap to Vote/Open',
    zh: '轻点：投票/查看'
  },
  holdToToggle: {
    en: 'Hold 1s to Toggle',
    zh: '长按1秒：标记'
  },
  question: {
    en: 'Question',
    zh: '问题'
  },
  secretIntel: {
    en: 'SECRET INTEL',
    zh: '导师情报'
  },
  tapOutsideToClose: {
    en: 'Tap anywhere outside to close',
    zh: '点击空白处关闭'
  },
  questSuffix: {
    en: 'Quest',
    zh: '任务'
  },
  levelCleared: {
    en: 'Level Cleared',
    zh: '关卡通过'
  },
  bingo: {
    en: 'BINGO!',
    zh: 'BINGO!'
  },
  bigStep: {
    en: 'A Big Step Forward!',
    zh: '向前迈进一大步！'
  },
  winMessage: {
    en: "You've successfully completed this co-op quest. Each shared insight is a permanent buff to your relationship!",
    zh: '你们成功完成了这次共斗任务。每一次分享的洞见，都是给你们关系的一个永久增益（Buff）！'
  },
  playtime: {
    en: 'Playtime',
    zh: '游戏时长'
  },
  roomId: {
    en: 'Room ID',
    zh: '房间号'
  },
  anotherRound: {
    en: 'Another Round?',
    zh: '再来一局？'
  },
  milestones: {
    en: 'Milestones Reached',
    zh: '已达成的里程碑'
  },
  topicsUnit: {
    en: 'TOPICS',
    zh: '个话题'
  },
  minutesShort: {
    en: 'm',
    zh: '分'
  },
  secondsShort: {
    en: 's',
    zh: '秒'
  },
  categoryCareer: {
    en: 'Career',
    zh: '职业'
  },
  categoryPersonal: {
    en: 'Personal',
    zh: '个人'
  },
  categoryPhilosophy: {
    en: 'Philosophy',
    zh: '哲思'
  },
  categoryCreative: {
    en: 'Creative',
    zh: '创意'
  },
  switchLanguage: {
    en: '中文',
    zh: 'EN'
  }
} satisfies Record<string, Record<Language, string>>;

export type StringKey = keyof typeof STRINGS;

export const LOADING_MESSAGES: Record<Language, string[]> = {
  en: [
    'Loading Hidden Level...',
    'Decrypting Lore...',
    'Spawning Rare Loot...',
    'Compiling Shaders...',
    'Unlocking Achievement...',
    'Rendering Wisdom...',
    'Buffing Intelligence...'
  ],
  zh: [
    '正在加载隐藏关卡…',
    '正在解密世界观设定…',
    '正在生成稀有掉落…',
    '正在编译着色器…',
    '正在解锁成就…',
    '正在渲染智慧…',
    '正在为智力上Buff…'
  ]
};

export const getString = (key: StringKey, lang: Language): string => STRINGS[key][lang];
