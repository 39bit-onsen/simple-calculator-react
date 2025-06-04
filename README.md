# React電卓アプリ / React Calculator App

React + Viteで構築されたモダンな電卓アプリケーションです。基本電卓と関数電卓の両モードに対応し、3つのテーマ（ダーク、ライト、カシオ風）で楽しめます。

A feature-rich calculator application built with React + Vite, supporting both basic and scientific calculator modes with three theme options.

## 🚀 機能 / Features

### 🧮 計算モード / Calculation Modes
- **基本電卓 / Basic Calculator**: 四則演算（加算、減算、乗算、除算）
- **関数電卓 / Scientific Calculator**: 高度な数学関数
  - **三角関数**: sin, cos, tan（度数法）
  - **対数関数**: log（常用対数）、ln（自然対数）
  - **平方根・累乗**: √、x²（2乗）
  - **階乗**: x!
  - **定数**: π（円周率）、e（自然対数の底）

### 🎨 テーマサポート / Theme Support
- **ダークテーマ**: 青いアクセントのモダンなダークモード
- **ライトテーマ**: オレンジアクセントのクリーンなライトモード
- **カシオテーマ**: カシオfx-17風のレトロスタイル
  - 本格的なLCD風グリーンディスプレイ
  - Courier New等幅フォントでオーセンティックな雰囲気
  - クラシックなオレンジ系操作ボタン

### 🔧 高度な機能 / Advanced Features
- **設定の永続化**: テーマとモードの設定をlocalStorageに保存
- **連続計算**: 複数の演算をシームレスに実行
- **入力検証**: 無効な操作のエラーハンドリング
- **レスポンシブデザイン**: デスクトップ、タブレット、モバイル対応
- **キーボードフレンドリー**: 直感的なボタンレイアウト

### 📱 ユーザーインターフェース / User Interface
- リアルタイム表示更新
- ボタンタイプ別の明確な視覚フィードバック
- スムーズなアニメーションとトランジション
- 適切なコントラスト比によるアクセシブルデザイン

## 🛠️ 技術スタック / Technology Stack

- **React 19**: UIライブラリ / UI Library
- **Vite**: 高速ビルドツール / Fast Build Tool
- **CSS Variables**: テーマシステム / CSS Custom Properties for theming
- **ESLint**: コード品質管理 / Code Quality Management

## 📦 インストールと実行 / Installation & Setup

### 前提条件 / Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### インストール / Installation
```bash
# Reactアプリのディレクトリに移動 / Navigate to React app directory
cd calculator-react

# 依存関係のインストール / Install dependencies
npm install
```

### 開発 / Development
```bash
npm run dev      # 開発サーバーの起動 / Start development server
npm run build    # プロダクションビルド / Build for production
npm run preview  # プレビュー / Preview production build
npm run lint     # コードリンティング / Run code linting
```

## 🏗️ プロジェクト構造 / Project Structure

### React Application (`calculator-react/`)
- Modern React 19 + Vite setup
- Component-based architecture
- CSS custom properties for theming
- ESLint configuration for code quality

### Legacy Version
- Vanilla HTML/CSS/JavaScript implementation
- Located in project root

```
src/
├── components/          # Reactコンポーネント / React Components
│   ├── Calculator.jsx   # メインの電卓ロジック / Main calculator logic
│   ├── Display.jsx      # 計算結果表示 / Display component
│   ├── ButtonGrid.jsx   # ボタン配置管理 / Button layout management
│   ├── Button.jsx       # 個別ボタン / Individual button component
│   ├── ThemeToggle.jsx  # テーマ切り替え / Theme toggle
│   └── ModeToggle.jsx   # モード切り替え / Mode toggle
├── App.jsx             # アプリケーションエントリーポイント / App entry point
└── main.jsx            # Reactアプリのマウント / React app mount
```

## 🎨 デザインシステム / Design System

- **CSS Variables**を使用した統一されたデザインシステム
- **3つのテーマ**の完全対応（ダーク/ライト/カシオ）
- **アニメーション効果**付きのインタラクティブなUI
- **カラーコード体系**による視覚的な操作区分

## 📱 対応環境 / Browser Support

- **デスクトップ / Desktop**: Chrome, Firefox, Safari, Edge
- **モバイル / Mobile**: iOS Safari, Chrome Mobile
- **レスポンシブ / Responsive**: 320px以上の画面幅に対応

## 🔧 開発 / Development

このプロジェクトには日本語と英語での詳細なコメントが含まれており、コードの理解と保守性を向上させています。

This project includes detailed comments in both Japanese and English to improve code understanding and maintainability.

## 📄 ライセンス / License

MIT License
