# 2019/05/29

## ジータ設定画面の作成

ひたすら UIState を作成していくが、
150 行超えたところでソースから嫌な臭いがしてきた。
View ごとの UIState に分割するか。

- [x] UIState の分割(といっても現時点で DjeetUIState しかないけど)
- [x] ジョブ一覧リストに 1,2,3,4,EX1,EX2 を選択するタブを追加
- [x] ジョブ一覧リストに閉じるボタンの追加
- [ ] Json 読み込み処理（redux saga にしようか？）
- [ ] ジョブ一覧 Json 作成
- [ ] ジョブ一覧 Json 読み込み
- [ ] ジョブ選択処理作成
- [ ] アビリティ一覧 Json 作成
- [ ] アビリティ一覧 Json 読み込み
- [ ] アビリティ選択処理作成

ファイル名の先頭が大文字小文字混同してるのが気持ち悪い。

最低限できたら次の View 作成に移る。
最低限の定義は、UX や UI は深く考えず、値の設定ができたら OK

material-ui の v4 がでてた（現在は v3.9.3
そのうち適用しよう。

## redux saga の勉強

readme に日本語版あるやん！すげぇ！
<https://github.com/redux-saga/redux-saga/blob/master/README_ja.md>

とりあえずインストール。

```console
> npm install --save redux-saga
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.7 (node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ redux-saga@1.0.2
added 10 packages from 6 contributors and audited 36637 packages in 29.942s
found 69 vulnerabilities (63 low, 6 high)
  run `npm audit fix` to fix them, or `npm audit` for details
```

## ・・・脆弱性？

とりあえず npm audit fix 実行

```consle
> npm audit fix
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.7 (node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

up to date in 21.844s
fixed 0 of 69 vulnerabilities in 36637 scanned packages
  1 package update for 69 vulns involved breaking changes
  (use `npm audit fix --force` to install breaking changes; or refer to `npm audit` for steps to fix these manually)
```

英語よくわからないけども 69 個ある脆弱性を 0 個を修正したよ！って書いてあるように見える。
--force オプションつけて破壊的な変更をインストールするか、一個ずつ手で修正していってねって書いてるのか？

まぁ Git で管理してるし、最悪全部消して npm install すればいいか。

また明日作業する。
