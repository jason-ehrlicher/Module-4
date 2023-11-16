function addCard(title, text) {
  ////modify addCard function so that we can pass content dynamically
  // clone the template
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);
  // populate the template
  template.querySelector(".card-title").innerText = title; //modify addCard function so that we can pass content dynamically
  template.querySelector(".card-text").innerText = text;
  // include the populated template into the page
  document.querySelector("#card-list").appendChild(template);
}
addCard('Default Title', 'Default text');

//Call addCard repeatedly so that your cards are automatically generated
const data = [
  { name: "Bob", age: 23 },
  { name: "Alice", age: 39 },
];

data.forEach(person => {
    addCard(person.name, `Age: ${person.age}`)
})