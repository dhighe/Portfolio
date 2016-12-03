console.log('Everything is fine')

$(document).ready(function($) {
  $('#about-container').hide();
  $('#project-container').hide();
  $('#contact-container').hide();
  setTimeout(function(){
    $('#background-test').toggleClass('active');
  },100);
});

$(function() {
const header = $('#header-container');
const homeButton = $('#home-btn');
const aboutMe = $('#about-container');
const aboutButton = $('#about-btn');
const project = $('#project-container');
const projectButton = $('#project-btn');
const contact = $('#contact-container');
const contactButton = $('#contact-btn');

  homeButton.on('click', function(){
    console.log("Main Button was clicked");
    header.toggleClass('hide show');
  });

  aboutButton.on('click', function(){
    aboutMe.show();
    console.log("About Button was clicked")
    aboutMe.toggleClass('hide show');

  });

  projectButton.on('click', function(){
    project.show();
    console.log("Project Button was clicked")
    project.toggleClass('hide show');
  });

  contactButton.on('click', function(){
    contact.show();
    console.log("Contact Button was clicked")
    contact.toggleClass('hide show');
  });
});
