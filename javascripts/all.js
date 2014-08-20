$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  var height = $(window).height();
  if(scroll > height)
    $('.go-to-top').show();
  else
    $('.go-to-top').hide();
});

// $('.go-anchor').click(function(e){
//   e.preventDefault();
//   scrollToAnchor($(this).attr('href'));
// });

$('.go-to-top').click(function(){
  scrollToTop();
});

// function
// function scrollToAnchor(target) {
//   var url = document.URL.replace(/#.*$/,'')+target;
//   // window.history.pushState(null, null, url);
//   $('html,body').animate({scrollTop: $(target).offset().top},'slow');
// }

$('.go-anchor').on('click',function (e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
});

function scrollToTop() {
  $('html,body').animate({scrollTop: 0},'slow');
}

if ( $('.sidebar-sticky').length != 0 ) {
  $('.sidebar-sticky').hcSticky({
    top: 48,
    responsive: true,
    stickTo: '.content > .wrapper',
    offResolutions: -920
  })
}

if ( $('.quick-nav-title').length != 0 ) {
  $('.quick-nav-title').on('click', function(event){
    $('.quick-nav-list').toggleClass('is-open');
    event.preventDefault()
  })
}

if ( $('pre code').length != 0 ) {
  hljs.initHighlightingOnLoad();
}


