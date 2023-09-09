let homeScore=0;
let guestScore=0;

let homeDisplay=document.getElementById("score-home")
let guestDisplay=document.getElementById("score-guest")
let homeContainer=document.getElementById("home-container")
let guestContainer=document.getElementById("guest-container")

let btnh1=document.getElementById("btn-h1")
let btnh2=document.getElementById("btn-h2")
let btnh3=document.getElementById("btn-h3")

let btng1=document.getElementById("btn-g1")
let btng2=document.getElementById("btn-g2")
let btng3=document.getElementById("btn-g3")

let resetbtn=document.getElementById("newGame-btn")

btnh1.addEventListener("click", ()=>{
    addHomeScore(1)
})

btnh2.addEventListener("click", ()=>{
    addHomeScore(2)
})

btnh3.addEventListener("click", ()=>{
    addHomeScore(3)
})

btng1.addEventListener("click", ()=>{
    addGuestScore(1)
})

btng2.addEventListener("click", ()=>{
    addGuestScore(2)
})

btng3.addEventListener("click", ()=>{
    addGuestScore(3)
})

resetbtn.addEventListener("click", ()=>{
    resetGame()
})

function addHomeScore(i){
homeScore+=i
homeDisplay.textContent=homeScore
if  (homeScore>guestScore){
    homeContainer.style.border="5px solid white";
    guestContainer.style.border="5px solid black";
}

else if (homeScore==guestScore){
    homeContainer.style.border="5px solid white";
    guestContainer.style.border="5px solid white";
}

else {
    homeContainer.style.border="5px solid black";
}

}

function addGuestScore(i){
    guestScore+=i
    guestDisplay.textContent=guestScore

if  (guestScore>homeScore){
    guestContainer.style.border="5px solid white";
    homeContainer.style.border="5px solid black";
}

else if (homeScore==guestScore){
    homeContainer.style.border="5px solid white";
    guestContainer.style.border="5px solid white";
}

else {
    guestContainer.style.border="5px solid black";
}
    }



function resetGame(){
    homeScore=0;
    guestScore=0;
    homeDisplay.textContent=homeScore;
    guestDisplay.textContent=guestScore;
    guestContainer.style.border="5px solid black";
    homeContainer.style.border="5px solid black";

}

    





