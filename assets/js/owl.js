$(document).ready(function () {
  // Initialize Owl Carousel
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 800,
  });

  // Handle Square Box Navigation
  $(".nav-btn").on("click", function () {
    const slideIndex = $(this).data("slide");
    $(".owl-carousel").trigger("to.owl.carousel", [slideIndex, 300]);

    // Add active style to clicked button
    $(".nav-btn").removeClass("text-pink-500");
    $(this).addClass("text-pink-500");
  });
});

var owl2 = $(".testimonial-carousel");
owl2.owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  autoplay: false,
  autoplayTimeout: 1000,
  autoplayHoverPause: true
});
$(".play").on("click", function () {
  owl2.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl2.trigger("stop.owl.autoplay");
});
