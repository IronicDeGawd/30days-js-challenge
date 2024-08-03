//Activity 1

function activity1(){
    const promiseOne = new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('Promise executed');
            resolve();
        },2000)
    });
    
    promiseOne.then(()=>console.log(`Promise resolved`))
    
    const promiseTwo = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // let error = true;
            console.log(`Promise Executed`);
            reject();
        },2000)
    });
    
    promiseTwo.then(()=>console.log(`Promise resolved`))
    .catch((err) => {
        console.log(`Something went wrong`);
    });
}


//Activity 2

function Activity2(){
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Promise execution started`)
            reject(`Promise Rejected`);
            resolve(10);
        },1000)
    }).then((res)=>{
        console.log(res);
        return res *5;
    }).then((res)=>{
        console.log(res);
        console.log(`Promise resolved`);
    }).catch((err)=>{
        console.log(err);
        console.log(`Something went wrong`);
    }).finally(()=>{
        console.log(`Promise execution completed`);
    })
}


//Activity 3

function Activity3(){
    const promiseThree = new Promise((resolve,reject)=>{
        setTimeout(()=>{
         console.log(`Promise Execution started`);
         resolve(`Resolved in 2 sec`);
         // reject();
        },2000)
     });
     
     async function awaitUse(){
         console.log(`Calling promise...`);
         const result = await promiseThree;
         console.log(result);
     }
     
     // awaitUse();
     
     const promiseFour = new Promise((resolve,reject)=>{
         setTimeout(()=>{
             reject(`Error`)
         },2000)
     })
     
     async function tryCatch()
         {
             try {
                 console.log(`Calling promise...`);
                 const result = await promiseFour;
                 console.log(result);
             } catch (error) {
                 console.log(error);
             }
         };
}

// tryCatch();

//Activity 4
const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list"

function activity4(){
    fetch(url, {method: "GET"})
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((err)=> console.log(err))
.finally(()=> console.log(`Execution complete`));

async function mealDb() {
    try {
        const response = await fetch(url);
        const data = await response.json()
        console.log(data);
        
    } catch (error) {
        console.log(`Fetch error: ${error}`);
    }
    
}
mealDb();
}
//activity4();

//Activity 5

const promiseFirst = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(`First Promise Executed`);
        resolve('one');
    },1000)
})
const promiseSec = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(`Second Promise Executed`);
        resolve('two');
    },2000)
})
const promiseThird = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(`Third Promise Executed`);
        resolve('three');
    },3000)
})
// const promiseFourth = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log(`Fourth Promise Executed`);
//         reject();
//     },400)
// })

Promise.race([promiseFirst,promiseSec,promiseThird]).then((values)=>{
    console.log(`Output for Promise.race: ${values}`);
})

Promise.all([promiseFirst,promiseSec,promiseThird]).then((values)=>{
    console.log(`Output for Promise.all: ${values}`);
})
