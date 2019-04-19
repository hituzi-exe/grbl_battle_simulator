# 2019/04/19

## コンテンツの作成

選択されたメニューによって表示される画面を切り替える動作なんて
既に万人によって開発されて手垢が付きまくってる機能だし、
軽く調べたら実装例がゴロゴロと出てくるだろう。

React Router を使うといいっぽい。
たしか前に使ったときはバージョンによって動作に大きな違いがあったりしたはず。

まぁ細かいことは後でいいや。とりあえず表示するページの土台だけ作っておこう。（訳：ググるのに飽きた）

## フォルダ構成で悩む

src/components/contents フォルダ以下に各ページのコンポーネントを作成したが、
action,containers,states はどうするのが正解なのか

これらも同様に
src/action/contents
src/containers/contents
というフォルダを生成していくがいいのか？

まぁそれでいいか。不都合あればそのときリファクタリングすればいいし。

sidebar.active によって表示するページを切り替えるだけのページを作成する。

## ページの切り替え完成

思ったよりも簡単に実装できた。
あとは React Router を適用するか。

## react-router のインストール

次のコマンドを実行

```console
> npm install -S react-router-dom
```

react-router は react-router-dom から参照されるらしいのでこれだけで OK
sidebar に `<Link>`、content に `<Route>` を適用していく。

「モジュール 'react-router-dom' の宣言ファイルが見つかりませんでした。」って怒られたので@types もインストール。

```console
> npm install -S @types/react-router-dom
```

## connected-react-router のインストール

ブラウザの進む、戻るでページが切り替わることを確認。
しかしヘッダーの内容が切り替わらない。
進む、戻るで redux の store が更新されてないのが原因だろう。そんな動作実装してないし。
なので仕方なく react-router と redux をつなぐためのモジュールをインストールする。

・・・と思ったけど sidebar の store に active 持たせる意味が無くなったのでは？
よしヘッダーからタイトルの表示を消してしまおう。完璧な修正だ。
これでやっとこさ切り替わるようになったのでメインコンテンツの作成に移行する。
まずはジータちゃんのジョブ、アビリティ、LB の設定画面からだ。
