var weather_url = 'https://api.wunderground.com/api/181a3f71699e535c/forecast10day/q/TN/Nashville.json';

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

function displayForcast(data){
  var days = data.forecast.txt_forecast.forecastday;
  console.log(days[0]);
  console.log(days[2]);
  console.log(days[4]);
  console.log(days[6]);
  console.log(days[8]);
}

getJSON(weather_url, displayForcast);
