function toThrowError(fn) {
    console.assert( (function() {
        try {
            fn();
            return false;
        }
        catch (e) {
            return true;
        }
    })() )
}


var KTSND = require('./index.js');


// getQuestions
console.assert(KTSND.getQuestions().length === 10);

// getChoices
console.assert(KTSND.getChoices(0).length === 4);
console.assert(KTSND.getChoices(2)[0] === 'そう思う');
console.assert(KTSND.getChoices(3)[1] === 'ややそう思う');
console.assert(KTSND.getChoices(4)[2] === 'あまりそう思わない');
console.assert(KTSND.getChoices(5)[3] === 'そう思わない');

// getScore
console.assert(KTSND.getScore(0,1) === 1);
console.assert(KTSND.getScore(1,0) === 3);
console.assert(KTSND.getScore(2,1) === 2);
console.assert(KTSND.getScore(3,2) === 1);
console.assert(KTSND.getScore(4,3) === 0);
console.assert(KTSND.getScore(5,1) === 2);

// calculate
console.assert(KTSND.calculate([0,0,0,0,0,0,0,0,0,0]) === 27);
console.assert(KTSND.calculate([3,3,3,3,3,3,3,3,3,3]) === 3);
console.assert(KTSND.calculate([2,1,3,0,1,2,0,1,2,3]) === 16);

toThrowError(function() { KTSND.calculate([0,0,0,3,0]) }); // 長さのエラーを出す

console.log('すべてのテスト通過');
