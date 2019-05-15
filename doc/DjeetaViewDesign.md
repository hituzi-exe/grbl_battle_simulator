# ジータ設定画面

ジータちゃんに関する情報をセットする画面。
ランク、属性、ジョブ、ジョブレベル、EX アビリティ、Free アビリティ、LimitBounus の設定をする。

## ジータのステータス

1. Rank 設定
   テキストボックスで入力
   数字のみ
   1-9999

   ディスガイアですら 9999 が上限だし、それ以上はさすがに実装されないだろう

2. 属性設定(武器設定画面ができるまでの一時的な設定)
   コンボボックス

3. HP
   テキストボックスで入力
   (武器設定画面ができるまでの一時的な設定)

4. 攻撃力
   テキストボックスで入力
   (武器設定画面ができるまでの一時的な設定)

## 現在のジョブ

1. ジョブ名
   タイトルにどーんと出す

2. ジョブレベル
   テキストボックスで入力
   数字のみ
   1-20

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

## 現在のジョブのアビリティ

1. アビリティ選択
   アビリティ １、３ つ
   アビリティ参照ダイアログで選択する

   1. アビリティ参照ダイアログ
      フィルタ機能

## 現在の EX アビリティ

1. アビリティ選択
   アビリティ １、３ つ
   アビリティ参照ダイアログで選択する

   1. アビリティ参照ダイアログ
      フィルタ機能

## 現在の Free アビリティ

1. アビリティ選択
   アビリティ １、３ つ
   アビリティ参照ダイアログで選択する

   1. アビリティ参照ダイアログ
      フィルタ機能

## 現在のジョブのサポートアビリティ

1. サポートアビリティ
   表示のみ

## ジョブの一覧

1. マスターしたジョブの一覧
   on/off 程度でいいかも

## アビリティの一覧

1. マスターしたジョブの一覧
   on/off 程度でいいかも

## Bounus

1. ボーナス

   1. 発動中のマスターボーナス
      表示のみ

   1. 発動中の LVUP ボーナス
      表示のみ

## Limit Bounus

## Store sample

設計手法が全く分からん。教えてくれ五飛。VSCode は俺に何も言ってはくれない。

```typescript
//event
//これに表示する項目をすべて詰め込む。
interface Djeeta {
    rank: number;
    element: ""|"earth"|"wind"|"fire"|"water"|"light"|" dark";
    HP: number;
    attack: number;
    CurrentJob: Job;
    abilities: ability[],
    exAbilities: ability[],
    freeAbilities: ability[],
    supportAbilities: supportAbility[],
    LvUpBounus: LvUpBounus[];
    MasterBounus: MasterBounus[];
    LimitBounus: {
        id: number;
        lv: number;
    }[],
}

//resource
interface Job {
    id: string;
    name: string;
    style: style;
    forteWeapon1: weaponType;
    forteWeapon2: weaponType;
    abilities: ability[];
    supportAbilities: supportAbility[];
    LvUpBounus: LvUpBounus[];
    MasterBounus: MasterBounus[];
}
interface LvUpBounus {
    lv: number;
    name: string;
    effect: string;
}
interface MasterBounus {
    id:string;
    name: string;
    effect: string;
}

interface style: {
    type: 'バランス' | '攻撃' | '防御' | '回復' | '特殊';
}
or
interface style: {
    id:string;
    name:string;
}

interface weaponType {
    type: '剣' | '短剣' | '槍' | '斧' | '杖' | '銃' | '格闘' | '弓' | '楽器' | '刀';
}
or
interface weaponType {
    id:string;
    name:string;
}

interface ability: {
    id:string;
    name: string;
    icon: string;
    effect: string;
    cooldown: number;
}
interface supportAbility: {
    id:string;
    name: string;
    icon: string;
    effect: string;
}
interface LimitBounusClass {
    rank: number;
    class: number;
    maxItemNum: number;
}
interface LimitBounusItem {
    id: string;
    name: string;
    enableClass: number;
    effects: LimitBounusEffect[];
}
interface LimitBounusEffect {
    lv: 0 | 1 | 2 | 3;
    effect: string;
}
```
