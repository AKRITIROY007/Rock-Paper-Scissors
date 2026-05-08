let userscore=0;
let compscore=0;

const choices= document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user");
const compscorepara = document.querySelector("#comp-score");


const genCompChoice=() =>{
    let options=["stone","paper","scissors"];
    let randIndex =  Math.floor(Math.random() * 3);
    return options[randIndex];//compChoice
   
}
const showWinner=(userWin,compChoice,userChoice)=>{
    if(userWin){
        userscore++;
        userscorepara.innerText = userscore;
        console.log("u won");
        msg.innerText = `you won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "green";
    }
    else{
         compscore++;
        compscorepara.innerText = compscore;
        console.log("u lost");
        msg.innerText = `you lost! ${compChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor= "red";
    }
}

const drawGame=()=>{
    msg.innerText = "draw game"
    msg.style.backgroundColor="black";
}
const playGame=(userChoice) =>{
    let compChoice = genCompChoice();

 if(userChoice===compChoice){
    //draw
    drawGame();
 } else{
    let userWin=true;
    if(userChoice==="stone"){
        userWin = compChoice==="paper"? false:true;
    }
    else if(userChoice==="paper") {
         userWin= compChoice==="stone"? true:false; 
    }
    else if(userChoice==="scissors") {
        userWin = compChoice==="paper"? true:false;
    }
    showWinner(userWin,compChoice,userChoice);
 }     
 }  



choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})