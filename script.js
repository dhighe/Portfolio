console.log('Everything is fine')

$(document).ready(function($) {
  $('#about-container').hide();
  $('#project-container').hide();
  $('#contact-container').hide();
  setTimeout(function(){
    $('#background-fade').toggleClass('active');
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
    if (aboutMe.hasClass('show')) {
      aboutMe.toggleClass('hide show');
      setTimeout(function(){
        header.toggleClass('hide show');
      },1000);
    } else if (project.hasClass('show')) {
      project.toggleClass('hide show');
      setTimeout(function(){
        header.toggleClass('hide show');
      },1000);
    } else if (contact.hasClass('show')) {
      contact.toggleClass('hide show');
      setTimeout(function(){
        header.toggleClass('hide show');
      },1000);
    } else {
      header.toggleClass('hide show');
      setTimeout(function(){
        header.toggleClass('hide show');
      },1000);
    }
  });

  aboutButton.on('click', function(){
    console.log("About Button was clicked")
    if (header.hasClass('show')) {
      header.toggleClass('hide show');
      setTimeout(function(){
        aboutMe.show();
        aboutMe.toggleClass('hide show');
      },1000);
    } else if (project.hasClass('show')) {
      project.toggleClass('hide show');
      setTimeout(function(){
        aboutMe.show();
        aboutMe.toggleClass('hide show');
      },1000);
    } else if (contact.hasClass('show')) {
      contact.toggleClass('hide show');
      setTimeout(function(){
        aboutMe.show();
        aboutMe.toggleClass('hide show');
      },1000);
    } else {
      aboutMe.toggleClass('hide show');
      setTimeout(function(){
        aboutMe.toggleClass('hide show');
      },1000);
    }
  });

  projectButton.on('click', function(){
    console.log("Project Button was clicked")
    if (header.hasClass('show')) {
      header.toggleClass('hide show');
      setTimeout(function(){
        project.show();
        project.toggleClass('hide show');
      },1000);
    } else if (aboutMe.hasClass('show')) {
      aboutMe.toggleClass('hide show');
      setTimeout(function(){
        project.show();
        project.toggleClass('hide show');
      },1000);
    } else if (contact.hasClass('show')) {
      contact.toggleClass('hide show');
      setTimeout(function(){
        project.show();
        project.toggleClass('hide show');
      },1000);
    } else {
      project.toggleClass('hide show');
      setTimeout(function(){
        project.toggleClass('hide show');
      },1000);
    }
  });

  contactButton.on('click', function(){
    console.log("Contact Button was clicked")
    if (header.hasClass('show')) {
      header.toggleClass('hide show');
      setTimeout(function(){
        contact.show();
        contact.toggleClass('hide show');
      },1000);
    } else if (aboutMe.hasClass('show')) {
      aboutMe.toggleClass('hide show');
      setTimeout(function(){
        contact.show();
        contact.toggleClass('hide show');
      },1000);
    } else if (project.hasClass('show')) {
      project.toggleClass('hide show');
      setTimeout(function(){
        contact.show();
        contact.toggleClass('hide show');
      },1000);
    } else {
      contact.toggleClass('hide show');
      setTimeout(function(){
        contact.toggleClass('hide show');
      },1000);
    }
  });
});
