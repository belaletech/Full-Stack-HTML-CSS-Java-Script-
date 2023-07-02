const API_KEY = "ec2b6e3ce2894740a0dc2e77b83f1270";

async function getRecipes() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apikey=${API_KEY}`
  );

  const data = await response.json();
  return data.recipes;
  console.log(recipes);
}

async function init() {
  const recipes = await getRecipes();
  console.log(recipes);
}
init();
