//Activity 1

let book = {
    title : " Autobiography of Adi ",
    author : "Aditya ",
    year : 2024,
}

console.log(book);

console.log(`\nBook Title : ${book["title"]} & Book Author : ${book["author"]}`)
console.log("\n <----End of Activity 1---->\n");


//Activity 2

const bookDetail = (() => book.title + book.author);
const updateYear = ((newYear) => book["year"] = newYear);
book.details = bookDetail();
book.updateYear = updateYear(2021);
console.log(book);
console.log("\n <----End of Activity 2---->\n");


//Activity 3

let library = {
    name : "Good Library St.24",
    books : [
        {
            id : 121,
            title : "Lord and The Rings",
            author : "J.R.R Tolkien",
        },
            {
            id : 122,
            title : "Fire and Blood",
            author : "George R.R. Martin"
        }
    ]
}

console.log(library);

console.log(`\n Name : ${library["name"]}`);
console.log(`Books : ${library["books"].map((books) => (books.title) )}`);
console.log("\n <----End of Activity 3---->\n");


//Activity 4
 

book.detail = function(){
    return this.title + "in " + this.year;
}
//its a method so it needs to be called
console.log(book.detail());
console.log("\n <----End of Activity 4---->\n");

//Activity 5

for ( let x in book ){
    console.log(` ${x} : ${book[x]}\n`);
}

console.log(`Keys in book object : \n${Object.keys(book)}\n`);
console.log(`Values in book object : \n${Object.values(book)}`);

console.log("\n <----End of Activity 5---->\n");
