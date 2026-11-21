# d-hacks-web

d-hacks（慶應義塾大学SFC 中澤・大越研究室 AI研究グループ）のウェブサイト試作です。
公式サイトは https://d-hacks.jn.sfc.keio.ac.jp/ です。

ビルド不要の静的サイトです。

```
index.html      ページ本体（CSS・JavaScriptを含む）
assets/         ロゴ画像（mark / wordmark / lockup）
```

## ローカルで見る

```
python3 -m http.server 8000 --bind 127.0.0.1
```

http://localhost:8000 を開きます。

## 公開

GitHub Pages で `main` ブランチのルートを配信します。
