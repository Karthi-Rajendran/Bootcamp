//create secretNumber

var secretNumber = 4;


//ask user to guess

var guess = Number(prompt("Guess a Number"));


//check if guess is right
if(guess === secretNumber){
    alert("you got it Right");
   
}
//check if it is higher
else if(guess > secretNumber){
    alert("Too High,guess again");
}
else{
    alert("Too Low,guess again");
}