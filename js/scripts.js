$('document').ready(function(){

  // MAX AND MIN ON CARDS
  $('#plus-blue').click(function(){
    $('.card').removeClass('large');
    $('.card:nth-child(2)').addClass('large blue');
    $('.card:nth-child(2) .card-img').css('height', '50%');
  });
  $('#minus-blue').click(function(){
    $('.card:nth-child(2)').removeClass('large blue');
    $('.card:nth-child(2) .card-img').css('height', '100%');
  });

  $('#plus-yellow').click(function(){
    $('.card').removeClass('large');
    $('.card:nth-child(3)').addClass('large yellow');
    $('.card:nth-child(3) .card-img').css('height', '50%');
  });
  $('#minus-yellow').click(function(){
    $('.card:nth-child(3)').removeClass('large yellow');
    $('.card:nth-child(3) .card-img').css('height', '100%');
  });

  $('#plus-red').click(function(){
    $('.card').removeClass('large');
    $('.card:last-child').addClass('large red');
    $('.card:last-child .card-img').css('height', '50%');
  });
  $('#minus-red').click(function(){
    $('.card:last-child').removeClass('large red');
    $('.card:last-child .card-img').css('height', '100%');
  });

  // COLOR CIRCLE PROPERTIES
  $('.circles svg:first-child').click(function(){
    $('.hero h1').removeClass('yellow red');
    $('.hero h1').addClass('blue');
  });

  $('.circles svg:nth-child(2)').click(function(){
    $('.hero h1').removeClass('red blue');
    $('.hero h1').addClass('yellow');
  });

  $('.circles svg:last-child').click(function(){
    $('.hero h1').removeClass('yellow blue');
    $('.hero h1').addClass('red');
  });
});
