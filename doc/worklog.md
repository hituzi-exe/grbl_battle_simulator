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

