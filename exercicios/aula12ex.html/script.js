var agora = new Date()
var hora = agora.getHours()

var image = document.getElementById("img")
var fundo = document.getElementById("fundo")
var horario = document.getElementById("horario")
horario.innerHTML = "Agora são "+hora +" horas"
if(hora<12)
{
    image.src = "imagens/manha.jpg"
    fundo.style.background = "#d8d867"
}
else if(hora<18)
{
    image.src = "imagens/tarde.jpg"
    fundo.style.background = "#ad7624"
}
else{
    image.src = "imagens/noite.jpg"
    fundo.style.background = "#888484"
}