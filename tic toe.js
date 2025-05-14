let box = document.querySelectorAll(".cell");
let h = document.querySelector(".h");
let ng = document.getElementById("bu");
let h2 = document.querySelector(".hide");
let reset = document.getElementById("r");
let win_pattern = [ 
                   [0, 1, 2],[3, 4, 5],
                   [6, 7, 8],[0, 3, 6],
                   [1, 4, 7],[2, 5, 8],
                   [0, 4, 8],[2, 4, 6]];
                   
let turn = true;

function check_winner(){
    
    for(let p of win_pattern){
        
        let p1 = box[p[0]].innerText;
        let p2 = box[p[1]].innerText;
        let p3 = box[p[2]].innerText;
        
        if(p1 != "" && p2 != "" && p3 != ""){
            if(p1 === p2 && p2 === p3 ){
                h.innerText = `Congo winner is ${p1}`;
                h.classList.remove("h");
                h2.classList.remove("hide");
                box.forEach((i) =>{
                    i.disabled = true;
                });
                return;
            }
            
        }
    }
}
function new_game(){
    ng.addEventListener("click", () =>{
        box.forEach((i) =>{
            i.innerText = "";
            i.disabled = false;
            h2.classList.add("hide");
            h.classList.add("h");
        });
    });
}
function reset_game(){
   
        box.forEach((i) =>{
            i.innerText = "";
            i.disabled = false;
            h.classList.add("h");
            h2.classList.add("hide");
        });
        return;
    
}
box.forEach((i) =>{
    
    i.addEventListener("click", ()=>{
        if(turn === true){
            i.innerText = "X";
            turn = false;
            
        }
        else{
            i.innerText = "O";
            turn = true;
            
        }
      i.disabled = true;
      
      reset.addEventListener("click", reset_game);
      check_winner();

      new_game();
    });
});

