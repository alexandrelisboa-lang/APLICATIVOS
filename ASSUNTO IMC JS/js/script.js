const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const calcular = document.querySelector('#botao')
const resultado1 = document.querySelector('#resultado1')
const resultado2 = document.querySelector('#resultado2')

calcular.addEventListener("click",imc)

function imc(){
    p = Number(peso.value)
    a=Number(altura.value)
    calculo= p/(a*a)

    resultado1.textContent =` o seu imc e ${calculo.toFixed(2)}`
    if(calculo<18.5){
        resultado2.textContent=`você è magro`
    } else if (calculo >=18.5 && calculo<25){
        resultado2.textContent=` peso ideal`
    } else if(calculo>=25 && calculo <30){
        resultado2.textContent=`você esta com sobrepeso`
    }
    else{
        resultado2.textContent=`obesidade`
    }
}