// const information = {
//     username : "shraddhakhapra",
//     isFollow : false,
//     post : 195,
//     followers : 569,
//     following : 4,
// }; 
//  let a = 5;
//  let b = 2;
//  console.log("a=",a ,"& ,b=",b);
// console.log("a+b =",a+b);
// console.log("a-b =",a-b);
// console.log("a*b =",a*b);
// console.log("a/b =",a/b);
// let num = prompt("enter a number");
// if(num % 5===0){
//    console.log(num,"is a multiple of 5"); 
// }else {
//     console.log(num,"is not a multiple of 5");
// }
// let score = 95;
// let grade;
// if(score>=90 && score<=100){
//     grade="A";
// }else if(score>=70 && score<=89){
//     grade = "B";
// }else if(score>=60 && score<=69){
//     grade = "C";
// }else if(score>=50 && score<=59){
//     grade = "D";
// }else if(score>=0 && score<=49){
//     grade = "F";
// }
// console.log("accprding to your score,your grade is :",grade);
// for(let i=1;i<=100;i++){
//     console.log("Mrunali Marathe");
// }
// let i = 1;
// while(i<=10){
//     console.log("i =",i);
//     i++;
// }
// let i = 1;
// do{
//     console.log("i =",i);
//     i++;
// }while(i<=10);

// let str = "JavaScript";
// let size = 0;
// for(let val of str){
//     console.log("val =",val);
//     size++;
// }
// console.log("size =",size);
// let student = {
//     fullname :"Mrunali Marathe",
//     rollNo : 21119325,
//     age : 23,
//     cgpa : 6.2,
//     result : true,
// };
// for(let res in student){
//     console.log("res =",res,"value :",student[res]);
// }
// for(let i = 0; i<=100; i++){
//     if(i%2===0){
//         console.log("i =",i);
//     }
// }
// let gameNo = 25;
// let guess = prompt("Guess the right number");
//     while(gameNo !=guess){
//         guess = prompt("you entered wrong number,guess again:");
//     }
//     console.log("congratulations you entered the right number go back");
// let obj = {
//     item : "pen",
//     price : 10,
// };
// let output = `The cost of ${obj.item} is ${obj.price} rupee`;
// console.log(output);
// let str = "        Mrunali    Marathe        ";
// // str = str.toLowerCase();
// console.log(str.trim());
// let str = "Mrunaliiiiiiiiiii";
// console.log(str.replaceAll("i","K"));

// let str1 = "Mrunali";
// console.log(str1.charAt(1));
// let fullName = prompt("enter their full name");
// let username = "@" + fullName + fullName.length;
// console.log(username);

// let cities = ["Pune","Nagpur","Mumbai","Amravati","Yavatmal"];
// for(let i = 0; i<cities.length; i++){
//     console.log(cities[i]);
// }

// let sum = 0;
// for(let val of marks){
//     sum +=val;
// }
// let avg = sum / marks.length;
// console.log(`The avg value of marks is = ${avg}`);
    
// let object = ["Mango","Orange","Banana"];
// console.log(object.push("Lichi"));

// let food = ["Apple","Banana","Graps"];
// let dairyFood = ["Dairymilk","Milk","Donuts"];
// let total = food.concat(dairyFood);
// console.log(total);

// let food = ["Apple","Banana","Graps","Watermelon","Lichi"];
// console.log(food.slice(1,3));
// console.log(food);
//  let some = [1,2,3,4,5,6,7];
//  some.splice(2,2,10,25);
//  console.log(some);
// let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.shift();
// companies.splice(2,1,"Ola");
// companies.push("Amazon");
// console.log(companies);

// function myName(a,b){
//   sum = a+b;
//   console.log(a+b);
//   return sum;
// }
//  let value = myName(5,2);
 // const arrow = (a,b)=>{
//     console.log(a+b);
// }
// arrow(7,8);
// function myFunction(str)=>{// and this is by arrow method(const myFunction = (str)=>)
//     let count = 0;
//     for(const char of str){
//         if(char === "a"|| char === "e"|| char === "i"|| char === "o"|| char === "u"){
//             count++;
//         }
//     }
//     console.log(count);

//}
// myFunction("mrunalimarathe");

// let arr = [1,2,3,4,5];
// arr.forEach(function printVal(val){//arr.forEach(valu)=>{console.log(val);}
//     console.log(val**2); 
// });
// let arr = [1,2,3,4];
// const value = arr.reduces((res,curr)=>{
//     return res+curr;
// }); 
// console.log(value);
// let what = document.getElementById("Header");
//  console.dir(what);

//  let what = document.getElementsByClassName("what");
//  console.dir(what);

// let headings = document.getElementsByTagName("h1");
// console.log(headings);

// let what = document.querySelector("h1");
// console.dir(what);

// let whats = document.querySelectorAll(".what");
// console.dir(what);

// console.dir(document.body.firstChild);

// console.log(div.innerText);

let h1 = document.querySelector("h1");
console.dir(h1.innerText);
h1.innerText = h1.innerText +" Apna college";





