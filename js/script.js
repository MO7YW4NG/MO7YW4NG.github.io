var bool = true;
$(document).ready(function () {
  $(document).on('click', '#experience-menu li:not(.selected)', function () {
    var li = this;
    if (li.classList.contains("selected"))
      return;
    $('div.' + $(".selected").attr('id')).css({ 'display': 'none' });
    $("li.selected").removeClass("selected");
    li.classList.add("selected");
    $("div." + li.id).animate({
      opacity: "toggle",
      height: "toggle"
    }, 'slow');
    $("div." + li.id).css({ 'display': '' });
  });
  $(document).on('scroll', reveal);
});

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