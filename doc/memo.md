# memo

## 概要

戦闘シミュレータあったら便利だなーと思ったので作り始める
アビリティや石の使用順序やらを戦闘ログとして一覧に表示したり、
過去の時点から分岐とかできたり、バフ、デバフ有無でのダメージ量変化をみたりしたい。

### 画面一覧

1. ジータ設定
2. キャラ設定
3. 武器設定
4. 石設定
5. 敵設定
6. その他設定
7. 戦闘画面

1,2,6 は先に作る。3,4,5 は後で作る。
設定した内容は保存したい

それぞれの画面で設定する項目を決める。

### ジータ設定画面

1. Rank 設定
   テキストボックスで入力
   数字のみ
   1-250？

2. 属性設定(武器設定画面ができるまでの一時的な設定)
   コンボボックス

3. HP
   テキストボックスで入力
   (武器設定画面ができるまでの一時的な設定)

4. 攻撃力
   テキストボックスで入力
   (武器設定画面ができるまでの一時的な設定)

5. ジョブ選択

   1. ジョブ名
   2. ジョブレベル
      1-20 まで
      コンボボックスで指定

   3. 得意武器 1、得意武器 2
      表示のみ

   4. タイプ
      表示のみ

   5. LB 指定
      LB 指定参照ダイアログ
      rank によって表示項目を変える

   6. ジョブ変更ボタン
      ジョブ指定参照ダイアログ
      フィルタ機能
      1,2,3,4,ex1,ex2

6. アビリティ選択
   アビリティ 4 つ
   アビリティ参照ダイアログで選択する

   1. アビリティ参照ダイアログ
      フィルタ機能

7. サポートアビリティ
   表示のみ

8. マスターしたジョブの一覧
   on/off 程度でいいかも

9. ボーナス

   1. 発動中のマスターボーナス
      表示のみ

   2. 発動中の LVUP ボーナス
      表示のみ

### キャラ設定画面

1. メインメンバー

   1. 名前
   2. レベル
      テキストボックスで入力
   3. タイプ
   4. 種族
   5. 得意武器
   6. HP
   7. 攻撃力
   8. 基礎 DA 率
   9. 基礎 TA 率
   10. プラス
       テキストボックスで入力
   11. 奥義
   12. アビリティ
   13. サポアビ
       リミボアビ
   14. LB
   15. 指輪
   16. キャラ入れ替えボタン
   17. パーティーから外すボタン

2. サブメンバー

   1. 名前
   2. レベル
   3. タイプ
   4. 種族
   5. 得意武器
   6. HP
   7. 攻撃力
   8. 基礎 DA 率
   9. 基礎 TA 率
   10. プラス
       テキストボックスで入力
   11. 奥義
   12. アビリティ
   13. サポアビ
       リミボアビ
   14. LB
   15. 指輪
   16. キャラ入れ替えボタン
   17. パーティーから外すボタン

3. キャラ選択ダイアログ
   1. フィルタ機能
      属性、種族、レアリティ、得意武器

### 武器設定画面

1. メイン

   1. 属性
   2. lv
   3. slv
   4. 攻撃力
   5. HP
   6. 攻撃力
   7. プラス

2. その他 1-9

   1. 属性
   2. lv
   3. slv
   4. 攻撃力
   5. HP
   6. 攻撃力
   7. プラス

3. 武器選択ダイアログ
   1. フィルタ機能
      属性、レアリティ、武器種

### 石設定画面

1. メイン

   1. 属性
   2. lv
   3. 攻撃力
   4. HP
   5. プラス
   6. 使用間隔
   7. 使用可能

2. サブ 1-4
   1. 属性
   2. lv
   3. 攻撃力
   4. HP
   5. プラス
   6. 使用間隔
   7. 使用可能

### 敵設定画面

1. 名前
2. HP
3. OD
4. 属性
5. 攻撃パターン

   1. 通常時
   2. OD 時
   3. 特殊行動
      1. HP トリガー

6. 防御値
7. 弱体耐性
8. 基礎 DA 率
9. 基礎 TA 率
10. 除外ボタン
11. 読込ボタン
12. 保存ボタン
13. 敵一覧

### その他設定画面

1. 団アビとか

### 戦闘画面

1. 敵データ

   1. HP
      1. パーセント
      2. 現在 HP
      3. MAXHP
      4. HP ゲージ
   2. チャージターン（ct）
   3. モードゲージ、OD ゲージ
   4. ステータス効果一覧（バフ、デバフ）
      1. アイコン
      2. 効果名（両面、片面など
      3. 残時間数

