import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Recipes } from '../../api/recipes/recipes.js';

/* eslint-disable object-shorthand, no-unused-vars */

/**
 * After successful addition of a new Recipes document, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  AddRecipeForm: {
    /**
     * After successful form submission, go to List_Stuff_Page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function onSuccess(formType, result) {
      FlowRouter.go('Cookbook');
    },
  },
});

Template.Add_Recipes.helpers({
  stuffCollection() {
    return Recipes;
  },
});
