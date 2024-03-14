var bool = true;
$(document).ready(function () {
  $(document).on('click', '#experience-menu li:not(.selected)', function () {
    var li = this;
    if (li.classList.contains("selected"))
      return;
    $('div.' + $(".selected").attr('id')).css({ 'display': 'none' });
    $("li.selected").removeClass("selected");
    li.classList.add("selected");
    $("div." + li.id).css({ 'display': '' });
  });
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
