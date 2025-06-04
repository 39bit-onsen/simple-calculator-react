// Reactライブラリとstateフックをインポート
import React, { useState } from 'react';
// 計算結果表示部分のコンポーネント
import Display from './Display';
// ボタングリッドのコンポーネント
import ButtonGrid from './ButtonGrid';
// 電卓のスタイル
import './Calculator.css';

/**
 * 電卓のメインコンポーネント
 * 計算ロジックと状態管理を行う
 * @param {string} mode - 電卓のモード（'basic' または 'scientific'）
 */
const Calculator = ({ mode }) => {
  // 画面に表示される値
  const [display, setDisplay] = useState('0');
  // 前回の計算値（演算子入力後に保存）
  const [previousValue, setPreviousValue] = useState(null);
  // 現在選択されている演算子
  const [operation, setOperation] = useState(null);
  // 次の数値入力を待っている状態かどうか
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  /**
   * 数字ボタンが押されたときの処理
   * @param {number} num - 入力された数字
   */
  const inputNumber = (num) => {
    if (waitingForOperand) {
      // 演算子入力後の場合：新しい数値として表示
      setDisplay(String(num));
      setWaitingForOperand(false);
    } else {
      // 通常の場合：現在の表示に数字を追加
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  /**
   * 演算子ボタンが押されたときの処理
   * @param {string} nextOperation - 選択された演算子（'+', '-', '*', '/', '='）
   */
  const inputOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      // 初回の演算子入力：現在の値を保存
      setPreviousValue(inputValue);
    } else if (operation) {
      // 連続計算の場合：前回の値と現在の値で計算実行
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    // 次の数値入力待ち状態に設定
    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  /**
   * 基本的な四則演算を実行する関数
   * @param {number} firstValue - 第一オペランド
   * @param {number} secondValue - 第二オペランド
   * @param {string} operation - 演算子
   * @returns {number} 計算結果
   */
  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue; // 加算
      case '-':
        return firstValue - secondValue; // 減算
      case '*':
        return firstValue * secondValue; // 乗算
      case '/':
        return firstValue / secondValue; // 除算
      case '=':
        return secondValue; // イコールの場合は第二オペランドをそのまま返す
      default:
        return secondValue;
    }
  };

  /**
   * 科学計算（関数電卓）の計算を実行する関数
   * @param {string} func - 実行する関数名
   */
  const performScientificOperation = (func) => {
    const value = parseFloat(display);
    let result;

    switch (func) {
      case 'sin':
        result = Math.sin(value * Math.PI / 180); // サイン（度数法）
        break;
      case 'cos':
        result = Math.cos(value * Math.PI / 180); // コサイン（度数法）
        break;
      case 'tan':
        result = Math.tan(value * Math.PI / 180); // タンジェント（度数法）
        break;
      case 'log':
        result = Math.log10(value); // 常用対数（底10）
        break;
      case 'ln':
        result = Math.log(value); // 自然対数（底e）
        break;
      case 'sqrt':
        result = Math.sqrt(value); // 平方根
        break;
      case 'square':
        result = value * value; // 2乗
        break;
      case 'factorial':
        result = factorial(value); // 階乗
        break;
      default:
        result = value;
    }

    // 結果を表示し、状態をリセット
    setDisplay(String(result));
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(true);
  };

  /**
   * 階乗を計算する関数
   * @param {number} n - 階乗を求める数
   * @returns {number} 階乗の結果
   */
  const factorial = (n) => {
    if (n === 0 || n === 1) return 1; // 0! = 1, 1! = 1
    if (n < 0 || !Number.isInteger(n)) return NaN; // 負の数や非整数はエラー
    let result = 1;
    // 2からnまでの数をすべて掛け合わせる
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  /**
   * 全クリア（C）ボタンの処理
   * すべての状態をリセット
   */
  const clearAll = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  /**
   * エントリークリア（CE）ボタンの処理
   * 現在の表示のみクリア
   */
  const clearEntry = () => {
    setDisplay('0');
  };

  /**
   * 小数点ボタンの処理
   */
  const inputDot = () => {
    if (waitingForOperand) {
      // 演算子入力後の場合：「0.」から開始
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      // まだ小数点が含まれていない場合のみ追加
      setDisplay(display + '.');
    }
  };

  /**
   * バックスペース（削除）ボタンの処理
   */
  const backspace = () => {
    if (display.length > 1) {
      // 最後の文字を削除
      setDisplay(display.slice(0, -1));
    } else {
      // 1文字の場合は「0」にリセット
      setDisplay('0');
    }
  };

  return (
    <div className={`calculator ${mode}`}>
      {/* 計算結果表示エリア */}
      <Display value={display} />
      {/* ボタングリッド：各操作のコールバック関数を渡す */}
      <ButtonGrid
        mode={mode}
        onNumberClick={inputNumber}           // 数字入力
        onOperationClick={inputOperation}     // 演算子入力
        onScientificClick={performScientificOperation}  // 科学計算
        onClearClick={clearAll}              // 全クリア
        onClearEntryClick={clearEntry}       // エントリークリア
        onDotClick={inputDot}                // 小数点入力
        onBackspaceClick={backspace}         // バックスペース
      />
    </div>
  );
};

export default Calculator;