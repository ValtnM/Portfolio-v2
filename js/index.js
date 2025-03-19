const webDevelopperOverviewElement = document.getElementsByClassName(
  "formations__formation-overview web-developper"
)[0];
const webDevelopperDescriptionElement = document.getElementsByClassName(
  "formations__formation-description web-developper"
)[0];
const fullstackDevelopperOverviewElement = document.getElementsByClassName(
  "formations__formation-overview fullstack-developper"
)[0];
const fullstackDevelopperDescriptionElement = document.getElementsByClassName(
  "formations__formation-description fullstack-developper"
)[0];
const technicianOverviewElement = document.getElementsByClassName(
  "formations__formation-overview technician"
)[0];
const technicianDescriptionElement = document.getElementsByClassName(
  "formations__formation-description technician"
)[0];

webDevelopperOverviewElement.addEventListener("click", () => {
  if (!webDevelopperDescriptionElement.classList.contains("visible")) {
    webDevelopperDescriptionElement.classList.add("visible");
    fullstackDevelopperDescriptionElement.classList.remove("visible");
    technicianDescriptionElement.classList.remove("visible");
  }
  if (!webDevelopperOverviewElement.classList.contains("visible")) {
    webDevelopperOverviewElement.classList.add("visible");
    fullstackDevelopperOverviewElement.classList.remove("visible");
    technicianOverviewElement.classList.remove("visible");
  }
});

fullstackDevelopperOverviewElement.addEventListener("click", () => {
  if (!fullstackDevelopperDescriptionElement.classList.contains("visible")) {
    fullstackDevelopperDescriptionElement.classList.add("visible");
    webDevelopperDescriptionElement.classList.remove("visible");
    technicianDescriptionElement.classList.remove("visible");
  }
  if (!fullstackDevelopperOverviewElement.classList.contains("visible")) {
    fullstackDevelopperOverviewElement.classList.add("visible");
    webDevelopperOverviewElement.classList.remove("visible");
    technicianOverviewElement.classList.remove("visible");
  }
});

technicianOverviewElement.addEventListener("click", () => {
  if (!technicianDescriptionElement.classList.contains("visible")) {
    technicianDescriptionElement.classList.add("visible");
    webDevelopperDescriptionElement.classList.remove("visible");
    fullstackDevelopperDescriptionElement.classList.remove("visible");
  }
  if (!technicianOverviewElement.classList.contains("visible")) {
    technicianOverviewElement.classList.add("visible");
    webDevelopperOverviewElement.classList.remove("visible");
    fullstackDevelopperOverviewElement.classList.remove("visible");
  }
});

const swiperContainer = document.querySelector(".projects swiper-container");

const slideReserviaElement = document.querySelectorAll(
  ".projects swiper-slide"
)[0];
const slideCineambul72Element = document.querySelectorAll(
  ".projects swiper-slide"
)[1];
const slideStefMetalArtElement = document.querySelectorAll(
  ".projects swiper-slide"
)[2];

const projectReserviaElement = document.querySelectorAll(".project")[0];
const projectCineambul72Element = document.querySelectorAll(".project")[1];
const projectStefMetalArtElement = document.querySelectorAll(".project")[2];

const slideProjectElements = document.querySelectorAll(
  ".projects swiper-slide"
);
const descriptionProjectElements = document.querySelectorAll(".project");

// Création d'une instance de MutationObserver
// Permet de détecter le changement de classe d'un élément
const observer = new MutationObserver((mutationsList) => {
  mutationsList.forEach((mutation) => {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      slideProjectElements.forEach((slide, index) => {
        if (slide.classList.contains("swiper-slide-active")) {
          descriptionProjectElements.forEach((description, i) => {
            if (i === index) {
              console.log('Ajouté', i);
              
              description.classList.add("visible");
            } else {
              console.log('Enlevé', i);
              description.classList.remove("visible");
            }
          });
        }
      });

      
    }
  });
});


const config = { attributes: true }; // Observer les changements d'attributs

// Écoute sur toutes les slides
slideProjectElements.forEach((slideElement) => {
  observer.observe(slideElement, config);
});

