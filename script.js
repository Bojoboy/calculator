$(document).ready(function (){
	var button = $("body").find('.' + 'calcButton');
	var display = $("body").find('#' + 'answer');
	var result = $("body").find('#' + 'equalButton');
	var console = $("body").find('#' + 'history');
	var clear = $("body").find('.' + 'ce');
	var arr = [];

	button.on('click', function() {
		display.text( display.text() + $(this).attr('value') );
		arr.push(display.text());
		if(arr.length == 13) {
			console.text("Can't be more then 13 symbols.");
			display.text('');
			arr = [];
		}
	});
	result.on('click', function() {
		display.text( eval( display.text() ) );
	});
	clear.on('click', function(){
		display.text('');
	});
	
	





});