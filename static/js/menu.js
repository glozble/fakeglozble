const header = document.querySelector("header")
const menu_icon = document.getElementById("menu-icon")

var menu_is_clicked = false

menu_icon.addEventListener("click", () => {
    let menu_list = document.querySelector("header div.container div.menu-list")
    if(menu_is_clicked){
        menu_list.style.animationName = "menuup"
        const mytimeout = () => {
            setTimeout(() => {
                menu_list.style.display = "none"
            }, 485)
        }
        mytimeout()
        clearTimeout(mytimeout)
        menu_icon.name = "menu-outline"
        menu_is_clicked = false
    }else{
        menu_list.style.animationName = "menudown"
        menu_list.style.display = "block"
        menu_icon.name = "close-outline"
        menu_is_clicked = true
    }
})