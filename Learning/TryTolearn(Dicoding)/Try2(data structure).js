console.log("hello world")//data structure
const character ={// Objects / don't forget to call assign : character.name
    name: "kim",//Objects {property}
    lastname: "chi",// Objects {property}
    age: 24,//Objects {property}
    job: "Whore",//Objects  {property}
    "hair color": "brown",//Objects {property}
    "my Object": "Orleans",//Objects {property}
}
character.name = "kimberly"// to change the value from "character" is using =
character["hair color"] = "red"// to change the value from "character" is using =
character.lastname = "chidong"// to change the value from "character" is using =
delete character["hair color"]// to delete one of property
console.log(character)
console.log(`Hello my name is ${character.name}, my last name is ${character.lastname} and my hair color is ${character["hair color"]}`)
console.log(character.genre ="asian")

let Array = ["lisa", 20, true, "lana","kim",0.25, 100, "meh", "null"]//Array = list of columns, with indexing
console.log(Array)//Array = list of columns, with indexing
console.log(Array[4])//indexing start from 0 
console.log("How long is my array is " + Array.length, ".")
/*Array.push(' Slut ')// to add more string in the end
Array.pop()// to takes out the last data or element of the array
Array.shift()// to takes out the first element of the array
Array.unshift( 'Mia')//adds an element at the beginning of the array.
delete Array(2)//delete array on second = true
Array.splice(2,1)//Untuk menghapus elemen*/

let myfavoritestarA = ["kimchi", "yhivi", "asa"]//Spread operator
let myfavoritestarB = ["lisa", "Mia", "ava"]//Spread operator
let myfavoritestarc = ["bonnie","christy","joanna"]//Spread operator
let MyfavoriteStar = [...myfavoritestarA, ...myfavoritestarB,...myfavoritestarc]//Spread operator
console.log( MyfavoriteStar)//Spread operator

let Nameofarrays = {// Destructuring objects
    firstName: "Me",//Destructuring objects
    LastName: "bor",//Destructuring objects
    agE: 50,//Destructuring objects
    stUdy: "politics",//Destructuring objects
}
let {firstName, LastName,agE, } = Nameofarrays//Destructuring objects
console.log(firstName, LastName, agE)//Destructuring objects
console.log( Nameofarrays )//Destructuring objects

let Path = {//Destructuring Assignment
    Fname: "just",///Destructuring Assignment
    Lname: "a",//Destructuring Assignment
    age: 50,//Destructuring Assignment
    work: "nune",//Destructuring Assignment
}
let Fname = "justame"//Destructuring Assignment
let age = 25//Destructuring Assignment
console.log(Fname)//Destructuring Assignment
console.log(age)//Destructuring Assignment

const fact = {//Default Values
    Frname: "mee",//Default Values
    Laname: "bors",//Default Values
    AGE: 25//Default Values
}
const { Frname, Laname, AGE, sex = null } = fact//Default Values
console.log(Fname)//Default Values
console.log(Laname)//Default Values
console.log(AGE)//Default Values
console.log(sex)//Default Values

let profile = {//assign to local variable
    seT : "calm",//assign to local variable names
    tiMe : "Sooth",//assign to local variable names
    maSs: 25,//assign to local variable names
}
let {seT : localseT, tiMe : localtiMe, maSs : localmaSs } = profile//assign to local variable names
console.log(localseT)//assign to local variable names
console.log(localtiMe)//assign to local variable names
console.log(localmaSs)//assign to local variable names

let Fav = [ "toys", "food", "hobby", 25]//Destructuring Array
let [first, second, third, fourth] = Fav//Destructuring Array
let [,,, four] = Fav//Destructuring Array
console.log(first)//Destructuring Array
console.log(four)//Destructuring Array

const favorites = ["Seafood"];//Default Values
const [myFood, herFood] = favorites//Default Values
console.log(myFood);//Default Values
console.log(herFood);//Default Values

let Star = new Map([//map, don't forgot : new is there, and map with uppercase M
["asian", 'kimchi'],//map
["ass", 'asa'],//map
["european", 'ava'],//map
[true, true],//map
[1, 'a number'],//map
])
console.log(Star)//map
console.log(Star.size)//map
console.log(Star.get("asian"))//map
console.log(Star.set("job","whore"))//map
console.log(Star.size)//map

let Sets = new Set([1,4,8,12,52])//set
Sets.add(125)//set
Sets.delete(4)//set
console.log(Sets)//set

/* 
Todo: test : object 
const restaurant = {
name:"Bakso Mang Dicoding",
city:"Bandung",
"favorite drink": 'Es Teh',
"favorite food": "Bakso",
isVegan: false,
}
console.log(restaurant)
const name = restaurant.name
console.log(name)
const favoriteDrink = restaurant["favorite drink"];
console.log(favoriteDrink);*/

/**
 * TODO: test : array
 * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
 *   - Array tersebut menampung bilangan genap dari 1 hingga 100
 *
 * Catatan:
 *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
 
// Tulis kode di bawah ini
const evenNumber = []
for (let i=1;i<=100;i++){
  if (i%2==0){
      evenNumber.push(i)
}
}
console.log(evenNumber)*/

/**
 * TODO: test: Map
 * 1. Buatlah variabel currency yang merupakan Map dengan kriteria:
 *   - key "USD", value 14000
 *   - key "JPY", value 131
 *   - key "SGD", value 11000
 *   - key "MYR", value 3500
 * 2. Buatlah variabel priceInIDR yang bernilai dari hasil perkalian:
 *     - priceInJPY dengan nilai currency JPY

const priceInJPY = 5000;
// Tulis kode di bawah ini
const currency =new Map([
  ["USD",14000],
  ["JPY", 131],
  ["SGD",11000],
  ["MYR",3500],
])
const priceInIDR = priceInJPY*(currency.get("JPY"))
console.log(priceInIDR)

const capital = {
    "Jakarta": "Indonesia",
    "London": "England",
    "Tokyo": "Japan"
}
capital["New Delhi"] = "Indonesia";

console.log(capital["Indonesia"])*/