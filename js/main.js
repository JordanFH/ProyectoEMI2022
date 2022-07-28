//$(document).ready() shorthand
$(function () {
  //for variable "navLink", get the first <li> element in the document with document.querySelectorAll
  let navLinks = document.querySelectorAll('nav ul li');

  //window event listener tracking user's scroll
  window.addEventListener('scroll', e => {
    //variable retrieving number of pixels which the contents of the document are scrolled on Y axis.
    let fromTop = window.scrollY;

    //map through navLinks variable...
    navLinks.forEach(link => {
      // document.querySelector returns first element within the document that matches the specified selector and .hash returns the anchor part of URL
      let section = document.querySelector(link.hash);
      // console.log(section);
      if (
        //calculates user's Y axis scroll and the height of where each section is located
        section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop
      ) {
        // add a class of current if its within the range of the viewport of the section
        link.classList.add('current');
      } else {
        // remove the class of current if its outside the range of viewport of the section
        link.classList.remove('current');
      }
    });
  });

  //hamburger menu- on click of link, minimise overlay nav
  $('a').on('click', function(){
    $('input[type=checkbox]').prop('checked', false);
  });
});