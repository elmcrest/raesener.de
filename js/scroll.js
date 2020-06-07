let page0 = document.querySelector(".page0");
let page1 = document.querySelector(".page1");

function addClickToScrollIntoView(source, target) {
    source.addEventListener("click", () => {
        target.scrollIntoView({
            behavior: "smooth"
        });
    })
}

addClickToScrollIntoView(page0, page1);
addClickToScrollIntoView(page1, page0);
