// 2011年10月5日のDateオブジェクトを生成。
let jobs = new Date(2011, 9, 5);
// jobsを文字列に整形して表示。
console.log("ジョブズの命日: " + jobs.toDateString());
// jobsを現在のロケールにあった文字列に整形して表示。

// jobsの月だけ取得
let month = jobs.getMonth();
// jobsの月を1ヶ月進める。
jobs.setMonth(month + 1);
console.log("1ヶ月後: " + jobs.toLocaleDateString());

// jobsの日だけ取得。
let date = jobs.getDate();
// jobsの日を6日戻す
jobs.setDate(date - 6);
console.log("6日前: " + jobs.toLocaleDateString());

// 2018年2月3日18時35分51秒443

// Dateオブジェクト数値指定
new Date(2018, 1, 3, 18, 35, 51, 443)

// Dateオブジェクト文字列指定
new Date("2018/02/03 18:35:51")