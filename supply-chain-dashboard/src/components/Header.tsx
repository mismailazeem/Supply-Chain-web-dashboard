import React from 'react';
import { BarChart3, Bell, Settings, User } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <div className="logo">
            <BarChart3 size={32} />
            <span className="logo-text">Supply Chain Dashboard</span>
          </div>
        </div>
        <div className="header-right">
          <button className="icon-button" title="Notifications">
            <Bell size={20} />
          </button>
          <button className="icon-button" title="Settings">
            <Settings size={20} />
          </button>
          <button className="icon-button" title="User Profile">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
