import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/browse', {
  name: 'Browse_Recipes',
  action() {
    BlazeLayout.render('App_Body', { main: 'Browse_Recipes' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Recipes',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Recipes' });
  },
});

FlowRouter.route('/list', {
  name: 'Full_List',
  action() {
    BlazeLayout.render('App_Body', { main: 'Full_List' });
  },
});

FlowRouter.route('/edit/:_id', {
  name: 'Edit_Profile',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Profile' });
  },
});

FlowRouter.route('/cookbook', {
  name: 'Cookbook',
  action() {
    BlazeLayout.render('App_Body', { main: 'Cookbook' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
