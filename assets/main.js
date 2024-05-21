
var saiyanSound = new Audio("images/sound.mp3");

function toggleGif(image) {
    var gif = image.nextElementSibling;
    
    gif.style.display = (gif.style.display === "none" || gif.style.display === "") ? "block" : "none";
    saiyanSound.currentTime = 0; // Reset audio to the beginning
    saiyanSound.play()
}
