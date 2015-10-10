# ktsnd-test-ja
日本語のKTSND (加濃式社会的ニコチン依存度質問票) の質問票の文言と点数計算

## install

```sh
npm install ktsnd-test-ja
```

## usage

```js
var KTSND = require('ktsnd-test-ja');
```

質問一覧を取得
```js
KTSND.getQuestions();
```

質問の選択肢を取得
```js
KTSND.getChoices(0); // Q1の選択肢の配列
KTSND.getChoices(4); // Q5の選択肢の配列
```

点数を計算
```js
// 引数はQ1~Q10 の回答の配列. getChoices で得られた配列のインデックスの値の列を渡す
KTSND.calculate([2,1,3,0,1,2,0,1,2,3]); // 16 を返す。
```

## LICENSE
MIT
