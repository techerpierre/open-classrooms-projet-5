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
	},
	
];

const banner = document.getElementById("banner");
const bannerImg = banner.querySelector("img");
const bannerTagline = banner.querySelector("p");
const bannerDots = banner.querySelector("#bannerDots");
const next = banner.querySelector("#next");
const back = banner.querySelector("#back");

let current = 0;
let interval;
let isHoveringSlider = false;

function setSlider(index) {
	const slide = slides[index];
	bannerTagline.innerHTML = slide.tagLine;
	bannerImg.src = `../assets/images/slideshow/${slide.image}`;
	const dots = bannerDots.querySelectorAll("span");
	dots[index].classList.add("dot_selected");
	dots.forEach((_, i) => {
		if (i != index)
			dots[i].classList.remove("dot_selected");
	})
}

function handleSliderIncrementation(factor) {
	let index = 0;
	if (factor > 0 && current < slides.length - 1)
		index = ++current;
	else if (factor < 0 && current > 0)
		index = --current;
	else
		index = current = (factor > 0? 0 : slides.length-1);
	setSlider(index);
}

function handle_interval() {
	if (interval)
		clearInterval(interval)
	if (!isHoveringSlider) {
		interval = setInterval(() => {
			handleSliderIncrementation(1)
		}, 5000);
	}
}

function initSlider() {
	for (let i = 0; i < slides.length; i++) {
		const span = document.createElement("span");
		span.classList.add("dot");
		span.addEventListener("click", () => {
			current = i;
			setSlider(current);
		})
		bannerDots.appendChild(span);
	}

	setSlider(current);
}	

document.addEventListener("DOMContentLoaded", () => {
	initSlider()
	handle_interval()
});

banner.addEventListener("mouseenter", () => {
	isHoveringSlider = true;
	handle_interval()
})

banner.addEventListener("mouseleave", () => {
	isHoveringSlider = false;
	handle_interval()
})

next.addEventListener("click", () => {
	handleSliderIncrementation(1)
	handle_interval()
});

back.addEventListener("click", () => {
	handleSliderIncrementation(-1)
	handle_interval()
});
