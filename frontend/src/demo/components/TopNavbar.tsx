import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './TopNavbar.css';

interface TopNavbarProps {
  currentLang: 'CN' | 'EN';
  setLang: (lang: 'CN' | 'EN') => void;
  onOpenSettings: () => void;
}

const routeNameMap: Record<string, string> = {
  'project': 'Project / 项目',
  'cards': 'Cards / 组件库',
  'inspirations': 'Inspirations / 灵感',
  'scripts': 'Scripts / 剧本',
  'series': 'Series / 剧集',
  'template-library': 'Template Library / 模版库',
};

const TopNavbar: React.FC<TopNavbarProps> = ({ currentLang, setLang, onOpenSettings }) => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  // Breadcrumb Logic
  const pathSnippets = location.pathname.split('/').filter((i: string) => i);
  const breadcrumbItems = pathSnippets.map((_: string, index: number) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    const snippet = pathSnippets[index];
    const name = routeNameMap[snippet] || snippet.charAt(0).toUpperCase() + snippet.slice(1);
    return { name, url };
  });

  const toggleTheme = () => {
    const themes: any[] = ['midnight', 'draft', 'silver', 'solar', 'forest'];
    const currentIdx = themes.indexOf(theme);
    const nextTheme = themes[(currentIdx + 1) % themes.length];
    setTheme(nextTheme);
  };

  return (
    <header className="demo-top-navbar">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <Link to="/" className="breadcrumb-link">Scriptia</Link>
        {breadcrumbItems.map((item: { name: string; url: string }) => (
          <span key={item.url} className="breadcrumb-item">
            <span className="separator">/</span>
            <Link to={item.url} className="breadcrumb-link">{item.name}</Link>
          </span>
        ))}
      </div>

      {/* Right Section */}
      <div className="right-section">
        {/* Theme Toggle */}
        <button className="icon-btn" onClick={toggleTheme} title={`Theme: ${theme}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        </button>

        {/* Language Toggle */}
        <button className="lang-btn" onClick={() => setLang(currentLang === 'CN' ? 'EN' : 'CN')}>
          {currentLang}
        </button>

        {/* Settings */}
        <button className="icon-btn" onClick={onOpenSettings} title="Settings">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default TopNavbar;
