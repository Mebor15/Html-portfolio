console.log( "Hello world ")
/*Function
function is a variable that contains a logical block. The logic block will be executed when the variable is called
*/
function greeting(){
    console.log("thank you")
}
greeting ()

function greetinG(name,language){
    if(language === "english") {//Using Parameter to called the function
        console.log(`good morning ${name}`)//Using Parameter to called the function
    } else if(language === "french"){//Using Parameter to called the function
        console.log(`bonjour ${name}`)//Using Parameter to called the function
    } else {//Using Parameter to called the function
        console.log(`selamat pagi ${name}`)//Using Parameter to called the function
    }
}
greetinG("sam","english")
greetinG("Dean","french")

function multiply(a,b,c,d){
    return a * b - c + d
}
let result = multiply(20,5,2,1)
console.log(result)

function greetinG(name,language){//return function
    if(language === "english") {//return function
        return`good morning ${name}`//return function
    } else if(language === "french"){//return function
        return`bonjour ${name}`//return function
    } else if(language === "italian"){//return function
        return`bonjourno ${name}`//return function
    } else{//return function
        return`selamat pagi ${name}`//return function
    }
}
let greetingme = greetinG("mleh","english")
console.log(greetingme)

let greetiNG = function(name,language){//return function
    if(language === "english") {//return function
        return "good morning" + name + "!"//return function
    } else if(language === "french"){//return function
        return "bonjour" + name + "!" //return function
    } else if(language === "italian"){//return function
        return "bonjourno" + name + "!"//return function
    } else{//return function
        return "selamat pagi" + name + "!"//return function
    }
}
let greet = greetiNG('mleh', 'english')
console.log(greet)

let user = {//Function Parameter
    id: 25,
    displayname:'kim',
    fullname:'kimberly'
}
function A({displayname,fullname}){//Function Parameter
    console.log(`${displayname} is ${fullname} `)
}
A(user)

function Formula(AB,CD = 4){//Default Parameters
    let result = AB ** CD//Default Parameters
    console.log(`${AB} ^ ${CD} = ${result}`)//Default Parameters
}//Default Parameters
Formula(8)//Default Parameters

function sum(... numbers){//rest parameter
    let result = 1//rest parameter
    for (let number of numbers){//rest parameter
        result += number//rest parameter
    }
    return result//rest parameter
}
console.log(sum(1, 2, 3, 4, 5,12,24));//rest parameter

let SayNAme = NaMe =>{//Arrow Function
    console.log(`My name is ${NaMe}`)//Arrow Function
}//Arrow Function
SayNAme("mleh")//Arrow Function

let sayname = NAMe => console.log( `Hello ${NAMe}`)//Arrow Function
sayname('bor')//Arrow Function

let multiplY = (E,F) => E * F//Arrow Function
console.log(multiplY(15,2))//Arrow Function

/**
 * TODO: Task from function
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // output: 1
 *    minimal(3, 2) // output: 2
 *    minimal(3, 3) // output: 3
 *
 * 2. Buatlah sebuah function bernama findIndex yang menerima dua parameter, yaitu array dan number.
 *    Fungsi tersebut harus mengembalikan index dari angka yang sesuai pada array tersebut.
 *    Jika angka tidak ditemukan, maka kembalikan nilai -1.
 *
 *    contoh:
 *    findIndex([1, 2, 3, 4, 5], 3) // output: 2
 *    findIndex([1, 2, 3, 4, 5], 6) // output: -1
 *    findIndex([1, 2, 3, 4, 5], 5) // output: 4
 

// Tulis kode di bawah ini
function minimal(a,b){
    if (a<b){
      return(a)
  } else if (b<a){
    return(b)
  }else {
    return a}
  }
  console.log(minimal(1,4))
  console.log(minimal(3,2))
  console.log(minimal(3,3))
  
  function findIndex(array,number){
  for(let i = 0; i < array.length; i++)
      if(array[i]===number){
        return(i)
      }
    return -1
  }
  console.log(findIndex([1, 2, 3, 4, 5], 3))
  console.log(findIndex([1, 2, 3, 4, 5], 6))
  console.log(findIndex([1, 2, 3, 4, 5], 5))
            
*/ knowledge 
/*const sayHello = function(){}

function multiply(num) {
    total = num * num;
}
const resulT = multiply(3);
console.log(resulT);

function minMax(arrayOfNumbers) {
    let currentMin = arrayOfNumbers[0];
    let currentMax = arrayOfNumbers[0];
    for (value of arrayOfNumbers) {
        if (value < currentMin) {
            currentMin = value;
        } else if (value > currentMax) {
            currentMax = value;
        }
    }
    console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}
minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);*/