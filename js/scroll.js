let viewportHeader = document.querySelector(".viewport-header");
viewportHeader.addEventListener("click", () => {
    let getInTouch = document.querySelector(".get-in-touch");
    getInTouch.scrollIntoView({
        behavior: "smooth"
    });
})

