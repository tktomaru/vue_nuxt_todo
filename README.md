# vue_nuxt_todo

# node.jsインストーラ
node-v16.17.0-x64.msi
https://nodejs.org/dist/v16.17.0/node-v16.17.0-x64.msi

# nuxtプロジェクト作成
npx nuxi@3.0.0-rc.9  init nuxt3-app3
npm install vue@3.2.34-beta.1
# nuxtプロジェクト実行
cd nuxt3-app  
npm install
npm run dev

# vuetifyインストール
npm install vue@3.2.34-beta.1
npm install vuetify@3.0.0-beta.10
npm install sass@1.54.9
npm install mdi@2.2.43 

#フォルダ説明
.nuxt Nuxt.jsのアプリケーションが生成されます（これは最初は生成されていない。npm run dev実行時に生成される）
assets スタイルシートやJavaScriptファイルを格納する
components コンポーネントのファイルを格納する
layouts レイアウトファイルを格納する
middleware ミドルウェアを格納する
node_modules パッケージ類が格納される
pages 各ページ用のファイルをまとめる
plugins プラグインプログラムを格納する
static イメージファイルなどを格納する
store データを管理するためのファイルを格納する
composables ここのファイルも自動インポート対象。共通ロジックを格納する


.editorconfig エディターの設定
.gitignore コミットするファイルとしないファイルの規則
nuxt_config.json Nuxt.jsの設定ファイル
package.json npmのパッケージ管理ファイル
package-lock.json npmが使用するファイル
README.md プロジェクト説明が書かれたファイル

# 注意事項
Vue3はIE11のサポートがない。
Vue2は2.7が最終バージョンで、2.7リリース後18ヶ月がサポート期間となり、以降はセキュリティメンテナンスが行われる予定。

# 使い方
Vueファイルならscriptタグにlang属性でtsを指定するだけでそこはTypeScriptの領域になる。
<script lang="ts">
// TypeScript
</script>

V2ではVuexだったが、V3ではuseStateとなった
新しく server/api が増えてエンドポイントがお手軽に作れる
V2の serverMiddleware は server/middleware に変更。これはディレクトリが変わっただけで機能は同じ。

# app.vue
Nuxt3でメインコンポーネントとなるファイル。

# $fetch
ブラウザで実行した場合はサーバーへのAPI呼び出し、
サーバーで実行した場合は関連する関数を呼び出す。
外部のAPIも叩けるからaxiosやhttpモジュールを追加する必要は無くなったと思う。

# useAsyncDataとuseFetch
setupで使えるNuxt3のデータ取得用関数。

