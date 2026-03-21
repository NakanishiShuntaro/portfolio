# github-pages-site

GitHub Pages 用の最小構成の静的サイトです。

## ローカルで確認

```bash
cd github-pages-site
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
| `index.html`  | トップページ   |
