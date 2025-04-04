import "./styles/header.css";

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.createElement("nav");
  navbar.classList.add("navbar");

  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.textContent = "GenerateUser";

  const searchContainer = document.createElement("div");
  searchContainer.classList.add("search-container");

  const searchButton = document.createElement("button");
  searchButton.textContent = "🔍 Search for user";
  searchButton.classList.add("search-button");

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search by name...";
  searchInput.classList.add("search-field");
  searchInput.style.display = "none";

  searchButton.addEventListener("click", () => {
    if (searchInput.style.display === "none") {
      searchInput.style.display = "inline-block";
      searchButton.textContent = "Close search";
    } else {
      searchInput.style.display = "none";
      searchButton.textContent = "🔍 Search for user";
    }
  });

  searchContainer.appendChild(searchButton);
  searchContainer.appendChild(searchInput);

  navbar.appendChild(logo);
  navbar.appendChild(searchContainer);

  document.body.prepend(navbar);
});
