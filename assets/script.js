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

let allArrow = document.querySelectorAll(".arrow img")

	for (i = 0 ; i < 2 ; i++) {
		allArrow[i].addEventListener("click", (event) => {
			myArrow=event.target
			console.log(`J'ai cliqué sur : ${myArrow.className}`)
		})

	}

// Etape 3 ajouter des bullet point au slider



	for (let index = 0 ; index < 4; index++ ) {
		let bulletPoint = document.createElement("div")
		let bulletPointParent = document.querySelector(".dots")
	 bulletPointParent.appendChild(bulletPoint)
	 bulletPoint.classList.add("dot")
 	}

let allBulletPoints = document.querySelectorAll(".dots .dot")

let bulletPointActiveOnly1 = allBulletPoints[0]

bulletPointActiveOnly1.classList.add("dot_selected")


//Etape 4 : changer les images au clic sur les flèches et actualiser le bulletpoint actif

let flecheActiveDroite = document.querySelector(".arrow_right")

	flecheActiveDroite.addEventListener("click", () =>{


		    let bannerImgActive = document.querySelector(".banner-img")
			let indexImgActive = 0

			switch (indexImgActive){

				case 0:
					bannerImgActive.setAttribute("src", "./assets/images/slideshow/slide1.jpg")
					console.log(indexImgActive)

				case 1:

					bannerImgActive.setAttribute("src", "./assets/images/slideshow/slide2.jpg")
					console.log(indexImgActive)

				case 2:
					bannerImgActive.setAttribute("src", "./assets/images/slideshow/slide3.jpg")
					console.log(indexImgActive)

				case 3:

					bannerImgActive.setAttribute("src", "./assets/images/slideshow/slide2.jpg")
					console.log(indexImgActive)
		   }

		})











//flecheActiveDroite.addEventListener("click", () => {

	//bannerImg = document.querySelector(".banner-img")

	//bannerImg.setAttribute("src", "./assets/images/slideshow/slide1.jpg")

//})

//		flecheActiveDroite.addEventListener("click", () => {

		//	bannerImg = document.querySelector(".banner-img")

		//	bannerImg.setAttribute("src", "./assets/images/slideshow/slide2.jpg")

		//})

//flecheActiveDroite.addEventListener("click", () => {

//	bannerImg = document.querySelector(".banner-img")

//	bannerImg.setAttribute("src", "./assets/images/slideshow/slide3.jpg")

//})

//flecheActiveDroite.addEventListener("click", () => {

//	bannerImg = document.querySelector(".banner-img")

//	bannerImg.setAttribute("src", "./assets/images/slideshow/slide4.png")

//})




//let bulletPointActiveOnly2 = allBulletPoints[1]

//bulletPointActiveOnly1.classList.remove("dot_selected")
//bulletPointActiveOnly2.classList.add("dot_selected")

//let bulletPointActiveOnly3 = allBulletPoints[2]

//bulletPointActiveOnly2.classList.remove("dot_selected")
//bulletPointActiveOnly3.classList.add("dot_selected")

//let bulletPointActiveOnly4 = allBulletPoints[3]

//bulletPointActiveOnly3.classList.remove("dot_selected")
//bulletPointActiveOnly4.classList.add("dot_selected")


//Etape 4 modifier le slider au clic sur le bouton


