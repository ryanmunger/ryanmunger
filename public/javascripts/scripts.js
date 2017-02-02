var navToggle = document.getElementById('nav-toggle');
var nav = document.getElementById('nav');
var closeNav = document.querySelector('.close');
var wrapper = document.querySelector('.wrapper');
var mobileHeadshot = document.querySelector('.mobile-headshot');
var mobileHeadshotHeight = getComputedStyle(mobileHeadshot).getPropertyValue('height');

navToggle.addEventListener('click', function(e) {
  nav.className = '';
  document.body.className = 'nav-open';
  document.ontouchmove = function(e){
    e.preventDefault();
  }
});

closeNav.addEventListener('click', function(e) {
  nav.className = 'mobile-hidden';
  document.body.className = '';
  document.ontouchmove = function(e) {}
});

wrapper.style.paddingTop = mobileHeadshotHeight;

window.addEventListener('resize', function(e) {
  var mobileHeadshotHeight = getComputedStyle(mobileHeadshot).getPropertyValue('height');
  if (window.innerWidth < 768) {
    wrapper.style.paddingTop = mobileHeadshotHeight;
  } else {
    wrapper.style.paddingTop = 0;
  }
});

window.addEventListener('scroll', function(e) {
  if (document.body.scrollTop < 0) {
    mobileHeadshot.style.transform = 'scale(' + (1 + (Math.abs(document.body.scrollTop) / 100)) / 1 + ')';
  }
});
