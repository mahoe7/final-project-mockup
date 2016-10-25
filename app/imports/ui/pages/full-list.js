import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';

Template.Full_List.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  stuffList() {
    return Stuff.find();
  },
});
