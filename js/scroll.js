let pages = document.querySelectorAll(".page");

pages.forEach((element, index, pages) => {
    if (Object.is(pages.length - 1, index)) {
        element.addEventListener("click", () => {
            pages[0].scrollIntoView({
                behavior: "smooth"
            })
        })
    } else {
        element.addEventListener("click", () => {
            pages[index+1].scrollIntoView({
                behavior: "smooth"
            })
        })
    }
})