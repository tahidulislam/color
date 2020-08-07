// color making code array
let colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

// slectors
const showColor = document.querySelector('.show-color');
const color     = document.querySelector('.color');
const btn       = document.querySelector('.btn');

// eventlistemer
btn.addEventListener('click', ()=>{
	let hexColor = '#';
	for (let i = 0; i < 6; i++){
		hexColor += colors[colorIndex()];
    }
	// get random color index from array
	let getRandomColorIndex = colorIndex();
	console.log(getRandomColorIndex);

	// style the background
	document.body.style.backgroundColor = hexColor;

	// show selected color name
	color.textContent = hexColor;
});

// create random color index
let colorIndex = ()=> {
	return Math.floor(Math.random(colors)*16);	
}