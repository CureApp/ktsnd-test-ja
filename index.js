module.exports = {

    /**
    質問一覧を返す

    @method getQuestions
    @return {Array(String)}
    */
    getQuestions: function() {

        return [
            'タバコを吸うこと自体が病気である。',
            '喫煙には文化がある。',
            'タバコは嗜好品（しこうひん：味や刺激を楽しむ品）である。',
            '喫煙する生活様式も尊重されてよい。',
            '喫煙によって人生が豊かになる人もいる。',
            'タバコには効用（からだや精神に良い作用）がある。',
            'タバコにはストレスを解消する作用がある。',
            'タバコは喫煙者の頭の働きを高める。',
            '医者はタバコの害を騒ぎすぎる。',
            '灰皿が置かれている場所は、喫煙できる場所である。'
        ];
   },

    /**
    indexで与えられた質問の選択肢を返す
    実際は質問内容によらず 同一の4択を返す

    @method getChoices
    @param {Number} qsIndex 質問票のインデックス 0, 1, 2, ...
    @return {Array(String)}
    */
    getChoices: function(qsIndex) {

        return [ 'そう思う', 'ややそう思う', 'あまりそう思わない', 'そう思わない' ]

    },

    /**
    indexで与えられた選択肢の配列から、点数を計算する

    @method calculate
    @param {Array(Number)} answerIndexes 選んだ選択肢のインデックスの配列(質問順)
    @return {Number} 点数
    */
    calculate: function(answerIndexes) {

        if (answerIndexes.length !== 10) {
            throw new Error('引数の長さが10でない');
        }
        // Q1 のみ、qsIndexの通りの点数, Q2~Q10は 3 - qsIndex

        return answerIndexes.reduce(function(total, qsIndex, i) {

            var point;

            if (i === 0) {
                point = qsIndex;
            }
            else {
                point = 3 - qsIndex;
            }

            return total + point;

        }, 0);
    }
};

