//Activity 1

function activity1(){
    let i = 1;
    let noStr = "";
    for(i; i<=10; i++){
        noStr += i + " ";
    }
    console.log(noStr);

    let mul=0;
    let mulStr = "Table of 5 :";
    for(mul; mul<=50; mul+=5){
        if(mul>0){
            mulStr += " " + mul
        }
    }
    console.log(mulStr);

}
activity1();
console.log("\n <----End of Activity 1---->\n");

//Activity 2

function activity2(){
    let i = 1;
    let sum = 0;
    while(i<=10){
        sum= sum+i;
        i++
    }
    console.log(sum);
    
    n=10;
    let noStr = "";
    while(n>=1){
        noStr += n + " ";
        n--;
    }
    console.log(noStr);
}
activity2();
console.log("\n <----End of Activity 2---->\n");

//Activity 3

function activity3(){
    let i = 1;
    do{
        console.log(" " +i);
        i++;
    }while(i<=5);
    

    let num = 5;
    let fac=1;
    do{
        if(num==0){
            fac = 0;
            break;
        }
        else{
            fac=fac*num;
            num--;
        }
    }while(num>0);
    console.log(fac);
}
activity3();
console.log("\n <----End of Activity 3---->\n");


//Activity 4

function activity4(){
    let i, j,pattern="";
    for(i=1;i<=5;i++){
        for(j=1; j<=i;j++){
            pattern +=("* ");
        }
        pattern +=("\n");
    }
    console.log(pattern);
}
activity4();
console.log("<----End of Activity 4----> \n");

//Activity 5

function activity5(){
    let noStr = "";
    for(let i=1; i<=10; i++){
        if(i==5){
            continue;
        }
        else{
            noStr += i + ' ';
        } 
    }
    console.log(noStr)
    noStr = "";
    for(let i=1; i<=10; i++){
        if(i==7){
            break;
        }
        else{
            noStr += i + ' ';
        } 
    }
    console.log(noStr)
}
activity5();
console.log("\n <----End of Activity 5---->");
