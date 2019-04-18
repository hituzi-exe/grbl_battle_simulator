# 2019/04/15

## エラー発生

死ぬ。死んだ。脳みそ使わなかった結果がこれだよ。

```jsx
C:/projects/example/grbl_battle_simulator/src/Frontend/grbl_battle_simulator/src/App.tsx
TypeScript error: Type '{}' is missing the following properties from type 'Readonly<Pick<HogeProps, "updateName" | "updateEmail">>': updateName, updateEmail  TS2739
     6 |     return (
     7 |       <div className="App">
  >  8 |         <HogeContainer />
       |          ^
     9 |       </div>
    10 |     );
    11 |   }
```

typescript なんもわからん・・・  
TS2739 でググると HogeContainer のコンストラクタにデフォルト値を設定しないといけない？っぽい？

HogeComponent にデフォルトプロパティをセットするのはわかった。
でも updateName と updateEmail にどうやってセットすればいいのかわからん・・・

```jsx
type HogeProps = OwnProps & HogeState & HogeActions;
```

から

```jsx
type HogeProps = OwnProps & HogeState;
```

に変更して、HogeActions のメソッドを使ってる input の onChange を消せば画面は表示されたけども当然 props は更新されない。とにかく HogeActions をセットしてやらないと動かない。

これから先はググっても答えが出てこないので、
四苦八苦しながら色々いじってみたら
hogeAction から持ってくればいいと判明。最終的に次のようになった。

TODO:参考にさせてもらった記事に修正ソースをコメントすること。
<https://qiita.com/IzumiSy/items/b7d8a96eacd2cd8ad510>

```tsx : src/components/hogeComponent.tsx
import * as React from 'react';
import { HogeState } from '../states/hogeState';
import { HogeActions } from '../containers/hogeContainer';
import { hogeActions } from '../actions/hogeAction';

interface OwnProps {}

type HogeProps = OwnProps & HogeState & HogeActions;

export class HogeComponent extends React.Component<HogeProps> {
  public static defaultProps: HogeProps = {
    name: '',
    email: '',
    updateName: hogeActions.updateName,
    updateEmail: hogeActions.updateEmail,
  };

  public render() {
    return (
      <div>
        <div className="field">
          <input
            type="text"
            placeholder="name"
            value={this.props.name}
            onChange={e => this.props.updateName(e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="email"
            placeholder="email"
            value={this.props.email}
            onChange={e => this.props.updateEmail(e.target.value)}
          />
        </div>
      </div>
    );
  }
}
```

これだけ動いたら実装に移れるだろう。
ヘッダー、サイドバー、メインコンテンツの基本的なページ構成を構築していこう。

### Material-UI の導入

ゼロから CSS 書きたくないのでそれっぽくてかっこいいのを導入しようと思う。
Material-UI の登場である。

### Paperbase の導入

ここからよさげなサンプル画面をとってくる。
<https://material-ui.com/premium-themes/>

でもな、typescript で書かれてないのよ。
んで、ES6 から typescript への変換に手間取った。
なんか表示変だけど、表示はできたし一旦コミット。

redux との連携はこれから。あとは余分なものを消していこう。
サイドバーの見た目、動作から作りこんでいく。
