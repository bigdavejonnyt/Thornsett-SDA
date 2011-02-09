$(function() {
	// Hide all the content except the first
	$(' li:odd:gt(0)').hide();
	
	// Add a padding to the first link
	$('#page-wrap li:first').animate( {
		paddingLeft:"30px"
	} );
	
	// Add the dimension class to all the content
	$('#page-wrap li:odd').addClass('dimension');
	
	// Set the even links with an 'even' class
	$('#page-wrap li:even:even').addClass('even');
	
	// Set the odd links with a 'odd' class
	$('#page-wrap li:even:odd').addClass('odd');
	
	// Show the correct cursor for the links
	$('#page-wrap li:even').css('cursor', 'pointer');
	
	// Handle the click event
	$('#page-wrap li:even').click( function() {
		// Get the content that needs to be shown
		var cur = $(this).next();
		
		// Get the content that needs to be hidden
		var old = $('#page-wrap li:odd:visible');
		
		// Make sure the content that needs to be shown 
		// isn't already visible
		if ( cur.is(':visible') )
			return false;
		
		// Hide the old content
		old.slideToggle(300);
		
		// Show the new content
		cur.stop().slideToggle(500);
		
		// Animate (add) the padding in the new link
		$(this).stop().animate( {
			paddingLeft:"30px"
		} );
		
		// Animate (remove) the padding in the old link
		old.prev().stop().animate( {
			paddingLeft:"10px"
		} );
	} );
});