$('#buttonStart').click( function() {
  $('#startScreen').addClass('test');
});

setTimeout(function() {
  $('#startScreen').addClass('test');
}, 5000)

setTimeout(function() {
  $('#startScreen').removeClass('test');
}, 15000)

$('.mainNav a').click( function(){
    $('.hide').fadeOut(500);
    $( $(this).attr('href') ).fadeIn(750);
});

$('.content-box img').click( function(){
  $(this).toggleClass('clicked');
});
