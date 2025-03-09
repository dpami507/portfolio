document.querySelectorAll("img").forEach(img => {
    let testImg = new Image();
    testImg.src = img.src;

    testImg.onerror = function () {
        console.warn("Broken image detected:", img.src);
        img.src = "imgs/NoPhoto.png";
    };
});

/*document.querySelectorAll("img").forEach(img => {
    img.onerror = function () {
        console.log("Broken image detected:", img.src);
        img.src = "imgs/NoPhoto.png"; // Replace with fallback image
    };
});*/

var myNav = document.getElementById('navbar');

window.onscroll = function () { 
    document.getElementById("navbar").style.transition = ".5s";

    if (document.body.scrollTop >= window.innerHeight * .2 || document.documentElement.scrollTop >= window.innerHeight * .2) {
        document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, .75)"
    } 
    else {
        document.getElementById("navbar").style.backgroundColor = "transparent"
    }
};