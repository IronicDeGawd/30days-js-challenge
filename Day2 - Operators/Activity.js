//Activity 1

function input(a,b){
    // let a = prompt("Enter a number:");
    // let b = prompt("Enter a number:");
    a = 10;
    b = 20;
    return [a,b];
}

function add(a,b){
    console.log("Addition : ", a+b);
}

function sub(a,b){
    console.log("Subtraction : ",a-b);
}

function mul(a,b){
    console.log("Multiplication : ",a*b);
}

function div(a,b){
    console.log("Division : ",a/b);
}

function rem(a,b){
    console.log("Remainder : ",a%b);
}

function activity1(){
    let a,b;
    [a,b] = input();
    add(a,b);
    sub(a,b);
    mul(a,b);
    div(a,b);
    rem(a,b);
} 
activity1();
console.log("<----End of Activity---->");



//Activity 2

function activity2(){
    let semaphore = 0;
    console.log("Initially :",semaphore);
    semaphore+=1;
    console.log("After increment :",semaphore);
    semaphore-=1;
    console.log("After Decrement :",semaphore);
}
activity2();
console.log("<----End of Activity---->");



//Activity 3

function activity3(){
    let a = 10;
    console.log("a :",a);
    let b = 20;
    console.log("b :",b);
    a>b ? console.log("a is greater") : console.log("b is greater");
    a<b ? console.log("a is smaller") : console.log("b is smaller");
    a>=b ? console.log("a is greater or equal to b") : console.log("b is greater");
    a<=b ? console.log("a is smaller or equal to b") : console.log("b is smaller");
    a==b ? console.log("a is equal to b") : console.log("a is not equal to b");
    a===b ? console.log("a is strictly equal to b") : console.log("a is not strictly equal to b");
}
activity3();
console.log("<----End of Activity---->");



//Activity 4

function activity4(){
    let age = 21;
    let profession = "Developer";
    if(age>18 && profession == "Developer"){
        console.log("You are eligible to get hired");
    }

    if(age>18 || profession == "Developer"){
        console.log("You are eligible to get passes for events");
    }

    if(profession != "Developer"){
        console.log("You cannot be hired");
    }
}
activity4();
console.log("<----End of Activity---->");



//Activity 5

function activity5(){
    let a = 10;
    let b = -5;

    a>0 ? console.log("a is positive") : console.log("a is negative");
    b>0 ? console.log("b is positive") : console.log("b is negative");
}
activity5();
console.log("<----End of Activity---->");