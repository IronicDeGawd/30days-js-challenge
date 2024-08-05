//Activity 1

const activity1= () => {
    function errorTest(){
        throw (`Something went wrong`);
    }
    
    try {
        errorTest();
    } catch (error) {
        console.log(error);
    }
    
    function div(n1, n2){
        if (n2 == 0) throw (`Denominator zero`)
        else return n1/n2;
    }
    
    try {
        console.log(div(5,10));
        console.log(div(10,0));
    } catch (error) {
        console.log(error);
    }
};

// activity1()

//Activity 2

const activity2 = () => {
    try {
        console.log(`Process started in try block`);
        if(0==0) throw `Error occurs`
        
    } catch (error) {
        console.log(`Catch block gets executed due to error`);
    } finally {
    console.log(`Process completed in finally block`);
    }
}
// activity2()

//Activity 3

function activity3(){
    class ValidationError extends Error {
        constructor(message) {
            super(message);
            this.name = 'ValidationError'
        }
    }
    
    function validAge(){
        throw new ValidationError('Not valid age or below 18')
    }
    
    try {
        let age = 17;
        if (age<18 || age>60){
            validAge();
        }
    } catch (error) {
        console.log(error.message);
        console.log(error.name);
    }
    
}

// activity3()

//Activity4

function activity4(){
    const randProm = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)
        if (num%2===0){
            resolve('Even');
        }
        else{
            reject('Odd')
        }
        },250)
    })
    
    randProm
    .then((value)=>{
        console.log(value);
    })
    .catch((value)=>{
        console.log(value);
    })
    .finally(()=>{
        console.log('Process completed');
    })
      
    
    async function promiseP() {
        try {
            const data = await randProm
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    
    }
    
    promiseP();
}

// activity4();

//Activity5

function activity5(){
    const url = 'example.com'

fetch(url)
.then((response)=>{
    return response.json;
})
.then((response)=>{
    console.log(response);
})
.catch((err)=>{
    console.log(`Error name: ${err.name}`);
    console.log(`Error message: ${err.message}`);
})
.finally(()=>{
    console.log(`Process completed`);
})

async function loadUrl(){
   try {
    const response = await fetch(url);
    console.log(response);
   } catch (err) {
    console.log(`Error name: ${err.name}`);
    console.log(`Error message: ${err.message}`);
   }
}
loadUrl();
}

// activity5();