$(document).ready(function() {
  Rak.fetch().then(function(raks) {
    raks.forEach(function(rak) {
      var view = new RakView(rak);
      view.render();

    });
    console.log($('.rak').length);
    var divs = $('.rak').hide(),
      i = 0;

    (function cycle() {

      divs.eq(i).fadeIn(400)
        .delay(2500)
        .fadeOut(400, cycle);

      i = ++i % divs.length;

    })();
  });


});
