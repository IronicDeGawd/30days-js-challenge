//Activity 1

const changeText = (() => {
    let text = document.getElementById("text")
    text.innerHTML = "Changed Text"
})

const changeBg = (() => {
    let text = document.getElementsByClassName("box2")[0]
    let randomColor = Math.floor(Math.random() * 1000000) + 1;
    text.style.backgroundColor = `#${randomColor}`
})


//Activity 2
let n = 2;
const addElement = (() => {
    n++;
    let box = document.createElement("div");
    box.className = `box`;
    let randomColor = Math.floor(Math.random() * 1000000) + 1;
    console.log(randomColor);
    box.style.backgroundColor = `#${randomColor}`
    let para = document.createElement("p");
    para.innerHTML = `Box ${n}`
    box.appendChild(para);
    let container = document.getElementById("cont");
    container.appendChild(box)
   
})

const addList = (()=>{
    let listEl = document.createElement("li")
    listEl.innerHTML = document.getElementById("listIn").value;
    document.getElementById("myList").appendChild(listEl)
    
})

//Activity 3

const removeList = (() => {
    let list = document.getElementById("myList");
     if ( list.hasChildNodes() != 0 ){
        list.removeChild(list.lastChild);
     };
})

//Activity 4

const changeImg = (()=> {
    let img = document.getElementById("myImg");
    if(img.attributes.src.value == "./2.png"){
        img.attributes.src.value = "./1.png"
    }
    else{
        img.attributes.src.value = "./2.png"
    }
    
})

const addBorder = (()=> {
    let img = document.getElementById("myImg");
    if(img.className == "border"){
        img.className = "";
    }
    else{
        img.className += "border"
    }
})

//Activity 5

let para = document.getElementById("para");
let btn = document.getElementById("changeBtn");
const changePara = (()=>{
    para.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ipsa iure nostrum."
})
btn.addEventListener("click", changePara)
para.addEventListener("mouseover",function(){
    para.style.border = "red solid 1px"
})
