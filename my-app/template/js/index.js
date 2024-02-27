/**
 * const,let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書きが可能
// val1 = "val1を上書き";
// console.log(val1);

// //var宣言は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言付不可
// let val2 = "let変数を再宣言";

// const val3 = "const宣言";
// console.log(val3);

// // // const宣言は上書き不可
// // val3 = "constへんすうをうわがき";

// // constは再宣言不可
// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティーの変更が可能
// const val4 = {
//     name: "じゃけぇ",
//     age: 31
// };
// console.log(val4);
// val4.name = "hoyoshi";
// val4.address = "shinkoiwa";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
const name = "hoyohsi";
const age = 25;

// [私の名前はhoyoshiでｄす。年齢は25です。]

//従来の方法
const message  = "私の名前は" + name + "です。" + "年齢は" + age + "です。";
// console.log(message);

// テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);



