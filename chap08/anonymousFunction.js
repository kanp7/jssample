let list = [2, 7, 66, 4, 9];
list.forEach(
  function(currentValue, index, array) {
    console.log((index + 1) + "個目の値: " + currentValue);
  }
);

// コールバック関数の性質上、関数が再利用されないことが多いため
// 上記のような、forEach()の引数に直接定義する
// 無名関数の形式で使うことが多い。