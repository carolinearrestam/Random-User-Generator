import "./styles/style.css";
import "./styles/filter.css";
import { fetchProfiles } from "./fetch.js";
import { renderProfiles } from "./renderProfiles.js";
import { createFilterButton } from "./filter.js";

let displayedProfiles = 0;
const batchSize = 10;
let allProfiles = [];
let filteredProfiles = [];

const loadMoreBtn = document.createElement("button");
loadMoreBtn.textContent = "Load more profiles";
loadMoreBtn.classList.add("load-more-button");
loadMoreBtn.id = "loadMoreButton";

const statusText = document.createElement("p");
statusText.classList.add("status-text");

function updateStatus() {
  statusText.textContent = `Showing ${displayedProfiles} of ${filteredProfiles.length} profiles`;
  loadMoreBtn.style.display =
    displayedProfiles >= filteredProfiles.length ? "none" : "block";
}

export function filterProfiles(gender, ageRange) {
  filteredProfiles = allProfiles.filter(({ gender: g, age }) => {
    const genderMatch = gender === "all" || g === gender;
    const ageMatch =
      ageRange === "all" ||
      (ageRange === "18-25" && age >= 18 && age <= 25) ||
      (ageRange === "26-35" && age >= 26 && age <= 35) ||
      (ageRange === "36-45" && age >= 36 && age <= 45) ||
      (ageRange === "46-60" && age >= 46 && age <= 60) ||
      (ageRange === "60+" && age >= 60);

    return genderMatch && ageMatch;
  });

  displayedProfiles = 0;
  document.getElementById("app").innerHTML = filteredProfiles.length
    ? ""
    : "<p>No profiles found</p>";

  loadMoreProfiles();
  updateStatus();
}

function loadMoreProfiles() {
  const nextBatch = filteredProfiles.slice(
    displayedProfiles,
    displayedProfiles + batchSize
  );
  renderProfiles(nextBatch, displayedProfiles > 0);
  displayedProfiles += nextBatch.length;
  updateStatus();
}

function searchProfiles(event) {
  const searchText = event.target.value.toLowerCase();
  filterProfiles("all", "all");

  filteredProfiles = filteredProfiles.filter(({ fullName }) =>
    fullName.toLowerCase().includes(searchText)
  );

  displayedProfiles = 0;
  document.getElementById("app").innerHTML = filteredProfiles.length
    ? ""
    : "<p>No profiles found</p>";

  loadMoreProfiles();
  updateStatus();
}

document.addEventListener("DOMContentLoaded", async () => {
  createFilterButton();

  allProfiles = await fetchProfiles(50);
  filterProfiles("all", "all");

  const loadMoreContainer = document.querySelector(".load-more-container");
  loadMoreContainer.append(statusText, loadMoreBtn);
  loadMoreBtn.addEventListener("click", loadMoreProfiles);

  const searchInput = document.querySelector(".search-field");
  if (searchInput) {
    searchInput.addEventListener("input", searchProfiles);
  }
});
