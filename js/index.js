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
const cdaOverviewElement = document.getElementsByClassName(
  "formations__formation-overview cda"
)[0];
const cdaDescriptionElement = document.getElementsByClassName(
  "formations__formation-description cda"
)[0];

webDevelopperOverviewElement.addEventListener("click", () => {
  if (!webDevelopperDescriptionElement.classList.contains("visible")) {
    webDevelopperDescriptionElement.classList.add("visible");
    fullstackDevelopperDescriptionElement.classList.remove("visible");
    cdaDescriptionElement.classList.remove("visible");
  }
  if (!webDevelopperOverviewElement.classList.contains("visible")) {
    webDevelopperOverviewElement.classList.add("visible");
    fullstackDevelopperOverviewElement.classList.remove("visible");
    cdaOverviewElement.classList.remove("visible");
  }
});

fullstackDevelopperOverviewElement.addEventListener("click", () => {
  if (!fullstackDevelopperDescriptionElement.classList.contains("visible")) {
    fullstackDevelopperDescriptionElement.classList.add("visible");
    webDevelopperDescriptionElement.classList.remove("visible");
    cdaDescriptionElement.classList.remove("visible");
  }
  if (!fullstackDevelopperOverviewElement.classList.contains("visible")) {
    fullstackDevelopperOverviewElement.classList.add("visible");
    webDevelopperOverviewElement.classList.remove("visible");
    cdaOverviewElement.classList.remove("visible");
  }
});

cdaOverviewElement.addEventListener("click", () => {
  if (!cdaDescriptionElement.classList.contains("visible")) {
    cdaDescriptionElement.classList.add("visible");
    webDevelopperDescriptionElement.classList.remove("visible");
    fullstackDevelopperDescriptionElement.classList.remove("visible");
  }
  if (!cdaOverviewElement.classList.contains("visible")) {
    cdaOverviewElement.classList.add("visible");
    webDevelopperOverviewElement.classList.remove("visible");
    fullstackDevelopperOverviewElement.classList.remove("visible");
  }
});
