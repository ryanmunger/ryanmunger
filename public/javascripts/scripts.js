(function($) {
  $('#nav-toggle').on('click', function(e) {
    e.preventDefault();
    $('#nav').toggleClass('mobile-hidden');
  });
})(jQuery);
