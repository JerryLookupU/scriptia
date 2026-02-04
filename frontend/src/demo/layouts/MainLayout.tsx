import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import UserSetting from '../components/UserSetting';
import ChatInput from '../components/ChatInput';
import StagingArea from '../components/StagingArea';
import CardLibrary from '../components/CardLibrary';
import './MainLayout.css';

const MainLayout: React.FC = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [lang, setLang] = useState<'CN' | 'EN'>('CN');

  return (
    <div className="demo-layout-container">
      {/* 左侧边栏 */}
      <div className="demo-sidebar-wrapper">
        <Sidebar currentLang={lang} />
      </div>

      {/* 中间 Chat 区域 */}
      <div className="demo-chat-wrapper">
        <TopNavbar
          currentLang={lang}
          setLang={setLang}
          onOpenSettings={() => setShowSettings(true)}
        />

        {/* Chat 消息区域 - 可滚动 */}
        <main className="demo-chat-messages">
          <Outlet />
        </main>

        {/* 底部固定输入框 */}
        <div className="demo-chat-input-area">
          <ChatInput />
        </div>
      </div>

      {/* 右侧双区面板 */}
      <div className="demo-right-panel">
        <StagingArea />
        <CardLibrary />
      </div>

      <UserSetting
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        currentLang={lang}
        onLangChange={setLang}
      />
    </div>
  );
};

export default MainLayout;
