const alvo=document.querySelector("#alvo")
const btesportivo=document.querySelector("#bt1")
const btsuv=document.querySelector("#bt2")
const bthatch=document.querySelector("#bt3")
const btpicape=document.querySelector("#bt4")


btesportivo.addEventListener("click",esportivo)
btsuv.addEventListener("click",suv)
bthatch.addEventListener("click",hatch)
btpicape.addEventListener("click",picape)


function esportivo(){
    alvo.src="imagens/Lamborghini_Huracan_Evo_Genf_2019_1Y7A5452.jpg"
}

function suv(){
    alvo.src="imagens/images.jpg"
}

function hatch(){
    alvo.src="imagens/hatches.avif"
}

function picape(){
    alvo.src="imagens/picape.jpg"
}

