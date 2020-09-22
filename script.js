const games = [
  { id: 324, name: "Great game", rating: 5.0 },
  { id: 124, name: "Ok game", rating: 3.0 },
  { id: 678, name: "Meh game", rating: 2.5 },
  { id: 28, name: "Terrible game", rating: 1.0 },
  { id: 4, name: "Mediocre game", rating: 3.0 },
];

const resultContainer = document.querySelector(".resultContainer");

let html = "";

games.forEach((game) => {
  html += `
  <li>
    <span>Name: ${game.name}, Rating: ${game.rating}</span>
  </li>`;

  resultContainer.innerHTML = html;
});

const items = document.querySelectorAll("li span");
console.log(items);

items.forEach(function (item) {
  item.addEventListener("click", handleClick);
});

function handleClick() {
  this.classList.toggle("played");
}
