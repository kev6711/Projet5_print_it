const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/*Variables*/
let i = 0
const arrows = document.querySelectorAll(".arrow")
const sliderImage = document.querySelector(".banner-img")
const banner = document.getElementById("banner")
const sliderText = banner.querySelector("p")
const sliderDots = document.querySelector(".dots")
let dotElements = []

/*Fonctions*/
function activateBulletPoint() {
	dotElements.forEach(dot => {
			dot.classList.remove("dot_selected")
		})
		dotElements[i].classList.add("dot_selected")
}

function updateSlideElements() {
	sliderImage.src = slides[i].image
	sliderText.innerHTML = slides[i].tagLine
	activateBulletPoint()
}

/*Ajout bullet points de base*/
for(let i = 0; i < slides.length; i++) {
	let dot = document.createElement("span")
	dot.classList.add("dot")
	sliderDots.appendChild(dot)
	dotElements.push(dot)

	if(i === 0) {
		dot.classList.add("dot_selected")
	}
}

/*Ajout EventListener*/
arrows.forEach(arrow => {
	arrow.addEventListener('click', event => {
		let clickedArrow = event.target
		console.log(`Flèche cliquée : ${clickedArrow.className}`)

		if(clickedArrow.classList.contains("arrow_right")) {
			i++	
			if(i >= slides.length) {
				i = 0
			}
		} else {
			i--
			if(i < 0) {
				i = slides.length - 1
			}
		}

		updateSlideElements()

		console.log(i)
	})
})

