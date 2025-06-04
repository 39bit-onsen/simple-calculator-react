// Reactライブラリをインポート
import React from 'react';
// ディスプレイのスタイル
import './Display.css';

/**
 * 電卓の表示画面コンポーネント
 * 計算結果と入力値を表示する
 * @param {string} value - 表示する値（数値または計算結果）
 */
const Display = ({ value }) => {
  return (
    <div className="display">
      <input 
        type="text"                  // テキスト入力フィールド
        value={value}                // 表示する値
        readOnly                     // 読み取り専用（直接編集不可）
        className="display-input"    // スタイル用のCSSクラス
      />
    </div>
  );
};

export default Display;