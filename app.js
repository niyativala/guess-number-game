const max=prompt("Please Enter Max Number");

const random=Math.floor(Math.random()*max);
console.log(random);

let guess=prompt("Guess the Number");

//for timer 
let timeLeft=20;
let timer=setInterval(()=>{
    timeLeft--;
    console.log("Time Left : ", timeLeft);
    if(timeLeft==0){
        clearInterval(timer);
        alert("⏰ Times up!! You Lost \nCorrect Number was",random);
        location.reload(); //restart the game 
    }
},2000)

while(true){
    if(guess=="quit"){
        clearInterval(timer);
        alert("Game Quit ❌");
        break;
    }
    if(Number(guess)===random){
        clearInterval(timer);
        alert(`🎉 Correct! Number was ${random} `);
        break;
    }else if(guess < random){
        guess=prompt("Hint : Guess no was too Small.Please try again");
    } else if(guess>random){
        guess=prompt("Hint : Guess no was too Large.Please try again");
    }
}

