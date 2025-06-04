// Reactライブラリとフックをインポート
import React, { useState, useEffect } from 'react';
// 電卓のメインコンポーネント
import Calculator from './components/Calculator';
// テーマ切り替えボタンコンポーネント
import ThemeToggle from './components/ThemeToggle';
// モード切り替えボタンコンポーネント
import ModeToggle from './components/ModeToggle';
// アプリのメインスタイル
import './App.css';

/**
 * メインアプリケーションコンポーネント
 * テーマ（ダーク/ライト）とモード（基本/関数電卓）の状態を管理
 */
function App() {
  // テーマの状態管理（'dark' または 'light'）
  const [theme, setTheme] = useState('dark');
  // 電卓モードの状態管理（'basic' または 'scientific'）
  const [mode, setMode] = useState('basic');

  // 初回レンダリング時にローカルストレージから設定を読み込み
  useEffect(() => {
    // 保存されたテーマ設定を取得（デフォルト: 'dark'）
    const savedTheme = localStorage.getItem('calculator-theme') || 'dark';
    // 保存されたモード設定を取得（デフォルト: 'basic'）
    const savedMode = localStorage.getItem('calculator-mode') || 'basic';
    setTheme(savedTheme);
    setMode(savedMode);
  }, []);

  // テーマが変更されたときの処理
  useEffect(() => {
    // HTMLの data-theme 属性を設定してCSSテーマを適用
    document.documentElement.setAttribute('data-theme', theme);
    // テーマ設定をローカルストレージに保存
    localStorage.setItem('calculator-theme', theme);
  }, [theme]);

  // モードが変更されたときの処理
  useEffect(() => {
    // モード設定をローカルストレージに保存
    localStorage.setItem('calculator-mode', mode);
  }, [mode]);

  /**
   * テーマを切り替える関数
   * ダーク ⇔ ライト を切り替え
   */
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  /**
   * 電卓モードを切り替える関数
   * 基本電卓 ⇔ 関数電卓 を切り替え
   */
  const toggleMode = () => {
    setMode(mode === 'basic' ? 'scientific' : 'basic');
  };

  return (
    <div className="app">
      {/* ヘッダー部分：タイトルと操作ボタン */}
      <header className="app-header">
        <h1>Calculator</h1>
        <div className="controls">
          {/* モード切り替えボタン */}
          <ModeToggle mode={mode} onToggle={toggleMode} />
          {/* テーマ切り替えボタン */}
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </header>
      {/* メインコンテンツ：電卓本体 */}
      <main>
        <Calculator mode={mode} />
      </main>
    </div>
  );
}

export default App
