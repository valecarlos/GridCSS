$(document).ready(function(){
	//loop through the different li elements once the doc is ready
	$('.grid li').each(function(i)
		 {
		 	//set a Timeout function so there is a delay in the animation as it appends the new class
		 	//And use the i variable that we are getting from the loop function so one li element comes after the other
			setTimeout(function()
			{
				 	$('.grid li').eq(i).addClass('show-content');
				 }, 100 * (i+1));
			});
});