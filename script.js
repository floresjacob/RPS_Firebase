var config = {
    apiKey: "AIzaSyBFgYrbjxiakxrIeKgCeXnreBNLJkoLBe0",
    authDomain: "rockpaperscissors-d0a00.firebaseapp.com",
    databaseURL: "https://rockpaperscissors-d0a00.firebaseio.com",
    projectId: "rockpaperscissors-d0a00",
    storageBucket: "rockpaperscissors-d0a00.appspot.com",
    messagingSenderId: "810845430384"
  }
  firebase.initializeApp(config)

    var database = firebase.database()
    var connectionsRef = database.ref("/connections")
    var connectedRef = database.ref(".info/connected")
    var players = database.ref("/players")
    //Disable play button until name is filled out
    $("#play").attr("disabled",true)
    //Create a userProfile to capture this Player's info
    var userProfile = new Object()
    

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
        selection = $("<button id='rockBtn' val='rock'>Rock</button><button id='paperBtn' val='paper'>Paper</button><button id='scissorsBtn' val='scissors'>Scissors</button>")
        $("#selection").append(selection)
        
        $("#rockBtn").on("click", function(){
          console.log($(this).attr("val"))
          userGuess = $(this).attr("val")
          selectRPS(userGuess)
          // $("#rpsChoice").append(userGuess)
          // userProfile.Choice = userGuess
          // $("#play").attr("disabled","disabled")
          // $("#selection").html("You Chose Rock")
          // database.ref().push(userProfile)
          // console.log(userProfile)
        })
        $("#paperBtn").on("click", function(){
          console.log($(this).attr("val"))
          userGuess = $(this).attr("val")
          selectRPS(userGuess)
          // $("#rpsChoice").append(userGuess)
          // userProfile.Choice = userGuess
          // $("#play").attr("disabled","disabled")
          // $("#selection").html("You Chose Paper")
          // database.ref().push(userProfile)
          // console.log(userProfile)
        })
        
        $("#scissorsBtn").on("click", function(){
          console.log($(this).attr("val"))
          userGuess = $(this).attr("val")
          selectRPS(userGuess)
          // $("#rpsChoice").append(userGuess)
          // userProfile.Choice = userGuess
          // $("#play").attr("disabled","disabled")
          // $("#selection").html("You Chose Scissors")
          // database.ref().push(userProfile)
          // console.log(userProfile)
        })
    })

$("#nameSubmit").on("click", function(){
  var name = $("#name").val()
  console.log(name)
  userProfile.Name = name
  $("#nameHeader").html(name)
  $("#play").attr("disabled", false)
  if (newArray.length === 1){
    userProfile.position = 1
    players.push(userProfile.position)
    $("#player1").append(name)
  }
  else if(newArray.length === 2){
    $("#player2").append(name)
    userProfile.position = 2
    players.push(userProfile.position)
  }
})    

function selectRPS(guess){
  $("rpsChoice").append(guess)
  userProfile.Choice = guess
  $("#play").attr("disabled","disabled")
  $("#selection").html("You Chose " + guess)
  players.push(userProfile.guess)
}



database.ref().on("value", function(snapshot){
  console.log(snapshot.val())
  userArr = snapshot.val().connections
  newArray = []
  Object.keys(userArr).map(function(key) {
      newArray.push([userArr[key]])
  })
  console.log("connections: " + newArray.length)
  //user profile contains count of users
  players.set(newArray.length)


  $("#numOnline").text("Number of Players: " + newArray.length)
})

  