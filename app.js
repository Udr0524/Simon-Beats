var crash = new Audio("sounds/crash.mp3");
var kickBass = new Audio("sounds/kick-bass.mp3");
var snare = new Audio("sounds/snare.mp3");
var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
var wrong = new Audio("sounds/wrong.mp3");

//////////////////////////////////////////////////////////////////////////////////
//                           Global variables
//////////////////////////////////////////////////////////////////////////////////
var playerArr = [];
var computerArr= [];
var randomNum1;
var gameLv = 1;
var whosTurn = "npc";
var gameState="playing";
var difficulty="Easy";
//////////////////////////////////////////////////////////////////////////////////
function randomNum(){
  randomNum1 = Math.floor(Math.random()*7)+1;
}

function unbindALL(){
  $("div.hexagon-in2.hex1").unbind();
  $("div.hexagon-in2.hex2").unbind();
  $("div.hexagon-in2.hex3").unbind();
  $("div.hexagon-in2.hex4").unbind();
  $("div.hexagon-in2.hex5").unbind();
  $("div.hexagon-in2.hex6").unbind();
  $("div.hexagon-in2.hex7").unbind();
}

function isNpcTurnYet(){
  if(playerArr.length === computerArr.length){
    gameLv = gameLv + 1;
    console.log("welcome to level "+gameLv);
    $("button.btn.btn-primary.levelPos").text("Current Level: "+gameLv);
    playerArr=[];
    setTimeout(function() {   runNpcArray();   }, 1000);
  }else{
    playerTurn();
  }
}

function gameOver(){
  gameState = "GAMEOVER";
  wrong.play();
  $("body").css("backgroundColor","red");setTimeout(function(){$("body").css("backgroundColor","black");},200);
  $("button.btn.btn-primary.reloadPos").show();
  $("button#dropdownMenuButton.btn.btn-secondary.dropdown-toggle").show();
  $("button.btn.btn-primary.reloadPos").on("click", function(e){
    window.location.reload();
  });
}

function playerTurn(){
  if(gameState === "playing"){
            $("div.hexagon-in2.hex1").on("click",function(e){
              unbindALL();
              playerArr.push(1);

              if(playerArr[playerArr.length - 1] === computerArr[playerArr.length - 1]){
                crash.currentTime=0;crash.play();$("div.hexagon-in2.hex1").hide();setTimeout(function(){$("div.hexagon-in2.hex1").show();},200);
                isNpcTurnYet();
              }else{
                gameOver();
              }

            });

            $("div.hexagon-in2.hex2").on("click",function(e){
              unbindALL();
              playerArr.push(2);
              if(playerArr[playerArr.length - 1] === computerArr[playerArr.length - 1]){
                kickBass.currentTime=0;kickBass.play();$("div.hexagon-in2.hex2").hide();setTimeout(function(){$("div.hexagon-in2.hex2").show();},200);
                isNpcTurnYet();
              }else{
                gameOver();
              }
            });

            $("div.hexagon-in2.hex3").on("click",function(e){
              unbindALL();
              playerArr.push(3);
              if(playerArr[playerArr.length - 1] === computerArr[playerArr.length - 1]){
                snare.currentTime=0;snare.play();$("div.hexagon-in2.hex3").hide();setTimeout(function(){$("div.hexagon-in2.hex3").show();},200);
                isNpcTurnYet();
              }else{
                gameOver();
              }
            });

            $("div.hexagon-in2.hex4").on("click",function(e){
              unbindALL();
              playerArr.push(4);
              if(playerArr[playerArr.length - 1] === computerArr[playerArr.length - 1]){
                tom1.currentTime=0;tom1.play();$("div.hexagon-in2.hex4").hide();setTimeout(function(){$("div.hexagon-in2.hex4").show();},200);
                isNpcTurnYet();
              }else{
                gameOver();
              }
            });

            $("div.hexagon-in2.hex5").on("click",function(e){
              unbindALL();
              playerArr.push(5);
              if(playerArr[playerArr.length - 1] === computerArr[playerArr.length - 1]){
                tom2.currentTime=0;tom2.play();$("div.hexagon-in2.hex5").hide();setTimeout(function(){$("div.hexagon-in2.hex5").show();},200);
                isNpcTurnYet();
              }else{
                gameOver();
              }
            });

            $("div.hexagon-in2.hex6").on("click",function(e){
              unbindALL();
              playerArr.push(6);
              if(playerArr[playerArr.length - 1] === computerArr[playerArr.length - 1]){
                tom3.currentTime=0;tom3.play();$("div.hexagon-in2.hex6").hide();setTimeout(function(){$("div.hexagon-in2.hex6").show();},200);
                isNpcTurnYet();
              }else{
                gameOver();
              }
            });

            $("div.hexagon-in2.hex7").on("click",function(e){
              unbindALL();
              playerArr.push(7);
              if(playerArr[playerArr.length - 1] === computerArr[playerArr.length - 1]){
                tom4.currentTime=0;tom4.play();$("div.hexagon-in2.hex7").hide();setTimeout(function(){$("div.hexagon-in2.hex7").show();},200);
                isNpcTurnYet();
              }else{
                gameOver();
              }
            });
  }
}

