import { generateProfileInfo, generateModalInfo } from "./generateProfileInfo";

export async function renderProfiles(profiles, append = false) {
  const app = document.getElementById("app");

  if (!append) {
    app.innerHTML = "";
  }

  profiles.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("profile-card");

    card.innerHTML = `
      <img src="${user.pictureMedium}" 
          alt="${user.fullName}" 
          class="profile-image">

      ${generateProfileInfo(user)}
    `;

    card.addEventListener("click", () => openModal(user));

    app.appendChild(card);
  });

  if (!document.getElementById("imageModal")) {
    createModal();
  }
}

function createModal() {
  const modal = document.createElement("div");
  modal.id = "imageModal";
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <img id="modalImage" src="" alt="Profile Image">
      <div id="modalInfo"></div>
    </div>
  `;
  document.body.appendChild(modal);

  modal.querySelector(".close").addEventListener("click", () => {
    modal.classList.remove("show");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });
}

function openModal(user) {
  const modal = document.getElementById("imageModal");
  document.getElementById("modalImage").src = user.pictureLarge;
  document.getElementById("modalInfo").innerHTML = generateModalInfo(user);
  modal.classList.add("show");
}
