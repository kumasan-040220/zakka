# zakka - 手作り雑貨の Web サイト

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

## 使い方

### 画像の設置方法

1. 現在、プレースホルダーとなっている画像部分に実際の画像を設置するには、`assets/images` フォルダに画像ファイルを追加します。
2. ソースコード内の画像パスを、実際のファイル名に変更します。例: `logo-placeholder.png` → `logo.png`

### お問い合わせフォームの設定

1. Formspree のアカウントを作成します（https://formspree.io/）
2. 新しいフォームを作成し、フォーム ID を取得します
3. `pages/contact.html` ファイル内の以下の部分を編集します：

```html
<form
  id="contact-form"
  class="contact-form"
  action="https://formspree.io/f/ここにFormspreeのフォームIDを入れてください"
  method="POST"
></form>
```

4. 「ここに Formspree のフォーム ID を入れてください」の部分を、実際のフォーム ID に置き換えます。

### テキストの編集方法

1. HTML ファイル内のテキストを直接編集してください。
2. 主なコンテンツ部分は `<main>` タグ内にあります。

## レスポンシブデザイン

このサイトはモバイル端末にも対応しています。CSS メディアクエリにより、画面サイズに応じてレイアウトが自動調整されます。

## 今後の拡張予定

現在は静的な HTML サイトですが、将来的には e コマース機能を追加予定です。その際には以下の機能を実装します：

- 商品カート機能
- 在庫管理システム
- 決済システムの連携

## 技術的な情報

- HTML5, CSS3, JavaScript (vanilla) で構築
- Web フォント: Google Fonts (M PLUS Rounded 1c, Kosugi Maru, Noto Sans JP)
- フォーム処理: Formspree
- レスポンシブデザイン: メディアクエリ

## 注意事項

- 商品の画像やコンテンツは、必ず著作権を確認した上で使用してください。
- Formspree の無料プランには月間の送信制限があります。利用状況に応じてプランのアップグレードを検討してください。
# zakka
