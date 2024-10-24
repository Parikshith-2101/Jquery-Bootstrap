$(document).ready(function(){
    $(".accordion").click(function(){

 	if($(this).hasClass("active")){
	    $(this).removeClass("active");

   	}
	else{
	    $(".accordion").removeClass("active");	
	    $(this).addClass("active");


 	} 
    });	
});