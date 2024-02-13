
// criamos uma variavel chamada form, o document significa que estamos falando pro java ir no html, aqui chamamos de document, o querySelector, 
// indicamos que queremos procurar algo  especifico, seja por classe, tag ou ID. E dentro do parenteses, colocamos o nome exato da classe que vamos puxar.

const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")
const click = document.querySelector(".mascara-formulario")

function mostrarForm(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
    
}

function esconderForm(){
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}














