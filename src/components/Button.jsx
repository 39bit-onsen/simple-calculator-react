// Reactライブラリをインポート
import React from 'react';
// ボタンのスタイル
import './Button.css';

/**
 * 電卓の個別ボタンコンポーネント
 * 再利用可能なボタンUI要素
 * @param {string} label - ボタンに表示するテキスト
 * @param {function} onClick - ボタンクリック時のコールバック関数
 * @param {string} className - 追加のCSSクラス名（デフォルト: 空文字）
 */
const Button = ({ label, onClick, className = '' }) => {
  return (
    <button 
      className={`calc-button ${className}`}  // 基本クラス + 追加クラス
      onClick={onClick}                       // クリックイベントハンドラー
    >
      {label}  {/* ボタンのラベル表示 */}
    </button>
  );
};

export default Button;