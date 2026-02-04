import React, { useState } from 'react';
import { useTheme, type Theme } from '../context/ThemeContext';
import './UserSetting.css';

interface UserSettingProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: 'CN' | 'EN';
  onLangChange: (lang: 'CN' | 'EN') => void;
}

type Tab = 'appearance' | 'general' | 'about';

const UserSetting: React.FC<UserSettingProps> = ({ isOpen, onClose, currentLang, onLangChange }) => {
  const { theme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<Tab>('appearance');

  if (!isOpen) return null;

  const themes: { id: Theme; label: string; color: string }[] = [
    { id: 'midnight', label: 'Midnight', color: '#0f172a' },
    { id: 'draft', label: 'Draft', color: '#f6f5f0' },
    { id: 'silver', label: 'Silver', color: '#eef1f6' },
    { id: 'solar', label: 'Solar', color: '#fff7ed' },
    { id: 'forest', label: 'Forest', color: '#f0fdf4' },
  ];

  return (
    <div className="user-setting-overlay" onClick={onClose}>
      <div className="user-setting-modal" onClick={e => e.stopPropagation()}>
        {/* Internal Sidebar */}
        <div className="setting-sidebar">
          <div className="setting-title">Settings</div>
          <nav className="setting-nav">
            <button
              className={`nav-btn ${activeTab === 'appearance' ? 'active' : ''}`}
              onClick={() => setActiveTab('appearance')}
            >
              Appearance
            </button>
            <button
              className={`nav-btn ${activeTab === 'general' ? 'active' : ''}`}
              onClick={() => setActiveTab('general')}
            >
              General
            </button>
            <button
              className={`nav-btn ${activeTab === 'about' ? 'active' : ''}`}
              onClick={() => setActiveTab('about')}
            >
              About
            </button>
          </nav>
        </div>

        {/* Right Content Area */}
        <div className="setting-main">
          <button className="close-btn" onClick={onClose}>×</button>

          <div className="setting-content">
            {activeTab === 'appearance' && (
              <div className="tab-panel">
                <h4>Theme / 主题</h4>
                <div className="theme-grid">
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      className={`theme-card ${theme === t.id ? 'active' : ''}`}
                      onClick={() => setTheme(t.id)}
                      title={t.label}
                    >
                      <div className="theme-preview" style={{ backgroundColor: t.color }}>
                        {theme === t.id && <span className="check-icon">✓</span>}
                      </div>
                      <span className="theme-label">{t.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'general' && (
              <div className="tab-panel">
                <h4>Language / 语言</h4>
                <div className="lang-options">
                  <button
                    className={currentLang === 'CN' ? 'active' : ''}
                    onClick={() => onLangChange('CN')}
                  >
                    中文 (Simplified)
                  </button>
                  <button
                    className={currentLang === 'EN' ? 'active' : ''}
                    onClick={() => onLangChange('EN')}
                  >
                    English (US)
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'about' && (
              <div className="tab-panel">
                <h4>About Scriptia Card System</h4>
                <p className="about-text">Version 1.0.0</p>
                <p className="about-text">React Component Library Demo</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSetting;
