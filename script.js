let test_dom =  document.querySelector('h1');

test_dom.style.color = "blue";

let isYellow =  false;
let BodyElement = document.querySelector('body')


setInterval(function(){
    if(isYellow){
        BodyElement.style.backgroundColor = "pink";
        isYellow = false;
    }else{
        BodyElement.style.backgroundColor = "yellow";
        isYellow = true;
    }
    // isYellow = !isYellow;
    
},1000);


let getById =  document.getElementById("id_testing");
console.log(getById);

let getByClass =  document.getElementsByClassName("class_testing");
console.log(getByClass);
