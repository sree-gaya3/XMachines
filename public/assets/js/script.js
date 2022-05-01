$(document).on("scroll", function () {

  if ($(document).scrollTop() > 80) {
    $("nav").addClass("shrink");
  }
});

$(document).on("scroll", function(){

  if ($(document).scrollTop() > 80){
  } else {
      $("nav").removeClass("shrink");
  }
});


$(window).click(function(e) {

  if($(".navbar-collapse").hasClass("show")){
     $('.navbar-collapse').removeClass("show"); 
     e.preventDefault();
     }
});

$('.navbar-collapse').click(function(event){
    event.stopPropagation();
});
