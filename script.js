const key = "edccc3a8399738f6a38598c057b4c0b5"

function dataOnScreen(info){
    document.querySelector(".tittle-city").innerHTML = "Tempo em " + info.name
    document.querySelector(".temperature").innerHTML = Math.floor(info.main.temp) + "ºC"
    document.querySelector(".climate").innerHTML = info.weather[0].description
    document.querySelector(".humidity").innerHTML = "Umidade: " + info.main.humidity + "%"
    document.querySelector(".img-time").scr = `https://openweathermap.org/img/wn/${info.weather[1].icon}.png`
}

async function searchCity(city){

    const info = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(result => result.json())

    dataOnScreen(info)

}

function clickedButton(){
    const city = document.querySelector(".input").value

    searchCity(city)
}