//JS as Dynamic Typed

// setTimeout --> Alllows us to run the function once after the interval of time
    // clearTimeout --> Alllows us to run the function repeatedly after the interval of time

    function greet(name, byeText){
      console.log("Hello Good Morning " + name + " " + byeText);
  }
  // timeOut = setTimeout(greet, 5000, "Shalini", "Take Care");
  // console.log(timeOut);

  // clearTimeout(timeOut);

  // setTimeout(greet(), 12000); --> Wrong as it is calling the function inside setTimeout

  // intervalId = setInterval(greet, 1000, "Shalini", "Good Night");
  // clearInterval(intervalId);

  function displayTime(){
      time = new Date();
      console.log(time);
     
  }
  setInterval(displayTime,  1000);

const loginDetails = []
//logic for getting details from DB
const loginId = loginDetails [0];

if(loginId !==undefined){
  console.log('Allow user to login');
} else{
  console.log('Auth failed')
}

//Value that interpret as false;
//false
//0
//' '
//null
//undefined

//apart from that all are truthy types

// Type conversion
console.log('Welcome to exercise7');
// anyother datatype to string -> String() and .toString()
let myVar;
myVar = String(34);
//console.log(myVar, (typeof myVar));
let booleanVar = String(true);
// console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());
// console.log (date , (typeof date));

let arr = String([1,2,3,4,5]);
// console.log (arr.length , (typeof arr));

let i = 75;
// console.log(i.toString());

let str = Number("3434") // 3434 , 'number'
// str = Number("343d4") // NaN , 'number'
// str = Number(true) // 1 , 'number'
// str = Number(false) // 0 , 'number'
str = Number([1,2,3,4,5]); // NaN , 'number'
// console.log(str , typeof str);

// Anyother datatype to number -> Number(), parseInt, parseFloat
let number = Number("34"); // 34 , 'number'
number = parseInt("34.098"); // 34 , 'number' (integervalue)
number = Number("34.098"); // 34.098 'number'(numeric value)
number = parseFloat("34.098"); // 34.098 'number'

 // Number to decimal -> toFixed(preciseness)
// console.log(number.toFixed(12), (typeof number)); //34.098000000000 number


//Write a program to generate a random number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(2));
  // expected output: 0, 1 or 2
  
  console.log(getRandomInt(1));
  // expected output: 0
  
  console.log(Math.random());
  // expected output: a number from 0 to <1