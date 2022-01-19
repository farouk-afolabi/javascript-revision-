/* console.log(1);
console.log(2);
let age = 25;
let year = 2019;


// log things to console 
console.log(age, year);

 age = 30;
console.log(age);
 const point = 100;
 console.log(point);
 */


 // strings 
 /*
 console.log('hello, world');
 let email = "afolabifarouk99@gmail.com";
 console.log(email);

 // string concatenation 
 let firstName ='Farouk';
 let lastName = 'Afolabi';
 
 let fullName = firstName + ' ' + lastName;
 console.log(fullName);

 // getting characters 
  
 console.log(fullName[4]);

 // string length 

 console.log(fullName.length);

 //string methods 

 console.log(fullName.toUpperCase()); 
 let result = fullName.toLowerCase();
 console.log(result, fullName);

 let index = email.indexOf('@');
 console.log(index);
 */


 // common string methods

 //let email = 'mario@thenetninja.co.uk';
 //let result = email.lastIndexOf('n');
 // slice - the first parameter is the start and last parameter is the end 

//let result = email.slice(0,5);
// let result = email.substr(4,10);
//let result = email.replace('m', 'w');
// console.log(result);





/*  let likes = 10
// NaN - not a number 
console.log(5 / 'hello');
let result ="the blog has " + likes + " likes";
console.log(result);



//template strings 

const title = 'Best reads of 2022';
const author = 'Mario';
const likes = 30;


// concatenation way 

// let result = 'The blog called '+ title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);

// template string way or template literal

let result =`The bog called ${title} by ${author} has ${likes} likes`
console.log(result);

// creating html templates 

let html =`

<h2>${title}</h2>
<p>By ${author} </p>
<span> This blog has ${likes} likes </span>
`;
 console.log(html);
*/


// array methods 

//let ninjas = ['shaun', 'ryu', 'chun-li'];
//let result = ninjas.join('@');
//let result = ninjas.indexOf('chun-li');
//let result = ninjas.concat(['ken', 'crystal']);
//let result = ninjas.push('ken');
//result = ninjas.pop(); //takes off the last one in the array

//console.log(result);

//BOOLEANS 

//let names = ['mario', 'luigi', 'toad'];
//let result = names.includes('bowser');
//console.log(result);


//comparison operators
 //let age = 25;

 //console.log(age == 25);
 //console.log(age == 30);
 //console.log(age != '25');
 //console.log(age > 20);
 //console.log(age < 20);
 //console.log(age <= 25);
 //console.log(age >= 25);

 //let name = 'shaun';
 //console.log(name == 'shaun');
 //console.log(name == 'Shaun');
 //console.log(name > 'crystal');
 //console.log(name > 'Shaun');


 //type conversion 
 
 
 //let score = '100';
 //score = Number(score);
 //console.log(score + 1);
// let result = Number('hello');
 //let result = String(50);
// let result = Boolean (0)
 //console.log (result, typeof result);



 // control flow 

 // for  loops

// for (let i=0; i < 5; i++){
 //    console.log('in loop:',i);
 // }

 //const names = ['shaun', 'mario', 'luigi' ];

 //for (let i=0; i < names.length; i++) {
   //  console.log(names[i]);
 //  let html = `<div>${names[i]}</div>`
  // console.log(html);
// }

// while loops 
//const names = [ 'shaun', 'mario', 'luigi'];
//let i = 0;
//while(i < names.length){
    
 //   console.log(names[i]);
  //  i++; }
   

// do while loops 

//let i = 4;
//do {
 //  console.log('val of i is:', i);
 //  i++ ;
//} while(i < 5);


//if statements 

//const age = 25;
 
//if(age > 20){
 // console.log('you are over 20 years old');
//}
//const ninjas = ['shaun', 'ryu', 'chun-li','yoshi'];

//if (ninjas.length > 3){
 //  console.log("that's a lot of ninjas");
//}

// const password = 'passtywb';

//if(password.length >= 12){
  //console.log( 'that password is mighty strong')
//}
//else if(password.length >= 8){
 // console.log('that password is long enough! ');
//  } else {
 // console.log('password is not long enough');
//}

// logical operators - OR || and AND &&

//const password = 'p@sdfh';

//if(password.length >= 12 && password.includes('@')){
//  console.log( 'that password is mighty strong');
//}
//else if(password.length >= 8 || password.includes('@') && password.length > 5){
 // console.log('that password is strong enough!'); 
// } else {
  // console.log('password is not strong enough');
// }


// logical NOT(!) - this is like opposite 

//let user = false;

//if (!user){
//console.log('you must be logged in to continue')
//}
//console.log(!true);
// console.log(!false);

// break and continue 

//const scores = [50,25,0,30,100,20,10];

//for (let i=0; i < scores.length; i++){
//  if(scores[i] === 0) {
 //   continue;
//  }
 // console.log('your scores: ', scores[i]);
 // if (scores[i] === 100){
  //  console.log('congrats, you got the top score!');
 //   break;
//  }
//}

// switch statements and break. it uses strict equality ===
//const grade ='D';

//switch(grade){
//  case'A':
 // console.log('you got an A!');
 // break;
//  case'B':
 // console.log('you got a B!');
 // break;
 // case'C':
//  console.log('you got a C!');
//  break;
 // case'D':
 // console.log('you got a D!');
//  break;
 // case'E':
 // console.log('you got a E!');
 // break;
 // default:
 // console.log('not a valid grade');
//}


// using if statements - SAME EXAmple using switch case 
//if(grade === "A"){

//}else if(grade === 'B'){

//}else if(grade === 'C'){
  
//}else if(grade === 'D'){
  
//}else if(grade === 'E'){
  
//}else if(grade === 'F'){
  
//}

// variables & block scope 

//let age = 30;


//if(true) {
//let age = 40;
//let name = 'shaun';
  //console.log('inside code block', age, name);



//if(true){
 // let age = 50;
//console.log('inside second code block',age ); 
//var test = 'hello';
//}
//}
//console.log('outside code block', age, name, test);


//functions 

// function expression 
//const speak = function (){
//  console.log('good day!');
//}; 
//greet();
//greet();
//greet();

//speak();
//speak();
//speak(); 

// function declaration  hoisting works with function declaration but doesnt work with function expression 
//function greet(){
 // console.log('hello there');
//}

// arguments & parameters 

//const speak = function(name ='luigi', time='morning' ){
 // console.log(`good  ${time} ${name}`);
//};

  
  //speak('farouk');

//speak('mario', 'afternoon');


// returning values 

//const speak = function(name ='luigi', time='morning' ){
  //console.log(`good  ${time} ${name}`);
//};

//const  calcArea = function(radius){
  //let area = 3.14 * radius**2;
 // return area;
//};

// or 
//const  calcArea = function(radius){
 // return 3.14 * radius**2;
  
//};

// arrow functions 

const calcArea = (radius) => {
  return 3.14* radius**2;
}
// or 
const calcArea = (radius) => {3.14* radius**2;}


const area = calcArea(5); 
console.log('area is:', area);