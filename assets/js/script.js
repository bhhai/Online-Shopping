const links = document.querySelectorAll(".nav-link");


links.forEach((item) => {
    item.addEventListener("click", () => {
        let element = document.getElementById(item.getAttribute("data-link"));
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    })
})