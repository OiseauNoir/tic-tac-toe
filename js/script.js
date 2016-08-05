$(document).ready(function(){
  //console.log('ready!')



// //gameplay
//
// //1 initiliaze player 1
//
// var current_player;define player 1(x) and player 2(o)
var player = 1;
//
// //2 Create click event (two parts)
$('.square').on('click', function(event){

//alert('add symbol here');

var selectedSquare = $('this');
if(selectedSquare.hasClass('x') || (selectedSquare.hasClass('o')){
  alert('Hey dummy! This square is already taken!');
}else{
  if(player===1){
  selectedSquare.addClass('x');
}else{
  selectedSquare.addClass('o');
}
}
});
// $('.board').on('click', function()) {}...
//
// //2a perform fnction adding symbol to board based on user ID (define above as vars)
//   function...
//
// //2b toggle player ID between 1 & 2 (define above as var)
//
// function changeTurn() alternate h2 span between 1 & 2...
//
// //4 enable repeat 1 through 3 ...(max 9 possibe turns)
//
//
//
//
//
// //gamelogic
// //1 provide error notification if cell already populated
//
// alert('This square is already taken!')
//
// //2 define end game conditions (2):
//
// var endgame: winConditions || drawConditions
//
// //2a winning scenario (3 in a row)
//
// var winConditions = [
// [.topleft, .topcenter, .topright],
// [.midleft, .midcenter, .midright],
// [.btmleft, .btmcenter, .btmright],
// [.topleft, .midleft, .btmleft],
// [.topcenter, .midcenter, .btmcenter],
// [.topright, .midright, .btmright],
// [.topleft, .midcenter, .btmright],
// [.topright, .midcenter, .btmleft],
// ]
//
// //2b tie (all space full && 2a=false)
// var drawConditions... (winConditions not true & board full)
//
// //3 check for end game conditions
//
// function endgame(){}
// loop through winConditions and check T/F
//
// //3 reset board after end of game
// //4 increment winner score by 1
//
// if winConditions are true,
// then clear board and increment winner score +1
//
// else if drawconditions are true,
// then clear board (no changes to winner score)
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
});
