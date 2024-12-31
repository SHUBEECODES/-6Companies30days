// Variables in javascript
// name="shubhangi garg";
// age=21;
// console.log(name);
// console.log(age);
// x=null;
// console.log(x);
// isfollow = true;
// console.log(isfollow);
// keywords of variables in JS
// var a = 20;
// var a = 50;
// var can re declared and re-updated

// let cannot be re-declared but updated

// const cannot be re-updated or re-declared
// {
//     let a = 99;
    
// }
// {
//     let a = 100;
// }
// let price = 100.15;
// let x = BigInt("123");
// let f = Symbol("hello!");
// const student = {
//     fullName: "shubhangi Garg",
//     age:21,
//     cgpa:8.6,
//     isPass:true


// };
// student["age"] = student["age"]+2;
// console.log(student.age);
// const product = {
//     productName:"Parker Jorter Standard CT Ball Pen",
//     color:"(Black)",
//     price:270,
// }
// const profile={
//     fullName:"Tony Stark",
//     isFollow: true,
//     posts: 100,
//     followers: BigInt("143"),
// };

// ARITHMETIC OPERATORS
// let a =5;
// let b=2;
// console.log("a=",a,"&b=",b);
// console.log("a+b",a+b);
// console.log("a-b",a-b);
// console.log("a*b",a*b);
// console.log("a/b",a/b);
// console.log("a%b=",a%b);
// console.log("a**b=",a**b);

// ASSIGNMENT OPERATORS
// let a=5;
// let b=2;
// a **= 4;
// console.log("a=",a);

// COMPARISON OPERATOR
// let a=5;
// let b="5"
// console.log(a!==b);

// LOGICAL OPERATORS- &&, ||, !
// let a=5;
// let b=6;
// let cond1= a>b;
// let cond2= b===6;
// console.log( !cond1 && cond2);

// CONDITIONAL STATEMENTS
// let num = 44;
// if(num%2===0){
//     console.log(num," is even");
// }else{
//     console.log(num, " is odd");
// }

// let mode = "pink";
// let color;
// if(mode==="dark"){
//     color= "black";
// }else if(mode==="blue"){
//     color= "blue";
// }else if(mode==="pink"){
//     color="pink";
// }else{
//     color="white";
// }
// console.log(color);

// TERNARY OPERATOR
// let age= 15;
// let result = age>=18? "adult":"not adult";
// console.log(result);

// let number = prompt("enter a number");
// if(number % 5===0){
//     console.log(number,"is a multiple of 5");
// }else{
//     console.log(number,"is not a multiple of 5");
// }

// let score = prompt("please enter your score");
// let grades;
// if(score<=100 && score>=90){
//     grades = "A";
// }else if(score<=89 && score>=70){
//     grades = "B";
// }else if(score<=69 && score>=60){
//     grades="C";
// }else if(score<=59 && score>=50){
//     grades = "D";
// }else{
//     grades="F";
// }
// console.log(grades);

// FOR-LOOP
// for(let i=1;i<=10;i++){
//     console.log("hello world");
// }
// console.log("loop has ended")

// CALCULATE THE SUM OF 1 TO N NATURAL NUMBERS;
// let n = prompt("please enter a number");
// let sum=0;
// for(let i=1;i<=n;i++){
//     sum+=i;

// }
// console.log(sum);

// WHILE-LOOP
// let i=-5;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// DO-WHILE LOOP- WILL RUN ATLEAST ONE
// do{
//     console.log("hello world");
//     i++;
// }while(i<0);

// FOR-OF LOOP
// let str="javascript";
// let size = 0;
// for(let i of str){
//     size++;
//     console.log("i= " , i);
// }
// console.log("size of str is = ",size);

// FOR-IN LOOP
// const student = {
//     name: "shubhangi garg",
//     age:21,
//     cgpa:8.6,
//     ispass:true
// };
// for(let key in student){
//     console.log("key = ",key , "value= " , student[key]);
// }

