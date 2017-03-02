// Back-End

function Player(name, curScore, totalScore) {
  this.name = name;
  this.curScore = curScore;
  this.totalScore = totalScore;
}


Player.prototype.addScore = function(num) {
  return this.curScore += num;
}

Player.prototype.hold = function(player) {
  this.totalScore += this.curScore;
  this.curScore = 0;
}

Player.prototype.roll = function() {
  var dice = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  if (dice === 1) {
    this.curScore = 0;
    if (turn === true) {
      turn = false;
      alert("You got 1, next player's turn!")
    } else {
      turn = true;
      alert("You got 1, next player's turn!")
    }
  } else {
    this.addScore(dice);
  }
}

//FrontEnd
var turn = true;

$(function() {

  var player1 = new Player("Alex", 0, 0);
  var player2 = new Player("John", 0, 0);

  $("#dice").click(function() {
    (turn ? player1.roll() : player2.roll());
    $("#p1Cur").text(player1.curScore);
    $("#p2Cur").text(player2.curScore);
  });

  $("#hold1").click(function() {
    turn = false;
    player1.hold();
    $("#p1Total").text(player1.totalScore);
    $("#p1Cur").text("0");
  });
  $("#hold2").click(function() {
    turn = true;
    player2.hold();
    $("#p2Total").text(player2.totalScore);
    $("#p2Cur").text("0");
  });
});
