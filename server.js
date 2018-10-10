const express = require('express');
const request = require('superagent');
const app = express();
const PORT = 3000; 
const weather_api_key = '3e259e127ac7375e3d68da82bd0b9f52'


app.get('/', (req, res) => {
    res.send('app works')
})

app.get('/weather', (req, res) => {
    // make a request to openweathermap API using the superagent module
    // info we need: GET, key, address/URL, zipcode

    request
        .get('api.openweathermap.org/data/2.5/weather?zip=60611,us&APPID=' + weather_api_key)
        .end((err, resFromApi) => {

            if(err) {
                console.log(err)
            }

            const weatherData = JSON.parse(resFromApi.text)

            console.log("---------------------------weather data after JSON.parse-----------------------")
            console.log(weatherData);
            console.log("---------------------------end weather data-----------------------")

            // render a page with the  results
            let temp = weatherData.main.temp
            temp = Math.round((temp-273.15) * 9 / 5 + 32)
            const city = weatherData.name
            res.send("The temperature in " + city + " is " + temp)
        })
})
// 1.
// make a route that takes a :zip as a URL param ('/weather/:zip')
// and res.sends() weather for that zip similarly ("The temperature for ... is ...")

// 2. 
// make a start.ejs
// it should have a form where user can type in a zip and press enter or hit a button

// 3.
// make your route from #1 render a template that has weather data put into it with EJS
//      temperature
//      current conditions
//      an icon representing the weather 
// instead of just res.sending a sentence


// 4.
// make a route at '/weather-five-day/:zip'
// that renders a template with the forecast and the same info as the template for #3




app.listen(PORT, () => {
    const today = new Date()
    console.log(
        today.toLocaleDateString('en-US') + 
        ": " + today.toLocaleTimeString('en-US') + 
        ": server is listening on port " + 
        PORT
    )
})