// Use JQuery Framework

function mainTitle() { 
	//document.getElementById('mainTitle').innerHTML = 'What ?';
	$('#mainTitle').html('What what ?');
	$(document.body).css( "background", "lightgrey" );
	$('li#specificLi').has('ul').css('background-color', 'red');
 }
 
 mainTitle();