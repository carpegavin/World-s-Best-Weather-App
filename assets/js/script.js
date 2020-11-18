


console.log("test");

var APIKey = "105fb5cfa2c589eefd6b17a6b1f5f6c0";

//----------------GET FROM API----------------------------------------

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
  
  //--------GET USER INPUT FROM SEARCH BAR-----------------------
  
  var queryParams = { "api-key": "105fb5cfa2c589eefd6b17a6b1f5f6c0" };
  queryParams.q = $("#searchBar")
    .val()
    .trim();
//-----------------------------------------------------------------------
    


    
//--------whatever goes into here will show up--------------------
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=austin&appid=105fb5cfa2c589eefd6b17a6b1f5f6c0&units=imperial";
      
    


//-----------------ON CLICK----------------------------------------
    $("#searchTerm").on("click", function(event) {
     event.preventDefault();
     var queryURL = buildQueryURL();
     $(this).prevAll("input[type=text]").val()

    })
// ----------AJAX call to the OpenWeatherMap API------------
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
    
    
//----------------?????????????----------------------------------------   
    // var queryURL = buildQueryURL();
    // $.ajax({
    //   url:queryURL,
    //   method:"GET"
            
    // }).then(updatePage);


// --------------Log the queryURL---------------------------
      console.log(queryURL);

//------------Log the resulting object-----------------------
      console.log(response);
    
// ------------Transfer content to HTML---------------------
      $(".city").html("<h1>" + response.name + " Weather Details</h1>");
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
      
    });

 
    








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
// })