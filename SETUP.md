# セットアップガイド

## 1. 環境の準備

このテンプレートは静的な HTML サイトなので、特別なサーバー環境は必要ありません。以下のツールがあると便利です：

- テキストエディタ（Visual Studio Code, Atom, Sublime Text など）
- Web ブラウザ（Chrome, Firefox など）
- 画像編集ソフト（必要に応じて）

## 2. ファイルのダウンロードと編集

1. このリポジトリをダウンロードまたはクローンします
   ```
   git clone https://github.com/kumasan-040220/zakka.git
   ```
2. ダウンロードしたファイルをテキストエディタで開きます

3. 以下のファイルを編集してカスタマイズします：
   - `index.html`：トップページの内容
   - `pages/products.html`：商品情報
   - `pages/contact.html`：問い合わせフォーム設定
   - `assets/css/style.css`：デザインのカスタマイズ

## 3. 画像の準備と設置

1. 以下の画像を準備します：

   - ロゴ画像
   - 商品画像（各商品につきメイン画像 1 枚＋サブ画像 3 枚程度）
   - ブランドイメージ画像

2. 準備した画像を `assets/images` フォルダに配置します

3. HTML ファイル内の画像パスを実際のファイル名に更新します：

   ```html
   <!-- 変更前 -->
   <img src="assets/images/logo-placeholder.png" alt="zakka ロゴ" />

   <!-- 変更後 -->
   <img src="assets/images/logo.png" alt="zakka ロゴ" />
   ```

## 4. お問い合わせフォームの設定

1. [Formspree](https://formspree.io/) にアクセスしてアカウントを作成します

2. 新しいフォームを作成し、フォーム ID を取得します

3. `pages/contact.html` ファイル内のフォーム設定を更新します：
   ```html
   <form
     id="contact-form"
     class="contact-form"
     action="https://formspree.io/f/あなたのフォームID"
     method="POST"
   ></form>
   ```

## 5. ローカルでの動作確認

1. `index.html` ファイルをブラウザで開いてサイトのプレビューを確認します

2. レスポンシブデザインをテストするには、ブラウザの開発者ツールでモバイル表示をシミュレートします：
   - Chrome: F12 キーを押して DevTools を開き、画面左上のモバイルアイコンをクリック
   - Firefox: F12 キーを押して DevTools を開き、右上の「レスポンシブデザインモード」をクリック

## 6. サイトの公開

1. 編集と動作確認が完了したら、すべてのファイルをウェブサーバーにアップロードします

   - レンタルサーバー
   - GitHub Pages
   - Netlify
   - Vercel
     など

2. ドメインの設定が必要な場合は、サービスプロバイダの指示に従ってください

## 注意事項

- 商用利用する場合は、フォント、画像素材などのライセンスを確認してください
- 大きな画像ファイルはウェブサイトの読み込み速度に影響します。適切に最適化してください
- Formspree の無料プランには月間の送信制限があります

## トラブルシューティング

問題が発生した場合は、以下を確認してください：

1. パスの記述が正しいか確認（特に相対パス）
2. 画像ファイルの形式とサイズが適切か
3. HTML の構文エラーがないか

より詳しい情報やカスタマイズについては、[README.md](README.md)を参照してください。
