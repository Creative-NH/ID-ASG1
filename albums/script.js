document.getElementById("box").onclick = function() {togglepopup("content")}
document.getElementById("box2").onclick = function() {togglepopup("content2")}
document.getElementById("box3").onclick = function() {togglepopup("content3")}
document.getElementById("box4").onclick = function() {togglepopup("content4")}
document.getElementById("box5").onclick = function() {togglepopup("content5")}
function togglepopup(id) {
    var x = document.getElementById(id);
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }