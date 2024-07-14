//Feature Request
//1.
function typePrint(){
    console.table({no:typeof(no), str:typeof(str), bool:typeof(bool), obj:typeof(obj), arr:typeof(arr)});
}
typePrint();


//2.
function assignment(){
    let a = 10;
    console.log("a : ", a);
    const b = 10;
    try{
        a=20;
        b=20
    }catch(e){
        console.log(e);
    }finally{
        console.log("a : ", a);
        console.log("b : ", b);
    }
}
assignment();