// PRINT ALL THE EVEN NUMBER FROM 0 TO 100
// for(let i=0;i<=100;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

// GAME
// let a = prompt("guess the number");;
// let val = 25;
// while(a!=val){
//     a= prompt("guess the number");
// }
// console.log("correct guess");

// STRING
// let str = "javascript";
// console.log(str);
// console.log(str.length);
// console.log(str[5]);

// String templating and string interpolation
// const obj = {
//     item : "pen",
//     price:10
// };
// let str = `the price of the ${obj.item} is ${obj.price} rupees`;
// console.log(str);

// escape characters /n and /t
// let str = "apna\tcollege";
// console.log(str.length);

// STRING METHODS
// let str = "javascript";
// console.log(str.toUpperCase());
// //lowercase
// console.log(str.toLowerCase());
// //trim()--trims whitespaces from the starting and the end
// console.log(str.trim());
// // slice(start,end?)--end is non-inclusive
// console.log(str.slice(1,4));
// // concat()
// let str1 = "hello";
// let str2 = "world";
// console.log(str1.concat(str2));
// console.log(str1+str2);
// console.log("my first output was"+str1+str2);
// console.log("hello"+1123);
// // str.replace(searchval,newval)
// console.log(str1.replace("h","y"));
// console.log(str1.replaceAll("l","p"));
// // str.charAt(idx)
// console.log(str.charAt(5));

// PRACTISE
// let fullname = prompt("Please enter your full name");
// let username = "@"+fullname+fullname.length;
// console.log("your username is: ",username);

// ARRAYS
// let marks = [98,67,55,43,23];
// console.log(marks);
// console.log(marks.length);
// // ARRAY IS ALSO A TYPE OF OBJECT
// console.log(typeof marks);
// // FOR LOOP ON ARRAYS
 //let fruits = ["mango","apple","litchi","pineapple","watermelon","orange"];
// // for(let i=0;i<fruits.length;i++){
// //     console.log(fruits[i]);
// // }
// // FOR-OF LOOP
// for(fruit of fruits){
//     console.log(fruit);
// }
// // FOR-IN LOOP
// for(fruit in fruits){
//     console.log(fruits[fruit]);
// }
// PRACTICE
// let marks = [85,97,44,37,76,60];
// let sum=0;
// for(let i=0;i<marks.length;i++){
//     sum+=marks[i];

// }
// sum=sum/marks.length;
// console.log("the average marks are= ",sum);

// let prices = [250,645,300,900,50];
// for(let i=0;i<prices.length;i++){
//     prices[i] = prices[i]-(10/100)*prices[i];
// }
// console.log(`the new prices after applying 10% offer are ${prices}`);

// ARRAY METHODS
// PUSH()
// let cities = ["bhopal","indore","mumbai","delhi","pune"];
// console.log(cities);
// cities.push("bangalore","hyderabad","gurgaon");
// console.log(cities);
// let deleteditem=cities.pop();
// console.log(cities);
// console.log("deleted =",deleteditem);
// let marks = [90,78,33,45];
// console.log(marks.toString());
// concat()
// let fruits = ["mango","apple","litchi","pineapple","watermelon","orange"];
// // let vegetable=["ladyfinger","brinjal","potato"];
// // console.log(fruits.concat(vegetable));
// // fruits.unshift("bottlegourd");
// // console.log(fruits.shift());\
// console.log(fruits.slice(1,4));
// // splice();
// // fruits.splice(2,2,"banana","guava");
// // add element
// // fruits.splice(2,0,"banana","guava");
// // delete item
// // fruits.splice(2,1);
// // replace
// fruits.splice(2,1,"banana");
// let companies = ["bloomberg","microsoft","uber","google","ibm","netflix"];
// // console.log("deleted company = ",companies.shift());
// companies.splice(2,1,"ola");
// companies.push("amazon");

