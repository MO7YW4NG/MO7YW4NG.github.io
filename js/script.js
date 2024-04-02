var bool = true;
$(document).ready(function () {
  $(document).on('click', '#experience-menu li:not(.selected)', function () {
    var li = this;
    if (li.classList.contains("selected"))
      return;
    $('.' + $(".selected").attr('id')).css({ 'display': 'none' });
    $("li.selected").removeClass("selected");
    li.classList.add("selected");
    $("." + li.id).animate({
      opacity: "toggle"
    }, '1500');
    $("." + li.id).css({ 'display': '' });
  });
  $(document).on('scroll', reveal);
  $('.img-container').each(function () {
    let $container = $(this);
    let slideIdx = 1;
    let autoplay;

    showSlides($container, slideIdx);
    $container.find('.prev').on('click', function () {
      changeSlide($container, -1)
    });
    $container.find('.next').on('click', function () {
      changeSlide($container, 1)
    });
    setAutoPlay($container);
  });
  $(document).on('scroll resize', function () {
    var nav = $('nav').get(0);
    if (nav.getBoundingClientRect().top == 0) {
      nav.classList.add('nav-reveal');
      $('#menu li a').css({ 'color': 'white' });
    } else {
      nav.classList.remove('nav-reveal');
      $('#menu li a').css({ 'color': '' });
    }
  });
});
function changeSlide($container, ctrl) {
  let slideIdx = $container.data('slideIdx');
  showSlides($container, slideIdx + ctrl);
}
function showSlides($container, idx) {
  let $slides = $container.find(".slide");
  let slideIdx = idx;

  if (slideIdx > $slides.length) {
    slideIdx = 1;
  } else if (slideIdx === 0) {
    slideIdx = $slides.length;
  }

  $slides.removeClass("show");
  $slides.eq(slideIdx - 1).addClass("show");

  $container.data('slideIdx', slideIdx);
  setAutoPlay($container);
}

function setAutoPlay($container) {
  let autoplay = $container.data('autoplay');
  if (autoplay !== undefined) clearInterval(autoplay);
  autoplay = setInterval(function () {
    changeSlide($container, 1);
  }, 5000);
  $container.data('autoplay', autoplay);
}
function copy(str) {
  navigator.clipboard.writeText(str);
  hint('Copied!');
}
function toggle() {
  bool = !bool;
  $('#theme').text(bool ? 'dark_mode' : 'light_mode');
  if (bool) {
    $("body").addClass("light");
  } else {
    $("body").removeClass("light");
  }
}
async function hint(str) {
  var text = document.getElementById("hint-box");
  text.style.visibility = "visible";
  text.innerHTML = str;
  await delay(3);
  text.style.visibility = "hidden";
}

function delay(n) {
  return new Promise(function (resolve) {
    setTimeout(resolve, n * 1000);
  });
}
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 30;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}