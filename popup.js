
$(document).ready(function(){
  $('.js-modal-open').each(function(){
    $(this).on('click', function(){
      var target = $(this).data('target');
      var modal = document.getElementById(target);
      $(modal).fadeIn();
      return false;
    });
  });
});
$(document).ready(function(){
  $('.js-modal-close').on('click', function(){
    $('.js-modal').fadeOut();
    return false;
  });
});

$(document).ready(function(){
  $('.language-switch').on('click',function(){
    if($('.jp-caption').is(':visible')){
      $('.jp-caption').hide();
      $('.en-caption').fadeIn();
      $('.jp-about').hide();
      $('.en-about').fadeIn();
    }else{
      $('.en-caption').hide();
      $('.jp-caption').fadeIn();
      $('.en-about').hide();
      $('.jp-about').fadeIn();
    }
    return false;
  })
})
