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

//Etape 2 Ajouter des eventListener

let listImgFleche =  document.querySelectorAll(".arrow img")
	for (let i = 0; i < listImgFleche.length; i++){
		let flecheActuelle = listImgFleche[i]

		flecheActuelle.addEventListener("click", (event) => {
			maFleche = event.target
			console.log(`J'ai cliqué sur la fleche : ${maFleche.classList}`)
		} )
	}


// Etape 3 ajouter des bullet point au slider

let compteurImg = slides.length

let index = 0
	while (index < compteurImg) {
		let bulletPoint = document.createElement("div")
		let bulletPointParent = document.querySelector(".dots")
		bulletPointParent.appendChild(bulletPoint)
		bulletPoint.classList.add("dot")
		index++
	}

//Etape 4 modifier le slide au clic sur le bouton





