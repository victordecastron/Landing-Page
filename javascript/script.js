var leonardo = document.getElementById('leonardo')
var bruna = document.getElementById('bruna')
var samantha = document.getElementById('samantha')
var setadireita = document.getElementById('setadireita')
var setaesuerda = document.getElementById('setaesquerda')

function RollRight(){
    leonardo.style = "display:none"
    samantha.style = "display:flex"
}

function RollLeft(){
    leonardo.style = "display:flex"
    samantha.style = "display:none"
}
