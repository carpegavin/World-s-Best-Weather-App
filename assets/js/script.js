
//--------------onclick sumbit city ------------------------
$("#submit").click(function (event) {
    event.preventDefault();


console.log("test");

var city = $("#searchBar").val();
var apiKey = "105fb5cfa2c589eefd6b17a6b1f5f6c0";
var units = "&units=imperial";
var apiURL =`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}${units}`;

// ----------AJAX call to the OpenWeatherMap API------------
    $.ajax({
        url: apiURL,
        method: "GET"
      }).then(function(response) {

// --------------Log the queryURL---------------------------
      console.log(apiURL);
//------------Log the resulting object-----------------------
      console.log(response);

// ------------Transfer content to HTML---------------------
      $(".city").html("<h1>" + response.name + " Weather</h1>");
      $(".wind").text("Wind Speed: " + response.wind.speed);
      $(".humidity").text("Humidity: " + response.main.humidity);
      $(".tempF").text("temperature: " + response.main.temperature);
    //$(".uvIndex").text("        : " +                  );
    
    //$("#forecast").text("       : " +                  );
      
// -------------Convert the temp to fahrenheit---------------
      var tempF = (response.main.temp);

// --------------add temp content to html-------------------
      $(".temp").text("Temperature (K) " + response.main.temp);
      $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

// ------------Log the data in the console as well-----------
      console.log("Wind Speed: " + response.wind.speed);
      console.log("Humidity: " + response.main.humidity);
      console.log("Temperature (F): " + tempF);
      
//--------------forecast pull--------------------------------------

var city = $("#searchBar").val();
var apiKey = "105fb5cfa2c589eefd6b17a6b1f5f6c0";
var units = "&units=imperial";
var apiURL2 =`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}${units}`;


$.ajax({
url: apiURL2,
method: "GET"
}).then(function(response) {

//-----------------day 2 --------------------------------------------

    var imageOne = `http://openweathermap.org/img/wn/${response.list[8].weather[0].icon}@2x.png`;
    
    console.log(response);
    
    $(".img2").attr("src", imageOne);
    $(".wind2").text("Wind Speed: " + response.list[8].wind.speed);
    $(".hum2").text("Humidity: " + response.list[8].main.humidity);
    $(".temp2").text("temperature: " + response.list[8].main.temp);

//-----------------day 3   -------------------------------------

var imageOne = `http://openweathermap.org/img/wn/${response.list[16].weather[0].icon}@2x.png`;
    
    console.log(response);
    
    $(".img3").attr("src", imageOne);
    $(".wind3").text("Wind Speed: " + response.list[16].wind.speed);
    $(".hum3").text("Humidity: " + response.list[16].main.humidity);
    $(".temp3").text("temperature: " + response.list[16].main.temp);

//------------------day 4 ---------------------------------------------

var imageOne = `http://openweathermap.org/img/wn/${response.list[24].weather[0].icon}@2x.png`;
    
    console.log(response);
    
    $(".img4").attr("src", imageOne);
    $(".wind4").text("Wind Speed: " + response.list[24].wind.speed);
    $(".hum4").text("Humidity: " + response.list[24].main.humidity);
    $(".temp4").text("temperature: " + response.list[24].main.temp);

//----------------------day 5 -----------------------------------------

var imageOne = `http://openweathermap.org/img/wn/${response.list[32].weather[0].icon}@2x.png`;
    
    console.log(response);
    
    $(".img5").attr("src", imageOne);
    $(".wind5").text("Wind Speed: " + response.list[32].wind.speed);
    $(".hum5").text("Humidity: " + response.list[32].main.humidity);
    $(".temp5").text("temperature: " + response.list[32].main.temp);

 // ----------------------day 6 --------------------------------------
 
 var imageOne = `http://openweathermap.org/img/wn/${response.list[39].weather[0].icon}@2x.png`;
    
    console.log(response);
    
    $(".img6").attr("src", imageOne);
    $(".wind6").text("Wind Speed: " + response.list[39].wind.speed);
    $(".hum6").text("Humidity: " + response.list[39].main.humidity);
    $(".temp6").text("temperature: " + response.list[39].main.temp);


//-------------UV pull--------------------------------------------
// var city = $("#searchBar").val();
// var apiKey = '105fb5cfa2c589eefd6b17a6b1f5f6c0';
// var units = '&units=imperial';
// var apiURL3 =`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}${units}`;


// $.ajax({
// url: apiURL3,
// method: "GET"
// }).then(function(response.list) {

//     $(".city").html("<h1>" + response.name + " Weather</h1>");

})
})
})





// $("searchTerm").click(function(){
    //     var apiURL = buildApiURL();
    // }); //-----this is from the click function


//--------GET USER INPUT FROM SEARCH BAR-----------------------
  
// var queryParams = { "api-key": "105fb5cfa2c589eefd6b17a6b1f5f6c0" };
// queryParams.q = $("#searchBar")
// .val()
// .trim();

// $('#humid').append(`humidity')

// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
    
    // $.ajax({
        //     url: "http://api.openweathermap.org/data/2.5/weather?q=austin&appid=105fb5cfa2c589eefd6b17a6b1f5f6c0&units=imperial" ,
        //     method: "GET"
        //   }).then(function(response) {
        //     console.log(response);
        //   });
        
        //   $.ajax({
        //     url: "http://api.openweathermap.org/data/2.5/forecast?q=austin&appid=105fb5cfa2c589eefd6b17a6b1f5f6c0&units=imperial",
        //     method: "GET"
        //   }).then(function(response) {
        //     console.log(response);
        //   });
        

        // $.ajax({
            //     url: "http://api.openweathermap.org/data/2.5/uvi?appid=105fb5cfa2c589eefd6b17a6b1f5f6c0&lat=30.27&lon=-97.74",
            //     method: "GET"
            //   }).then(function(response) {
            //     console.log(response);
            //   });





    // var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=austin&appid=105fb5cfa2c589eefd6b17a6b1f5f6c0&units=imperial";

// var Geo={};
// if(navigator.geolocation) {
//     window.onload = function() {
//         var currentPosition;
//         function getCurrentPosition (position) {        currentPosition = position;
//         latitude = currentPosition.coords.latitude;
//         longitude = currentPosition.coords.longitude;
//     }
// }

// $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=105fb5cfa2c589eefd6b17a6b1f5f6c0", 
// function (data) {            
//     var rawJson = JSON.stringify(data);            
//     var json = JSON.parse(rawJson);            
//     updateWeather(json);
// });}

// navigator.geolocation.getCurrentPosition(getCurrentPosition);


// var weather = json.weather[0].description;
// if(weather.indexOf("rain") >= 0) {
//     skycons.set("animated-icon", Skycons.RAIN);    
// }
// else if (weather.indexOf("sunny") >= 0) {        
//     skycons.set("animated-icon", Skycons.CLEAR_DAY);    }


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
// 