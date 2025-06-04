// Reactライブラリをインポート
import React from 'react';
// モード切り替えボタンのスタイル
import './ModeToggle.css';

/**
 * 電卓モード切り替えボタンコンポーネント
 * 基本電卓モードと関数電卓モードを切り替える
 * @param {string} mode - 現在の電卓モード（'basic' または 'scientific'）
 * @param {function} onToggle - モード切り替え時のコールバック関数
 */
const ModeToggle = ({ mode, onToggle }) => {
  return (
    <button className="mode-toggle" onClick={onToggle}>
      <span className="toggle-text">
        {/* 次に切り替わるモード名をアイコン付きで表示 */}
        {mode === 'basic' ? '🔬 関数電卓' : '🔢 基本電卓'}
      </span>
    </button>
  );
};

export default ModeToggle;