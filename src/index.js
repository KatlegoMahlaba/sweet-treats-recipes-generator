function generateRecipe(event) {
  event.preventDefault();

  let recipeElement = document.querySelector("#recipe");
  recipeElement.innerHTML = "Recipe will go here";

  new Typewriter("#recipe", {
    strings: "Recipe will go here",
    autoStart: true,
    delay: 200,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
