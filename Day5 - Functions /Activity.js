// Activity 1

function activity1(num){
    if(num%2==0 || num%2.0==0){
        console.log("Even")
    }
    else if(num%2 !=0 && num%2.0 != 0){
        console.log("Odd");
    }
    else{
        console.log("Invalid");
    }

    console.log(`Square of ${num} : `+ (num*num));
}

activity1(7);
activity1(6);
console.log("\n <----End of Activity 1---->\n");

//Activity 2

function activity2Max(n1,n2){
    n1>n2 ? console.log(n1 + " is max between " + `${n1} & ${n2}`) : console.log(n2 + " is max" + `${n1} & ${n2}`)
}
activity2Max(10,5);

function activity2Concat(str1,str2){
    console.log("Concatinated string : " + `${str1}`+ `${str2}`)
}
activity2Concat("aditya","srivastvava");

console.log("\n <----End of Activity 2---->\n");

//Activity 3

activity3sum = (n1,n2) => {
    console.log(`Sum of ${n1} & ${n2} = ` + parseInt(n1+n2));
};
activity3sum(10,15);

activity3locate = (str1,char) => {
    let loc = false;
    let i=0;
    while(i<str1.lengt){
        if(str1.charAt(i)==char){
            loc = true;
            break;
        }
        i++;
    }
    console.log(loc);
}
activity3locate("aditya","z");

console.log("\n <----End of Activity 3---->\n");

//Activity 4

activity4Product = (n1,n2=10) => {
    console.log("Product : "+ n1*n2);
} 
activity4Product(15,3);

activity4Greet = (name,age=0) => {
    console.log(`Hello ${name} of age ${age}`);
}
activity4Greet("aditya",21);

console.log("\n <----End of Activity 4---->\n");


//Activity 5
 
repeatFunc = (func,times) =>{
    i=0;
    while(i<times){
        func();
        i++
    }
};
func = () => console.log("Hello");
repeatFunc(func,3);

arith = (func1,func2,val) => {
    return func2(func1(val));
}
add = (no) => no+5;
sub = (no) => no-10;

console.log(arith(add,sub,10)); 
console.log("\n <----End of Activity 5---->\n");


