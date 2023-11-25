let allProducts = []; // Global variable to store all products

// Fetch data from the Fake Store API
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    allProducts = data;
    populateProducts(allProducts);
    populateCategories(data);
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
    displayErrorMessage("Error loading products. Please try again later.");
  });

// Event listeners for category change and search input
document
  .getElementById("categorySelect")
  .addEventListener("change", handleCategoryChange);
document.getElementById("searchBar").addEventListener("keyup", handleSearch);

function populateProducts(products) {
  const grid = document.getElementById("productsGrid");
  let cardsHtml = "";

  products.forEach((product) => {
    cardsHtml += `
      <div class="col-md-3 mb-4">
        <div class="card">
          <img src="${product.image}" class="card-img-top" alt="${
      product.title
    }">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text"><small class="text-muted">$${
              product.price
            }</small></p>
            <span class="custom-icon">${getIconForCategory(
              product.category
            )}</span>
          </div>
        </div>
      </div>
    `;
  });

  grid.innerHTML = cardsHtml;
}

function populateCategories(products) {
  const categorySelect = document.getElementById("categorySelect");
  const categories = new Set();

  products.forEach((product) => {
    categories.add(product.category);
  });

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });
}

function handleCategoryChange() {
  const selectedCategory = document.getElementById("categorySelect").value;
  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);
  populateProducts(filteredProducts);
}

function handleSearch() {
  const searchText = document.getElementById("searchBar").value.toLowerCase();
  const filteredProducts = allProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(searchText) ||
      product.description.toLowerCase().includes(searchText)
  );
  populateProducts(filteredProducts);
}

function displayErrorMessage(message) {
  const container = document.getElementById("productsGrid");
  container.innerHTML = `<p class="error-message">${message}</p>`;
}

function getIconForCategory(category) {
  switch (category) {
    case "electronics":
      return "📱"; // Icon for electronics
    case "men's clothing":
      return "👔"; // Icon for men's clothing
    case "women's clothing":
      return "👗"; // Icon for women's clothing
    case "jewelery":
      return "💍"; // Icon for jewelry
    default:
      return "🛍️"; // Default icon for other categories
  }
}
