$(function(){
  setTimeout(function() {
    $('.slide').each(function() {
      var slide = $(this)
      var content = slide.find('.content');

      slide.attr('ref', content.attr('ref'));
      slide.addClass(content.attr('class')).removeClass('content');
    });
  }, 500)
})

