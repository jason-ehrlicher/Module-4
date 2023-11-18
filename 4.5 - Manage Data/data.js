let news = [
  { id: 1, title: "Election Results", content: "Newly elected minister..." },
  { id: 2, title: "Sporting Success", content: "World Cup winners..." },
  { id: 3, title: "Tornado Warning", content: "Residents should prepare..." },
  { id: 3, title: "Test", content: "--test--" },
];

function displayNews() {
  const newsContainer = document.getElementById("newsContainer");
  newsContainer.innerHTML = "";

  news.forEach((item) => {
    const newsElement = document.createElement("div");
    newsElement.innerHTML = `<h2>${item.title}</h2><p>${item.content}</p>`;
    newsElement.style.border ="1px solid black";
    newsElement.style.margin ="10px";
    newsElement.style.padding = "10px";
    newsContainer.appendChild(newsElement);
  });
}

function addNews() {
    const title = document.getElementById('newsTitle').value;
    const content = document.getElementById('newsContent').value;
    const newId = news.length + 1;
    news.push({id: newId, title: title, content: content});
    document.getElementById('newsTitle').value = '';
    document.getElementById('newsContent').value = '';
    displayNews();
}

let interval = setInterval(displayNews, 5000);

function stopInterval() {
    clearInterval(interval);
}

displayNews();