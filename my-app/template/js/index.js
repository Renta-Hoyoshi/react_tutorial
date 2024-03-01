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
// const name = "hoyohsi";
// const age = 25;

// // [私の名前はhoyoshiでｄす。年齢は25です。]

// //従来の方法
// const message  = "私の名前は" + name + "です。" + "年齢は" + age + "です。";
// // console.log(message);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * テンプレート文字列
 */
// 従来の巻数
// function func1(str) {
//     return str;
// }
// const func1 = function(str) {
//     return str;
//}

// // アロー関数
// const func2 = (str) => {
//     return str;
// };

// const func2 = (str) => str;
// console.log(func2("func1"));

// const func3 = (num1, num2) => {
//     return num1 + num2;
// };

// const func3 = (num1, num2) => ({
//     hoge: num1,
//     huga: num2,
// });

// console.log(func3(5, 30));

/**
 * 分割代入
 */

// const myProfile = {
//     name: "hoyoshi",
//     age: 25,
// };

// const message2 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message2);

// const { name, age } = myProfile;
// const message = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message);

// const myProfile = ["hoyoshi", 25];
// const message = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message);

// const [name, age] = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * デフォルト値(引数,分割代入)
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん!`);
// sayHello("よっしー");

// const myProfile = {
//     age: 25,
// };
// const { age, name = "ゲスト" } = myProfile;
// console.log(age);
// console.log(name);

/**
 * オブジェクトの省略記法
 */

// const name = "yossi";
// const age  = 25;

// const myProfile = {
//     name,
//     age,
// };
// console.log(myProfile);

/**
 * スプレッド構文
 */

// // 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピー, 結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// // スプレッド構文はディープコピー
// const arr6 = [...arr4];
// arr6[0] = 100; 
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// △bad copy.. (sharrow copy)
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr8); //[100, 20]
// console.log(arr4); //[100, 20]

/**
 * map, filterを使った配列の処理
 */

const nameArr = ["yossi", "wakki", "okapi"];
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//     return name;
// });
// const nameArr2 = nameArr.map((name) => console.log(name));
// console.log(nameArr2);
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//     return num % 2 == 1;
// })
// console.log(newNumArr);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// 自分以外にさんをつける
// const newNameArr = nameArr.map((name) => {
//     if (name == 'yossi') {
//         return name;
//     } else {
//         return `${name}さん`
//     }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// 条件式 ? trueのとき : falseのとき
// const val1 = 1 > 2 ? "True" : "False";
// console.log(val1);

// const num = 1300;
// // 3桁区切りのメソッド(数値にのみ使えるメソッド)
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を」にゅうりょくしてくだｓだい';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//     return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です';
// }
// console.log(checkSum(40, 50));
// console.log(checkSum(40, 70));

/**
 * 論理演算氏の本当の意味を知ろう && ||
 */
// truthy, falsyについて
//"ABC" 0 10 undefined null false NaN "" [] {}
// const val = undefined;
// if (val) {
//     console.log("valはtruthyです");
// } else {
//     console.log("valはfalsyです");
// }
// const flg1 = true;
// const flg2 = false;

// if (flg1 || flg2) {
//     console.log("1か2はtrue");
// }
// if (flg1 && flg2) {
//     console.log("1も2はtrue");
// }

// // || は左側がturthyの時その時点で返却する
// const num = 100;
// const fee = num || "金額は未設定です";
// console.log(fee);

// // &&は左側がfalthyの時その時点で返却する
// const num2 = "ABC";
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