function runNpcArray(){

    var i = 0;

        if(difficulty === "Easy"){
          randomNum();
          computerArr.push(randomNum1);
              computerArr.forEach(function(npcTurn){
                  setTimeout(function() {
                    switch (npcTurn) {
                      case 1:crash.currentTime=0;crash.play();$("div.hexagon-in2.hex1").hide();setTimeout(function(){$("div.hexagon-in2.hex1").show();},200);break;
                      case 2:kickBass.currentTime=0;kickBass.play();$("div.hexagon-in2.hex2").hide();setTimeout(function(){$("div.hexagon-in2.hex2").show();},200);break;break;
                      case 3:snare.currentTime=0;snare.play();$("div.hexagon-in2.hex3").hide();setTimeout(function(){$("div.hexagon-in2.hex3").show();},200);break;break;
                      case 4:tom1.currentTime=0;tom1.play();$("div.hexagon-in2.hex4").hide();setTimeout(function(){$("div.hexagon-in2.hex4").show();},200);break;break;
                      case 5:tom2.currentTime=0;tom2.play();$("div.hexagon-in2.hex5").hide();setTimeout(function(){$("div.hexagon-in2.hex5").show();},200);break;break;
                      case 6:tom3.currentTime=0;tom3.play();$("div.hexagon-in2.hex6").hide();setTimeout(function(){$("div.hexagon-in2.hex6").show();},200);break;break;
                      case 7:tom4.currentTime=0;tom4.play();$("div.hexagon-in2.hex7").hide();setTimeout(function(){$("div.hexagon-in2.hex7").show();},200);break;break;
                      default:
                    }
                  }, 1000 * i);
                  i++;
              });

              whosTurn = "npc2";
                  if(whosTurn === "npc2"){
                      setTimeout(function() {   playerTurn();   }, 500 * i);
                  }
        }

        if(difficulty === "Medium"){
          randomNum();
          computerArr.push(randomNum1);
              
                  setTimeout(function() {
                    switch (computerArr[computerArr.length-1]) {
                      case 1:crash.currentTime=0;crash.play();$("div.hexagon-in2.hex1").hide();setTimeout(function(){$("div.hexagon-in2.hex1").show();},200);break;
                      case 2:kickBass.currentTime=0;kickBass.play();$("div.hexagon-in2.hex2").hide();setTimeout(function(){$("div.hexagon-in2.hex2").show();},200);break;break;
                      case 3:snare.currentTime=0;snare.play();$("div.hexagon-in2.hex3").hide();setTimeout(function(){$("div.hexagon-in2.hex3").show();},200);break;break;
                      case 4:tom1.currentTime=0;tom1.play();$("div.hexagon-in2.hex4").hide();setTimeout(function(){$("div.hexagon-in2.hex4").show();},200);break;break;
                      case 5:tom2.currentTime=0;tom2.play();$("div.hexagon-in2.hex5").hide();setTimeout(function(){$("div.hexagon-in2.hex5").show();},200);break;break;
                      case 6:tom3.currentTime=0;tom3.play();$("div.hexagon-in2.hex6").hide();setTimeout(function(){$("div.hexagon-in2.hex6").show();},200);break;break;
                      case 7:tom4.currentTime=0;tom4.play();$("div.hexagon-in2.hex7").hide();setTimeout(function(){$("div.hexagon-in2.hex7").show();},200);break;break;
                      default:
                    }
                  }, 1000 * i);
                  i++;



                  whosTurn = "npc2";
                  if(whosTurn === "npc2"){
                      setTimeout(function() {   playerTurn();   }, 500 * i);
                  }
        }




        if(difficulty === "Hard"){

                  setTimeout(function() {
                    randomNum();
                    computerArr.push(randomNum1);
                    switch (computerArr[computerArr.length-1]) {
                      case 1:crash.currentTime=0;crash.play();$("div.hexagon-in2.hex1").hide();setTimeout(function(){$("div.hexagon-in2.hex1").show();},200);break;
                      case 2:kickBass.currentTime=0;kickBass.play();$("div.hexagon-in2.hex2").hide();setTimeout(function(){$("div.hexagon-in2.hex2").show();},200);break;break;
                      case 3:snare.currentTime=0;snare.play();$("div.hexagon-in2.hex3").hide();setTimeout(function(){$("div.hexagon-in2.hex3").show();},200);break;break;
                      case 4:tom1.currentTime=0;tom1.play();$("div.hexagon-in2.hex4").hide();setTimeout(function(){$("div.hexagon-in2.hex4").show();},200);break;break;
                      case 5:tom2.currentTime=0;tom2.play();$("div.hexagon-in2.hex5").hide();setTimeout(function(){$("div.hexagon-in2.hex5").show();},200);break;break;
                      case 6:tom3.currentTime=0;tom3.play();$("div.hexagon-in2.hex6").hide();setTimeout(function(){$("div.hexagon-in2.hex6").show();},200);break;break;
                      case 7:tom4.currentTime=0;tom4.play();$("div.hexagon-in2.hex7").hide();setTimeout(function(){$("div.hexagon-in2.hex7").show();},200);break;break;
                      default:
                    }
                  }, 1000 * i);
                  i++;



                  setTimeout(function() {
                    randomNum();
                    computerArr.push(randomNum1);
                    switch (computerArr[computerArr.length-1]) {
                      case 1:crash.currentTime=0;crash.play();$("div.hexagon-in2.hex1").hide();setTimeout(function(){$("div.hexagon-in2.hex1").show();},200);break;
                      case 2:kickBass.currentTime=0;kickBass.play();$("div.hexagon-in2.hex2").hide();setTimeout(function(){$("div.hexagon-in2.hex2").show();},200);break;break;
                      case 3:snare.currentTime=0;snare.play();$("div.hexagon-in2.hex3").hide();setTimeout(function(){$("div.hexagon-in2.hex3").show();},200);break;break;
                      case 4:tom1.currentTime=0;tom1.play();$("div.hexagon-in2.hex4").hide();setTimeout(function(){$("div.hexagon-in2.hex4").show();},200);break;break;
                      case 5:tom2.currentTime=0;tom2.play();$("div.hexagon-in2.hex5").hide();setTimeout(function(){$("div.hexagon-in2.hex5").show();},200);break;break;
                      case 6:tom3.currentTime=0;tom3.play();$("div.hexagon-in2.hex6").hide();setTimeout(function(){$("div.hexagon-in2.hex6").show();},200);break;break;
                      case 7:tom4.currentTime=0;tom4.play();$("div.hexagon-in2.hex7").hide();setTimeout(function(){$("div.hexagon-in2.hex7").show();},200);break;break;
                      default:
                    }
                  }, 1000 * i);
                  i++;


              whosTurn = "npc2";
                  if(whosTurn === "npc2"){
                      setTimeout(function() {   playerTurn();   }, 1000 * i);
                  }
        }

        if(difficulty === "Free Play"){
          $("button.btn.btn-primary.reloadPos").show();
          $("button.btn.btn-primary.levelPos").text("Keyboard Capable 😎");
          $("h1.fpText.fP1").text("A");
          $("h1.fpText.fP2").text("S");
          $("h1.fpText.fP3").text("D");
          $("h1.fpText.fP4").text("F");
          $("h1.fpText.fP5").text("J");
          $("h1.fpText.fP6").text("K");
          $("h1.fpText.fP7").text("L");

                $("div.hexagon-in2.hex1").on("click",function(e){
                  crash.currentTime=0;crash.play();$("div.hexagon-in2.hex1").hide();setTimeout(function(){$("div.hexagon-in2.hex1").show();},200);
                });

                $("div.hexagon-in2.hex2").on("click",function(e){
                  kickBass.currentTime=0;kickBass.play();$("div.hexagon-in2.hex2").hide();setTimeout(function(){$("div.hexagon-in2.hex2").show();},200);
                });

                $("div.hexagon-in2.hex3").on("click",function(e){
                  snare.currentTime=0;snare.play();$("div.hexagon-in2.hex3").hide();setTimeout(function(){$("div.hexagon-in2.hex3").show();},200);
                });

                $("div.hexagon-in2.hex4").on("click",function(e){
                  tom1.currentTime=0;tom1.play();$("div.hexagon-in2.hex4").hide();setTimeout(function(){$("div.hexagon-in2.hex4").show();},200);
                });

                $("div.hexagon-in2.hex5").on("click",function(e){
                  tom2.currentTime=0;tom2.play();$("div.hexagon-in2.hex5").hide();setTimeout(function(){$("div.hexagon-in2.hex5").show();},200);
                });

                $("div.hexagon-in2.hex6").on("click",function(e){
                  tom3.currentTime=0;tom3.play();$("div.hexagon-in2.hex6").hide();setTimeout(function(){$("div.hexagon-in2.hex6").show();},200);
                });

                $("div.hexagon-in2.hex7").on("click",function(e){
                  tom4.currentTime=0;tom4.play();$("div.hexagon-in2.hex7").hide();setTimeout(function(){$("div.hexagon-in2.hex7").show();},200);
                });

                // keydown
                $(document).on("keydown",function(e){

                  switch (e.key) {
                    case "a":crash.currentTime=0;crash.play();$("div.hexagon-in2.hex1").hide();setTimeout(function(){$("div.hexagon-in2.hex1").show();},200);break;
                    case "s":kickBass.currentTime=0;kickBass.play();$("div.hexagon-in2.hex2").hide();setTimeout(function(){$("div.hexagon-in2.hex2").show();},200);break;
                    case "d":snare.currentTime=0;snare.play();$("div.hexagon-in2.hex3").hide();setTimeout(function(){$("div.hexagon-in2.hex3").show();},200);break;
                    case "f":tom1.currentTime=0;tom1.play();$("div.hexagon-in2.hex4").hide();setTimeout(function(){$("div.hexagon-in2.hex4").show();},200);break;
                    case "j":tom2.currentTime=0;tom2.play();$("div.hexagon-in2.hex5").hide();setTimeout(function(){$("div.hexagon-in2.hex5").show();},200);break;
                    case "k":tom3.currentTime=0;tom3.play();$("div.hexagon-in2.hex6").hide();setTimeout(function(){$("div.hexagon-in2.hex6").show();},200);break;
                    case "l":tom4.currentTime=0;tom4.play();$("div.hexagon-in2.hex7").hide();setTimeout(function(){$("div.hexagon-in2.hex7").show();},200);break;
                    default:

                  }
                });

                $("button.btn.btn-primary.reloadPos").on("click", function(e){
                  window.location.reload();
                });
        }

}

