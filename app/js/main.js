var weather_url = 'https://api.wunderground.com/api/181a3f71699e535c/forecast10day/q/TN/Nashville.json';

//console.log testing

/*function displayForecast(data){
  var days = data.forecast.txt_forecast.forecastday;
  console.log(days[0].title);
  console.log(days[2].title);
  console.log(days[4].title);
  console.log(days[6].title);
  console.log(days[8].title);
}*/

/*getJSON(weather_url, displayForecast);*/

getJSON(weather_url, function(data){
  var list = createList(data.forecast.simpleforecast.forecastday);
  document.querySelector('ul').appendChild(list);
});

function createList(forecastDays){
  var docFragment = document.createDocumentFragment();

  forecastDays.forEach(function(forecastDay){
    var li    = document.createElement('li'),
        weekday = document.createTextNode(forecastDay.date.weekday);

    li.appendChild(weekday);
    docFragment.appendChild(li);
  });

  return docFragment;
}

function getJSON(url, cb) {
  var request = new XMLHttpRequest();
  request.open('GET', url);

  request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      cb(JSON.parse(this.response));
    }
  };
  request.send();
}

