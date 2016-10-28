import { Template } from 'meteor/templating';
import { Recipes } from '../../api/recipes/recipes.js';

Template.Cookbook.helpers({

  /**
   * @returns {*} All of the Recipes documents.
   */
  stuffList() {
    return Recipes.find();
  },
});
