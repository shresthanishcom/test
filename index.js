// var x = 2;
// setTimeout(() => {
//   console.log(x);
// }, 1000);
// x = 3;
// x = 7;

//take input
// let a = prompt("enter number");
// let b = prompt("enter number");
// var a = 3;
// var b = "3";

// if (a === b) {
//   console.log("same");
// } else {
//   console.log("not same");
// }

//logical conditional

// let age = prompt("enter your age");
// console.log(!(age < 16) ? "You are qualified" : "You are not qualified!");

//string

// let age = prompt("enter your age");
// console.log(+age); //makes positive

// let fname = prompt("FIrst name");
// let lname = prompt("last name");

// console.log(`Hello ${fname} ${lname}`);

//marks calculation

// let marks = prompt("enter your marks");

// if (marks <= 40) {
//   document.write("<h1> Fail </h1>");
// } else if (marks >= 40 && marks <= 80) {
//   document.write("<h1>First division</h1>");
// } else if (marks >= 80) {
//   document.write("<h1>Best distinction</h1>");
// } else {
//   document.write("<h1>Wrong data entered</h1>");
// }

//try
// let container = prompt("enter marks");
// console.log(+container);

// loops

// for in and for of
// let arr = [2, 2, 2, 2];

// for (a of arr) {
//   console.log(a);
// }

// let array = ["a", "b", "c", "d"];

// console.log(array.unshift("akk"));
// // console.log(array.pop());
// console.log(array);

// deleting element?

// let arr = ["1", 2, 3, 4, 5, 6];

// delete arr[0];
// console.log("before filter" + arr);
// arr = arr.filter(filterEmpty);
// console.log("after filter" + arr);

// function filterEmpty(element) {
//   console.log(element);
//   return element;
// }

// >>>>>>>>>>>>>>>>>>>>find

// array destrucuring and rest operator

// let arr = [1, 2, 3, 4, 5, 6];

// const [a, ...other] = arr;

// console.log(other);

// task/

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let user = prompt("Enter value to find index");
// // console.log(arr.indexOf(+user));//milcha

// string functions>>>>>>>>>>>

// let sentence = prompt("enter sentence");
// let user = prompt("which word to find??");

// let position = sentence.indexOf(user);
// document.write(sentence.slice(position));
