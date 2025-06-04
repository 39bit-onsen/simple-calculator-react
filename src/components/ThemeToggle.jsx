// Reactライブラリをインポート
import React from 'react';
// テーマ切り替えボタンのスタイル
import './ThemeToggle.css';

/**
 * テーマ切り替えボタンコンポーネント
 * ダークモードとライトモードを切り替える
 * @param {string} theme - 現在のテーマ（'dark' または 'light'）
 * @param {function} onToggle - テーマ切り替え時のコールバック関数
 */
const ThemeToggle = ({ theme, onToggle }) => {
  return (
    <button className="theme-toggle" onClick={onToggle}>
      {/* 現在のテーマに応じてアイコンを表示 */}
      {theme === 'dark' ? '☀️' : '🌙'}
      <span className="toggle-text">
        {/* 次に切り替わるテーマ名を表示 */}
        {theme === 'dark' ? 'Light' : 'Dark'}
      </span>
    </button>
  );
};

export default ThemeToggle;