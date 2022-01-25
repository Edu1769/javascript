var trocar = document.getElementById("darkmode_button")
var icone = document.getElementById("sol")
var corpo = document.getElementById("corpo")
var n1 = "white"

trocar.addEventListener("click", clicou)

function clicou(){
    
    if(n1 == "white")
    {
        corpo.style.background = "#36393F"
        n1 = "#36393F"
        icone.src = "https://img.icons8.com/ios/50/000000/moon-symbol.png"
        trocar.style.background = "#868686"
        
    }
    else{
        corpo.style.background = "white"
        n1 = "white"
        icone.src = "https://img.icons8.com/ios/50/000000/sun--v1.png"
        trocar.style.background = "#ffff00bb"
    }
    
}