2. 味方データ

   1. メインメンバー 1
      1. 識別子（顔画像か名前
      2. HP
         1. 現在 HP
         2. MAXHP
         3. HP ゲージ
      3. 奥義ゲージ
      4. 属性
      5. アビリティ
         1. 1 アビ
            1. アイコン
            2. アビリティ名
            3. 使用可、不可能
            4. 詳細
            5. 再使用ターン数
         2. 2 アビ
         3. 3 アビ
         4. 4 アビ
      6. ステータス効果(バフ、デバフ)
         1. アイコン
         2. 効果名（両面、片面など
         3. 残ターン数
   2. メインメンバー 2
   3. メインメンバー 3
   4. メインメンバー 4
   5. サブメンバー 1
      1. 識別子（顔画像か名前
      2. HP ゲージ
      3. 奥義ゲージ
      4. アビリティ 1. 1 アビ 1. アイコン 2. アビリティ名 3. 使用可、不可能 4. 詳細 5. 再使用ターン数 2. 2 アビ 3. 3 アビ 4. 4 アビ
         // ステータス効果は不要
   6. サブメンバー 2

3. 召喚石一覧

   1. メイン石
      1. 識別子（顔画像か名前
      2. 再使用ターン数
      3. 再度召喚不可
   2. サブ石 1
   3. サブ石 2
   4. サブ石 3
   5. サブ石 4
   6. フレ石

4. 戦闘ログ

   1. ターン数
   2. 与ダメ
   3. バフ、デバフ

5. 与ダメグラフ

git log --all --graph --decorate --oneline みたいなのを出したい。

詳細は logtree.md に記述

### Store sample

```ts
interface initialState :{ //戦闘画面に移行する前のデータ
    Djeeta:{
        rank:"225",
        element:"earth|wind|fire|water|light|dark",
        job:{
            id:"",
        },
        abilities:[
            {id:""},
            {id:""},
            {id:""},
            {id:""}
        ],
        supportAbilities:[
            {},
            {},
        ],
        bonus:[],
        limitbonus:[],
    },
    Characters:{
        main:[
            {id:"",},
            {id:"",},
            {id:"",},
        ],
        sub:[
            {id:"",},
            {id:"",},
        ]
    },
    Weapon:{
        main:{
            id:"",
            lv:"",
            slv:"",
            plus:"",
        },
        sub:[
            {
                id:"",
                lv:"",
                slv:"",
                plus:"",
            }, ...
        ]
    },
    Summon:{},
    Enemy:{},
    Battle:{},
},
masterData:{
    DjeetaJobs:{
        fetchStatus:"",
        entities: [
            "1": {
                id:"1",
                name:"",
            },
            "2": {
                id:"2",
                name:"",
            },
            "3": {
                id:"3",
                name:"",
            },
        ],
    },
    Characters:{
        fetchStatus:"",
        entities: [
            {
                id: "",
                name: "",
                hp: "",
                attack: "",
                element: "earth|air|fire|water|light|dark",
                abilities: [
                    {},{},{},{}
                ],
                supportabilities: [
                    {},{}
                ],
            },
            ...
        ]
    },
    Weapons:{
        fetchStatus:"",
        entities: [
            {
                id:"",
                name:"",
                maxlv:"",
                element:"earth|air|fire|water|light|dark",
                hp:"",
                attack:"",
                maxhp:"",
                maxattack:"",
                esoteric,:"",
                skills:[
                    {id:""},
                    {id:""},
                ]
            },
            ...
        ]
    },
    WeaponSkills:[
        {
            id:"",
            name:"",
            group:"",
            //TODO その他の属性はダメージ計算式を正確に把握してから記述する
        },
        ...
    ],
    Summons:[
        {
            id:"",
            name:"",
            element:"earth|air|fire|water|light|dark",
            bless:"",

        }
    ],
},
battleLog:{
    rootNode: {},
    nodes: [
        "id": {
            id: "",
        }
    ]

}
ui: { //Storeで管理せずにそれぞれのコンポーネントに持たせていいかも
    DjeetaView:{},
    CharactersView:{},
    WeaponView:{},
    SummonView:{},
    EnemyView:{},
    BattleView:{},
}
```

```ts :DjeetaStatusInterface
interface Weapon {
  name: '剣' | '短剣' | '槍' | '斧' | '杖' | '銃' | '格闘' | '弓' | '楽器' | '刀';
}
interface Ability {
  id: string;
  name: string;
  icon: string;
  effect: string;
}
interface SupportAbility {
  id: string;
  name: string;
  icon: string;
  effect: string;
}
interface LvUpBounus {
  lv: number;
  name: string;
  effect: string;
}
interface LimitBounus {
  class: number;
  max: number;
  items: LimitBounusItem[];
}
interface LimitBounusItem {
  id: string;
  name: string;
  enable: boolean;
  effects: LimitBounusEffect[];
}
interface LimitBounusEffect {
  lv: number;
  effect: string;
}
interface Job {
  id: string;
  name: string;
  forteWeapon1: Weapon;
  forteWeapon2: Weapon;
  Abilities: Ability[];
  SupportAbilities: SupportAbility[];
  LvUpBounus: LvUpBounus[];
  LimitBounus: LimitBounus;
}
```
