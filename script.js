
const key = "544c29e3c7d7f107f36b89766db4cb95"


function insertDatas (dados){

    document.querySelector(".texto_principal").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temperatura_cidade").innerHTML = Math.floor (dados.main.temp)  + "ºC"
    document.querySelector(".tempo_cidade").innerHTML = dados.weather[0].description
    document.querySelector(".umidade_cidade").innerHTML = "Umidade " + dados.main.humidity + " %"
    document.querySelector(".img-previsao").scr =  `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}




async function searchCity (cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());

   insertDatas(dados)

   console.log(dados)
}



function buttonClick () {

    const cidade =  document.querySelector(".input-cidade").value

    searchCity(cidade)

}