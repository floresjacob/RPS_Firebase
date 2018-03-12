var config = {
    apiKey: "AIzaSyBgc6oG6MD5ePoP3wLxuUdEN5HOgfelFFk",
    authDomain: "test1-1ab8a.firebaseapp.com",
    databaseURL: "https://test1-1ab8a.firebaseio.com",
    projectId: "test1-1ab8a",
    storageBucket: "test1-1ab8a.appspot.com",
    messagingSenderId: "143362573111"
  }
  firebase.initializeApp(config)

    var database = firebase.database()
    var connectionsRef = database.ref("/connections")
    var connectedRef = database.ref(".info/connected")
    var userCount = 0
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
  // userProfile.userCount--
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
          $("#rpsChoice").append(userGuess)
          userProfile.Choice = userGuess
          $("#play").attr("disabled","disabled")
          $("#selection").html("You Chose Rock")
          database.ref().push(userProfile)
          console.log(userProfile)
        })
        $("#paperBtn").on("click", function(){
          console.log($(this).attr("val"))
          userGuess = $(this).attr("val")
          $("#rpsChoice").append(userGuess)
          userProfile.Choice = userGuess
          $("#play").attr("disabled","disabled")
          $("#selection").html("You Chose Paper")
          database.ref().push(userProfile)
          console.log(userProfile)
        })
        
        $("#scissorsBtn").on("click", function(){
          console.log($(this).attr("val"))
          userGuess = $(this).attr("val")
          $("#rpsChoice").append(userGuess)
          userProfile.Choice = userGuess
          $("#play").attr("disabled","disabled")
          $("#selection").html("You Chose Scissors")
          database.ref().push(userProfile)
          console.log(userProfile)
        })
    })

$("#nameSubmit").on("click", function(){
  var name = $("#name").val()
  console.log(name)
  userProfile.Name = name
  $("#nameHeader").html(name)
  $("#play").attr("disabled", false)
  //TODO: Name of Opponent below
})    


database.ref().on("value", function(snapshot){
  console.log(snapshot.val().connections)
  userArr = snapshot.val().connections
  newArray = []
  Object.keys(userArr).map(function(key) {
      newArray.push([userArr[key]])
  })
  console.log("connections: " + newArray.length)
  //user profile contains count of users
  userProfile.Count = newArray.length
  $("#numOnline").text("Number of Players: " + userProfile.Count)
})

  