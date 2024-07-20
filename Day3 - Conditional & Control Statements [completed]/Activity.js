//Activity 1

function activity1(num){
    if(num>0){
        console.log("Positive");
        if(num>=18){
            console.log("Eligible to vote");   
        }
        else{
            console.log("Not eligible to vote");
        }
    }
    else if(num<0){
        console.log("Negative");
    }
    else{
        console.log("Zero");
    }
}
activity1(20);
console.log("<----End of Activity---->");

//Activity 2

function activity2(n1, n2, n3){
    if(n1>n2&&n1>n3){
        console.log(`${n1} is bigger`);
    }
    else if(n2>n1&&n2>n3){
        console.log(`${n2} is bigger`);
    }
    else if(n3>n2&&n3>n1){
        console.log(`${n3} is bigger`);
    }
    else{
        console.log("All are equal");
    }
}
activity2(10,5,8);
console.log("<----End of Activity---->");

//Activity 3

function activity3(){
    let choice, grade;
    choice = 2;
    switch(choice){
        case 1:{
            console.log("Monday");
                        break;

        }
        case 2:{
            console.log("Tuesday");
                        break;

        }
        case 3:{
            console.log("Wednesday");
                        break;

        }
        case 4:{
            console.log("Thursday");
                        break;

        }
        case 5:{
            console.log("Friday");
                        break;

        }
        case 6:{
            console.log("Saturday");
                        break;

        }
        case 7:{
            console.log("Sunday");
                        break;

        }
        default:{
            console.log("Choose between 1-7");
        }
    }

    grade = 70;
    switch(true){
        case grade>=90 :{
            console.log("A");
            break;
        }
        case grade>=80 && grade<90 :{
            console.log("B")
            break;

        }
        case grade>=70 && grade<80 :{
            console.log("C")
            break;

        }
        case grade>=60 && grade<70 :{
            console.log("D")
            break;

        }
        case grade<60 :{
            console.log("F")
            break;

        }
        default:{
            console.log("Fail")
        }
    }
}
activity3();
console.log("<----End of Activity---->");

//Activity 4

function activity4(num){
    (num%2==0) ? console.log("Even") : console.log("Odd");
}
activity4(4);
console.log("<----End of Activity---->");

//Activity 5

function activity5(year){
    if (year%4==0){
        if(year%100!=0){
            console.log("Leap year");
        }
        else if(year%100==0){
            if(year%400==0){
                console.log("Leap Year");
            }
            else{
                console.log("Not Leap Year");
            }
        }
    }
    else{
        console.log("Not Leap Year");
    }
}
activity5(2000);
console.log("<----End of Activity---->");

