# World's-Best-Weather-App


## The goal of this project was to do the following:
- When the user searches for a city, they are presented with the current and future forecast and the data is saved to the search hx.
- When the user views the the current weather, they see the name,  date, a weather icon, temp, humidity, wind speed, and UV index.
- When the user views the UV index, they are presented with a dynamic color representing the severity of the UV rays: light, moderate, severe.
- When the user views the future forecast, they are presented with a five day forecast displaying temp, humidity, and the appropriate weather icon.
- When the user clicks on a cit in the search history, they are shown all of the above.
- When the user opens the weather app, they are presented with the conditions of the last city that they searched for.

## To meet the above criteria, I implemented the following:
- Created all the necessary files and folders within GitHub
- Set the framework of HTML and CSS:
  - Set the jumbotron and current date/time
  - Set a container for the search bar
  - Set a card for the current weather conditions of the searched city
  - Set a row for the five day forecast
  - Styalized the HTML with CSS

- Set the Javascript:
  - current date/time from moment
  - onclick event for city search
  - variables to include API calls
  - ajax promises
  - append results to HTML
  - pulled UV index from two APIs
  - dynamic UV index color change
  - clear search bar after search
  - set items to local storage
