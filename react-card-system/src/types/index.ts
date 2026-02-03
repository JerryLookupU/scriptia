// ============================================
// Card System - Ratio-based Design
// ============================================

export type ImageRatio = '9:16' | '16:9' | '1:1';

export interface CardTypeConfig {
  id: string;
  label: string;
  color: string;
  gradient: string;
  icon: string;
  defaultRatio?: ImageRatio;
}

export interface CardData {
  id: string;
  typeId: string;
  name: string;
  description: string;
  tags: string[];
  icon?: string;
  imageRatio: ImageRatio;
  imageUrl?: string;
  backImageUrl?: string;
  meta?: Record<string, string>;
}

export interface RatioConfig {
  ratio: ImageRatio;
  width: number;
  height: number;
  frontImageHeight?: number;
}

export const RATIO_CONFIGS: Record<ImageRatio, RatioConfig> = {
  '9:16': {
    ratio: '9:16',
    width: 200,
    height: 300,
  },
  '16:9': {
    ratio: '16:9',
    width: 200,
    height: 300,
    frontImageHeight: 112,
  },
  '1:1': {
    ratio: '1:1',
    width: 200,
    height: 200,
  },
};

// 内置类型
export const BUILTIN_TYPES: Record<string, CardTypeConfig> = {
  ip: {
    id: 'ip',
    label: 'IP角色',
    color: '#e8590c',
    gradient: 'linear-gradient(135deg, #e8590c, #c2410c)',
    icon: '🎭',
    defaultRatio: '9:16',
  },
  scene: {
    id: 'scene',
    label: '场景',
    color: '#2f9e44',
    gradient: 'linear-gradient(135deg, #2f9e44, #2b8a3e)',
    icon: '🏙️',
    defaultRatio: '9:16',
  },
  plot: {
    id: 'plot',
    label: '剧情',
    color: '#1971c2',
    gradient: 'linear-gradient(135deg, #1971c2, #1864ab)',
    icon: '🎬',
    defaultRatio: '16:9',
  },
  meme: {
    id: 'meme',
    label: '梗指南',
    color: '#be4bdb',
    gradient: 'linear-gradient(135deg, #be4bdb, #9c36b5)',
    icon: '🚀',
    defaultRatio: '16:9',
  },
  product: {
    id: 'product',
    label: '商品',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
    icon: '📦',
    defaultRatio: '1:1',
  },
  user: {
    id: 'user',
    label: '用户',
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, #6366f1, #4f46e5)',
    icon: '👤',
    defaultRatio: '1:1',
  },
};

// 类型注册表
class TypeRegistry {
  private types: Map<string, CardTypeConfig> = new Map();

  constructor() {
    Object.values(BUILTIN_TYPES).forEach(type => {
      this.types.set(type.id, type);
    });
  }

  register(type: CardTypeConfig): void {
    this.types.set(type.id, type);
  }

  get(typeId: string): CardTypeConfig | undefined {
    return this.types.get(typeId);
  }

  getAll(): CardTypeConfig[] {
    return Array.from(this.types.values());
  }

  has(typeId: string): boolean {
    return this.types.has(typeId);
  }
}

export const typeRegistry = new TypeRegistry();

// 辅助函数
export function getCardTypeConfig(card: CardData): CardTypeConfig {
  return typeRegistry.get(card.typeId) || BUILTIN_TYPES.ip;
}
