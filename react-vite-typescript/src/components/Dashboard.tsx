import { useState } from 'react';
import '../styles/Dashboard.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import { clearUserData } from '../auth';

interface DashboardProps {
  currentUser: string;
  onLogout: () => void;
}

const Dashboard = ({ currentUser, onLogout }: DashboardProps) => {
  const [activeMenu, setActiveMenu] = useState('home');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleLogout = () => {
    clearUserData();
    onLogout();
  };

  const renderContent = () => {
    switch (activeMenu) {
      case 'home':
        return <Home />;
      case 'blog':
        return <Blog />;
      case 'about':
        return <About />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="dashboard">
      <div className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <h2>{isSidebarCollapsed ? '管理' : '管理系统'}</h2>
          <button className="toggle-sidebar" onClick={toggleSidebar}>
            <i className={`fas fa-chevron-${isSidebarCollapsed ? 'right' : 'left'}`}></i>
          </button>
        </div>
        <nav className="sidebar-menu">
          <button
            className={`menu-item ${activeMenu === 'home' ? 'active' : ''}`}
            onClick={() => setActiveMenu('home')}
            title={isSidebarCollapsed ? '首页' : ''}
          >
            <i className="fas fa-home"></i>
            {!isSidebarCollapsed && <span>首页</span>}
          </button>
          <button
            className={`menu-item ${activeMenu === 'blog' ? 'active' : ''}`}
            onClick={() => setActiveMenu('blog')}
            title={isSidebarCollapsed ? '作者博客' : ''}
          >
            <i className="fas fa-blog"></i>
            {!isSidebarCollapsed && <span>作者博客</span>}
          </button>
          <button
            className={`menu-item ${activeMenu === 'about' ? 'active' : ''}`}
            onClick={() => setActiveMenu('about')}
            title={isSidebarCollapsed ? '关于作者' : ''}
          >
            <i className="fas fa-user"></i>
            {!isSidebarCollapsed && <span>关于作者</span>}
          </button>
        </nav>
      </div>
      <div className={`content ${isSidebarCollapsed ? 'expanded' : ''}`}>
        <header className="content-header">
          <div className="header-title">
            {activeMenu === 'home' && '首页'}
            {activeMenu === 'blog' && '作者博客'}
            {activeMenu === 'about' && '关于作者'}
          </div>
          <div className="user-info">
            <span>Welcome, {currentUser}</span>
            <button className="logout-button" onClick={handleLogout}>登出</button>
          </div>
        </header>
        <main className="content-main">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;