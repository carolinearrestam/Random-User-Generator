export function generateProfileInfo(user) {
  return `
    <p><strong>${user.fullName}</strong></p>
    <p>👤 ${user.age} years</p>
    <p>📍 ${user.city}, ${user.country}</p>
  `;
}

export function generateModalInfo(user) {
  return `
    ${generateProfileInfo(user)} 
    <div class="contact-info">
      <p>📧 ${user.email}</p>
      <button class="email-button" onclick="window.location.href='mailto:${
        user.email
      }'">Skicka E-post</button>
    </div>
    <div class="contact-info">
      <p>📞 ${user.phone}</p>
      <button class="phone-button" onclick="window.location.href='tel:${
        user.phone
      }'">Ring</button>
    </div>
  `;
}
