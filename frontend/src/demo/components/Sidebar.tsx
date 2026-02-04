import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navigationConfig } from '../config/navigation';
import './Sidebar.css';

const CollapseIcon = ({ collapsed }: { collapsed: boolean }) => (
  <svg
    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    style={{ transform: collapsed ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

interface SidebarProps {
  currentLang: 'CN' | 'EN';
}

const Sidebar: React.FC<SidebarProps> = ({ currentLang }) => {
  const [collapsed, setCollapsed] = useState(false);

  // Update CSS variable when collapsed changes
  useEffect(() => {
    const width = collapsed ? '76px' : '260px';
    document.documentElement.style.setProperty('--sidebar-current-width', width);
    return () => {
      document.documentElement.style.removeProperty('--sidebar-current-width');
    };
  }, [collapsed]);

  const toggleCollapse = () => setCollapsed(!collapsed);

  return (
    <aside className={`demo-sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        {!collapsed && <span className="brand-logo">Scriptia</span>}
        <button className="collapse-toggle-icon" onClick={toggleCollapse} title={collapsed ? "展开" : "收起"}>
          <CollapseIcon collapsed={collapsed} />
        </button>
      </div>

      <nav className="sidebar-nav">
        {navigationConfig.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }: { isActive: boolean }) => `nav-item ${isActive ? 'active' : ''}`}
            title={collapsed ? item.label[currentLang] : ''}
          >
            <span className="icon">{item.icon}</span>
            {!collapsed && <span className="label">{item.label[currentLang]}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        {!collapsed && (
          <div className="version-info">
            <span>Card System v1.0</span>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
