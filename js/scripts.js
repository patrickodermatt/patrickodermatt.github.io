$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();
});

function showNewMountain(currentMountainName, nextMountainName){
    var currentImage = $("#" + currentMountainName + "Image")
    var nextImage = $("#" + nextMountainName + "Image")
    currentImage.css({display:'none'})
    nextImage.css({display:'inline'})
}