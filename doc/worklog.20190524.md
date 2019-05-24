# 2019/05/24

## ジータ設定画面の作成

ジョブの変更をどうするか。
変更ボタンを押下したら画面右にジョブ一覧画面を表示させる。

ジョブ一覧画面では、ジョブを選択するとそれを現在のジョブに設定する。
閉じるボタンを押下されると変更されずにジョブ一覧画面を非表示にする。

UI の state をどうするか。
↓
Store の見直し。
DomainState、AppState、UIState に分割するといいらしい。

ここ参照。
<http://www.enigmo.co.jp/blog/tech/reactredux%E7%B4%84%E4%B8%89%E5%B9%B4%E9%96%93%E6%9B%B8%E3%81%8D%E7%B6%9A%E3%81%91%E3%81%9F%E3%81%AE%E3%81%A7%E7%9F%A5%E8%A6%8B%E3%82%92%E5%85%B1%E6%9C%89%E3%81%97%E3%81%BE%E3%81%99/>

- DomainState
  ドメイン特有の State のこと。
  ジータのジョブ、得意武器、hp、攻撃力など。

- AppState
  サイドバー、ヘッダーの state をこれに移動する。

- UIState
  モーダルの表示状態などの UI 特有の state を保持する。

AppState と UIState 何が違うのかよくわからん・・・

これからの作業は以下の二つ。

- [ ] sidebarState.ts と headerState.ts を AppState.ts に統合
- [ ] UIState の作成
