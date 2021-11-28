// const h1 = document.querySelector(".hello h1");

// console.dir(h1);

// h1.style.color = "blue";

// function handleTitleClick(){
//     h1.style.color = "blue";
// }

// function handleMouseEnter(){
//     h1.innerText = "Mouse is here!";
// }

// function handleMouseLeave(){
//     h1.innerText = "Mouse is gone!";
// }

// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy() {
//     alert("copier!");
// }

// function handleWindowOffline() {
//     alert("SOS no WIFI");
// }

// function handleWindowOnline(){
//     alert("ALL GOOOD");
// }

// h1.addEventListener("click", handleTitleClick);
// h1.onclick = handleTitleClick;
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.onmouseenter = handleMouseEnter;
// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize",handleWindowResize);
// window.addEventListener("copy",handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

// function handleTitleClick(){
//     const currentColor = h1.style.color;
//     let newColor;
//     if(currentColor === "blue"){
//         newColor = "tomato";
//     }else{
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }


// function handleTitleClick() {
//     const clickedClass = "clicked"
//     h1.classList.toggle(clickedClass);
//     // if(h1.classList.contains(clickedClass)){
//     //     h1.classList.remove(clickedClass);
//     // }else{
//     //     h1.classList.add(clickedClass);
//     // }
// }

// h1.addEventListener("click", handleTitleClick);






// number, string
// const a = 5;
// const b = 2;
// let myName = "nico"; 
// 기본적으로 const 사용
// 필요할 때만 let 사용 (변수의 값이 변할 때)
// var 쓰지 말 것.

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log("hello " + myName);

// myName = "nicolas";

// console.log("your name is " + myName);

// Booleans, null, undefined
// const amIFat = true;
// let anything = null;
// let something;

// console.log(amIFat);
// console.log(anything);
// console.log(something);



// array
// const daysOfWeek = ["mon" , "tue" , "wed" , "thu" , "fri" , "sat" , "sun"];

// Get Item from Array
// console.log(daysOfWeek);
// console.log(daysOfWeek[4]);

// Add one more day to the array
// daysOfWeek.push("sun");

// console.log(daysOfWeek);



// Objects
// const playerName = "nico";
// const playerPoints = 121212;
// const playerHandsome = false;
// const playerFat = "little bit";

// const player = ["nico", 121212, false, "little bit"];

// const player = {
//     name: "nico",
//     points: 10,
//     fat: true,
// };
// console.log(player);
// console.log(player.name);
// console.log(player["name"]);

// player.fat = false;
// player.lastName = "potato";
// player.points = player.points + 15;
// console.log(player);
// console.log(player.points);


// function
// recieve data
// function sayHello(nameOfPerson, age){
//     console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// }

// sending data to function
// sayHello("nico", 10);
// sayHello("dal", 23);
// sayHello("lynn", 21);

// other functions
// function plus(firstNumber, secondNumber){
//     console.log(firstNumber + firstNumber);
// }
// function divide(a, b){
//     console.log(a / b);
// }
// firstNumber <- 8, secondNumber <- 60
// plus(8, 60);
// divide(98, 20);

// const player = {
//     name: "nico",
//     sayHello: function(otherPersonsName){
//         console.log("hello! " + otherPersonsName + " nice yo meet you!");
//     }
// };
// console.log(player.name);
// player.sayHello("lynn");
// player.sayHello("nico");



// Recap1
// const calculator ={
//     plus: function(a, b){
//         console.log(a + b);
//     },
//     times: function(a, b){
//         console.log(a * b);
//     },
//     minus: function(a, b){
//         console.log(a - b);
//     },
//     divide: function(a, b){
//         console.log(a / b);
//     },
//     power: function(a, b){
//         console.log(a ** b);
//     }
// }

// calculator.plus(2, 3);
// calculator.times(2, 3);
// calculator.minus(2, 3);
// calculator.divide(2, 3);
// calculator.power(2, 3);
// console.log(calculator.plus(2,3));



// return
// const age = 96;
// function calculatorKrAge(ageOfForeigner){
//     ageOfForeigner + 2;
//     return "hello";
// }

// const krAge = calculatorKrAge(age);

// console.log(krAge)

// const calculator ={
//     plus: function(a, b){
//         return a + b;
//     },
//     times: function(a, b){
//         return a * b;
//     },
//     minus: function(a, b){
//         return a - b;
//     },
//     divide: function(a, b){
//         return a / b;
//     },
//     power: function(a, b){
//         return a ** b;
//     }
// }

// const plusResult = calculator.plus(2, 3);
// console.log(plusResult);
// const minusResult = calculator.minus(plusResult, 10);
// const timeResult = calculator.times(10, minusResult);
// const divideResult = calculator.divide(timeResult, plusResult);
// const powerResult = calculator.power(divideResult, minusResult);



// conditionals
// const age = parseInt( prompt("How old are you?") );

// if( isNaN(age) || age < 0) {
//     console.log("Please write a real positive number");
// } else if (age < 18) {
//     console.log("You are too young.");
// } else if (age >= 18 && age <= 50) {
//     console.log("You can drink");
// } else if (age > 50 && age <= 80) {
//     console.log("You should exercise");
// } else if (age === 100){
//     console.log("wow you are wise")
// } else if (age > 80){
//     console.log("You can do whatever you want.");
// } 

