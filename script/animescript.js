document.getElementById("slidepic").addEventListener("click", function() {
    var img = document.getElementById("slidepic");
    var div = document.getElementById("slidediv");

    img.style.opacity = "0"; // Fades out the image
    setTimeout(function() {
        img.style.display = "none"; // Hides the image after the fade effect
        div.style.display = "block"; // Shows the division
        div.style.transition = "opacity 1s ease-in-out"
        setTimeout(function() {
            div.style.opacity = "1"; // Fades in the division
        }, 100); // Delay the fade-in to prevent abrupt display
    }, 1000); // Delay to match the duration of the fade-out effect (1s)
});
