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
        selection = $("<button id='rockBtn' val='rock'>Rock</button><button id='paperBtn' val='paper'>Paper</button><button id='scissorsBtn' val='scissors'>Scissors</button>")
        $("#selection").append(selection)
        
        $("#rockBtn").on("click", function(){
          console.log($(this).attr("val"))
          userGuess = $(this).attr("val")
          database.ref().push({
            Choice: userGuess
          })
          $("#play").attr("disabled","disabled")
          $("#selection").html("You Chose Rock")
        })
    
        $("#paperBtn").on("click", function(){
          console.log($(this).attr("val"))
          userGuess = $(this).attr("val")
          database.ref().push({
            Choice: userGuess
          })
          $("#play").attr("disabled","disabled")
          $("#selection").html("You Chose Paper")
        })
        
        $("#scissorsBtn").on("click", function(){
          console.log($(this).attr("val"))
          userGuess = $(this).attr("val")
          database.ref().push({
            Choice: userGuess
          })
          $("#play").attr("disabled","disabled")
          $("#selection").html("You Chose Scissors")
        })
    

        // var userGuess = 
        // console.log(userGuess)
        // //Push to firebase
        // database.ref().push({
        //   Choice: userGuess
        // })
        
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

  