function pressButtonToStart(){

        //hide the reload page button
        $("button.btn.btn-primary.reloadPos").hide();

        //set diff and local saving and calling of it
        if(localStorage.SimonBeatsDifficulty === undefined){
          localStorage.setItem("SimonBeatsDifficulty", "Easy");
        }else{
          difficulty=localStorage.SimonBeatsDifficulty;
          $("button.btn.btn-primary.infoPOS").text(difficulty);
        }

        $("a.dropdown-item.eBTN").on("click",function(e){
          difficulty="Easy";
          localStorage.setItem("SimonBeatsDifficulty", "Easy");
          $("button.btn.btn-primary.infoPOS").text("Easy");
        });

        $("a.dropdown-item.mBTN").on("click",function(e){
          difficulty="Medium";
          localStorage.setItem("SimonBeatsDifficulty", "Medium");
          $("button.btn.btn-primary.infoPOS").text("Medium");
        });

        $("a.dropdown-item.hBTN").on("click",function(e){
          difficulty="Hard";
          localStorage.setItem("SimonBeatsDifficulty", "Hard");
          $("button.btn.btn-primary.infoPOS").text("Hard");
        });

        $("a.dropdown-item.fBTN").on("click",function(e){
          difficulty="Free Play";
          localStorage.setItem("SimonBeatsDifficulty", "Free Play");
          $("button.btn.btn-primary.infoPOS").text("Free Play");
        });

        //start the game
        $("div.hexagon-in2.startBTN").on("click",function(e){
          $("div.hexagon-in2.startBTN").hide();
          $("button#dropdownMenuButton.btn.btn-secondary.dropdown-toggle").hide();
          $("button.btn.btn-primary.pressStartPOS").hide();
          whosTurn = "npc1";

          if(whosTurn === "npc1"){
            setTimeout(function() { runNpcArray(); }, 500);
          }
        });
}
pressButtonToStart();
