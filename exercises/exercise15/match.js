/*
1. 2 sets of 3 items. 
2. display items on the website, use id and corresponding "key". 
3. check if the user click is a match, determing user's click. 
4. output correct or incorrect
5. when all pairs are matched, end the game, counter equals the number of items. 
*/



$(document).ready(function(){

var choice1 ="";
var choice2 ="";
var score=0;

$(".rowone").click(function(){
	choice1 = $(this).attr('id');
	$(this).fadeOut('slow');
	console.log(choice1);
});

$(".rowtwo").click(function(){
   choice2= $(this).attr('id');
   $(this).fadeOut('slow');
   console.log(choice2);
        if(choice1===choice2){
        	$(".insert").text("Correct!");
        	score++;
        	$(".score").text(score);
        }
        else{
        	$(".rowone").fadeIn();
        	$(".rowtwo").fadeIn();
        	$(".insert").text("Try again?");
        	score=0;
        	$(".score").text(score);
        	console.log(score);
        }
        if(score===3){
        		$(".insert").text("You win!");
        		        $(".rowone").fadeOut();
        	            $(".rowtwo").fadeOut();
        	         }
        	        
   
   }); 

 });       


	

	/*if(){
       
	}
	else{

	}
	});

   if(arrayone && arraytwo){
   	return true;
   }
   if (!arrayone ){
   	return false;
   }

 */