
var a = document.querySelectorAll(".event1")
for (var i=0; i<a.length; i++){
  a[i].onclick = function() {togglepopup("popup")}
}
var b = document.querySelectorAll(".event2")
for (var i=0; i<b.length; i++){
  b[i].onclick = function() {togglepopup("popup2")}
}
document.getElementById("cross").onclick = function() {togglepopup("popup")};
document.getElementById("cross2").onclick = function() {togglepopup("popup2")};
function togglepopup(id) {
    var x = document.getElementById(id);
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }