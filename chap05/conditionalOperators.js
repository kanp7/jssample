let num = Math.round(Math.random() * 100);
console.log("現在の値: " + num);
// 論理演算子より比較演算子のほうが優先順位が高いので2つの式を囲む()はなくても良い
if((num % 2 === 0) && (num % 3 ===0)) {
  console.log("2の倍数でしかも3の倍数です");
} else {
  console.log("それ以外です");
}