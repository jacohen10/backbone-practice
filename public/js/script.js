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

  $('#signup').on('click', function(event){
     event.preventDefault();
     $(".raks").hide();
     $("#signup-form").show();
   });

   $('#signup-cancel').on('click', function(){
      event.preventDefault();
      $("#signup-form").hide();
      $(".raks").show();
    });

    $('#login').on('click', function(event){
       event.preventDefault();
       $(".raks").hide();
       $("#login-form").show();
     });

     $('#login-cancel').on('click', function(){
        event.preventDefault();
        $("#login-form").hide();
        $(".raks").show();
      });

});
