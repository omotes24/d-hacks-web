# d-hacks-web

d-hacks（慶應義塾大学SFC 中澤・大越研究室 AI研究グループ）ウェブサイトのデザイン試作です。
公式サイトは https://d-hacks.jn.sfc.keio.ac.jp/ 、そのソースは [nkzwlab/dhacks-site](https://github.com/nkzwlab/dhacks-site) です。

内部の構成は nkzwlab/dhacks-site と同じです（Vue 3 + Vite + vite-ssg + vue-router）。
ページの内容はそこから移し、見た目だけを新しいデザインに置き換えています。

```
index.html                  head（meta / OGP / 構造化データ）
src/main.ts                 ViteSSG のエントリ
src/router/index.ts         ルート（/ /about /publications /joinus /members /contact）
src/App.vue                 共通レイアウトと全体のスタイル
src/components/             MainHeader / MainFooter / SphereMark（球体マークの輪郭）
src/views/                  各ページ
public/                     favicon・OGP 画像など
scripts/deploy-pages.sh      GitHub Pages への公開
```

## 開発

```sh
npm install
npm run dev
```

研究一覧（/about）は研究室サーバーの API（`/api/research-items`）から読みます。
開発サーバーでは `/api` を公式サイトへ中継します。

## ビルド

```sh
npm run build
```

| 環境変数 | 役割 | 既定 |
| --- | --- | --- |
| `BASE_PATH` | 配信するパス | `/` |
| `VITE_API_ORIGIN` | API と研究画像のオリジン | なし（同一オリジンの `/api`） |
| `VITE_RESEARCH_JSON` | API の代わりに読む、`public/` 内の JSON | なし |
| `VITE_PROTOTYPE` | `1` で「試作」の注記と noindex を入れる | なし |

何も指定しなければ、公式サイトと同じ条件（ルート配信・同一オリジンの API）でビルドされます。

## 公開

```sh
scripts/deploy-pages.sh
```

ビルドした `dist/` を `gh-pages` ブランチに push し、GitHub Pages で公開します
（https://omotes24.github.io/d-hacks-web/）。origin が omotes24/d-hacks-web でなければ何もせず止まります。

`main` への push で自動公開したい場合は、`docs/github-actions-pages.yml` を
`.github/workflows/` に置き、Pages のソースを GitHub Actions に切り替えてください。
研究室サーバーへデプロイするワークフローは、このリポジトリには入れていません。
