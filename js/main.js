var btn = document.querySelector(".btn");
var mediumcricle = document.querySelector(".medium-cricle");
var smallcricle = document.querySelector(".small-cricle");
var voice =  document.querySelector(".voice");
var flash =  document.querySelector(".flash");

btn.addEventListener("click", function() {
    smallcricle.style.background = "white"
    mediumcricle.style.background = "white";
    flash.style.background = "white";
    voice.play();
    setTimeout(function() {
        mediumcricle.style.background = "rgb(48, 64, 64)";
        smallcricle.style.background = "rgb(29, 46, 46)";
        flash.style.background = "rgb(75, 72, 72)";
    }, 290);
});
