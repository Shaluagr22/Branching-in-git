//var carName = "Tata";
//var carName = "Volvo" // can be initialize,reassign and redeclare
// var carName; // undefined
// console.log(carName);
var name = "shalu"
var channel;
var marks = 34;
console.log(name, channel , marks) // shalu undefined 34

// let companyName = "Reliance"
//  companyName = "TCS" // can assign 
//  let companyName = "Mahendra" //but cannot redeclare
// console.log(companyName);

// const ownerName = "Honey";
// ownerName = "Shalini" // cannot reassign
// const ownerName = "shalini" // cannot redeclare 
// console.log(ownerName)

// Rules  for creating javascript variables
/*
1. Cannot start with numbers
2. Can start with letters , numbers, _ or $ 
3. are case sensitive

Examples :  _city(valid) ,$color (valid), 1value(valid)
*/

var city = "Delhi"
console.log (city);

//Block Scope {}  
{
    //let city = "indore" // local scope
     city = "bhopal" // global scope
    console.log(city)
}
console.log (city);

//Constant array

//you can create a constant array
const arr1 = [23,45,65,67]
// you can add an element
arr1.push(5);
// you can change an element
arr1[1] = 98;
// but you cannot reassign the array
//arr1 = [5,78,78,8]
console.log(arr1);

//Constant Objects
 // you can create a constant object
 const car = {type:"Fiat", model:500,color:"white"}
 console.log(car)
 //you can change a property
 car.color = "green"
 console.log(car);
 //you can add a property
 car.owner = "Prayaan"
 console.log(car)

 //but you cannot reassign the object
car = {type:"volvo", model:"EX60",color:"red"}
console.log(car) //typeerror


//let and const are block scope
// var is global scope

//Most common Programming Case type
/*
1.camelCase
2.kebab-case
3.snake_case
4.PascalCase
*/

// There are six falsy values in js: Undefined ,null ,NaN , 0 , empty string , false of course










