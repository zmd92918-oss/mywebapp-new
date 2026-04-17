function interact(button) {
    var image = document.getElementById("logo")
    var instructions = document.getElementById("instructions")
    var dark_green = "#1c454a"
    var light_green = "#54b7c0"

    switch(button){
        case "logo":
            image.style.transform = `rotate(${Math.random() * 360}deg)`
            break
        case "textgo":
            instructions.style.transform = `rotate(${Math.random() * 360}deg)`
            break
        case "reset":
            image.style.transform = "initial"
            instructions.style.transform = "initial"
            document.body.style.backgroundColor = "dark_green"
            document.body.style.color = light_green
            break
    }
}