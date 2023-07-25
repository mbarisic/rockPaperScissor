const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', function(){
            introScreen.classList.add("fadeout");
            match.classList.add("fadein");
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        
        // computer options
        const computerOptions = ["rock", "paper","scissors"];
       
        options.forEach(option => {
            option.addEventListener('click', function(){
                let computerNumber = Math.floor(Math.random() * 3);
                let computerChoice = computerOptions[computerNumber];
                compareHands(this.textContent, computerChoice);

                // update images ---------------------
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
            });
        });
    };

    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) =>{
        let winnerText = document.querySelector('.winner');
        if(playerChoice === computerChoice) {
            winnerText.innerText = "It's a tie!";
            return;
        };
    
        // check for rock ----------------------------------
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors') {
                winnerText.innerText = "Player wins!";
                pScore++;
                updateScore();
                return;
            } else {
                winnerText.innerText = "Computer wins";
                cScore++;
                updateScore();
                return;
            };
        };
    
        // check for paper ---------------------------------
        if(playerChoice === 'paper') {
            if(computerChoice === 'scissors') {
                winnerText.innerText = "Computer wins";
                cScore++;
                updateScore();
                return;
            } else {
                winnerText.innerText = "Player wins";
                pScore++;
                updateScore();
                return;
            };
        };
          // check for scissors ---------------------------------
          if(playerChoice === 'scissors') {
            if(computerChoice === 'rock') {
                winnerText.innerText = "Computer wins";
                cScore++;
                updateScore();
                return;
            } else {
                winnerText.innerText = "Player wins";
                pScore++;
                updateScore();
                return;
            };
        };
    }
    

    // is where you call all the inner functions
    startGame();
    playMatch();
};

//start the game function 
game();