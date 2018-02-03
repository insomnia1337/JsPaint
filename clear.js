var clearButton = document.getElementById('clear')

var clear = function(){
	context.clearRect( 0, 0, window.innerWidth, window.innerHeight);
}
clearButton.addEventListener('click', clear);