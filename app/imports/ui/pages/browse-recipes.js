import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';
import { Search } from '../layouts/search.html';

Template.Browse_Recipes.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  stuffList() {
    return Stuff.find();
  },
});
