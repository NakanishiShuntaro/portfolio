# portfolio

GitHub Pages 用の静的サイト。トップページ（`index.html`）に履歴書（CV）の内容を掲載。レイアウトは固定サイドバー＋本文のプロフィールサイト形式（[参考](https://ensan-hcl.github.io/miwakeita/) と同系統の構成）。

## ローカルで確認

```bash
cd portfolio
python3 -m http.server 8080
```

ブラウザで <http://localhost:8080> を開きます。

## GitHub に公開する手順

1. GitHub で空のリポジトリを作成する（名前は任意。ユーザーサイトにする場合は `あなたのユーザー名.github.io`）。
2. このディレクトリでリモートを追加して push:

   ```bash
   git remote add origin https://github.com/<ユーザー>/<リポジトリ>.git
   git branch -M main
   git push -u origin main
   ```

3. リポジトリの **Settings → Pages** で、**Build and deployment** のソースを **Deploy from a branch** にし、**Branch** を `main` / **`/ (root)`** に設定する。

数分後に `https://<ユーザー>.github.io/<リポジトリ>/`（または `username.github.io` リポジトリならルート URL）で表示されます。

## ファイル

| ファイル      | 説明           |
| ------------- | -------------- |
| `index.html`  | CV（履歴書）ページ |
