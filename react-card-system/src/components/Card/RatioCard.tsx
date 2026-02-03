import React, { useState, useCallback } from 'react';
import {
  CardData,
  ImageRatio,
  getCardTypeConfig,
} from '../../types';
import { ControlButton } from '../Button/Button';
import './RatioCard.css';

// ============================================
// Placeholder Image Component
// ============================================

interface PlaceholderImageProps {
  gradient: string;
  icon?: string;
  size?: 'normal' | 'large';
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  gradient,
  icon,
  size = 'normal',
}) => {
  return (
    <div
      className="placeholder-img"
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: size === 'large' ? 80 : 48,
        background: gradient,
        color: 'rgba(255, 255, 255, 0.5)',
      }}
    >
      {icon || '?'}
    </div>
  );
};

// ============================================
// Ratio Card Component
// 卡片容器始终是 9:16 (200x300px)
// 根据 imageRatio 决定图片在卡片内的排版
// ============================================

export interface RatioCardProps {
  data: CardData;
  backTitle?: string;
  backDescription?: string;
  onDetail?: (data: CardData) => void;
  onFlip?: (isFlipped: boolean) => void;
}

export const RatioCard: React.FC<RatioCardProps> = ({
  data,
  backTitle,
  backDescription,
  onDetail,
  onFlip,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const typeConfig = getCardTypeConfig(data);

  // 图片比例决定排版方式
  const imageRatio: ImageRatio = data.imageRatio || '9:16';

  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => {
      const newState = !prev;
      onFlip?.(newState);
      return newState;
    });
  }, [onFlip]);

  const handleDetail = useCallback(() => {
    onDetail?.(data);
  }, [onDetail, data]);

  // 默认背面内容
  const defaultBackTitle = backTitle || '背面展示';
  const defaultBackDesc = backDescription || '点击查看详情';

  return (
    <div
      className={`ratio-card-wrapper layout-${imageRatio.replace(':', '-')} ${
        isFlipped ? 'flipped' : ''
      }`}
    >
      <div className="ratio-card-inner">
        {/* 正面 */}
        <div className="ratio-card-front">
          {/*
            图片区域：
            - 竖图(9:16): 图片填满整个正面，内容覆盖在图片上
            - 横图(16:9): 图片在顶部(112px)，内容在下方
            - 方图(1:1): 图片在顶部(140px正方形)，内容在下方
          */}
          <div className={`front-image-area ratio-${imageRatio.replace(':', '-')}`}>
            {data.imageUrl ? (
              <img
                src={data.imageUrl}
                alt={data.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <PlaceholderImage
                gradient={typeConfig.gradient}
                icon={data.icon || typeConfig.icon}
              />
            )}

            {/* 类型标签 */}
            <span
              className="type-badge"
              style={{ background: typeConfig.gradient }}
            >
              {typeConfig.label}
            </span>

            {/* 控制按钮 */}
            <div className="card-controls">
              <ControlButton icon="↻" title="翻转" onClick={handleFlip} />
              <ControlButton icon="⋮" title="详情" onClick={handleDetail} />
            </div>

            {/*
              竖图(9:16): 内容覆盖在图片底部
              横图/方图: 不显示覆盖层，内容显示在下方
            */}
            {imageRatio === '9:16' && (
              <div className="content-overlay">
                <h3 className="card-name">{data.name}</h3>
                <p className="card-desc">{data.description}</p>
                {data.tags.length > 0 && (
                  <div className="card-tags">
                    {data.tags.map((tag, index) => (
                      <span key={index} className="card-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/*
            横图/方图的内容区域（在图片下方）
          */}
          {imageRatio !== '9:16' && (
            <div className={`content-area-below ratio-${imageRatio.replace(':', '-')}`}>
              <span
                className="content-type-badge"
                style={{
                  background: `${typeConfig.color}20`,
                  color: typeConfig.color,
                }}
              >
                {typeConfig.label}
              </span>
              <h3 className="content-name">{data.name}</h3>
              <p className="content-desc">{data.description}</p>
              {data.meta && Object.keys(data.meta).length > 0 && (
                <div className="content-meta">
                  {Object.entries(data.meta).map(([key, value], index) => (
                    <React.Fragment key={key}>
                      {index > 0 && <span>·</span>}
                      <span>{value}</span>
                    </React.Fragment>
                  ))}
                </div>
              )}
              {data.tags.length > 0 && (
                <div className="content-tags">
                  {data.tags.map((tag, index) => (
                    <span key={index} className="content-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* 背面 - 始终是完整图片 */}
        <div className="ratio-card-back">
          <div className="back-image-area">
            {data.backImageUrl ? (
              <img
                src={data.backImageUrl}
                alt={`${data.name} - 背面`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <PlaceholderImage
                gradient={typeConfig.gradient}
                icon={data.icon || typeConfig.icon}
                size="large"
              />
            )}

            <div className="card-controls">
              <ControlButton icon="↺" title="翻转" onClick={handleFlip} />
              <ControlButton icon="⋮" title="详情" onClick={handleDetail} />
            </div>

            <div className="scene-context-overlay">
              <div className="scene-context-title">{defaultBackTitle}</div>
              <div className="scene-context-desc">{defaultBackDesc}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatioCard;
