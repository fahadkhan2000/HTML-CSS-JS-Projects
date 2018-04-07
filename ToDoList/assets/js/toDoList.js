
//clicked li turns gray and crossed off//
//clicked again li turns black and uncrossed//
//This code runs when any li is clicked inside ul//
$("ul").on("click", "li", function(event){
	$(this).toggleClass("completed");
	event.stopPropagation;
});

//Click on X to delete the task. The task fades out before deletion//
//This code runs when any span is clicked inside the ul//
$("ul").on("click", "span", function(){
	//The parent of X should be removed i.e li rather than only X//
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
});

//Add a new task to our todolist when text is given and ENTER is hit//
$("input[type='text']").keypress(function(){
	if(event.which === 13)
	{
		var todoText = $(this).val();
		$("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> " + todoText + "</li>");
		$(this).val("");
	}
});

//make the input field hidden and visible alternatively//
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});