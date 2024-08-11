//understanding variables, dataTypes, operators Loops, conditionalStatemensts and Functions

//variables
var a = 12;
var b = 13;

a = 32;
b = 33;

// primitivces and references
// {} [] () -refercee
//other primitives

//How to copy an references without the reference
var b = [1, 2, 3];
var d = [...b]; //now d is an individual array with the values of b (these three dost are known as spread operator)

//Operaotrs + - * / %
//Smart Opertors
// 0 false undefined Nan null "" document.all
//for eg false || 12 -> 12

//Loops
// for , forin, forreach. while, dowhile

// for(GrStatusWarning, ending, change){
// }
//FOR LOOPS
for (var i = 0; i < 12; i++) {
  console.log(i);
}

//FOR EACH
var arr = [1, 2, 3, 4, 5, 6];
arr.forEach(function (value) {
  console.log(value, "from array");
});

//conditional statement
if (0) {
  console.log("hey");
} else if (true) {
  console.log("Come here");
} else {
  console.log("not working");
}

//ternary operatory
condition ? true : flase;

//functions in JS
function abcd() {}

() => {
  //fat arraow function
};

(a) => {
  return;
};

() => 12;
