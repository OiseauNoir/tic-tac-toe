$(document).ready(function(){
  //console.log('ready!')

//GAMEPLAY

//1 initiliaze player 1
// var current player; define player 1(x) and player 2(o)
//2 Create click event

var player = 1;
$('.square').on('click', function() {
    //alert('click');
var playerOneScore = $('#player1score');
var playerTwoScore = $('#player2score');


function scoreOne(){
  var currentValue=parseInt(playerOneScore.text());
  var plusOne=(currentValue) + 1;
  playerOneScore.text(plusOne);
}

function scoreTwo(){
  var currentValue=parseInt(playerTwoScore.text());
  var plusOne=(currentValue) + 1;
  playerTwoScore.text(plusOne);
}
//2a perform fnction adding symbol to board based on user ID
//2b provide error notification if cell already populated
//2c toggle player ID between 1 & 2

var selectedSquare = $(this);

if(selectedSquare.hasClass('fa fa-times') || selectedSquare.hasClass('fa fa-circle-o')) {
  alert('Hey dummy! This square is already taken!');

} else {
  if(player===1) {
    selectedSquare.addClass('fa fa-times');
      if(winningConditions('fa fa-times')) {
        alert ('Player ' + player + 'wins!');
        scoreOne();
        clearBoard();
      } else {
      player = 2, ($('.current_player').text('2'));
    }

} else {
  if(player===2) {
    selectedSquare.addClass('fa fa-circle-o');
      if(winningConditions('fa fa-circle-o')) {
        alert ('Player ' + player + 'wins!');
        scoreTwo();
        clearBoard();
      } else {
      player = 1, ($('.current_player').text('1'));
      }
    }
  }
}
});

//GAMELOGIC
//2 define end game conditions:
//2a winning conditions

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
  //diagonals
  } else if ($('.topleft').hasClass(symbol) && $('.midmid').hasClass(symbol) && $('.btmright').hasClass(symbol)) {
    return true;
  } else if ($('.topright').hasClass(symbol) && $('.midmid').hasClass(symbol) && $('.btmleft').hasClass(symbol)) {
    return true;
  } else {
    return false;
  }
}


function clearBoard() {
  $('.square').removeClass('fa fa-times && fa fa-circle-o');
}









});
//2b cat's game conditions
// var catsGameConditions function,  {
//   if ($('.square').hasClass(symbol), winningConditions = false); {
//     return true;
//   } else {
//     return false;
//   }
// }




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
