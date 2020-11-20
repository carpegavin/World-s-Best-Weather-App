
let currentDay = null, date = null;

let update = function () {
date = moment(new Date())
currentDay.html(date.format('LLLL'));
};

$(document).ready(function(){
currentDay = $('#currentDay')
update();
setInterval(update, 1000);
});


//--------------onclick sumbit city ------------------------
$("#submit").click(function (event) {
    event.preventDefault();
    saveLocally()
    console.log("test");

//-------------------VARIABLES--------------------------------------
    var city = $("#searchBar").val();
    var apiKey = "105fb5cfa2c589eefd6b17a6b1f5f6c0";
    var units = "&units=imperial";
    var apiURL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}${units}`;
    
// --------------AJAX call to get DAY 1 ---------------------
    $.ajax({
        url: apiURL,
        method: "GET"
      }).then(function(response) {

// --------------Log the queryURL---------------------------
      console.log(apiURL);
//------------Log the resulting object-----------------------
      console.log(response);


//------------Transfer content to HTML---------------------
     var img1 = `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
      
      $(".city").html("<h1>" + response.name + " </h1>");
      $(".img1").attr("src", img1);
      $(".wind").text("Wind Speed (mph): " + response.wind.speed);
      $(".humidity").text("Humidity (%): " + response.main.humidity);
      $(".tempF").text("Temperature: " + response.main.temperature);
    
    
// -------------Convert the temp to fahrenheit---------------
      var tempF = (response.main.temp);

// --------------add temp content to html-------------------
      $(".temp").text("Temperature (K) " + response.main.temp);
      $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

// ------------Log the data in the console as well-----------
      console.log("Wind Speed: " + response.wind.speed);
      console.log("Humidity: " + response.main.humidity);
      console.log("Temperature (F): " + tempF);

//-------------------------UV LAT/LON--------------------------------------- 

var city = $("#searchBar").val();
var apiKey = "105fb5cfa2c589eefd6b17a6b1f5f6c0";
var units = "&units=imperial";
var apiURL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}${units}`;

var apiLatLon = `https://api.openweathermap.org/data/2.5/uvi?lat=${response.coord.lat}&lon=${response.coord.lon}&appid=105fb5cfa2c589eefd6b17a6b1f5f6c0${units}`;

$.ajax({
    url: apiLatLon,
    method: "GET"
  }).then(function(response) {
  $(".uvIndex").text("UV Index (DUV): " + response.value);
  
//----------------DYNAMIC UV COLOR CHANGE----------------------------   
if (response.value <= 4){
    $(".uvIndex").css("background-color", "#20c997",)
}

if (response.value >= 4.1){
    $(".uvIndex").css("background-color", "#ffc107")
}

if (response.value >= 7){
    $(".uvIndex").css("background-color", "#dc3545")
}
});

console.log(response.coord.lat);
console.log(response.coord.lon);




//----------------------- 5-DAY forecast pull--------------------------------------

var city = $("#searchBar").val();
var apiKey = "105fb5cfa2c589eefd6b17a6b1f5f6c0";
var units = "&units=imperial";
var apiURL2 =`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}${units}`;


$.ajax({
url: apiURL2,
method: "GET"
}).then(function(response) {

//-----------------day 2 --------------------------------------------

    var imageOne = `https://openweathermap.org/img/wn/${response.list[4].weather[0].icon}@2x.png`;
    
    console.log(response);

    $(".date2").text("" + response.list[4].dt_txt);
    $(".img2").attr("src", imageOne);
    $(".wind2").text("Wind Speed: " + response.list[4].wind.speed);
    $(".hum2").text("Humidity: " + response.list[4].main.humidity);
    $(".temp2").text("Temperature: " + response.list[4].main.temp);

//---------------------------day 3   -------------------------------------

var imageOne = `https://openweathermap.org/img/wn/${response.list[12].weather[0].icon}@2x.png`;
    
    console.log(response);

    $(".date3").text("" + response.list[12].dt_txt);
    $(".img3").attr("src", imageOne);
    $(".wind3").text("Wind Speed: " + response.list[12].wind.speed);
    $(".hum3").text("Humidity: " + response.list[12].main.humidity);
    $(".temp3").text("Temperature: " + response.list[12].main.temp);

//----------------------------day 4 ---------------------------------------------

var imageOne = `https://openweathermap.org/img/wn/${response.list[20].weather[0].icon}@2x.png`;
    
    console.log(response);

    $(".date4").text("" + response.list[20].dt_txt);
    $(".img4").attr("src", imageOne);
    $(".wind4").text("Wind Speed: " + response.list[20].wind.speed);
    $(".hum4").text("Humidity: " + response.list[20].main.humidity);
    $(".temp4").text("Temperature: " + response.list[20].main.temp);

//-----------------------------day 5 -----------------------------------------

var imageOne = `https://openweathermap.org/img/wn/${response.list[28].weather[0].icon}@2x.png`;
    
    console.log(response);

    $(".date5").text("" + response.list[28].dt_txt);
    $(".img5").attr("src", imageOne);
    $(".wind5").text("Wind Speed: " + response.list[28].wind.speed);
    $(".hum5").text("Humidity: " + response.list[28].main.humidity);
    $(".temp5").text("Temperature: " + response.list[28].main.temp);

 // -------------------------day 6 --------------------------------------
 
 var imageOne = `https://openweathermap.org/img/wn/${response.list[36].weather[0].icon}@2x.png`;
    
    console.log(response);

    $(".date6").text("" + response.list[36].dt_txt);
    $(".img6").attr("src", imageOne);
    $(".wind6").text("Wind Speed: " + response.list[36].wind.speed);
    $(".hum6").text("Humidity: " + response.list[36].main.humidity);
    $(".temp6").text("Temperature: " + response.list[36].main.temp);

//------------------STORE USER DATA--------------------------------

//------------------------------------------------
// $('#submit').on('click', function(){

//     $('input[type="text"]').each(function(){    
//         var id = $(this).attr('id');
//         var value = $(this).val();
//        localStorage.setItem(id, value);

//     });   
// });

//---------------------------------------------------

// $("#submit").click(saveLocally);




//-----------------------------------------------------

// $('#submit').click(function(){
//     var post_vars = $('#searchBar').serializeArray();
//     localStorage.setItem(id, post_vars);
//  });
 
//-----------------------------------------------------
$('#searchBar').val('')

})
})
})
// })
// })
// if(JSON.parse(localStorage.getItem("cities"))){
//     var citiesArr = JSON.parse(localStorage.getItem("cities"))
// }else {
//     var citiesArr= []
// }
var count = 0;
function saveLocally() {
    let data = $("#searchBar").val();
    // citiesArr.push(data)
    localStorage.setItem("city-"+count, data);
    count++
    // localStorage.setItem("cities", JSON.stringify(citiesArr));
}





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