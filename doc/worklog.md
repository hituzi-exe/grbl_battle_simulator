## 2019/04/12
一通り仕様も決まったので開発に着手。
webアプリにするので react+redux 使ってみようとおもう。
管理する情報が多すぎるので、勉強もかねてredux使ってみる。

### 開発環境の構築
OS:Windows 10  
エディタ:vscodeとvim  
シェル:cmder  
ソース管理:git  

まずはnode.jsとnpmのバージョン確認、更新
```
> npm -v
6.4.1
> node -v
v8.11.1
```

node.jsは頻繁にバージョンアップされるので、それ専用のバージョン管理ツールがあるとのこと。

### nodistのインストール
次のページからnodeistのインストーラーをダウンロード。
<https://github.com/nullivex/nodist/releases>

もともといれてたnode.js v8.11.1 をアンインストール
これでnodeは動かなくなったはず。

```
> node -v
v11.13.0
```
・・・あれ？
まぁいいやnodist入れたときに標準で入ったんだろう。

試しにnodist動かしてみる
```
> nodist
  (x64)
> 11.13.0  (global: v11.13.0)
```

最新版をインストールする。
```
> nodist dist
～（中略）～
  11.9.0
  11.10.0
  11.12.0
  11.13.0
  11.14.0
```

11.14.0がnodistでインストールできる最新らしいのでそれを選択。
```
> nodist + 11.14.0
 11.14.0 [===============] 25658/25658 KiB 100% 0.0s
11.14.0
```

バージョン確認。
```
> node -v
v11.13.0
```

切り替えるの忘れてた。
```
> nodist global 11.14.0
11.14.0
11.14.0 (global)
```

再度バージョン確認
```
> node -v
v11.14.0
```
ok、node.jsの更新終了

### npmの更新
まずはバージョン確認
```
> npm --version
6.9.0
```

最新っぽいけど一応更新してみる。
```
> npm update -g npm
```

何も起きなかった。はやり最新だったらしい。

### create-react-appのインストール
ゼロからWebpackやBabelをいじってReactのセットアップできるほどの技量がないので
頼れるものには頼っていく。

```
> npm install -g create-react-app
C:\Program Files (x86)\Nodist\bin\create-react-app -> C:\Program Files (x86)\Nodist\bin\node_modules\create-react-app\index.js
+ create-react-app@2.1.8
added 63 packages from 20 contributors in 7.874s
```

### create-react-appコマンドでアプリを作成
```
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

5分ぐらいでセットアップ完了。先輩エンジニアの気遣いで心があったけぇ・・・

### アプリの動作確認
```
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

### やっぱりtypescriptで書いてみよう
なんとcreate-react-appコマンドには`--typescript`オプションが存在するらしい。
<https://qiita.com/IzumiSy/items/b7d8a96eacd2cd8ad510>ここで初めて知った…知らなかったそんなの


もともとJavaとかVB.NETとか静的型付け言語の出身なんでそっちのほうがよくなじむだろう。

さっき作ったのを削除、`--typescript`オプションを付けてもう一回実行する。
```
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
これまた5分ぐらいでセットアップ完了。先輩エンジニアには足を向けて寝られないです。


### はじめはパッケージをインストールして、あとは流れでお願いします。

上記のURL<https://qiita.com/IzumiSy/items/b7d8a96eacd2cd8ad510>に従って最速でReact+Redux+TypeScriptなアプリを作っていく。
書いてあるコマンドをどんどん叩いていこう。
#### reduxのインストール
```
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
```
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

#### Action実装
#### Reducer実装
#### Store実装

