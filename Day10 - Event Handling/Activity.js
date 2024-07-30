//Activity 1

const para = document.getElementById("para")
para.addEventListener("click", function(){
    para.innerHTML = "Event listener activated due to click"
})

const img1 = document.getElementById("myImg")
img1.addEventListener("dblclick", function(){
    if(img1.style.opacity == "100"){
        img1.style.opacity = "0"
    }
    else{
        img1.style.opacity = "100"
    }
})

//Activity 2

const cont = document.getElementById('container')
cont.addEventListener("mouseover", ()=>cont.style.backgroundColor="red")
cont.addEventListener("mouseout", ()=>cont.style.backgroundColor="aqua")

//Activity 3

const inputField = document.getElementById("myInput")
const dyP = document.getElementById("dynamicPara")
inputField.addEventListener("keydown",(Event)=>console.log(Event.key))
inputField.addEventListener("keyup",(Event)=>
{
    if(Event.key == "Delete"){
        dyP.innerHTML = ""
        inputField.value = ""
    }
    else{
        dyP.innerHTML += `${Event.key} `
    }
})

//Activity 4

const paraForm = document.getElementById('formVal');
const submit = document.getElementById('sub');
submit.addEventListener('click', ((e)=>{
    console.log(e);
    let formStr = getValue();
    e.preventDefault();
    paraForm.innerHTML += formStr + ' ';
}))
let getValue = (()=> {
    return document.getElementById('date').value + document.getElementById('week').value;
})

//Activity 5

const log = document.getElementById('log');
log.innerHTML = `Output : \t`
const list = document.getElementById('list')
list.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        log.innerHTML += e.target.innerHTML + ' ';
    }
    
})
let cardNo = 0;
let container = document.getElementById('cont');
document.getElementById('addCard').addEventListener('click', addCardDy);
function addCardDy(){
    cardNo++;
    container.innerHTML += `<div style="border: 1px solid red; height: 35px; width: 15px; margin: 5px; " id="card">${cardNo}</div>`
}

container.addEventListener('click',function(e){
    alert(`Card ${e.target.innerHTML} clicked!`)
})