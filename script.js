var config = {
    apiKey: "AIzaSyBgc6oG6MD5ePoP3wLxuUdEN5HOgfelFFk",
    authDomain: "test1-1ab8a.firebaseapp.com",
    databaseURL: "https://test1-1ab8a.firebaseio.com",
    projectId: "test1-1ab8a",
    storageBucket: "test1-1ab8a.appspot.com",
    messagingSenderId: "143362573111"
  };
  firebase.initializeApp(config);

    var database = firebase.database()
    var connectionsRef = database.ref("/connections")
    var connectedRef = database.ref(".info/connected")

        // When the client's connection state changes...
    connectedRef.on("value", function(snap) {

      // If they are connected..
     if (snap.val()) {
        // Add user to the connections list.
        var con = connectionsRef.push(true)
        // Remove user from the connection list when they disconnect.
        con.onDisconnect().remove()
      }
    })

    //Create a userProfile to capture this Player's info
    var userProfile = new Object()

    database.ref("/count").on("value", function(snapshot){
      if (snapshot.child("Count").exists()){
          userCount = parseInt(snapshot.val().Count)
          console.log("user Count: " + userCount)
      }
      else {
          userCount = 0
          database.ref("/count").set({
              Count: userCount
          })
      }
  })

    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var wins = 0
    var losses = 0
    var ties = 0
    
    var select = $("#choice")
    var reminder = $("#remind")
    var winRate = $("#win")
    var lossRate = $("#loss")
    var tieRate = $("#tie")

    $("#play").on("click", function(){
      
      reminder.textContent = "Please select r, p, or s"
      // $("#button").append("<h2>"+reminder.textContent+"</h2>")
      console.log("hit")
      
      prompt("Please select R, P, or S")

      // This function is run whenever the user presses a key.
      document.onkeyup = function(event) {
        

        // Determines which key was pressed.
        var userGuess = event.key
        console.log(userGuess)
        //Push to firebase
        database.ref().push({
          Choice: userGuess
      }) 
        
        
        
        
        if(userGuess !== "r" && userGuess !== "p" && userGuess !== "s"){
          alert("Please only input r, p, or s")
        }
        // Randomly chooses a choice from the options array. This is the Computer's guess.

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
        //Push to firebase
        database.ref().push({
          Wins: wins,
          Losses: losses,
          Ties: ties
      }) 
        lossRate.textContent = losses;
        tieRate.textContent = ties;

      }
    })



database.ref().on("value", function(snapshot){
  console.log(snapshot.val())
  userArr = snapshot.val()
  newArray = []
  Object.keys(userArr).map(function(key) {
      newArray.push([userArr[key]])
      // console.log(newArray)
  })
  console.log(newArray[1][0].Profile)
  
})

  