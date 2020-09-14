let nameList = ["松田", "田中", "中山", "山本", "本田"];

// i < nameList.lengthの不等号に注意すること <= と記述すると余分が発生する
for(let i = 0; i < nameList.length; i++) {
  console.log((i+1) + "人目は" + nameList[i]);
}