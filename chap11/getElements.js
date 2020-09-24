function onTagButtonClick() {
  // タグ名がbuttonの要素を取得
  let buttonTags = document.getElementsByTagName("button");
  // 結果表示用の文字列変数を用意。
  let result = "";
  // 取得した要素集合のループ。
  for(let i = 0; i < buttonTags.length; i++) {
    // 各要素のテキスト部分を取得して結果表示文字列変数に文字列結合。
    result += buttonTags[i].textContent + ":";
  }
  // 結果表示用のp要素を取得。
  let resultP = document.getElementById("result");
  // 結果表示用のp要素のテキストに結果を表示。
  resultP.textContent = result;
}

function onClassButtonClick() {
  // redTextクラスを含む要素を取得。
  let redElements = document.getElementsByClassName("redText");
  // 結果表示用の文字列変数を用意。
  let result = "";
  // 取得した要素集合のループ。
  for(let i = 0; i < redElements.length; i++) {
    // 各要素のテキスト部分を取得して結果表示文字列変数に文字列結合。
    result += redElements[i].textContent + ":";
  }
  // 結果表示用のp要素を取得。
  let resultP = document.getElementById("result");
  // 結果教示用のp要素のテキストに結果を表示。
  resultP.textContent = result;
}

function onNameButtonClick() {
  // name属性がskillの要素を取得。
  let checkboxes = document.getElementsByName("skill");

  // 結果表示用の文字列変数を用意。
  let result = "チェックされたもの:";
 // 取得した要素集合のループ。
  for(let i = 0; i < checkboxes.length; i++) {
  // 各チェックボックス要素がチェックされていれば…
    if(checkboxes[i].checked) {
      // 各要素のvalue部分を取得して結果表示文字列変数に文字列結合。
      result += checkboxes[i].value + ",";
    }
  }
    // 結果表示用のp要素を取得。
    let resultP = document.getElementById("result");
    // 結果教示用のp要素のテキストに結果を表示。
    resultP.textContent = result;
}