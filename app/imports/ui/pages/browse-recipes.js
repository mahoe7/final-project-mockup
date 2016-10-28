import { Template } from 'meteor/templating';
import { Recipes } from '../../api/recipes/recipes.js';
import { Search } from '../layouts/search.html';

Template.Browse_Recipes.helpers({

  /**
   * @returns {*} All of the Recipes documents.
   */
  stuffList() {
    return Recipes.find();
  },
});
