// Reactライブラリをインポート
import React from 'react';
// テーマ切り替えボタンのスタイル
import './ThemeToggle.css';

/**
 * テーマ切り替えボタンコンポーネント
 * ダーク、ライト、カシオテーマを切り替える
 * @param {string} theme - 現在のテーマ（'dark', 'light', 'casio'）
 * @param {function} onToggle - テーマ切り替え時のコールバック関数
 */
const ThemeToggle = ({ theme, onToggle }) => {
  // テーマに応じたアイコンと次のテーマ名を取得
  const getThemeDisplay = () => {
    switch (theme) {
      case 'dark':
        return { icon: '☀️', next: 'ライト' };
      case 'light':
        return { icon: '🧮', next: 'カシオ' };
      case 'casio':
        return { icon: '🌙', next: 'ダーク' };
      default:
        return { icon: '☀️', next: 'ライト' };
    }
  };

  const display = getThemeDisplay();

  return (
    <button className="theme-toggle" onClick={onToggle}>
      {/* 現在のテーマに応じてアイコンを表示 */}
      {display.icon}
      <span className="toggle-text">
        {/* 次に切り替わるテーマ名を表示 */}
        {display.next}
      </span>
    </button>
  );
};

export default ThemeToggle;