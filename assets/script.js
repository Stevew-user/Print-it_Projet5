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

// creation des variables pour nos fleches, l'image et texte de la banniere ainsi que les "points" (dots)
const flecheGauche = document.querySelector('.arrow_left');
const flecheDroite = document.querySelector('.arrow_right');
const image = document.querySelector('.banner-img');
const txt = document.querySelector('.banner-txt');
const dots = document.querySelector('.dots');

//variable servant à l'emplacement dans le tableau de la variable "slides"
let positionSlide = 0;

//fonction servant à afficher la nouvelle image et texte au deplacement sur la gauche
flecheGauche.addEventListener('click', function() {
	positionSlide--;
	if (positionSlide === -1) {
		positionSlide = slides.length -1;
	}
	image.src = slides[positionSlide].image;

//mise a jour "forcé" des infos pour eviter un rafraichissement de la page complete
	txt.innerHTML = slides[positionSlide].tagLine;
	console.log('Déplacement banniere sur la gauche');
	updateDots();
});

//fonction servant à afficher la nouvelle image et texte au deplacement sur la droite
flecheDroite.addEventListener('click', function() {
	positionSlide++;
	if (positionSlide === slides.length) {
		positionSlide = 0;
	}
	image.src = slides[positionSlide].image;

//mise a jour "forcé" des infos pour eviter un rafraichissement de la page complete
	txt.innerHTML = slides[positionSlide].tagLine;
	console.log('Déplacement banniere sur la droite');
	updateDots();
});

// creation et integartion d'une boucle pour les "points" (dots) 
for (let i = 0; i < slides.length; i++) {
	const newDot = document.createElement('div'); 
	newDot.classList = 'dot';
	dots.appendChild (newDot);
	newDot.addEventListener('click', function() {
		positionSlide = i;
		img.src = slides[positionSlide].image;

//mise a jour "forcé" des infos pour eviter un rafraichissement de la page complete
		txt.innerHTML = slides[positionSlide].tagLine;
		updateDots();
	});

}

/*definition de l'emplacement des "points" (dots) pour savoir sur quelle image
du caroussel nous nous trouvons
*/
let dot = document.querySelectorAll('.dot');
dot[0].classList.add('dot_selected');

function updateDots() {
	for (let i = 0; i < dot.length; i++) {
		if (i === positionSlide) {
			dot[i].classList.add('dot_selected');
		} else {
			dot[i].classList.remove('dot_selected');
		}
	}
}

