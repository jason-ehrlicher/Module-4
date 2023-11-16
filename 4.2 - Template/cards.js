function addCard(title, content) {
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);
  template.querySelector(".card-title").innerText = title;

  const cardBody = template.querySelector(".card-body");

  if (typeof content === "string") {
    // If content is a string, check if it's a URL or plain text
    if (content.startsWith("http://") || content.startsWith("https://")) {
      // If content is a URL, add an image
      const img = document.createElement("img");
      img.src = content;
      img.alt = title;
      img.style.width = "100%";
      cardBody.appendChild(img);
    } else {
      // If content is text, add a paragraph
      const textElement = document.createElement("p");
      textElement.innerText = content;
      cardBody.appendChild(textElement);
    }
  } else if (content instanceof Element) {
    // If content is a DOM element, append it directly
    cardBody.appendChild(content);
  }

  document.querySelector("#card-list").appendChild(template);
}

addCard("Steve", "Age: 34");

const data = [
  { name: "Bob", age: 23 },
  { name: "Alice", age: 39 },
];

data.forEach((person) => {
  addCard(person.name, `Age: ${person.age}`);
});

const artist = [
  {
    name: "Van Gogh",
    portfolio: [
      {
        title: "portrait",
        url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image",
      },
      {
        title: "sky",
        url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg",
      },
    ],
  },
  {
    name: "Picasso",
    portfolio: [
      {
        title: "Le Reve",
        url: "https://upload.wikimedia.org/wikipedia/en/9/9d/Le-reve-1932.jpg",
      },
      {
        title: "Dove",
        url: "https://www.pablopicasso.org/images/paintings/dove.jpg",
      },
    ],
  },
  {
    name: "Monet",
    portfolio: [
      {
        title: "Poppies",
        url: "https://www.claude-monet.com/images/paintings/poppies.jpg",
      },
      {
        title: "The Magpie",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Claude_Monet_-_The_Magpie_-_Google_Art_Project.jpg/1280px-Claude_Monet_-_The_Magpie_-_Google_Art_Project.jpg",
      },
    ],
  },
];

function addArtistCard(artist) {
  // Create a div to hold the artist's entire content
  const artistContentDiv = document.createElement("div");

  // Create and append the artist's name as a header
  const artistNameHeader = document.createElement("h3");
  artistContentDiv.appendChild(artistNameHeader);

  // Add a subtitle for the portfolio
  const portfolioSubtitle = document.createElement("h4");
  portfolioSubtitle.innerText = "Artist Portfolio:";
  artistContentDiv.appendChild(portfolioSubtitle);

  // Loop through each portfolio item and add it to the artistContentDiv
  artist.portfolio.forEach((item) => {
    const img = document.createElement("img");
    img.src = item.url;
    img.alt = item.title;
    img.style.width = "100%";
    img.style.marginTop = "10px"; // Add some space between images
    artistContentDiv.appendChild(img);
  });

  // Add the entire artistContentDiv to a card
  addCard(artist.name, artistContentDiv);
}

// Then call this function for each artist
artist.forEach(addArtistCard);
