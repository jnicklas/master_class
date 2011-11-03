$(function(){
  function pad(num, size) {
      var s = num+"";
      while (s.length < size) s = "0" + s;
      return s;
  }

  setTimeout(function() {
    $('.slide').each(function() {
      var slide = $(this)
      var content = slide.find('.content');

      slide.attr('ref', content.attr('ref'));
      slide.addClass(content.attr('class')).removeClass('content');
    });

    var interval = null;
    var seconds = null;

    $(".countdown").bind("showoff:show", function (event) {
      clearInterval(interval);
      var timer = $(event.target).find('strong');
      seconds = seconds || parseInt(timer.text()) * 60;
      interval = setInterval(function() {
        var minutes = Math.floor(seconds / 60);
        var remainder = seconds % 60;
        timer.text(pad(minutes, 2) + ':' + pad(remainder, 2))
        seconds--;
        if(seconds < 0) {
          clearInterval(interval);
          timer.addClass('done');
        }
      }, 1000);
    });
  }, 500)
})
