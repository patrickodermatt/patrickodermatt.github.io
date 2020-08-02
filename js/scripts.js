$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();
});

function loadNewMountain(nextMountainName) {
    $("#mountainPlaceholder").fadeOut(500, function() {
        nextMountainImage = "/images/" + nextMountainName + ".jpg"
        nextImageMap = "#" + nextMountainName + "Map"
        $("#mountainPlaceholder").attr("src", nextMountainImage);
        $("#mountainPlaceholder").attr("usemap", nextImageMap);
        console.log(nextImageMap)
    }).fadeIn(500);
  }