## 2019/04/15
### エラー発生
死ぬ。死んだ。脳みそ使わなかった結果がこれだよ。
```
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

typescriptなんもわからん・・・  
TS2739でググるとHogeContainerのコンストラクタにデフォルト値を設定しないといけない？っぽい？

HogeComponentにデフォルトプロパティをセットするのはわかった。
でもupdateNameとupdateEmailにどうやってセットすればいいのかわからん・・・
```
type HogeProps = OwnProps & HogeState & HogeActions;
```
から
```
type HogeProps = OwnProps & HogeState;
```
に変更して、HogeActionsのメソッドを使ってるinputのonChangeを消せば画面は表示されたけども当然propsは更新されない。とにかくHogeActionsをセットしてやらないと動かない。

これから先はググっても答えが出てこないので、
四苦八苦しながら色々いじってみたら
hogeActionから持ってくればいいと判明。最終的に次のようになった。

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
    name: "",
    email: "",
    updateName: hogeActions.updateName,
    updateEmail: hogeActions.updateEmail,
  };

  public render() {
    return (<div>
      <div className="field">
        <input
          type="text"
          placeholder="name"
          value={this.props.name}
          onChange={(e) => this.props.updateName(e.target.value)}
        />
      </div>
      <div className="field">
        <input
          type="email"
          placeholder="email"
          value={this.props.email}
          onChange={(e) => this.props.updateEmail(e.target.value)}
        />
      </div>
    </div>
    );
  }
};
```

これだけ動いたら実装に移れるだろう。
ヘッダー、サイドバー、メインコンテンツの基本的なページ構成を構築していこう。

### Material-UIの導入
ゼロからCSS書きたくないのでそれっぽくてかっこいいのを導入しようと思う。
Material-UIの登場である。

### Paperbaseの導入
ここからよさげなサンプル画面をとってくる。
<https://material-ui.com/premium-themes/>

でもな、typescriptで書かれてないのよ。
んで、ES6からtypescriptへの変換に手間取った。
なんか表示変だけど、表示はできたし一旦コミット。

reduxとの連携はこれから。あとは余分なものを消していこう。
サイドバーの見た目、動作から作りこんでいく。
