const imagem=document.querySelector("#alvo")
const btjohn =document.querySelector("#bt1")
const btgosht =document.querySelector("#bt2")
const btgearsofwar =document.querySelector("#bt3")
const btgear=document.querySelector("#bt4")


btjohn.addEventListener("click",john)
btgosht.addEventListener("click",gosht)
btgearsofwar.addEventListener("click",gearsofwar)
btgear.addEventListener("click",gear)


function john() {
    alvo.src="imagems/images.jpg"
    sinopse.textContent=`John Wick (interpretado por Keanu Reeves) é um lendário e temido assassino de aluguel aposentado que tenta reconstruir sua vida após a dolorosa perda de sua esposa, vítima de uma doença grave. Antes de morrer, ela deixa para ele um filhote de cachorro para ajudá-lo a lidar com o luto e encontrar um novo propósito.`
}
function gosht() {
    alvo.src="imagems/images (1).jpg"
    sinopse.textContent=`A trama acompanha os irmãos Logan e David "Hesh" Walker. Eles se juntam aos Ghosts—uma força de elite norte-americana que realiza operações clandestinas atrás das linhas inimigas. O esquadrão precisa combater a Federação e deter o principal antagonista, Gabriel Rorke, um ex-líder dos Ghosts que foi capturado, sofreu lavagem cerebral e agora caça seus antigos companheiros.`
}
function gearsofwar () {
    alvo.src="imagems/gears-5-iphone-cob590ysdbqtjaul.jpg"
    sinopse.textContent=`Gears of War é um aclamado jogo de tiro em terceira pessoa focado na luta desesperada da humanidade pela sobrevivência no planeta Sera. A trama se passa 14 anos após o "Dia da Emergência" (E-Day), o momento trágico em que uma raça de criaturas subterrâneas e cruéis conhecida como a Horda Locust emergiu das entranhas da terra para declarar guerra e extinguir os humanos`
}
function gear () {
    alvo.src="imagems/gears-of-war-1568302979379_v2_450x600.jpg"
    sinopse.textContent=`O enredo acompanha Marcus Fenix, um ex-soldado condecorado que foi abandonado em uma prisão militar. Ele é libertado por seu melhor amigo, Dominic Santiago, com o objetivo de reintegrar o Esquadrão Delta. Juntos, em extrema desvantagem numérica e de armamento, os soldados da Coalizão de Governos Ordenados (COG) precisam cruzar um mundo em ruínas e devastado para entregar uma arma de destruição em massa (a Bomba de Massa Leve) direto no coração do território inimigo, na tentativa final de implodir os túneis dos Locust e salvar a raça humana da extinção total`
}





