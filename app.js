// colors array
const colors = ['red', 'green', 'rgba(133, 122, 200)', '#F15025'];

//slectors
const showColor = document.querySelector('.show-color');
const color     = document.querySelector('.color');
const btn       = document.querySelector('.btn');

// eventlistemer
btn.addEventListener('click', ()=>{
	// get random color index from array
	let getRandomColorIndex = colorIndex();

	// style the background
	document.body.style.backgroundColor = colors[getRandomColorIndex];

	// show selected color name
	color.textContent = colors[getRandomColorIndex];
});

// create random color index
let colorIndex = ()=> {
	return Math.floor(Math.random(colors)*colors.length);
}