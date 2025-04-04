import "./styles/filter.css";
import { filterProfiles } from "./main.js";

export function createFilterButton() {
  const h1 = document.querySelector("h1");

  const filterContainer = document.createElement("div");
  filterContainer.classList.add("filter-container");

  const filterButton = document.createElement("button");
  filterButton.textContent = "+ Add filter";
  filterButton.classList.add("filter-button");

  const filterDropdown = document.createElement("select");
  filterDropdown.classList.add("filter-dropdown");
  filterDropdown.style.display = "none";

  const ageDropdown = document.createElement("select");
  ageDropdown.classList.add("age-dropdown");
  ageDropdown.style.display = "none";

  const genderOptions = [
    { value: "all", text: "All gender" },
    { value: "female", text: "Female" },
    { value: "male", text: "Male" },
  ];

  genderOptions.forEach((option) => {
    const opt = document.createElement("option");
    opt.value = option.value;
    opt.textContent = option.text;
    filterDropdown.appendChild(opt);
  });

  const ageRanges = [
    { value: "all", text: "All ages" },
    { value: "18-25", text: "18-25 years" },
    { value: "26-35", text: "26-35 years" },
    { value: "36-45", text: "36-45 years" },
    { value: "46-60", text: "46-60 years" },
    { value: "60+", text: "60 years and older" },
  ];

  ageRanges.forEach((range) => {
    const opt = document.createElement("option");
    opt.value = range.value;
    opt.textContent = range.text;
    ageDropdown.appendChild(opt);
  });

  filterButton.addEventListener("click", () => {
    const isHidden = filterDropdown.style.display === "none";

    filterDropdown.style.display = isHidden ? "block" : "none";
    ageDropdown.style.display = isHidden ? "block" : "none";

    filterButton.textContent = isHidden ? "Close" : "+ Add filter";
  });

  filterDropdown.addEventListener("change", () => {
    filterProfiles(filterDropdown.value, ageDropdown.value);
  });

  ageDropdown.addEventListener("change", () => {
    filterProfiles(filterDropdown.value, ageDropdown.value);
  });

  const filterBox = document.createElement("div");
  filterBox.classList.add("filter-box");
  filterBox.appendChild(filterDropdown);
  filterBox.appendChild(ageDropdown);

  filterContainer.appendChild(filterButton);
  filterContainer.appendChild(filterBox);
  h1.insertAdjacentElement("afterend", filterContainer);
}
