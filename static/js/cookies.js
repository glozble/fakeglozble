const body = document.querySelector("body")

const cookie_poup_up = `
    <section id="cookies-poup-up">
        <div class="container">
            <div class="flex-item">
                <div class="content">
                    <h3>Notificação de cookies</h3>
                    <p>Nós adaptamos cookies próprios e terceiros para análise do uso do nosso site e, assim, melhorar sua experiência. Se você continuar navegando, considere que você aceita seu uso. <a href="/pages/privacy-policy.html">Política de privacidade e cookies</a></p>
                </div>
                <button id="accept-cookies" onclick="setCookie()">Aceitar</button>
            </div>
        </div>
    </section>
`

const showPoupUp = () => {
    body.insertAdjacentHTML("beforeend", cookie_poup_up)
}

const setCookie = () => {
    let poup_up = document.getElementById("cookies-poup-up")
    localStorage.setItem("_glzcookies", "true")
    poup_up.remove()
}

const getCookie = () => {
    if(localStorage.getItem("_glzcookies") != null){
        return true
    }else{
        return false
    }
}

const loadPoupUp = () => {
    let have_cookie = getCookie()
    if(!have_cookie){
        showPoupUp()
    }
}

window.onload = loadPoupUp

