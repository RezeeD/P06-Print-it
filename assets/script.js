const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

//Etape 2 Ajouter des eventListener

let allArrow = document.querySelectorAll(".arrow img");

for (i = 0; i < 2; i++) {
  allArrow[i].addEventListener("click", (event) => {
    myArrow = event.target;
    console.log(`J'ai cliqué sur : ${myArrow.className}`);
  });
}

// Etape 3 ajouter des bullet point au slider

for (let index = 0; index < 4; index++) {
  let bulletPoint = document.createElement("div");
  let bulletPointParent = document.querySelector(".dots");
  bulletPointParent.appendChild(bulletPoint);
  bulletPoint.classList.add("dot");
}

let allBulletPoints = document.querySelectorAll(".dots .dot");

allBulletPoints[0].classList.add("dot_selected");

//Etape 4 : changer les images au clic sur les flèches et actualiser le bulletpoint actif

let indexSlide = 0;
let slideArrow = document.querySelectorAll(".arrow img");
let slideImg = document.querySelector(".banner-img");
let slideMsg = document.querySelector("#banner p");

slideArrow[1].addEventListener("click", () => {


  indexSlide++;

  if (indexSlide < 4) {
    allBulletPoints[indexSlide - 1].classList.remove("dot_selected");
    allBulletPoints[indexSlide].classList.add("dot_selected");
    slideImg.src = `./assets/images/slideshow/${slides[indexSlide].image}`;
    slideMsg.innerHTML = `<p>${slides[indexSlide].tagLine}</p>`;
  } else if (indexSlide > 3) {
    indexSlide = 0;
    allBulletPoints[3].classList.remove("dot_selected");
    allBulletPoints[indexSlide].classList.add("dot_selected");
    slideImg.src = `./assets/images/slideshow/${slides[indexSlide].image}`;
    slideMsg.innerHTML = `<p>${slides[indexSlide].tagLine}</p>`;
  }
});

slideArrow[0].addEventListener("click", () => {


  indexSlide--;

  if (indexSlide < 0) {
    indexSlide = 3;

    allBulletPoints[0].classList.remove("dot_selected");
    allBulletPoints[indexSlide].classList.add("dot_selected");
    slideImg.src = `./assets/images/slideshow/${slides[indexSlide].image}`;
    slideMsg.innerHTML = `<p>${slides[indexSlide].tagLine}</p>`;
  } else if (indexSlide < 4) {
    allBulletPoints[indexSlide + 1].classList.remove("dot_selected");
    allBulletPoints[indexSlide].classList.add("dot_selected");
    slideImg.src = `./assets/images/slideshow/${slides[indexSlide].image}`;
    slideMsg.innerHTML = `<p>${slides[indexSlide].tagLine}</p>`;
  }
});

