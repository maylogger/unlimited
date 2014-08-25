$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  var height = $(window).height();
  if(scroll > height)
    $('.go-to-top').show();
  else
    $('.go-to-top').hide();
});

$('.go-to-top').click(function(){
  scrollToTop();
});

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

function apply_api(){
  $(".input-error").removeClass("input-error");
  if($.trim($("#name").val()) == "" ){
    $("#name").addClass("input-error");
    return false;
  }
  if($.trim($("#email").val()) == ""){
    $("#email").addClass("input-error");
    return false;
  }
  $(".download-form .submit").text("處理中...");
  $.post("http://api2.kptaipei.tw/v1/register",{name:$("#name").val(),email:$("#email").val()},function(data){
      if(data.isSuccess){
          $(".download-form").addClass("done");
          $(".download-form input, .download-form button").prop('disabled', true);
          $(".download-form .submit").text("已寄出");
      }else{
          $(".download-form .download-form-title").text(data.errorMessage);
          $(".download-form .download-form-subtitle").text("抱歉，請稍後再試試...");
      }
  });
  return false;
}

$(".download-form").submit(apply_api);
