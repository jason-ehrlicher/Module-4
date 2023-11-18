
function addCard(title, text) {
  const template = document.getElementById("card-template").content.cloneNode(true);
  template.querySelector('.card-title').innerText = title;
  template.querySelector('.card-text').innerText = text;
  document.getElementById("card-list").appendChild(template);
}

// Adding 8 cards
for (let i = 1; i <= 8; i++) {
  addCard(`Card Title ${i}`, `Some quick example text for card ${i}`);
}
