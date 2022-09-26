const more = document.querySelector("#section-4 div.container div.flex-item")


more.addEventListener("mouseover", () => {
    let icon = document.getElementById("more")
    icon.style.transform = "scale(1.1)"
})
more.addEventListener("mouseout", () => {
    let icon = document.getElementById("more")
    icon.style.transform = "scale(1)"
})