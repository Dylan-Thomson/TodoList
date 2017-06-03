// Check Off Specific Todos By Clicking
$("li").click(function() {
	$(this).toggleClass("completed");
});

// Click on X to delete Todo
$("span").click(function(event) {
	//remove li
	$(this).parent().fadeOut(500, function() {
		$(this).remove;
	});
	//stop event from bubbling up to parent elements
	event.stopPropagation();
});
