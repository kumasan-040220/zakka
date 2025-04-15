# zakka - 手作り雑貨の Web サイトテンプレート

ナチュラルで温かみのある手作り雑貨販売サイトのテンプレートです。静的な HTML サイトとして実装されており、将来的な EC サイト機能の追加にも対応できる設計になっています。

## 特徴

- ナチュラルな色合いと温かみのあるデザイン
- レスポンシブ対応（モバイル、タブレット、デスクトップ）
- SEO に配慮した構造
- 問い合わせフォーム機能（Formspree 利用）
- シンプルな構造で初心者でも編集しやすい

## テンプレートのカスタマイズ方法

### 1. テキストの編集

各 HTML ファイル内のテキストを直接編集してください。編集すべき主なコンテンツは以下の部分にあります：

- `<h1>`、`<h2>`、`<h3>` タグ内のタイトル
- `<p>` タグ内の説明文
- 商品名、価格、特徴などの情報

### 2. 画像の設置

1. プレースホルダー画像を実際の画像に置き換えます：

   - ロゴ画像（推奨サイズ：幅 200〜250px、高さ 50〜60px）
   - 商品画像（メイン画像・サブ画像）
   - ブランドイメージ画像

2. 画像を `assets/images` フォルダに配置し、HTML ファイル内のパスを更新してください：
   ```html
   <img src="assets/images/your-logo.png" alt="ブランド名" />
   ```

### 3. 色・デザインのカスタマイズ

メインの色は `assets/css/style.css` ファイル内で編集できます。主な色設定：

- 背景色: `#fcfbf7`（薄いアイボリー）
- メインの緑: `#5a7247`（アクセントカラー）
- 濃い緑: `#3c5233`（見出しなど）
- 薄い緑の背景: `#e8ede1`（ヒーローセクションなど）
- 薄いベージュ背景: `#f7f3e9`（商品セクションなど）

### 4. お問い合わせフォームの設定

1. [Formspree](https://formspree.io/)でアカウントを作成
2. 新しいフォームを作成してフォーム ID を取得
3. `pages/contact.html` の以下の部分を編集：
   ```html
   <form
     id="contact-form"
     class="contact-form"
     action="https://formspree.io/f/あなたのフォームID"
     method="POST"
   ></form>
   ```

## ファイル構成

```
/
├── index.html             # トップページ
├── assets/                # 静的ファイル
│   ├── css/               # スタイルシート
│   │   └── style.css      # メインのCSSファイル
│   ├── js/                # JavaScript
│   │   └── script.js      # メインのJSファイル
│   └── images/            # 画像ファイル（ロゴ、商品画像など）
└── pages/                 # 各ページ
    ├── products.html      # 商品紹介ページ
    └── contact.html       # お問い合わせページ
```

## 技術情報

- HTML5, CSS3, JavaScript (vanilla)
- Google Fonts: M PLUS Rounded 1c, Kosugi Maru, Noto Sans JP
- フォーム処理: Formspree
- レスポンシブデザイン（CSS Grid, Flexbox）

## デプロイ方法

1. HTML ファイル、CSS ファイルなどを編集
2. 実際の画像を `assets/images` に配置
3. お問い合わせフォームの設定を行う
4. すべてのファイルをウェブサーバーにアップロード

## ライセンス

MIT ライセンス - 自由に使用、変更、配布していただけます。
