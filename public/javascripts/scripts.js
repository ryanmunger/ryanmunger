var navToggle = document.getElementById('nav-toggle');
var nav = document.getElementById('nav');
var closeNav = document.querySelector('.close');

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
