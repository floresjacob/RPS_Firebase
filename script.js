var config = {
    apiKey: "AIzaSyBgc6oG6MD5ePoP3wLxuUdEN5HOgfelFFk",
    authDomain: "test1-1ab8a.firebaseapp.com",
    databaseURL: "https://test1-1ab8a.firebaseio.com",
    projectId: "test1-1ab8a",
    storageBucket: "test1-1ab8a.appspot.com",
    messagingSenderId: "143362573111"
  };
  firebase.initializeApp(config);


    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var wins = 0
    var losses = 0
    var ties = 0;
    
    var select = document.getElementById("choice")
    var reminder = document.getElementById("remind")
    var winRate = document.getElementById("win");
    var lossRate = document.getElementById("loss");
    var tieRate = document.getElementById("tie");

    document.getElementById("button").addEventListener("click", function(){
      
      alert("Let The Games Begin. Select r for rock, s for scissors, or p for paper")
      reminder.textContent = "Please select r, p, or s"
      var computerChoices = ["r", "p", "s"]

      // This function is run whenever the user presses a key.
      document.onkeyup = function(event) {
        

        // Determines which key was pressed.
        var userGuess = event.key
        
        
        
        
        if(userGuess !== "r" && userGuess !== "p" && userGuess !== "s"){
          alert("Please only input r, p, or s")
        }
        // Randomly chooses a choice from the options array. This is the Computer's guess.
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]

        if(userGuess === "r" || userGuess === "p" || userGuess === "s"){
          reminder.textContent = null
          // Alerts the key the user pressed (userGuess).
          alert("User guess: " + userGuess)
          // Alerts the Computer's guess.
          alert("Computer guess: " + computerGuess)
          
          if(userGuess === "r"){
              if(computerGuess === "p"){
                alert("You Lose")
                losses++
                
              }
              else if(computerGuess === "s"){
                alert("You Win")
                wins++
                
              }
              else{
                alert("Tie. Please try again")
                ties++ 
              }
            }
            else if(userGuess === "p"){
              if(computerGuess === "s"){
                alert("You Lose")
                losses++
                
              }
              else if(computerGuess === "r"){
                alert("You Win")
                wins++
                
              }
              else{
                alert("Tie. Please try again")
                ties++ 
              }
            }
            else{
              if(computerGuess === "r"){
                alert("You Lose")
                losses++
                
              }
              else if(computerGuess === "p"){
                alert("You Win")
                wins++
                
              }
              else{
                alert("Tie. Please try again")
                ties++ 
            }
          }
        }

        winRate.textContent = wins;
        lossRate.textContent = losses;
        tieRate.textContent = ties;

      }
    })

  