// FUNCTIONS IN JS
// function myFunction(){
//     console.log("Hello , how are you");
//     console.log("i am learning JS");
// }
// // FUNCTION TO CALCULATE SUM OF TWO NUMBERS
// function calculateSum(x,y){
//     console.log(x+y);

// }
// // USING RETURN KEYWORD IN FUNCTION
// function mul(x,y){
//     ans = x*y;
//     return ans;
// }
// var w = mul(2,3);
// // ARROW FUNCTIONS
// const arrowfunc = (a,b)=>{
//     console.log(a*b);
// }

// // PRACTICE

// function noOfVowels(str){
//     let a = 0;
//    for(const char of str){
//     if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'){
//         a++;
//     }
//    }
//     console.log(a);
    
// }
// // using arrow function
// const calvow = (str)=>{
//     let a = 0;
//     for(const char of str){
//      if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'){
//          a++;
//      }
//     }
//     return a;

// }

// FOR EACH IN ARRAYS
// FOR EACH IS USED WITH A CALLBACK FUNCTION
// let arr = ["pune","delhi","mumbai"];
// arr.forEach((val,idx,arr)=>{
// console.log(val,idx,arr);
// });
// PRACTICE QUESTION
// let num=[1,2,3,4,5];
// num.forEach((val)=>{
//     console.log(val*val);
// });

// MAP METHOD
// let arr = [1,2,3,4,5,7];
// let arrnum = arr.map((val)=>{
//     return val*2;
// });
// FILTER METHOD
// let num = [1,2,3,4,5,6,7,8,9];
// let evenArray = num.filter((val)=>{
//     return val%2!==0;});
//     console.log(evenArray);

// REDUCE FUNCTION
// let num = [1,2,3,4,5];
// let newArray = num.reduce((prev,curr)=>{
//     return prev>curr?prev:curr;
// });
// console.log(newArray);
// PRACTICE
// let marks = [67,75,88,99,91,95,55];
// let aboveninety = marks.filter((val)=>{
//     return val>90;
// });
// console.log(aboveninety);


// let n = prompt();
// let arr = [];
// for(let i=1;i<=n;i++){
//     arr.push(i);
// }
// console.log(arr);
// // sum
// let sum = arr.reduce((prev,curr)=>{
//     return prev+curr;
// });
// console.log(sum);
// // multiply
// let mul = arr.reduce((prev,curr)=>{
//     return prev*curr;
// });
// console.log(mul);

// DOM-DOCUMENT OBJECT MODEL
// let div = document.querySelectorAll(".box");
// console.log(div);
// for(el of div){
//     el.innerText = el.innerText + "hello";
// }

// console.log(div);
// console.log(div.getAttribute("id"));
// console.log(div.getAttribute("name"));
// let para= document.querySelector("p");
// console.log(para);
// para.setAttribute("class","123");

// let btn = document.createElement("button");
// btn.innerText="Click Me!";
// btn.style.backgroundColor="red";
// btn.style.color="white";
// document.querySelector("body").prepend(btn);
// btn.addEventListener("click",(e)=>{
//     console.log("you have clicked handler-1");
    
// });
// btn.addEventListener("click",(e)=>{
//     console.log("you have clicked handler-2");
    
// });
// const handler3 = ()=>{
//     console.log("you have clicked handler-3");

// }
// btn.addEventListener("click",handler3);
// btn.addEventListener("click",(e)=>{
//     console.log("you have clicked handler-4");
    
// });
// btn.removeEventListener("click",handler3);
// document.querySelector("div").onmouseover=(e)=>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
   
// }
// let btn = document.querySelector("#btn1");
// let a=0;
// btn.addEventListener("click",()=>{
//     if(a%2===0){
//     document.querySelector("body").style.backgroundColor="darkblue";
// }else
// document.querySelector("body").style.backgroundColor="white";{
// }
// a++;
// });

