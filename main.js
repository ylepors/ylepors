// Use JQuery Framework

function mainTitle() { 
	//document.getElementById('mainTitle').innerHTML = 'What ?';
        $('#mainTitle').html('Yeeeess ?');
	$(document.body).css( "background", "lightgrey" );
	$('li#specificLi').has('ul').css('background-color', 'yellow');
 }
 
 mainTitle();
