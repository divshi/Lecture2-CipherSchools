//In JavaScript we can declare a variable in 3 way
//1. var
//2. let
//3. const

// var myName = "Divya"
// console.log(myName);

// const myName = "John";
// console.log(myName);
// myName = "Alex";

const myName = [];
console.log(myName);
myName.push("Alex")
console.log(myName);

// function addTwoNumbers(num1, num2) {
//     var num = 5;
//     return num1+ num2;
// }

// let addTwoNumbers=(num1,num2)=> {
//     return num1 + num2;
// };

let addTwoNumbers=(num1,num2)=> num1 + num2;

console.log(addTwoNumbers(1,2));

{
    var num = 5;
}

console.log(num);

// String Interpolation

let firstName = "Divya";
let lastName= "Shrivastava";
// let fullName= firstName+ " " + lastName;
let fullName = `${firstName} ${lastName}`;
console.log(firstName +  " " + lastName);
console.log(fullName);


// Rest and spread operator are applicable in Arrays and Objects in JS
let array = [5,10,15,20,25];
// Spread -> ...
let newArray = [...array];
// console.log(...array);
console.log(array);


// Rest -> ...
// let maxOfTwoNumbers = (nu,1, num2) => Math.max(num1, num2);
let maxOfNumbers = (...numbers) =>{
    let maximum = Number.MIN_VALUE;
    for (let number of numbers){
        maximum = Math.max(maximum, number);
    }
    return maximum;
};
console.log(maxOfNumbers(1,2,3,4,5,6,7,8,9,10));

// For Object
let object = {
    name: "John",
    age: 24,
    city: "New York",
    address: {
        state: "NY",
        Country: "USA",
    },
};

let object2 = {...object,name:"Divya", favoriteSong:"Kyu"} ;
console.log(object2);
object2.address.state = "Punjab";
object2.address.Country = "INDIA";
console.log(object2);