// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");	
});

// Click on X to delete Todo
$("ul").on("click", "span",function(event) {
	//remove li
	$(this).parent().fadeOut(500, function() {
		$(this).remove;
	});
	//stop event from bubbling up to parent elements
	event.stopPropagation();
});

// Add new todos using text input
$("input[type='text']").keypress(function(event) {
	//if enter key is pressed
	if(event.which === 13) {
		//grabbing new todo text from input
		var todoText = $(this).val();
		//clear input field
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
	}
});