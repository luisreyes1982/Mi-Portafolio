$(document).ready(function () {

    $("a").click(function () {
        var gato = this.hash
        alert(gato)


    })
})

//Para Habilitar los Tooltips//
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})