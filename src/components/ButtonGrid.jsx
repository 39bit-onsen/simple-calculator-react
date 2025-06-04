// Reactライブラリをインポート
import React from 'react';
// 個別のボタンコンポーネント
import Button from './Button';
// ボタングリッドのスタイル
import './ButtonGrid.css';

/**
 * ボタングリッドコンポーネント
 * 電卓のボタン配置とイベントハンドリングを管理
 * @param {string} mode - 電卓のモード（'basic' または 'scientific'）
 * @param {function} onNumberClick - 数字ボタンクリック時のコールバック
 * @param {function} onOperationClick - 演算子ボタンクリック時のコールバック
 * @param {function} onScientificClick - 科学計算ボタンクリック時のコールバック
 * @param {function} onClearClick - 全クリアボタンクリック時のコールバック
 * @param {function} onClearEntryClick - エントリークリアボタンクリック時のコールバック
 * @param {function} onDotClick - 小数点ボタンクリック時のコールバック
 * @param {function} onBackspaceClick - バックスペースボタンクリック時のコールバック
 */
const ButtonGrid = ({
  mode,
  onNumberClick,
  onOperationClick,
  onScientificClick,
  onClearClick,
  onClearEntryClick,
  onDotClick,
  onBackspaceClick
}) => {
  // 基本電卓のボタン配置を定義
  const basicButtons = [
    // 第1行：クリアとバックスペース、除算
    { label: 'C', onClick: onClearClick, className: 'clear' },           // 全クリア
    { label: 'CE', onClick: onClearEntryClick, className: 'clear' },     // エントリークリア
    { label: '⌫', onClick: onBackspaceClick, className: 'operation' },   // バックスペース
    { label: '/', onClick: () => onOperationClick('/'), className: 'operation' }, // 除算
    
    // 第2行：7, 8, 9, 乗算
    { label: '7', onClick: () => onNumberClick(7), className: 'number' },
    { label: '8', onClick: () => onNumberClick(8), className: 'number' },
    { label: '9', onClick: () => onNumberClick(9), className: 'number' },
    { label: '*', onClick: () => onOperationClick('*'), className: 'operation' }, // 乗算
    
    // 第3行：4, 5, 6, 減算
    { label: '4', onClick: () => onNumberClick(4), className: 'number' },
    { label: '5', onClick: () => onNumberClick(5), className: 'number' },
    { label: '6', onClick: () => onNumberClick(6), className: 'number' },
    { label: '-', onClick: () => onOperationClick('-'), className: 'operation' }, // 減算
    
    // 第4行：1, 2, 3, 加算
    { label: '1', onClick: () => onNumberClick(1), className: 'number' },
    { label: '2', onClick: () => onNumberClick(2), className: 'number' },
    { label: '3', onClick: () => onNumberClick(3), className: 'number' },
    { label: '+', onClick: () => onOperationClick('+'), className: 'operation' }, // 加算
    
    // 第5行：0（2列分）, 小数点, イコール
    { label: '0', onClick: () => onNumberClick(0), className: 'number zero' },    // 0（幅2倍）
    { label: '.', onClick: onDotClick, className: 'number' },                    // 小数点
    { label: '=', onClick: () => onOperationClick('='), className: 'equals' }    // イコール
  ];

  // 科学計算（関数電卓）のボタン配置を定義
  const scientificButtons = [
    // 第1行：三角関数と対数
    { label: 'sin', onClick: () => onScientificClick('sin'), className: 'scientific' }, // サイン
    { label: 'cos', onClick: () => onScientificClick('cos'), className: 'scientific' }, // コサイン
    { label: 'tan', onClick: () => onScientificClick('tan'), className: 'scientific' }, // タンジェント
    { label: 'log', onClick: () => onScientificClick('log'), className: 'scientific' }, // 常用対数
    
    // 第2行：自然対数、平方根、2乗、階乗
    { label: 'ln', onClick: () => onScientificClick('ln'), className: 'scientific' },      // 自然対数
    { label: '√', onClick: () => onScientificClick('sqrt'), className: 'scientific' },     // 平方根
    { label: 'x²', onClick: () => onScientificClick('square'), className: 'scientific' },  // 2乗
    { label: 'x!', onClick: () => onScientificClick('factorial'), className: 'scientific' }, // 階乗
    
    // 第3行：定数と括弧
    { label: 'π', onClick: () => onNumberClick(Math.PI), className: 'scientific' },        // 円周率
    { label: 'e', onClick: () => onNumberClick(Math.E), className: 'scientific' },         // 自然対数の底
    { label: '(', onClick: () => onOperationClick('('), className: 'scientific' },         // 左括弧
    { label: ')', onClick: () => onOperationClick(')'), className: 'scientific' }          // 右括弧
  ];

  return (
    <div className={`button-grid ${mode}`}>
      {/* 科学計算モードの場合のみ表示される科学計算ボタン群 */}
      {mode === 'scientific' && (
        <div className="scientific-row">
          {scientificButtons.map((button, index) => (
            <Button
              key={`sci-${index}`}
              label={button.label}
              onClick={button.onClick}
              className={button.className}
            />
          ))}
        </div>
      )}
      
      {/* 基本電卓のボタン群（常に表示） */}
      <div className="main-grid">
        {basicButtons.map((button, index) => (
          <Button
            key={index}
            label={button.label}
            onClick={button.onClick}
            className={button.className}
          />
        ))}
      </div>
    </div>
  );
};

export default ButtonGrid;