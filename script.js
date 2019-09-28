
"use strict";

//Player n°1 
const btnPlayer1 = document.querySelector("#ctr1");
const sp1 =  document.querySelector("#score1");
let score1 = 0;

//Player n°2
const btnPlayer2 = document.querySelector("#ctr2");
const sp2 =  document.querySelector("#score2");
let score2 = 0;

//Input
const input = document.querySelector(".input");

//Reset
const reset = document.querySelector("#reset");


//Test bouton
//sp2.addEventListener("click", function (){ alert("coucou");} );


btnPlayer1.addEventListener("click",function(){
    const limit = document.querySelector("#limit").value;

    score1++;

    sp1.textContent = score1;

    if(score == limit || (score1 > score2 && score1 > limit)){
        p1s.classList.add(".green");
        btnPlayer1.setAttribute("disable", "true");
        btnPlayer2.setAttribute("disable", "true");
    }

    
})


btnPlayer2.addEventListener("click",function(){
    const limit = document.querySelector("#limit").value;

    score2++;

    sp2.textContent = score2;

    if(score == limit || (score2 > score1 && score2 > limit)){
        p1s.classList.add(".green");
        btnPlayer1.setAttribute("disable", "true");
        btnPlayer2.setAttribute("disable", "true");
    }

})


reset.addEventListener("click",function(){

    btnPlayer1.removeAttribute("disabled");
    btnPlayer2.removeAttribute("disabled");

    p1s.classList.remove("green");
    p2s.classList.remove("green");

    score1, score2 = 0;

    ps1.textContent = score1;
    ps2.textContent = score2;

    document.querySelector("#limit").value = 5;
})




