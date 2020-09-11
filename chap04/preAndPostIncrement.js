let num1 = 10;
let num2 = 10;

let ans1 = ++num1;
let ans2 = num2++;

console.log("num1とans1: " + num1 + "と" + ans1);
// num1とans1: 11と11
// 前置: インクリメント→代入

console.log("num2とans2: " + num2 + "と" + ans2);
// num2とans2: 11と10
// 後置: 代入→インクリメント

// インクリメント、デクリメントと代入を同時にすべきではない
// 単独で使い、基本は後置で記述することが多い

