function thrid_test() {
    let randNumber = parseInt((Math.random() * 100) % 100) + 1;
    while(true){
        let userInput = prompt("Guess the random number between 1 and 100");
        if(userInput ==null || userInput == "" || isNaN(userInput)){
            alert("Please enter a valid number");
            continue;
        }
        userInput = parseInt(userInput);
        if(userInput == randNumber){
            alert("Congratulations!");
            break;
        }
        if(userInput < randNumber){
            if(userInput+5 < randNumber){
                alert("Your guess is just down. Try again:");
            }
            else if(userInput+5 > randNumber){
                alert("Your guess is slightly down. Try again:");
            }
            else if(userInput-5 > randNumber){
                alert("Your guess is slightly down. Try again:");
            }
            else{
                alert("Your guess is just down. Try again:");
            }
        }
        else if(userInput > randNumber){
            if(userInput-5 > randNumber){
                alert("Your guess is just up. Try again:");
            }
            else if(userInput-5 < randNumber){
                alert("Your guess is slightly up. Try again:");
            }
            else if(userInput+5 < randNumber){
                alert("Your guess is slightly up. Try again:");
            }
            else{
                alert("Your guess is just up. Try again:");
            }
        }
    }
}

thrid_test();