//OBJECT
// const student = {
//     fullName : "Shubhangi Garg",
//     marks: 94.4,
//     printMarks:function(){
//      console.log("marks",this.marks);
//     },
// };

// const employee={
//     calculateTax(){
//         console.log("the tax is 10%")
//     },
// };

// const karanArjun={
//     salary: 50000,
// };
//  karanArjun.__proto__= employee;

 //CLASSES
//  class Toyota{
//     constructor(){
//         console.log("this is a constructor being called");
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brand = brand;
//     }
//  }

//  let fortuner = new Toyota();
//  fortuner.setBrand("fortuner");
 //INHERITANCE
//  class person{
//     constructor(){
//         console.log("this is person's constructor");
//     }
//     eat(){
//         console.log("eats");
//     }
//     sleep(){
//         console.log("sleeps");
//     }
//  }

//  class engineer extends person{
    
//     work(){
//         console.log("does work related to the engineering domain");
       
//     }
//  }
//  let obj = new engineer();

// class User{
//     constructor(name,email){
//         this.name = name;
//         this.email=email;

//     }
//     viewMyData(){
//         console.log("this is my data");
//     }
// }

// class Admin extends User{
//     constructor(name,email){
//         super(name,email);

//     }
//     editData(){
//         console.log("you can edit the website data");
//     }
// }
// let p1 = new User("shubhangi","sg@gmail.com");
// let admin = new Admin("Ram","admin@college.com");
// console.log("one");
// console.log("two");
// setTimeout(()=>{
//     console.log("hello");
// },4000);
// console.log("three");
// console.log("four");
//CALLBACK HELL
//  function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
    
//     if(getNextData){
//         getNextData();
//     }},2000);

//  }
//  getData(1,()=>{
//     console.log("getting data two...")
//     getData(2,()=>{
//         console.log("getting data three...")
//         getData(3,()=>{
//             console.log("getting data four...")
//             getData(4);
//         })
//     })
//  });
// PROMISES
// let promise = new Promise((resolve,reject)=>{
//     console.log("i am a promise");
//     // resolve("success");
//     reject("some error occurred");
// })
// function getData(data){
//     return new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     console.log("data",data);
//     resolve("success");
    
// },2000);
//     });}

//     async function getNextData() {
//         console.log("fetching data 1");
//         await getData(1);
//         console.log("fetching data 2");
//         await getData(2);
//         console.log("fetching data 3");
//         await getData(3);
//     }

//     //IFEE
//     (async function() {
//         console.log("fetching data 1");
//         await getData(1);
//         console.log("fetching data 2");
//         await getData(2);
//         console.log("fetching data 3");
//         await getData(3);
//     })();

// //     getData(1).then((res)=>{
// //     return getData(2).then((res)=>{
// //         return getData(3).then((res)=>{
// //             console.log(res);
// //         })
// //     })
// // });

// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve(200);
    
//         },2000);
//     });
    
// }

// async function getWeather(){
//     await api();
//     await api();
// }

    
// }
// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("hi! i am a promise");
//         // reject("error");
//         resolve("success");
//     });
// }
// let promise = getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled",res);
// })
// promise.catch((err)=>{
//     console.log("rejected",err);
// })

// PROMISES CHAINING
// let asynFunc1=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         },4000);

//     });
// }
// let asynFunc2=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success");
//         },4000);

//     });
// }
// console.log("fetching data1...");
// asynFunc1().then(()=>{
//     console.log("fetching data2....");
// asynFunc2().then((res)=>{})});

//FETCH API
let URL = `https://api.thecatapi.com/v1/breeds`;
let promise = fetch(URL);

let btn = document.querySelector("#btn");
let para = document.querySelector("#para");

let getData = async()=>{
    console.log("fetching data...");
let response = await fetch(URL);
console.log(response);
let data = await response.json();
console.log(data[1].name);
para.innerText = data[3].name;
}
btn.addEventListener("click", getData);
