//Activity 1

var number = 5;
console.log(number);
let string = "5";
console.log(string);

//Activity 2

const boolean = true;
console.log(boolean);

//Activity 3

let no = 10;
let str = "10";
let bool = false;
let obj = {"name":"adi"};
let arr = ['adi', 10];
console.log(typeof(no));
console.log(typeof(str));
console.log(typeof(bool));
console.log(typeof(obj));
console.log(typeof(arr));

//Activity 4

let oldIsGold = 10;
console.log(oldIsGold);
oldIsGold = 20;
console.log(oldIsGold);

//Activity 5

try{
const constant = 5;
console.log(constant);
console.log(typeof(constant));
constant = 10;
} catch(e){
    console.log(e);
} finally{
    console.log("Constant cannot be changed");
}