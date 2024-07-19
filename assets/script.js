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
];

const banner = document.getElementById("banner");
const bannerImg = banner.querySelector("img");
const bannerTagline = banner.querySelector("p");
const bannerDots = banner.querySelector("#bannerDots");
const next = banner.querySelector("#next");
const back = banner.querySelector("#back");

function setSlider(index) {
	const slide = slides[index];
	bannerTagline.innerHTML = slide.tagLine;
	bannerImg.src = `/assets/images/slideshow/${slide.image}`;
	const dots = bannerDots.querySelectorAll("span");
	dots[index].classList.add("dot_selected");
	dots.forEach((_, i) => {
		if (i != index)
			dots[i].classList.remove("dot_selected");
	})
}

for (let i = 0; i < slides.length; i++) {
	const span = document.createElement("span");
	span.classList.add("dot");
	bannerDots.appendChild(span);
}

let current = 0;

setSlider(current);

document.addEventListener("DOMContentLoaded", () => {
	setInterval(() => {
		let index = 0;
		if (current < slides.length - 1)
			index = ++current;
		else
			index = current = 0;
		setSlider(index);
	}, 5000);
});

next.addEventListener("click", () => {
	let index = 0;
	if (current < slides.length - 1)
		index = ++current;
	else
		index = current = 0;
	setSlider(index);
});

back.addEventListener("click", () => {
	let index = 0;
	if (current > 0)
		index = --current;
	else
		index = current = slides.length-1;
	setSlider(index);
});
