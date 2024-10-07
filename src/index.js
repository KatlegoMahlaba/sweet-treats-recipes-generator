function displayRecipe(response) {
  response.data.answer;
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let instructionInput = document.querySelector("#user-instructions");
  let prompt = `User instructions: Generate a sweet treats recipe about ${instructionInput.value} `;
  let context =
    "You love delicious treats and love to write recipes. Your mission is to write a sweet treat recipe in a basic HTML.  Make sure you follow user's instructions. ";
  let apiKey = "0b3fb5fbb44a0fcb53400fo8t283598d";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
