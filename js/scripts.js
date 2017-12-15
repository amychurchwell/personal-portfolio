$('document').ready(function(){
  $('#plus-blue').click(function(){
    $('.card').removeClass('large');
    $('.card:nth-child(1)').addClass('large blue');
  });
  $('#minus-blue').click(function(){
    $('.card:nth-child(1)').removeClass('large blue');
  });

  $('#plus-yellow').click(function(){
    $('.card').removeClass('large');
    $('.card:nth-child(2)').addClass('large yellow');
  });
  $('#minus-yellow').click(function(){
    $('.card:nth-child(2)').removeClass('large yellow');
  });

  $('#plus-red').click(function(){
    $('.card').removeClass('large');
    $('.card:nth-child(3)').addClass('large red');
  });
  $('#minus-red').click(function(){
    $('.card:nth-child(3)').removeClass('large red');
  });
});

// DRY UP THIS CODE
