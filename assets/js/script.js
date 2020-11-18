

const url = "http://api.openweathermap.org/data/2.5/weather?q=austin&appid=105fb5cfa2c589eefd6b17a6b1f5f6c0&units=imperial";

// $.ajax({
//     url: url,
//     success: function (result) {
//         console.log(result);
//         console.log("name", result.name);
//         $("#location").text(result.name);
//         let F = Math.round(result.main.temp);
//         let Fahrenheit = F.toString();
//         $("#temperature").text(Fahrenheit);
//         // let humidity = Math.round(result.main.humidity);
//         // let humidity = humidity.toString();
//         // $("#humidity").text(main.humidity);
//         let windSpeed = Math.round(result.wind.speed);
//         let wind = windSpeed.toString();
//         $("#wind").text(wind);
//         $("#sky").text(result.weather[0].description);
//     }
// })









console.log("test");

// KEY 105fb5cfa2c589eefd6b17a6b1f5f6c0

// event listener
// $("#searchTerm").on("click", function() {


function buildQueryURL() {

    var request = new XMLHttpRequest()

    request.open('GET', "http://api.openweathermap.org/data/2.5/forecast"  , true)
    request.onload = function () {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response)
    
      $.ajax({}).then(function(response) {
        console.log(response);
    
        // UVI API => pass coordinates from weather API to UVI API
        $.ajax({}).then(function(response){
    
        });
    
        // 5 day forcast 
        $.ajax({}).then(function(response){
    
        });
    });
    




    }

queryParams.q = $("#searchTerm")
.val()
.trim();

console.log("---------------\nURL: " + queryURL + "\n---------------");
  console.log(queryURL + $.param(queryParams));
  return queryURL + $.param(queryParams);
}

$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q=austin&appid=105fb5cfa2c589eefd6b17a6b1f5f6c0&units=imperial" ,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });

  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/forecast?q=austin&appid=105fb5cfa2c589eefd6b17a6b1f5f6c0&units=imperial",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });

  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/uvi?appid=105fb5cfa2c589eefd6b17a6b1f5f6c0&lat=30.27&lon=-97.74",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });

var weather = "austin";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=austin&appid=105fb5cfa2c589eefd6b17a6b1f5f6c0&units=imperial";

var Geo={};
if(navigator.geolocation) {
    window.onload = function() {
        var currentPosition;
        function getCurrentPosition (position) {        currentPosition = position;
        latitude = currentPosition.coords.latitude;
        longitude = currentPosition.coords.longitude;
    }
}

$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=105fb5cfa2c589eefd6b17a6b1f5f6c0", 
function (data) {            
    var rawJson = JSON.stringify(data);            
    var json = JSON.parse(rawJson);            
    updateWeather(json);
});}

navigator.geolocation.getCurrentPosition(getCurrentPosition);


var weather = json.weather[0].description;
if(weather.indexOf("rain") >= 0) {
    skycons.set("animated-icon", Skycons.RAIN);    
}
else if (weather.indexOf("sunny") >= 0) {        
    skycons.set("animated-icon", Skycons.CLEAR_DAY);    }