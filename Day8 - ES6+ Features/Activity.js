//Activity 1

const person = {
    name : "Aditya",
    age : 69,
    powers : "Procastination"
}

//single line
let detailStr = ` Name : ${person.name}, Age : ${person.age} , Powers : ${person.powers}` ;
//multiline
let detail = `\nName : ${person.name},
Power : ${person.powers}
`
console.log(detailStr);
console.log(detail);

console.log("\n <----End of Activity 1---->\n");

//Activity 2

const arr = [1,2,3,4,5];
let [x,y] = arr;
console.log(`Array : ${arr}`);
console.log(`First and second numbers are ${x} & ${y}`);

const book = {
    title : "Harry Potter and The Deadly Hollows",
    author : "J.K Rowling",
    publication : "07/07/2009",
    price : "13.99usd"
}

console.log(`\nBook object : `);
console.log(book);
let { title, author } = book;
console.log(`\nTitle : ${title} & Author : ${author}`);

console.log("\n <----End of Activity 2---->\n");


//Activity 3

const newArr = [...arr,6,7,8,9,10];
console.log(newArr);

const sum = ((...Nums) => {
    let total = 0;
    for (let num of Nums){
        total += num;
    }
    return total;
});

console.log(`Sum of 1,2,3,4 : ${sum(1,2,3,4)}`);

console.log("\n <----End of Activity 3---->\n");


//Activity 4

const product = ((a,b=1) => a*b )
console.log(product(15));
console.log(product(15,2));

console.log("\n <----End of Activity 4---->\n");


//Activity 5

let profession = "developer"
let specialization = "web dev"
let company = "berozgaar"
function printDetails(){
    return "Profession : " + this.profession + "\n Domain : " + this.specialization + "\n Company : " + this.company
}

const profile = {profession, specialization, company, printDetails};

console.log(profile);
console.log(profile.printDetails());

console.log("\n <----End of Activity 5---->\n");
