import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Recipes = new Mongo.Collection('Recipes');

/**
 * Create the schema for Recipes
 */
export const RecipeSchema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Recipes',
      placeholder: 'Bun-ions',
    },
  },
  ingredients: {
    label: 'Ingredients',
    type: String,
    optional: false,
    autoform: {
      group: 'Recipes',
      placeholder: '1tbsp Onions',
    },
  },
});

Recipes.attachSchema(RecipeSchema);
