
var input;
var comp=["rock","paper","scissors"];
function game(){

   var number=Math.floor(Math.random() * 3);
   $('#userChoice').text(inputV);
   $('#computerChoice').text(comp[number]);

   if(inputV === comp[number]){
       $('#result').text("Tie!");
   } else if((inputV === 'rock' && comp[number] === 'scissors') ||
   (inputV === 'paper' && comp[number] === 'rock') ||
   (inputV === 'scissors' && comp[number] === 'paper')) {
       $('#result').text('You win');
   }else if((inputV === 'rock' && comp[number] === 'paper') ||
   (inputV === 'paper' && comp[number] === 'scissors') ||
   (inputV === 'scissors' && comp[number] === 'rock')){
       $('#result').text('CPU Wins');
   }
}
$('#shoot').click(function() {
   inputV = $("#input").val();
   if(inputV === ''){
       alert("You didn't input anything");
   }else if(inputV != 'rock' && inputV != 'paper' && inputV != 'scissors'){
       alert("Not a valid input");


   }else{
       game();
   }


});