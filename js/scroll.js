let viewportHeader = document.querySelector(".viewport-header");
let getInTouch = document.querySelector(".get-in-touch");
let about = document.querySelector(".about");
let video = document.querySelector("video");

function addClickToScrollIntoView(source, target) {
    source.addEventListener("click", () => {
        target.scrollIntoView({
            behavior: "smooth"
        });
    })
}

addClickToScrollIntoView(viewportHeader, getInTouch);
addClickToScrollIntoView(about, viewportHeader);
addClickToScrollIntoView(video, viewportHeader);
addClickToScrollIntoView(getInTouch, viewportHeader);