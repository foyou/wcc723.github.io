(function() {
  $(function() {
    var $win, headerHeigth, navHeight;

    headerHeigth = $('.header').height();
    navHeight = $('.navigation').height();
    $win = $(window).scroll(function() {
      if ($win.scrollTop() > (headerHeigth - navHeight)) {
        return $('.navigation').addClass('small');
      } else {
        return $('.navigation').removeClass('small');
      }
    });
    return $('.main-menu-btn').on('click', function() {
      return $('.main-menu').toggleClass('menu-show');
    });
  });

}).call(this);
