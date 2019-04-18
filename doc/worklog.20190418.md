# 2019/04/18

## サイドバーの作成

スタイルの適用ができた。

<http://yucatio.hatenablog.com/entry/2018/11/12/222227>
compose を使わない場合を適用した。
コンポーネントの関数

SampleComponent と mapStateToProps、mapDispatchToProps を別ファイルで定義していたからどうしようかと悩んでいたけど、
適当にインポートして渡せばよかったんだ。
state と Component を Container で connect するって考え方がわかってきがする。

## ヘッダーの作成

サイドバーの作成の応用で作成。ログインボタン作ったけども、実装一通り完了してから。
サイドバーで選択したメニューによってタイトルも変更することができた。
微妙にレイアウト変わってきてるけどまぁいいだろ。
