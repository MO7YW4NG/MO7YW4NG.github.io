// var bool = matchMedia('(prefers-color-scheme: dark)').matches;
// document.addEventListener("DOMContentLoaded", function () {
//   if (!bool) {
//     $('#theme').text('dark_mode');
//     $("body").addClass("light");
//   }
// });
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
