import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

interface HeaderProps {
  themeMode: 'light' | 'dark';
  onToggleTheme: () => void;
}

const Header = ({ themeMode, onToggleTheme }: HeaderProps) => {
  return (
    <header className="header">
      <Navbar themeMode={themeMode} onToggleTheme={onToggleTheme} />
    </header>
  );
};

export default Header;
