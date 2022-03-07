// Object Literal for creating objects
let car = {
    name: "Maruti 800",
    topSpeed: 89,
    run: function() {
      console.log("car is running");
    }
  };

  //Date and Time
//   let x = new Date();
// let x = new Date (2016,3,21,4,26,45) 
let x = new Date ("April 21 , 2016  4:26:45 ")
  console.log(x);
  // Methods of Date and time objects

  console.log(x.getMonth()); // 3
  console.log(x.getDate()); //21
  console.log(x.getDay()); // 4
  console.log(x.getFullYear()); // 2016
  console.log(x.getHours()); //4
  console.log(x.getTime()); //1461193005000 it convert the time into miliseconds.

  //set functions

//   x.setFullYear(2022);
//   x.setMonth(3);
//   x.setDate(15);
//   x.setHours(6);
//   x.setMinutes(15);
//   x.setSeconds(23);

// Logic conversion
let y = new Date ("April 21 , 2016  4:26:45 ")
y.setDate(x.getDate() +50 );
  console.log(x);
  console.log(y);