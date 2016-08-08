$(document).ready(function(){
  //console.log('ready!')

//GAMEPLAY

//1 initiliaze player 1
// var current player; define player 1(x) and player 2(o)
var player = 1;

//2 Create click event
$('.square').on('click', function() {
    //alert('click');

//2a perform fnction adding symbol to board based on user ID
//2b provide error notification if cell already populated
//2c toggle player ID between 1 & 2

var selectedSquare = $(this);

if(selectedSquare.hasClass('fa fa-times') || selectedSquare.hasClass('fa fa-circle-o')) {
  alert('Hey dummy! This square is already taken!');
} else {  //if free square...
  if(player===1) {
    selectedSquare.addClass('fa fa-times');
      if(winningConditions('fa fa-times')) {
        alert ('Player ' + player + 'wins!');
      } else {
      player = 2;
    }
} else {
  if(player===2) {
    selectedSquare.addClass('fa fa-circle-o');
      if(winningConditions('fa fa-circle-o')) {
        alert ('Player ' + player + 'wins!');
      } else {
      player = 1;
      }
    }
  }
}
});



//GAMELOGIC

//2 define end game conditions (2):
function winningConditions(symbol) {
  //rows
  if ($('.topleft').hasClass(symbol) && $('.topmid').hasClass(symbol) && $('.topright').hasClass(symbol)) {
    return true;
  } else if ($('.midleft').hasClass(symbol) && $('.midmid').hasClass(symbol) && $('.midright').hasClass(symbol)) {
    return true;
  } else if ($('.btmleft').hasClass(symbol) && $('.btmmid').hasClass(symbol) && $('.btmright').hasClass(symbol)) {
    return true;
  //columns
  } else if ($('.topleft').hasClass(symbol) && $('.midleft').hasClass(symbol) && $('.btmleft').hasClass(symbol)) {
    return true;
  } else if ($('.topmid').hasClass(symbol) && $('.midmid').hasClass(symbol) && $('.btmmid').hasClass(symbol)) {
    return true;
  } else if ($('.topright').hasClass(symbol) && $('.midright').hasClass(symbol) && $('.btmright').hasClass(symbol)) {
    return true;
  //diagonal
  } else if ($('.topleft').hasClass(symbol) && $('.midmid').hasClass(symbol) && $('.btmright').hasClass(symbol)) {
    return true;
  } else if ($('.topright').hasClass(symbol) && $('.midmid').hasClass(symbol) && $('.btmleft').hasClass(symbol)) {
    return true;
  } else {
    return false;
  }
}

// Can I use a loop instead of if/thens?
// var winConditions = [
// [.topleft, .topmid, .topright],
// [.midleft, .midmid, .midright],
// [.btmleft, .btmmid, .btmright],
// [.topleft, .midleft, .btmleft],
// [.topmid, .midmid, .btmmid],
// [.topright, .midright, .btmright],
// [.topleft, .midmid, .btmright],
// [.topright, .midmid, .btmleft],
// ]
// var endgame: winConditions || drawConditions




// 2a winning scenario (3 in a row)
// 2b tie (all space full && 2a=false)
// var drawConditions... (winConditions not true & board full)


// function endgame(){}
// loop through winConditions and check T/F

//3 reset board after end of game
//4 increment winner score by 1

// if winConditions are true,
// then clear board and increment winner score +1

// else if drawconditions are true,
// then clear board (no changes to winner score)

});
