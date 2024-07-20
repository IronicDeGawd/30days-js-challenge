//Activity 1

let arr1 = [1,2,3,4,5];
console.log(arr1);

console.log(arr1[0] + " , " + arr1[arr1.length-1]);

console.log("\n <----End of Activity 1---->\n");


//Activity 2

console.log("Push Operation : ");
arr1.push(6);
console.log(arr1);
console.log("Pop Operation : ");
arr1.pop();
console.log(arr1);
console.log("Shift Operation : ");
arr1.shift();
console.log(arr1);
console.log("Unshift Operation : ");
arr1.unshift(0,1);
console.log(arr1);

console.log("\n <----End of Activity 2---->\n");



//Activity 3

console.log("Map Operation : ");
let arr2 = arr1.map((value) => value*2);
console.log(arr2);
console.log("Filter Operation : ");
let arr3 = arr1.filter((value) => value %2==0);
console.log(arr3);
let sum = arr1.reduce((acc, currVal) => ( acc+currVal ),0);
console.log(sum);

console.log("\n <----End of Activity 3---->\n");


//Activity 4

let arrStr ="";
for(let i=0;i<arr1.length;i++){
    arrStr += arr1[i] + " ";
}
console.log(arrStr);

arrStr = "";
arr1.forEach((item) => arrStr += item + " " );
console.log(arrStr);

console.log("\n <----End of Activity 4---->\n");


//Activity 5

let arr4 = [[1,2],[3,4]];
console.log(arr4);
console.log(`2nd element in 1st col : ${arr4[0][1]}`);

console.log("\n <----End of Activity 5--->\n");

