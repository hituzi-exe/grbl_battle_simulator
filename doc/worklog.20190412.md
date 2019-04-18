# 2019/04/12

一通り仕様も決まったので開発に着手。
web アプリにするので react+redux 使ってみようとおもう。
管理する情報が多すぎるので、勉強もかねて redux 使ってみる。

## 開発環境の構築

OS:Windows 10  
エディタ:vscode と vim  
シェル:cmder  
ソース管理:git

まずは node.js と npm のバージョン確認、更新

```console
> npm -v
6.4.1
> node -v
v8.11.1
```

node.js は頻繁にバージョンアップされるので、それ専用のバージョン管理ツールがあるとのこと。

### nodist のインストール

次のページから nodeist のインストーラーをダウンロード。
<https://github.com/nullivex/nodist/releases>

もともといれてた node.js v8.11.1 をアンインストール
これで node は動かなくなったはず。

```console
> node -v
v11.13.0
```

・・・あれ？
まぁいいや nodist 入れたときに標準で入ったんだろう。

試しに nodist 動かしてみる

```console
> nodist
  (x64)
> 11.13.0  (global: v11.13.0)
```

最新版をインストールする。

```console
> nodist dist
～（中略）～
  11.9.0
  11.10.0
  11.12.0
  11.13.0
  11.14.0
```

11.14.0 が nodist でインストールできる最新らしいのでそれを選択。

```console
> nodist + 11.14.0
 11.14.0 [===============] 25658/25658 KiB 100% 0.0s
11.14.0
```

バージョン確認。

```console
> node -v
v11.13.0
```

切り替えるの忘れてた。

```console
> nodist global 11.14.0
11.14.0
11.14.0 (global)
```

再度バージョン確認

```console
> node -v
v11.14.0
```

ok、node.js の更新終了

### npm の更新

まずはバージョン確認

```console
> npm --version
6.9.0
```

最新っぽいけど一応更新してみる。

```console
> npm update -g npm
```

何も起きなかった。はやり最新だったらしい。

### create-react-app のインストール

ゼロから Webpack や Babel をいじって React のセットアップできるほどの技量がないので
頼れるものには頼っていく。

```console
> npm install -g create-react-app
C:\Program Files (x86)\Nodist\bin\create-react-app -> C:\Program Files (x86)\Nodist\bin\node_modules\create-react-app\index.js
+ create-react-app@2.1.8
added 63 packages from 20 contributors in 7.874s
```

### create-react-app コマンドでアプリを作成

```console
> create-react-app grbl_battle_simulator

Creating a new React app in C:\projects\example\grbl_battle_simulator\src\Frontend\grbl_battle_simulator.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...

+ react-dom@16.8.6
+ react@16.8.6
+ react-scripts@2.1.8
added 1852 packages from 718 contributors and audited 36252 packages in 269.326s
found 68 vulnerabilities (63 low, 5 high)
  run `npm audit fix` to fix them, or `npm audit` for details

Success! Created grbl_battle_simulator at C:\projects\example\grbl_battle_simulator\src\Frontend\grbl_battle_simulator
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd grbl_battle_simulator
  npm start

Happy hacking!
```

5 分ぐらいでセットアップ完了。先輩エンジニアの気遣いで心があったけぇ・・・

### アプリの動作確認

```console
> npm start

Compiled successfully!

You can now view grbl_battle_simulator in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://192.168.1.86:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.
```

ブラウザから<http://localhost:3000/>へアクセス。無事に表示された。
これからどんどん作っていこうな

### やっぱり typescript で書いてみよう

なんと create-react-app コマンドには`--typescript`オプションが存在するらしい。
<https://qiita.com/IzumiSy/items/b7d8a96eacd2cd8ad510>ここで初めて知った…知らなかったそんなの

もともと Java とか VB.NET とか静的型付け言語の出身なんでそっちのほうがよくなじむだろう。
さっき作ったのを削除、`--typescript`オプションを付けてもう一回実行する。

```console
> create-react-app grbl_battle_simulator --typescript

Creating a new React app in C:\projects\example\grbl_battle_simulator\src\Frontend\grbl_battle_simulator.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...

+ @types/react-dom@16.8.4
+ react-dom@16.8.6
+ react@16.8.6
+ @types/jest@24.0.11
+ react-scripts@2.1.8
+ @types/react@16.8.13
+ @types/node@11.13.4
+ typescript@3.4.3
added 1859 packages from 758 contributors and audited 36263 packages in 261.497s
found 68 vulnerabilities (63 low, 5 high)
  run `npm audit fix` to fix them, or `npm audit` for details
We detected TypeScript in your project (src\App.test.tsx) and created a tsconfig.json file for you.

Your tsconfig.json has been populated with default values.


Success! Created grbl_battle_simulator at C:\projects\example\grbl_battle_simulator\src\Frontend\grbl_battle_simulator
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd grbl_battle_simulator
  npm start

Happy hacking!
```

これまた 5 分ぐらいでセットアップ完了。先輩エンジニアには足を向けて寝られないです。

### はじめはパッケージをインストールして、あとは流れでお願いします。

上記の URL<https://qiita.com/IzumiSy/items/b7d8a96eacd2cd8ad510>に従って最速で React+Redux+TypeScript なアプリを作っていく。
書いてあるコマンドをどんどん叩いていこう。

#### redux のインストール

