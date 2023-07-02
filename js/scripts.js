const li = document.querySelectorAll(".links")
const section = document.querySelectorAll("section")

function activeMenu() {
    let len = section.length
    while(--len && window.scrollY + 67 < section[len].offsetTop) {}
    li.forEach(ltx => ltx.classList.remove("active"))
    li[len].classList.add("active")
}

activeMenu()

window.addEventListener("scroll", activeMenu)