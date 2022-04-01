function alerter() {

    let colors = [
        "rgb(232, 89, 146)",
        "rgb(196, 160, 126)"
    ]
    let num = 0
    setInterval(() => {
        document.getElementById("alert").style.backgroundColor = colors[num];
        num = (num == 0) ? 1 : 0;
    }, 500)
}


alerter()
window.onscroll = function () { makeSticky() };

var header = document.getElementById("stickyBox");
var content = document.getElementById("circleSlider");

var sticky = header.offsetTop;

function makeSticky() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        content.style.padding="10rem 1rem 1rem 1rem"
        console.log("yes")
    } else {
        header.classList.remove("sticky");
        content.style.padding="1rem"
    }
}