console.log("#################\n#               #\n# whyisthesheep #\n#               #\n#################\n\nRun helpme() to start")

function helpme() {
    console.log("Commands:\nprivacy() - Shows privacy policy and guide\nls() - List sub-sites\nlinks() - Lists external links\npr() - Lists my favourite personal projects")
    const txt = document.getElementById("main")
    txt.innerHTML = ""
}

function privacy() {
    const txt = document.getElementById("main")
    console.log("< -- ")
    txt.innerHTML = `Privacy Policy\nWe don't use any third party stuff and we don't collect any data but you should be more careful.\nAny website can see your ip so you should use a vpn.\nI would reccommend using firefox with the <a href="https://github.com/arkenfox/user.js">Arkenfox User.js</a>`
}