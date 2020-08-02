$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();
});

function loadNewMountain(nextMountainName) {
    $("#mountainPlaceholder").fadeOut(500, function() {
        nextMountainImage = "/images/" + nextMountainName + ".jpg"
        $("#mountainPlaceholder").attr("src", nextMountainImage);
    }).fadeIn(500);
  }