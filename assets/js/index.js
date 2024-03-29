$(document).ready(function() {

    $("navbar, a").click(function () {
        var scroll = this.hash
        
        $("html, body").animate(
        {
            scrollTop: $(scroll).offset().top -110
        },
        1000
        )
    })
})

window.addEventListener("scroll", function () {
    console.log("Hola")
    // Cada vez que el scrollY sea mayor o igual a 100 se agrega la clase "nuevaClase" al elemento con id "#elemento"
    document.querySelector("#elemento").classList.toggle("nuevaClase", window.scrollY >= 20);
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
