const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Get carousel arrows
const arrow_left = document.querySelector(".arrow_left")
const arrow_right = document.querySelector(".arrow_right")


// Create carousel dots
dots = document.getElementById('dots')

let dotsArray = []

for (let i = 0; i < slides.length; i++) {
	dot = document.createElement('div')
	dot.classList.add('dot')
	dots.appendChild(dot)
	
	dotsArray.push(dot)
}

dotsArray[0].classList.add('dot_selected')

currentSlideIndex = 0


// Get carousel background image and text elements
carouselImage = document.querySelector(".carousel_img")
carouselTagLine = document.querySelector(".carousel_tagLine")


// Update carousel
function updateCarousel() {
	// Update dots styling
	for (let i = 0; i < slides.length; i++) {	
		if(currentSlideIndex == i) {
			dotsArray[i].classList.add('dot_selected')
		}

		else {
			dotsArray[i].classList.remove('dot_selected')
		}
	}

	// Update background image
	carouselImage.src = "./assets/images/slideshow/" + slides[currentSlideIndex].image;

	// Update text
	carouselTagLine.innerHTML = slides[currentSlideIndex].tagLine;
}


// Listen when click on arrows
arrow_left.addEventListener('click', function() {
	// Update currentSlideIndex
	currentSlideIndex = currentSlideIndex - 1 ;

	if (currentSlideIndex < 0){
		currentSlideIndex = slides.length - 1;
	}

	console.log("Current slide index is " + currentSlideIndex);

	updateCarousel();
})

arrow_right.addEventListener('click', function(){
	// Update currentSlideIndex
	currentSlideIndex = currentSlideIndex + 1 ;

	if (currentSlideIndex >= slides.length){
		currentSlideIndex = 0
	}

	console.log("Current slide index is " + currentSlideIndex);

	updateCarousel();
})