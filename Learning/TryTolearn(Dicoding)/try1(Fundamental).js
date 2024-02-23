console.log('mebor')//expression
console.log(15 * 2)//expression
var Myname = 'Mebor'//statement var,let,const
Myname = 'Justmebor'//statement
console.log(Myname)//statement
let a = 10//mathematic
let b = 10//mathematic
console.log(a + b)//mathematic
console.log(a - b)//mathematic
console.log(a * b)//mathematic
console.log(a / b)//mathematic
console.log(a % b)//mathematic
console.log(a ** b)//mathematic
console.log(typeof(a))
console.log(typeof(Myname))
let c = "about"//string concatenation
let d = "you"//string concatenation
console.log( c + " " + d)//string concatenation
var queStion ='"Is it good?" Yes.'// String interpolation
console.log(queStion)// String interpolation
console.log(`what do you think about it?, ${queStion}.`)// String interpolation
let e = 10//operator komparasi 
let f = 15//operator komparasi
let isGreater = e>f//operator komparasi
let isLess = e<f//operator komparasi
console.log(isGreater)//operator komparasi
console.log(isLess)//operator komparasi
let Laterdata = null// when value don't have points yer
console.log(Laterdata)// when value don't have points yer
let id1 = Symbol('i still don/t get it')//symbol
let id2 = Symbol('what/s should i do?')//symbol
console.log( id1 == id2)//symbol
let x = 10 
let y = 10 // Assignment operator
x += y
console.log(x)//shortcut
let A = 100// Assignment Operator arithmetic
let B = 50// Assignment Operator arithmetic
A /= B// Assignment Operator arithmetic
B -= A// Assignment Operator arithmetic
console.log(A)// Assignment Operator arithmetic
console.log(B)// Assignment Operator arithmetic
let J = 10//Comparison operator
let K = 5//Comparison operator
console.log( J === K)//Comparison operator
console.log( J < K)//Comparison operator
/* Comparison operator
    == Membandingkan kedua nilai apakah sama (tidak identik).
    != Membandingkan kedua nilai apakah tidak sama (tidak identik).
    ===	Membandingkan kedua nilai apakah identik.
    !==	Membandingkan kedua nilai apakah tidak identik.
    >	Membandingkan dua nilai apakah nilai pertama lebih dari nilai kedua.
    >=	Membandingkan dua nilai apakah nilai pertama lebih atau sama dengan nilai kedua.
    <	Membandingkan dua nilai apakah nilai pertama kurang dari nilai kedua.
    <=	Membandingkan dua nilai apakah nilai pertama kurang atau sama dengan nilai kedua.
*/
let L = '20'// Comparison operator : 'Same' & " identic "
let M = 20// Comparison operator : 'Same' & " identic "
console.log(L == M)// Comparison operator : 'Same' & " identic "
console.log(L === M)// Comparison operator : 'Same' & " identic "
let O = 20// logical operator
let P = 50// logical operator
console.log( O < 10 && P > 10)// If true value true
console.log( O <10 || P > 10)// if true on once condition value true
console.log(!(O <10))// return a conditions

const isHot = false// if statement
console.log( " AC ")// if statement
if (isHot){// if statement
    console.log("today is hot so")// if statement
}// if statement
console.log( "turn on ac on level two")// if statement
let Q = 60//if/else statement
if( Q > 50) {//if/else statement [kemudian kita bertanya, “Hai JavaScript! Apakah x lebih dari 70?” Jika kondisi tersebut benar, maka kita dapat memerintahkan JavaScript untuk menampilkan nilainya. 
    console.log(Q)//if/else statement
} else {//if/else statement
    console.log( "Less then desirable")//else statement
}//else statement
let R = 'French'// else if statement
let S = 'Good morning'// else if statement
if( R === 'English') {// else if statement
    S = 'Good morning'// else if statement
} else if( R === 'French'){// else if statement
    S = 'Bonjour'// else if statement
} else if( R === 'Italian'){// else if statement
    S = 'Bonjourno'// else if statement
}
console.log(S)
let T ="false"//Ternary operator
let discount = T ? 1 : 0//Ternary operator
console.log(` You got a ${ discount * 100}%`)//Ternary operator

let name = ""//Truthy & Falsy
if (name) {//Truthy & Falsy
    console.log(` halo, ${ name }`)//Truthy & Falsy
} else {//Truthy & Falsy
    console.log('no name')//Truthy & Falsy
}//Truthy & Falsy

let language = 'italian'//switch case statement
let greeting = null//switch case statement
switch(language) {//switch case statement
    case 'english' ://switch case statement
        greeting = 'good morning'//switch case statement
        break//switch case statement
    case 'french' ://switch case statement
        greeting = 'bonjour'//switch case statement
        break//switch case statement
    case 'italian' ://switch case statement
        greeting = 'bonjourno'//switch case statement
        break//switch case statement
    case 'indonesia' ://switch case statement
        greeting = 'hallo'//switch case statement
        break//switch case statement
    case 'null' ://switch case statement
        greeting = 'F--- you'//switch case statement
        break//switch case statement
}//switch case statement
console.log(greeting)//switch case statement

for(let U = 0; U < 8; U++)//loop
console.log(U)//loop

let V=['kimchi','lisa','ava','asa']// loop : for...of
for( let W of V){// loop : for...of
    console.log(W)// loop : for...of
}// loop : for...of
let W = 1// Loop : While & do-while
while( W <= 10){// Loop : While & do-while
    console.log(W); W++// Loop : While & do-while
}// Loop : While & do-while
do{// Loop : While & do-while
    console.log(W);// Loop : While & do-while
    W++// Loop : While & do-while
} while (W <= 10)// Loop : While & do-while
/*
if ((true || false) && (false || false)) {
    console.log("It's true");
} else {
    console.log("It's false");
}
const stock = 0;
const milkNeeded = 25;

if (stock > milkNeeded) {
  stock = stock - milkNeeded;
  console.log('Processing your order...');
} else {
  console.log('Out of Stock!');
}
console.log('Thank you');

let myVariable = 12;
myVariable = 30;
myVariable = 5;

console.log(myVariable);

const firstString = "Hello";
const secondString = "JavaScript";

console.log(firstString + secondString);

for(let i = 1; i < 9; i += 2) {
    console.log(i);}

for(let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
     console.log(i);
}
}

for(let i = 1; i < 10; i += 2) {
    console.log(i);
}
todo; learn more about test
! you should try by yourself
? try to find websites
*/// this is for the test

const user={// data structure : Object
    firsTname:"kim",//Properties
    lasTname:"chi",
    age: 23,//Properties
    species: "whore",//Properties
    "hair color": "black",//Properties
    isWhore: true,
}
console.log(`My name is ${firsTname} ${lasTname}`)
console.log(`my age is${age}`)