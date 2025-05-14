let inp = document.getElementById("in");
let inp2 = document.getElementById("in2");
let inp3 = document.getElementById("input");
let bu = document.getElementById("b");
let bu2 = document.getElementById("b2");
let bu3 = document.getElementById("button");
let change = document.getElementById("slide");
let fm = document.querySelectorAll(".f");
let Sm = document.querySelectorAll(".S");
let show = true;

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


function check(){
    if(emailPattern.test(inp.value) || emailPattern.test(inp2.value) || emailPattern.test(inp3.value)){
        alert("Sign in done. Netflix welcomes you in the world of movies");
        
        return;
    }
    alert("Invalid email");
    
    
    
};
change.addEventListener("click", ()=>{
    if(show){
        Sm.forEach((i) => i.classList.remove("S"));
        fm.forEach((i) => i.style.display = "none");
        change.innerText = "For more Sign up"
        show = false;
    }
    else{
        Sm.forEach((i) => i.classList.add("S"));
        fm.forEach((i) => i.style.display="");
        show = true;
    }

});

bu.addEventListener("click" , check);
bu2.addEventListener("click" , check);
bu3.addEventListener("click" , check);