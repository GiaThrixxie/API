console.log('JavaScript from js/js.js: up and running!');

/**
/* OpenWeatherMap
/**

/*
  THE DOCUMENTATION MAY CONFUSE YOU A BIT, SO HERE'S A HOWTO
  
  DON'T
  please, don't use this sample:
  https://samples.openweathermap.org/data/2.5/weather?q=Aarhus,DK&appid=YOURTOKENHERE
  DO
  Use the api as below:
  https://api.openweathermap.org/data/2.5/weather?q=Aarhus,DK&appid=YOURTOKENHERE
  
  PS:
  Probably your token will not activate right away. Have some patience here.
  */
    const token = "7787eba892e91f445428130ca2445d6e"; // save your token in this variable
    const aarhus = "https://api.openweathermap.org/data/2.5/weather?q=Aarhus&lang=da&units=metric&appid="
    + token

    $(document).ready(function() {

    // get the weather data
    fetch(aarhus).then(response => {
      return response.json();
    }).then(data => {
        
      // Work with JSON data here
      console.log(data); // show what's in the json
        
        var sunsetMs = data.sys.sunset * 1000; // dato-objektet har brug for millisek. Derfor * 1000
      var sunset = new Date(sunsetMs);
        var sunsetTime = sunset.getHours() + ':' + sunset.getMinutes();
        
      $('#result').append(
        data.weather[0].description + 
        ' i Friheden!</pre></p>' + 
        '<figure><img src="http://openweathermap.org/img/w/'
        + data.weather[0].icon + '.png" alt="The weather : '
        + data.weather[0].description
        + '"></figure>' + 
      '<p>Solnedgang kl. ' + sunsetTime + '</p>');
        
        // here are the icons: https://openweathermap.org/weather-conditions 

    }).catch(err => {
      // Do something for an error here
      console.log('There was an error ...');
    });

        
    
  }); // document ready end


/**
/* Mapbox
**/

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2lhdGhyaXh4aWUiLCJhIjoiY2tmeHFvNXpkMjJnNTJybXo4bm5ucXlrdCJ9.aB5OHg0MCAvLs33ocmi1dA';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/giathrixxie/ckfxr932400vv1amdtg6cogj5',
center: [10.1908409033, 56.1356261242], // starting position [lng, lat]
zoom: 15 // starting zoom
});
var marker = new mapboxgl.Marker()
.setLngLat([10.1908409033, 56.1356261242])
.addTo(map);