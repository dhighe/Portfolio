console.log('Everything is fine')

$(document).ready(function($) {
  $('#about-container').hide();
  $('#project-container').hide();
  $('#contact-container').hide();
  $('#game-modal').hide();
  $('#comic-modal').hide();
  $('#playlist-modal').hide();
  $('#fourth-modal').hide();
  $('#modal-shadow').hide();
  setTimeout(function(){
    $('#background-fade').toggleClass('active');
  },200);

  var frmvalidator  = new Validator("contact_form");
  frmvalidator.addValidation("name","req","Please provide your name");
  frmvalidator.addValidation("email","req","Please provide your email");
  frmvalidator.addValidation("email","email","Please enter a valid email address");
});

$(() => {

const header = $('#header-container');
const homeButton = $('#home-btn');
const aboutMe = $('#about-container');
const aboutButton = $('#about-btn');
const project = $('#project-container');
const projectButton = $('#project-btn');
const contact = $('#contact-container');
const contactButton = $('#contact-btn');
const firstProject = $('#game-project');
const secondProject = $('#comic-project');
const thirdProject = $('#playlist-project');
const fourthProject = $('#fourth-project');
const firstModal = $('#game-modal');
const secondModal = $('#comic-modal')
const thirdModal = $('#playlist-modal');
const fourthModal = $('#fourth-modal');
const firstClose = $('#firstClose');
const secondClose = $('#secondClose');
const thirdClose = $('#thirdClose');
const fourthClose = $('#fourthClose');
homeButton.prop("disabled", true);


  homeButton.on('click', () => {
     console.log("Main Button was clicked");
     homeButton.prop("disabled", true);
    if (aboutMe.hasClass('show')) {
      aboutMe.toggleClass('hide show');
      aboutButton.prop("disabled", false);
      setTimeout(() => {
        header.toggleClass('hide show');
      },1000);
    } else if (project.hasClass('show')) {
      project.toggleClass('hide show');
      projectButton.prop("disabled", false);
      setTimeout(() => {
        header.toggleClass('hide show');
      },1000);
    } else if (contact.hasClass('show')) {
      contact.toggleClass('hide show');
      contactButton.prop("disabled", false);
      setTimeout(() => {
        header.toggleClass('hide show');
      },1000);
    } else {
      header.toggleClass('hide show');
      homeButton.prop("disabled", false);
      setTimeout(() => {
        header.toggleClass('hide show');
      },1000);
    }
  });

  aboutButton.on('click', () => {
    console.log("About Button was clicked")
    aboutButton.prop("disabled", true);
    if (header.hasClass('show')) {
      header.toggleClass('hide show');
      homeButton.prop("disabled", false);
      setTimeout(() => {
        aboutMe.show();
        aboutMe.toggleClass('hide show');
      },1000);
    } else if (project.hasClass('show')) {
      project.toggleClass('hide show');
      projectButton.prop("disabled", false);
      setTimeout(() => {
        aboutMe.show();
        aboutMe.toggleClass('hide show');
      },1000);
    } else if (contact.hasClass('show')) {
      contact.toggleClass('hide show');
      contactButton.prop("disabled", false);
      setTimeout(() => {
        aboutMe.show();
        aboutMe.toggleClass('hide show');
      },1000);
    } else {
      aboutMe.toggleClass('hide show');
      aboutButton.prop("disabled", false);
      setTimeout(() => {
        aboutMe.toggleClass('hide show');
      },1000);
    }
  });

  projectButton.on('click', () => {
    console.log("Project Button was clicked")
    projectButton.prop("disabled", true);
    if (header.hasClass('show')) {
      header.toggleClass('hide show');
      homeButton.prop("disabled", false);
      setTimeout(() => {
        project.show();
        project.toggleClass('hide show');
      },1000);
    } else if (aboutMe.hasClass('show')) {
      aboutMe.toggleClass('hide show');
      aboutButton.prop("disabled", false);
      setTimeout(() => {
        project.show();
        project.toggleClass('hide show');
      },1000);
    } else if (contact.hasClass('show')) {
      contact.toggleClass('hide show');
      contactButton.prop("disabled", false);
      setTimeout(() => {
        project.show();
        project.toggleClass('hide show');
      },1000);
    } else {
      project.toggleClass('hide show');
      projectButton.prop("disabled", false);
      setTimeout(() => {
        project.toggleClass('hide show');
      },1000);
    }
  });

  contactButton.on('click', () => {
    console.log("Contact Button was clicked")
    contactButton.prop("disabled", true);
    if (header.hasClass('show')) {
      header.toggleClass('hide show');
      homeButton.prop("disabled", false);
      setTimeout(() => {
        contact.show();
        contact.toggleClass('hide show');
      },1000);
    } else if (aboutMe.hasClass('show')) {
      aboutMe.toggleClass('hide show');
      aboutButton.prop("disabled", false);
      setTimeout(() => {
        contact.show();
        contact.toggleClass('hide show');
      },1000);
    } else if (project.hasClass('show')) {
      project.toggleClass('hide show');
      projectButton.prop("disabled", false);
      setTimeout(() => {
        contact.show();
        contact.toggleClass('hide show');
      },1000);
    } else {
      contact.toggleClass('hide show');
      contactButton.prop("disabled", false);
      setTimeout(() => {
        contact.toggleClass('hide show');
      },1000);
    }
  });

  firstProject.on('click', () => {
    console.log('Let\'s a look at this project')
    firstModal.show();
    $('#modal-shadow').show();
    $('#modal-shadow').css('z-index', 0);
    firstModal.css('z-index', 1);
    firstModal.toggleClass('show hide');
  })

  firstClose.on('click', () => {
    console.log('Done looking at this project')
    $('#modal-shadow').hide();
    $('#modal-shadow').css('z-index', -1);
    setTimeout(function(){
    firstModal.css('z-index', -1);
      },500);
    firstModal.toggleClass('show hide');
  })

  secondProject.on('click', () => {
    console.log('Let\'s a look at this project')
    secondModal.show();
    $('#modal-shadow').show();
    $('#modal-shadow').css('z-index', 0);
    secondModal.css('z-index', 1)
    secondModal.toggleClass('show hide');
  })

  secondClose.on('click', () => {
    console.log('Done looking at this project')
    $('#modal-shadow').hide();
    $('#modal-shadow').css('z-index', -1);
    setTimeout(function(){
    secondModal.css('z-index', -1);
      },500);
    secondModal.toggleClass('show hide');
  })

  thirdProject.on('click', () => {
    console.log('Let\'s a look at this project')
    thirdModal.show();
    $('#modal-shadow').show();
    $('#modal-shadow').css('z-index', 0);
    thirdModal.css('z-index', 1)
    thirdModal.toggleClass('show hide');
  })

  thirdClose.on('click', () => {
    console.log('Done looking at this project')
    $('#modal-shadow').hide();
    $('#modal-shadow').css('z-index', -1);
    setTimeout(function(){
    thirdModal.css('z-index', -1);
      },500);
    thirdModal.toggleClass('show hide');
  })

  fourthProject.on('click', () => {
    console.log('Let\'s a look at this project')
    fourthModal.show();
    $('#modal-shadow').show();
    $('#modal-shadow').css('z-index', 0);
    fourthModal.css('z-index', 1)
    fourthModal.toggleClass('show hide');
  })

  fourthClose.on('click', () => {
    console.log('Done looking at this project')
    $('#modal-shadow').hide();
    $('#modal-shadow').css('z-index', -1);
    setTimeout(function(){
    fourthModal.css('z-index', -1);
      },500);
    fourthModal.toggleClass('show hide');
  })

});
