import { Recipes } from '../../api/recipes/recipes.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Recipes to pre-fill the Collection.
 * @type {*[]}
 */
const recipeSeeds = [
  { name: 'Tacos', ingredients: "Taco Bell" },
  { name: 'PB&J', ingredients: "Bread" },
];

/**
 * Initialize the Recipes collection if empty with seed data.
 */
if (Recipes.find().count() === 0) {
  _.each(recipeSeeds, function seedRecipes(recipe) {
    Recipes.insert(recipe);
  });
}
