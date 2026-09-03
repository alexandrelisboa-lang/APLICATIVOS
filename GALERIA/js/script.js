const alvo=document.querySelector("#alvo")
const btbahia=document.querySelector("#bt1")
const btvitoria=document.querySelector("#bt2")
const btrealmadrid=document.querySelector("#bt3")
const btroma=document.querySelector("#bt4")
const btarsenal=document.querySelector("#bt5")

btbahia.addEventListener("click",bahia)
btvitoria.addEventListener("click",vitoria)
btrealmadrid.addEventListener("click",realmadrid)
btroma.addEventListener("click",roma)
btarsenal.addEventListener("click",arsenal)

function bahia(){
    alvo.src="imagem/Gemini_Generated_Image_v5n7e3v5n7e3v5n7.png"
}

function vitoria(){
    alvo.src="imagem/vitoria.jpg"
}

function realmadrid(){
    alvo.src="imagem/real madrid.jpg"
}

function roma(){
    alvo.src="imagem/roma.jpg"
}

function arsenal(){
    alvo.src="imagem/arsenal.jpg"
}

