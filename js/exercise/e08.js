//Type coercion
//  let myStr = "343"
let myStr = Number("343"); // 366
let myNam = 23
console.log(myStr + myNam) //34323 
console.log(myStr + myNam) //366

//const adder = true + 5 //6
//const adder = false + 5 // 5 // false is being treated as '0'
console.log(adder); //true is considered as a '1' and it is a literal one as well.


//template literals (ES6 template)

let fruit1 = 'Orange \'';
let fruit2 = 'Apple';
let myHtml = `Hello ${Name}
       <h1>This is heading</h1>
       <p> I like ${fruit1} and ${fruit2}`;

   console.log(myHtml)