```console
> npm install --save redux react-redux
npm WARN saveError ENOENT: no such file or directory, open 'C:\projects\example\grbl_battle_simulator\src\Frontend\package.json'
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN enoent ENOENT: no such file or directory, open 'C:\projects\example\grbl_battle_simulator\src\Frontend\package.json'
npm WARN react-redux@7.0.1 requires a peer of react@^16.8.4 but none is installed. You must install peer dependencies yourself.
npm WARN Frontend No description
npm WARN Frontend No repository field.
npm WARN Frontend No README data
npm WARN Frontend No license field.

+ redux@4.0.1
+ react-redux@7.0.1
added 12 packages from 8 contributors and audited 20 packages in 3.032s
found 0 vulnerabilities

> npm install -D @types/react-redux
npm WARN saveError ENOENT: no such file or directory, open 'C:\projects\example\grbl_battle_simulator\src\Frontend\package.json'
npm WARN enoent ENOENT: no such file or directory, open 'C:\projects\example\grbl_battle_simulator\src\Frontend\package.json'
npm WARN react-redux@7.0.1 requires a peer of react@^16.8.4 but none is installed. You must install peer dependencies yourself.
npm WARN Frontend No description
npm WARN Frontend No repository field.
npm WARN Frontend No README data
npm WARN Frontend No license field.

+ @types/react-redux@7.0.6
added 5 packages from 38 contributors in 11.659s
```

#### typescript-fsa

```console
> npm install --save typescript-fsa typescript-fsa-reducers
npm WARN saveError ENOENT: no such file or directory, open 'C:\projects\example\grbl_battle_simulator\src\Frontend\package.json'
npm WARN enoent ENOENT: no such file or directory, open 'C:\projects\example\grbl_battle_simulator\src\Frontend\package.json'
npm WARN react-redux@7.0.1 requires a peer of react@^16.8.4 but none is installed. You must install peer dependencies yourself.
npm WARN Frontend No description
npm WARN Frontend No repository field.
npm WARN Frontend No README data
npm WARN Frontend No license field.

+ typescript-fsa-reducers@1.2.1
+ typescript-fsa@3.0.0-beta-2
added 2 packages from 2 contributors and audited 66 packages in 1.748s
found 0 vulnerabilities
```

#### Action 実装

サンプルページそのまま実装

```typescript : src/actions/hogeAction.ts
import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const hogeActions = {
  updateName: actionCreator<string>('ACTIONS_UPDATE_NAME'),
  updateEmail: actionCreator<string>('ACTIONS_UPDATE_EMAIL'),
};
```

#### Reducer 実装

これもサンプルページそのまま実装

```typescript : src/states/hogeState.ts
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { hogeActions } from '../actions/hogeActions';

export interface HogeState {
  name: string;
  email: string;
}

const initialState: HogeState = {
  name: '',
  email: '',
};

export const hogeReducer = reducerWithInitialState(initialState)
  .case(hogeActions.updateName, (state, name) => {
    return Object.assign({}, state, { name });
  })
  .case(hogeActions.updateEmail, (state, email) => {
    return Object.assign({}, state, { email });
  });
```

#### Store 実装

またまたサンプルページそのまま実装

```ts : src/store.ts
import { createStore, combineReducers } from 'redux';
import { hogeReducer, HogeState } from './states/hogeState';

export type AppState = {
  hoge: HogeState;
};

const store = createStore(
  combineReducers<AppState>({
    hoge: hogeReducer,
  })
);

export default store;
```

#### Container 実装

またしてもサンプルページそのまま実装したかったけどエラー発生。

```typescript : src/containers/hogeContainer.ts
import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { hogeActions } from '../actions/hogeActions';
import { HogeComponent } from '../components/hogeComponent';

export interface HogeActions {
  updateName: (v: string) => Action<string>;
  updateEmail: (v: string) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch<void>) {
  return {
    updateName: (v: string) => dispatch(hogeActions.updateName(v)),
    updateEmail: (v: string) => dispatch(hogeActions.updateEmail(v)),
  };
}

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.hoge);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HogeComponent);
```

```console
型 'void' は制約 'Action<any>' を満たしていません。ts(2344)
```

次の修正でいけた

```ts:変更前
function mapDispatchToProps(dispatch: Dispatch<void>) {
```

```ts:変更後
function mapDispatchToProps(dispatch: Dispatch<any>) {
```

#### Component 実装

```tsx : src/components/hogeComponent.tsx
import * as React from 'react';
import { HogeState } from '../states/hogeState';
import { HogeActions } from '../containers/hogeContainer';

interface OwnProps {}

type HogeProps = OwnProps & HogeState & HogeActions;

export const HogeComponent: React.SFC<HogeProps> = (props: HogeProps) => {
  return (
    <div>
      <div className="field">
        <input type="text" placeholder="name" value={props.name} onChange={e => props.updateName(e.target.value)} />
      </div>
      <div className="field">
        <input type="email" placeholder="email" value={props.email} onChange={e => props.updateEmail(e.target.value)} />
      </div>
    </div>
  );
};
```

#### App.tsx への追加

ひたすらサンプルページそのまま実装

```tsx :src/App.tsx
import * as React from 'react';
import HogeContainer from '../src/containers/hogeContainer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HogeContainer />
      </div>
    );
  }
}

export default App;
```

#### index.tsx の更新

これも脳みそ使わずにそのまま実装。

```tsx :src/App.tsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
```
