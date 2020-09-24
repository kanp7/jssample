function onAddListItemButtonClick() {
  // 追加する文字列の入力欄input要素を取得。
  let addListItemInput = document.getElementById("addListItemInput");
  // input要素のテキスト部分から追加する文字列を取得。
  let addListItemInputText = addListItemInput.value;
  // li要素を生成。
  let listItem = document.createElement("li");
  // li要素のテキスト部分に入力された文字列を設定。
  listItem.textContent = addListItemInputText;
  // class属性にblueTextを設定。
  listItem.classList.add("blueText");
  // リスト表示要素を取得。
  let skillList = document.getElementById("skillList");

  // リスト表示の末尾に生成したli要素を追加。
  skillList.appendChild(listItem);

  // 末尾以外への追加 insertBefore() 第一引数に追加要素、第二引数にどの要素の前に追加するか
  // skillList.insertBefore(listItem, skillList.firstElementChild);
}

function onRemoveListItemButtonClick() {
  // リスト表示要素を取得。
  let skillList = document.getElementById("skillList");

  // リスト表示要素内の末尾の要素を削除。
  skillList.removeChild(skillList.lastElementChild);
}

// 要素を置換 replaceChild() 第一引数に置換後の要素、第二引数には置換前の要素
// skillList.replaceChild(listItem, skillList.lastElementChild);

function onAddLinkButtonClick() {
  // URL入力欄からURL文字列を取得。
  let addLinkUrlText = document.getElementById("addLinkUrl").value;
  // リンク名入力欄からリンク名文字列を取得。
  let addLinkNameText = document.getElementById("addLinkName").value;
  // aタグ文字列を生成
  let addHtml = "<a href=\"" + addLinkUrlText + "\">" + addLinkNameText + "</a>";
  // リンク表示用p要素の取得。
  let addLink = document.getElementById("addLink");
  // リンク表示用p要素内部にaタグ文字列をHTMLとして設定。
  addLink.innerHTML = addHtml;
}
