$('.carousel').carousel({
    interval: 3000,
})

$('body').scrollspy({target: ".navbar", offset: 50});

$(".nav-item a").on('click', function(event) {

  if (this.hash !== "") {
    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });

  }
});

$("#see-more").on("click", function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#our-projects-nav").offset().top
    }, 800);
})
