
var a = document.querySelectorAll(".event1")
for (var i=0; i<a.length; i++){
  a[i].onclick = function() {togglepopup()}
}
var b = document.querySelectorAll(".event2")
for (var i=0; i<b.length; i++){
  b[i].onclick = function() {togglepopup2()}
}
document.getElementById("cross").onclick = function() {togglepopup()};
document.getElementById("cross2").onclick = function() {togglepopup2()};
function togglepopup() {
    var x = document.getElementById("popup");
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function togglepopup2() {
    var x = document.getElementById("popup2");
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }